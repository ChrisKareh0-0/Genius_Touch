import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const ALLOWED_FOLDERS = new Set([
  'chocolate-and-sweet-boxes',
  'cigar-boxes',
  'different-boxes',
  'flowers-boxes',
  'perfume-boxes',
  'restaurant-and-hotel',
  'universities',
  'wine-and-others',
]);

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const folder = searchParams.get('folder') ?? '';

    if (!ALLOWED_FOLDERS.has(folder)) {
      return NextResponse.json({ error: 'Invalid folder' }, { status: 400 });
    }

    const publicDir = path.join(process.cwd(), 'public');
    const targetDir = path.join(publicDir, folder);

    const entries = await fs.readdir(targetDir, { withFileTypes: true });

    const files = entries
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
      // Sort numerically if names start with numbers, else alpha
      .sort((a, b) => {
        const numA = parseInt(a, 10);
        const numB = parseInt(b, 10);
        if (!Number.isNaN(numA) && !Number.isNaN(numB)) {
          return numA - numB;
        }
        return a.localeCompare(b);
      })
      .map((name) => `/${folder}/${name}`);

    return NextResponse.json({ images: files }, { status: 200 });
  } catch (error) {
    console.error('Failed to list category images:', error);
    return NextResponse.json({ error: 'Failed to list images' }, { status: 500 });
  }
}





