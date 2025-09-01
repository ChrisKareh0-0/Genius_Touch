import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dir = path.join(process.cwd(), 'public', 'ClientLogos');
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const files = entries.filter((e) => e.isFile()).map((e) => e.name);
    // Provide both full filenames and normalized basenames for matching
    const baseNamesLower = files.map((name) => path.parse(name).name.toLowerCase());
    return NextResponse.json({ files, baseNamesLower });
  } catch (error) {
    return NextResponse.json({ files: [], baseNamesLower: [] });
  }
}


