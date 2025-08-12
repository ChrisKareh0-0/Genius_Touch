"use client";
// TODO : ADD BACGROUND TO HERO SECTION, MAKE THE CATEGORIES OF THE BUSINESS IN THE MAIN PAGE AS WELLL
import { Wine, FlaskConical, Flower2, Utensils, Hotel, GraduationCap, BookOpen, Candy, Watch, Gift, ArrowLeft, MessageCircle, X, Menu } from 'lucide-react';
import React, { useState, useEffect, useMemo } from 'react';

// Add CigarIcon SVG component
const CigarIcon = ({ size = 36, color = '#7E6A52' }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="15" width="20" height="6" rx="3" fill={color} stroke="#3A2B20" strokeWidth="2"/>
    <rect x="26" y="16" width="4" height="4" rx="2" fill="#B89C82" stroke="#3A2B20" strokeWidth="1.5"/>
    <path d="M30 18c2 0 2-4 0-4" stroke="#DACFB6" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

type Category = {
  name: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; color?: string }>;
  image: string;
  description: string;
  clients: string[];
};

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showExpertiseModal, setShowExpertiseModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [showClientsTab, setShowClientsTab] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // Array of video sources - memoized to prevent re-creation on every render
  const videoSources = useMemo(() => [
    '/luxury-packaging-video-1.mp4.mp4',
    '/luxury-packaging-video-2.mp4.mp4',
    '/luxury-packaging-video-3.mp4.mp4',
    // Add more videos as needed
  ], []);
  
  useEffect(() => { 
    // Log video sources for debugging
    console.log('Video sources:', videoSources);
  }, [videoSources]);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (showExpertiseModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showExpertiseModal]);
  const categories: Category[] = [
    { name: 'Cigars', icon: (props) => <CigarIcon {...props} />, image: '/demo/cigars.jpg', description: 'Premium cigar packaging solutions', clients: ['Cigar Co. A', 'Cigar Brand B', 'Luxury Cigars Ltd.'] },
    { name: 'Alcohol & Drinks', icon: (props) => <Wine {...props} />, image: '/demo/alcohol.jpg', description: 'Luxury beverage packaging', clients: ['Fine Spirits Inc.', 'Wine Masters', 'Elite Distillers'] },
    { name: 'Perfume', icon: (props) => <FlaskConical {...props} />, image: '/demo/perfume.jpg', description: 'Elegant fragrance packaging', clients: ['Scented Elegance', 'Perfume House', 'Aroma Luxe'] },
    { name: 'Flowers', icon: (props) => <Flower2 {...props} />, image: '/demo/flowers.jpg', description: 'Sophisticated floral packaging', clients: ['Floral Artistry', 'Petal Boutique', 'Luxury Blooms'] },
    { name: 'Restaurants', icon: (props) => <Utensils {...props} />, image: '/demo/restaurants.jpg', description: 'Fine dining packaging', clients: ['Gourmet Table', 'Epicurean Delights', 'Chef’s Choice'] },
    { name: 'Hotels', icon: (props) => <Hotel {...props} />, image: '/demo/hotels.jpg', description: 'Luxury hospitality packaging', clients: ['Grand Palace Hotel', 'Elite Suites', 'Boutique Inn'] },
    { name: 'Universities', icon: (props) => <GraduationCap {...props} />, image: '/demo/universities.jpg', description: 'Academic institution packaging', clients: ['Prestige University', 'Scholars College', 'Elite Academy'] },
    { name: 'Schools', icon: (props) => <BookOpen {...props} />, image: '/demo/schools.jpg', description: 'Educational packaging solutions', clients: ['Bright Future School', 'Learning Tree', 'Scholastic Prep'] },
    { name: 'Chocolates & Sweets', icon: (props) => <Candy {...props} />, image: '/demo/chocolates.jpg', description: 'Gourmet confectionery packaging', clients: ['ChocoDelight', 'Sweet Temptations', 'Luxury Confections'] },
    { name: 'Watches', icon: (props) => <Watch {...props} />, image: '/demo/watches.jpg', description: 'Premium timepiece packaging', clients: ['Timepiece Masters', 'Luxury Watch Co.', 'Elite Horology'] },
    { name: 'Promotional Items', icon: (props) => <Gift {...props} />, image: '/demo/promo.jpg', description: 'Custom promotional packaging', clients: ['PromoGenius', 'Brand Boosters', 'Elite Promotions'] },
  ];

  const featuredClients = [
    'LADERACH',
    'BOLD',
    'CHRIS HARRIS',
    'FATEN',
    'SAKINA',
    'BARRAQ',
    'MERCEDES BENZ',
    'UNIFAB',
    'GANACHE',
    'KHAN AL SABOUN',
    'HANDY',
    'WOROOD',
    'BONDS',
    'LA ROSE',
    'QINWAN',
    'FIDEL',
    'ESA BUSINESS SCHOOL',
    'RIBBON',
    'MANOLIA',
    'NDU',
    'LA PRALINE',
    'AUST',
    'SERAF',
    "MOULIN D'OR",
    'DORE',
    'GLOBAL UNIVERSITY',
    'RCHIDEE'
  ];

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => 
      (prevIndex + 1) % videoSources.length
    );
  };

  const handleOpenExpertiseModal = () => {
    setShowExpertiseModal(true);
    setSelectedCategory(null);
    setShowClientsTab(true);
  };

  return (
    <div className="min-h-screen text-genius-light font-sans">

      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-genius-brown/80 backdrop-blur-xl z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span style={{color: "#F5F5DC"}} className="text-genius-light font-serif text-xl font-semibold">GeniusTouch</span>
            </div>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" style={{color: "#F5F5DC"}} className="text-genius-cream font-serif hover:text-genius-light transition-colors font-medium">Company Profile  </a>
              <button
                type="button"
                style={{color: "#F5F5DC", background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer'}}
                className="text-genius-cream hover:text-genius-light font-serif transition-colors font-medium"
                onClick={handleOpenExpertiseModal}
              >
                Our Work
              </button>
              <a href="#portfolio" style={{color: "#F5F5DC"}} className="text-genius-cream hover:text-genius-light font-serif transition-colors font-medium">Portfolio</a>
              <a href="#contact" style={{color: "#F5F5DC"}} className="text-genius-cream hover:text-genius-light font-serif transition-colors font-medium">Contact</a>
            </div>
            {/* Mobile Burger Icon */}
            <button
              className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-genius-tan"
              onClick={() => setShowMobileNav(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={32} className="text-genius-cream" />
            </button>
          </div>
        </div>
        {/* Mobile Nav Overlay */}
        {showMobileNav && (
          <div className="fixed inset-0 z-50 flex items-center justify-center md:hidden">
            {/* Velvet background with dark overlay */}
            <div className="absolute inset-0 w-full h-full" style={{
              background: `url('/velvet.jpg') center center / cover no-repeat, rgba(58,43,32,0.92)`,
              backgroundBlendMode: 'multiply',
              zIndex: 0
            }} />
            <div className="relative w-5/6 max-w-xs h-[80vh] mx-auto my-auto rounded-2xl shadow-2xl flex flex-col items-center justify-center space-y-8 p-8 animate-slide-in-right" style={{zIndex: 10, background: 'rgba(255,255,255,0.85)'}}>
              <button
                className="absolute top-4 right-4 text-genius-dark hover:text-genius-brown"
                onClick={() => setShowMobileNav(false)}
                aria-label="Close navigation menu"
              >
                <X size={32} />
              </button>
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-genius-dark font-serif text-lg font-semibold">GeniusTouch</span>
              </div>
              <a href="#about" className="text-genius-dark font-serif text-lg font-medium hover:text-genius-brown transition-colors text-center" onClick={() => setShowMobileNav(false)}>Company Profile</a>
              <button
                type="button"
                className="text-genius-dark font-serif text-lg font-medium hover:text-genius-brown transition-colors text-center"
                style={{background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer'}}
                onClick={() => { handleOpenExpertiseModal(); setShowMobileNav(false); }}
              >
                Our Work
              </button>
              <a href="#portfolio" className="text-genius-dark font-serif text-lg font-medium hover:text-genius-brown transition-colors text-center" onClick={() => setShowMobileNav(false)}>Portfolio</a>
              <a href="#contact" className="text-genius-dark font-serif text-lg font-medium hover:text-genius-brown transition-colors text-center" onClick={() => setShowMobileNav(false)}>Contact</a>
            </div>
            {/* Click outside to close */}
            <div className="absolute inset-0" style={{zIndex: 1}} onClick={() => setShowMobileNav(false)} />
          </div>
        )}
      </nav>

      {/* Video Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden video-hero-section">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          {/* Fallback background */}
          <div className="absolute inset-0 bg-gradient-to-br from-genius-dark via-genius-brown to-genius-tan z-0"></div>
          
          <video
            key={currentVideoIndex}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            onError={(e) => console.error('Video error:', e)}
            onLoadStart={() => console.log('Video loading started:', videoSources[currentVideoIndex])}
            onLoadedData={() => console.log('Video loaded successfully:', videoSources[currentVideoIndex])}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{ 
              filter: 'brightness(0.7) contrast(1.1)',
              transform: 'scale(1.1)',
              zIndex: 5
            }}
          >
            <source src={videoSources[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/15 z-10"></div>
          
          {/* Bottom gradient blend overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-genius-light via-genius-light/80 to-transparent z-20"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto video-hero-content">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-serif font-light text-genius-light mb-8 leading-tight drop-shadow-2xl video-hero-title text-glow">
              <span className="text-genius-light">Crafting</span> <span className="text-genius-cream font-medium">Excellence</span>
            </h1>
            <p className="text-2xl md:text-3xl text-genius-cream max-w-4xl mx-auto leading-relaxed mb-12 drop-shadow-lg video-hero-subtitle">
              Where every detail tells a story of luxury, innovation, and timeless elegance
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center video-hero-buttons">
            <button
              className="bg-genius-light/20 backdrop-blur-2xl text-genius-light px-10 py-5 rounded-2xl font-medium tracking-wide hover:bg-genius-light/30 hover:text-genius-cream luxury-hover shadow-2xl border border-genius-cream/30 text-lg"
              onClick={handleOpenExpertiseModal}
            >
              Discover Our Craft
            </button>
            <button
              className="border-2 border-genius-light/60 text-genius-light px-10 py-5 rounded-2xl font-medium tracking-wide hover:bg-genius-light/20 hover:text-genius-cream luxury-hover shadow-2xl bg-black/20 backdrop-blur-2xl text-lg"
              onClick={handleScrollToContact}
            >
              Start Your Journey
            </button>
          </div>
        </div>
        
        {/* Video Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {videoSources.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentVideoIndex 
                    ? 'bg-genius-cream scale-125' 
                    : 'bg-genius-cream/40'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-genius-cream/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-genius-cream/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Original Hero Section */}
      <section className="pt-40 pb-20 px-6 flex flex-col justify-center items-center min-h-[60vh] fade-in-up">
        <div className="max-w-4xl w-full mx-auto text-center rounded-3xl velvet-bg backdrop-blur-xl border border-genius-cream/40 shadow-2xl p-12 relative z-20">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-serif font-light text-genius-brown mb-6 leading-tight drop-shadow-lg">
              Where Luxury Meets
              <span className="block text-genius-dark font-medium">Packaging Artistry</span>
            </h1>
            <p className="text-xl text-genius-brown max-w-3xl mx-auto leading-relaxed">
              Crafting bespoke packaging solutions that elevate your brand&apos;s presence and create unforgettable unboxing experiences for the most discerning clientele.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button
              className="bg-genius-dark/80 text-genius-light px-8 py-4 rounded-xl font-medium tracking-wide hover:bg-genius-brown/90 hover:text-genius-cream luxury-hover shadow-md border border-genius-brown/40"
              onClick={handleOpenExpertiseModal}
            >
              Explore Our Portfolio
            </button>
            <button
              className="border-2 border-genius-dark/60 text-genius-dark px-8 py-4 rounded-xl font-medium tracking-wide hover:bg-genius-dark/80 hover:text-genius-light luxury-hover shadow-md bg-genius-cream/60 backdrop-blur-xl"
              onClick={handleScrollToContact}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 flex justify-center items-center fade-in-up">
        <div className="max-w-4xl w-full mx-auto rounded-3xl velvet-bg backdrop-blur-xl border border-genius-cream/40 shadow-xl p-12">
          <div className="text-center">
            <h2 className="text-4xl font-serif font-medium text-genius-brown mb-6 drop-shadow-md">
              A Legacy of Excellence
            </h2>
            <p className="text-lg text-genius-brown leading-relaxed">
              Founded in 2013, GeniusTouch began as a small operation that grew through dedication to quality and reputation. Our CEO personally carried samples door-to-door, building relationships that became the foundation of our success. Today, we continue investing in cutting-edge equipment while expanding our vision to become the premier destination for celebrities and discerning individuals seeking luxurious packaging. With plans for international expansion and diversification into leather decoration and women&apos;s handbags, we&apos;re building a legacy that transcends borders.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Popup Modal */}
      {showExpertiseModal && (
        <div className="absolute inset-0 z-[999999] flex items-center justify-center p-4" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999999 }}>
          {/* Dark backdrop overlay */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 999990 }}
            onClick={() => setShowExpertiseModal(false)}
          ></div>
          
          {/* Modal content */}
          <div
            className="relative bg-genius-brown rounded-3xl shadow-2xl max-w-5xl w-full max-h-[85vh] flex flex-col animate-in fade-in-0 zoom-in-95 duration-300"
            style={{ position: 'relative', zIndex: 999995 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-genius-brown/95 backdrop-blur-xl p-6 border-b border-genius-light/20 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-serif font-semibold text-genius-light mb-2">
                    Featured Clients & Portfolio
                  </h2>
                  <p className="text-genius-cream/90">
                    Discover our prestigious clientele and signature work
                  </p>
                  
                  {/* Tab Navigation */}
                  <div className="flex space-x-1 mt-4">
                    <button
                      onClick={() => { setShowClientsTab(true); }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        showClientsTab
                          ? 'bg-genius-light/30 text-genius-light'
                          : 'text-genius-cream/70 hover:text-genius-cream hover:bg-genius-light/10'
                      }`}
                    >
                      Featured Clients
                    </button>
                    <button
                      onClick={() => { setShowClientsTab(false); }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        !showClientsTab
                          ? 'bg-genius-light/30 text-genius-light'
                          : 'text-genius-cream/70 hover:text-genius-cream hover:bg-genius-light/10'
                      }`}
                    >
                      Portfolio Gallery
                    </button>
                  </div>
                </div>
                <button
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-genius-light/20 hover:bg-genius-light/30 text-genius-light hover:text-genius-cream transition-colors"
                  onClick={() => setShowExpertiseModal(false)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto p-6" style={{ scrollbarWidth: 'thin', scrollbarColor: '#B89C82 #F9F5ED' }}>
              {showClientsTab ? (
                // Featured Clients view
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-serif font-medium text-genius-light mb-4">
                      Featured Clients
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {featuredClients.map((client: string, index: number) => (
                      <div key={index} className="group">
                        <div className="bg-gradient-to-br from-genius-light/10 to-genius-cream/20 rounded-2xl p-8 border border-genius-light/20 hover:border-genius-cream/40 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                          <div className="text-center">
                            <h4 className="text-xl font-serif font-semibold text-genius-light">
                              {client}
                            </h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                // Portfolio Gallery view
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-serif font-medium text-genius-light mb-4">
                      Portfolio Gallery
                    </h3>
                    <p className="text-genius-cream/80 text-lg">
                      Explore our comprehensive collection of luxury packaging designs
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[
                      '/footages/170.jpg', '/footages/152.jpg', '/footages/201.jpg', '/footages/194.jpg',
                      '/footages/139.jpg', '/footages/190.jpg', '/footages/191.jpg', '/footages/215.jpg',
                      '/footages/180.jpg', '/footages/119.jpg', '/footages/149.jpg', '/footages/156.jpg',
                      '/footages/178.jpg', '/footages/179.jpg', '/footages/167.jpg', '/footages/143.jpg',
                      '/footages/158.jpg', '/footages/189.jpg', '/footages/209.jpg', '/footages/199.jpg',
                      '/footages/137.jpg', '/footages/196.jpg', '/footages/214.jpg', '/footages/203.jpg',
                      '/footages/186.jpg', '/footages/198.jpg', '/footages/187.jpg', '/footages/219.jpg',
                      '/footages/142.jpg', '/footages/161.jpg', '/footages/172.jpg', '/footages/211.jpg',
                      '/footages/165.jpg', '/footages/177.jpg', '/footages/141.jpg', '/footages/220.jpg',
                      '/footages/122.jpg', '/footages/140.jpg', '/footages/151.jpg', '/footages/147.jpg',
                      '/footages/129.jpg', '/footages/206.jpg', '/footages/133.jpg', '/footages/176.jpg',
                      '/footages/128.jpg', '/footages/208.jpg', '/footages/193.jpg', '/footages/126.jpg',
                      '/footages/210.jpg', '/footages/212.jpg', '/footages/218.jpg', '/footages/154.jpg',
                      '/footages/205.jpg', '/footages/120.jpg', '/footages/123.jpg', '/footages/168.jpg',
                      '/footages/188.jpg', '/footages/131.jpg', '/footages/118.jpg', '/footages/134.jpg',
                      '/footages/135.jpg', '/footages/166.jpg', '/footages/138.jpg', '/footages/150.jpg',
                      '/footages/116.jpg', '/footages/200.jpg', '/footages/130.jpg', '/footages/163.jpg',
                      '/footages/121.jpg', '/footages/192.jpg', '/footages/171.jpg', '/footages/159.jpg',
                      '/footages/153.jpg', '/footages/117.jpg', '/footages/195.jpg', '/footages/217.jpg',
                      '/footages/160.jpg', '/footages/144.jpg', '/footages/174.jpg', '/footages/136.jpg',
                      '/footages/213.jpg', '/footages/125.jpg', '/footages/146.jpg', '/footages/124.jpg',
                      '/footages/197.jpg', '/footages/164.jpg', '/footages/175.jpg', '/footages/145.jpg',
                      '/footages/173.jpg', '/footages/221.jpg', '/footages/169.jpg', '/footages/162.jpg',
                      '/footages/185.jpg', '/footages/157.jpg', '/footages/127.jpg', '/footages/207.jpg',
                      '/footages/216.jpg', '/footages/155.jpg', '/footages/148.jpg', '/footages/132.jpg'
                    ].map((imagePath, index) => (
                      <div key={index} className="group luxury-hover bg-genius-cream/60 backdrop-blur-xl border border-genius-tan/40 rounded-2xl shadow-lg overflow-hidden">
                        <div className="aspect-[4/5] relative overflow-hidden">
                          <img 
                            src={imagePath} 
                            alt={`Luxury Packaging Collection ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
            
          </div>
        </div>
      )}

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-20 px-6 flex justify-center items-center fade-in-up">
        <div className="max-w-7xl w-full mx-auto velvet-bg rounded-3xl bg-genius-light/40 backdrop-blur-xl border border-genius-cream/40 shadow-2xl p-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium mb-6 text-genius-brown drop-shadow-md">
              Signature Collections
            </h2>
            <p className="text-xl text-genius-brown max-w-2xl mx-auto">
              Discover our most celebrated packaging designs
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div key={item} className="group luxury-hover bg-genius-cream/60 backdrop-blur-xl border border-genius-tan/40 rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img 
                    src={`/${item}.jpg`} 
                    alt={`Luxury Packaging Collection ${item}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 flex justify-center items-center fade-in-up">
        <div className="max-w-3xl w-full mx-auto velvet-bg rounded-3xl bg-genius-light/60 backdrop-blur-xl border border-genius-cream/40 shadow-2xl p-12 text-center">
          {showContactForm ? (
            <>
              <button
                type="button"
                className="mb-4 flex items-center text-genius-brown hover:text-genius-dark transition-colors"
                onClick={() => setShowContactForm(false)}
                aria-label="Back"
              >
                <ArrowLeft size={28} strokeWidth={2} className="mr-2" />
                Back
              </button>
              <h2 className="text-4xl font-serif font-medium text-genius-brown mb-6 drop-shadow-md">
                Contact Us
              </h2>
              <form className="space-y-6">
                <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-genius-tan/40 bg-genius-light/80 text-genius-dark focus:outline-none focus:ring-2 focus:ring-genius-brown" required />
                <input type="email" name="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-genius-tan/40 bg-genius-light/80 text-genius-dark focus:outline-none focus:ring-2 focus:ring-genius-brown" required />
                <textarea name="message" placeholder="Your Message" rows={5} className="w-full px-4 py-3 rounded-lg border border-genius-tan/40 bg-genius-light/80 text-genius-dark focus:outline-none focus:ring-2 focus:ring-genius-brown" required />
                <button type="submit" className="bg-genius-dark/80 text-genius-light px-8 py-4 rounded-xl font-medium tracking-wide hover:bg-genius-brown/90 hover:text-genius-cream luxury-hover shadow-md border border-genius-brown/40">
                  Send Message
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-4xl font-serif font-medium text-genius-brown mb-6 drop-shadow-md">
                Let&apos;s Create Something Extraordinary
              </h2>
              <p className="text-xl text-genius-brown mb-8 max-w-2xl mx-auto">
                Ready to elevate your brand with bespoke packaging that tells your story?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <button
                  className="bg-genius-dark/80 text-genius-light px-8 py-4 rounded-xl font-medium tracking-wide hover:bg-genius-brown/90 hover:text-genius-cream luxury-hover shadow-md border border-genius-brown/40"
                >
                  Schedule a Consultation
                </button> */}
                <a
                  href="https://wa.me/9613721171" // Replace with your WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-genius-dark/60 text-genius-dark px-8 py-4 rounded-xl font-medium tracking-wide hover:bg-genius-dark/80 hover:text-genius-light luxury-hover shadow-md bg-genius-cream/60 backdrop-blur-xl flex items-center justify-center"
                >
                  Whatsapp
                </a>
              </div>
            </>
          )}      
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-genius-dark/90 velvet-bg text-genius-cream py-12 px-6 mt-12 rounded-t-3xl shadow-2xl backdrop-blur-xl border-t border-genius-tan/30">
        <div className="max-w-7xl mx-auto ">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/GT LOGO.png" 
                  alt="GeniusTouch Logo" 
                  className="h-8 w-auto shadow-md"
                />
                <span className="font-serif text-xl font-semibold text-genius-cream">GeniusTouch</span>
              </div>
              <p className="text-genius-cream/80 text-sm">
                Crafting luxury packaging solutions since 2000
              </p>
            </div>
            <div>
              <h4 className="font-serif font-medium mb-4 text-genius-cream">Services</h4>
              <ul className="space-y-2 text-sm text-genius-cream/80">
                <li>Custom Design</li>
                <li>Premium Materials</li>
                <li>Manufacturing</li>
                <li>Brand Consultation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-medium mb-4 text-genius-cream">Industries</h4>
              <ul className="space-y-2 text-sm text-genius-cream/80">
                <li>Luxury Goods</li>
                <li>Hospitality</li>
                <li>Education</li>
                <li>Food & Beverage</li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-medium mb-4 text-genius-cream">Contact</h4>
              <ul className="space-y-2 text-sm text-genius-cream/80">
                <li>info@geniustouch.com</li>
                <li>+9613721171</li>
                <li>By appointment only</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-genius-tan/30 mt-8 pt-8 text-center text-sm text-genius-cream/60">
            <p>&copy; 2024 GeniusTouch. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9613721171" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] bg-genius-dark hover:bg-genius-brown transition-colors rounded-full shadow-2xl flex items-center justify-center w-16 h-16 float-animate"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999
        }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={36} className="text-genius-cream" />
      </a>
    </div>
  )
}
