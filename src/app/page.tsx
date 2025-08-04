"use client";
// TODO : ADD BACGROUND TO HERO SECTION, MAKE THE CATEGORIES OF THE BUSINESS IN THE MAIN PAGE AS WELLL
import { Wine, FlaskConical, Flower2, Utensils, Hotel, GraduationCap, BookOpen, Candy, Watch, Gift, ArrowLeft, MessageCircle, X, ChevronDown, ChevronUp, Menu } from 'lucide-react';
import React, { useState, useEffect, FC } from 'react';

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
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set());
  const [mounted, setMounted] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [leatherBoxVisible, setLeatherBoxVisible] = useState(false);
  const [cornerImageVisible, setCornerImageVisible] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // Array of video sources
  const videoSources = [
    '/luxury-packaging-video-1.mp4.mp4',
    '/luxury-packaging-video-2.mp4.mp4',
    '/luxury-packaging-video-3.mp4.mp4',
    // Add more videos as needed
  ];
  
  useEffect(() => { 
    setMounted(true); 
    
    // Log video sources for debugging
    console.log('Video sources:', videoSources);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      
      // Show leather box when scrolled past 200px for earlier appearance
      if (scrollPosition > 200) {
        setLeatherBoxVisible(true);
      } else {
        setLeatherBoxVisible(false);
      }
      
      // Show corner image when scrolled past 300px
      if (scrollPosition > 300) {
        setCornerImageVisible(true);
      } else {
        setCornerImageVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [videoSources]);
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

  return (
    <div className="min-h-screen text-genius-light font-sans">
      {/* Leather Box Design Image */}
      <div className={`leather-box-container left ${leatherBoxVisible ? 'visible' : ''}`}>
        <img 
          src="/leather box design.png" 
          alt="Leather Box Design" 
          className="leather-box-image"
          style={{
            transform: `translateX(${leatherBoxVisible ? 0 : -100}%)`,
            opacity: leatherBoxVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>
      
      {/* Corner Photo */}
      <div className="fixed top-0 right-0 z-40 pointer-events-none cornerImage" style={{ transform: 'translateX(80px)' }}>
        <img 
          src="/corner photo.png" 
          alt="Corner Photo" 
          className="h-152 w-auto shadow-lg"
          style={{
            transform: `translateX(${cornerImageVisible ? 0 : 100}%)`,
            opacity: cornerImageVisible ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            border: 'none',
            outline: 'none',
            background: 'transparent',
          }}
        />
      </div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-genius-brown/80 backdrop-blur-xl z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/GT LOGO.png" 
                alt="GeniusTouch Logo" 
                className="h-10 w-auto shadow-md"
              />
              <span style={{color: "#F5F5DC"}} className="text-genius-light font-serif text-xl font-semibold">GeniusTouch</span>
            </div>
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" style={{color: "#F5F5DC"}} className="text-genius-cream font-serif hover:text-genius-light transition-colors font-medium">Company Profile  </a>
              <button
                type="button"
                style={{color: "#F5F5DC", background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer'}}
                className="text-genius-cream hover:text-genius-light font-serif transition-colors font-medium"
                onClick={() => setShowExpertiseModal(true)}
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
                <img 
                  src="/GT LOGO.png" 
                  alt="GeniusTouch Logo" 
                  className="h-8 w-auto shadow-md"
                />
                <span className="text-genius-dark font-serif text-lg font-semibold">GeniusTouch</span>
              </div>
              <a href="#about" className="text-genius-dark font-serif text-lg font-medium hover:text-genius-brown transition-colors text-center" onClick={() => setShowMobileNav(false)}>Company Profile</a>
              <button
                type="button"
                className="text-genius-dark font-serif text-lg font-medium hover:text-genius-brown transition-colors text-center"
                style={{background: 'none', border: 'none', padding: 0, font: 'inherit', cursor: 'pointer'}}
                onClick={() => { setShowExpertiseModal(true); setShowMobileNav(false); }}
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
              onClick={() => setShowExpertiseModal(true)}
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
              onClick={() => setShowExpertiseModal(true)}
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
              Founded in 2013, GeniusTouch began as a small operation that grew through dedication to quality and reputation. Our CEO personally carried samples door-to-door, building relationships that became the foundation of our success. Today, we continue investing in cutting-edge equipment while expanding our vision to become the premier destination for celebrities and discerning individuals seeking luxurious packaging. With plans for international expansion and diversification into leather decoration and women's handbags, we're building a legacy that transcends borders.
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
            className="relative bg-genius-brown rounded-3xl shadow-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300"
            style={{ position: 'relative', zIndex: 999995 }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-genius-brown/95 backdrop-blur-xl p-6 border-b border-genius-light/20 z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-serif font-semibold text-genius-light mb-2">
                    Our Expertise
                  </h2>
                  <p className="text-genius-cream/90">
                    Specialized packaging solutions across luxury industries
                  </p>
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
            <div className="overflow-y-auto max-h-[calc(85vh-120px)] p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-genius-light/10 to-genius-cream/20 rounded-2xl p-5 border border-genius-light/20 hover:border-genius-cream/40 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      setExpandedCategories(prev => {
                        const newSet = new Set(prev);
                        if (newSet.has(index)) {
                          newSet.delete(index);
                        } else {
                          newSet.add(index);
                        }
                        return newSet;
                      });
                    }}
                  >
                    {/* Category header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-genius-light/20 shadow-sm">
                          <category.icon size={24} strokeWidth={1.5} color="#F5F5DC" />
                        </div>
                        <div>
                          <h3 className="font-serif font-medium text-genius-light text-lg">
                            {category.name}
                          </h3>
                        </div>
                      </div>
                      <div className="text-genius-cream/60 group-hover:text-genius-cream transition-colors">
                        {expandedCategories.has(index) ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </div>
                    
                    {/* Category description */}
                    <p className="text-sm text-genius-cream/80 mb-3">
                      {category.description}
                    </p>
                    
                    {/* Expanded client list */}
                    {expandedCategories.has(index) && (
                      <div className="mt-4 pt-4 border-t border-genius-light/20 animate-in slide-in-from-top-2 duration-200">
                        <h4 className="text-sm font-semibold text-genius-light mb-2">
                          Notable Clients:
                        </h4>
                        <ul className="space-y-1">
                          {category.clients.map((client, idx) => (
                            <li key={idx} className="text-sm text-genius-cream/70 flex items-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-genius-cream mr-2"></div>
                              {client}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      )}

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-20 px-6 flex justify-center items-center fade-in-up">
        <div className="max-w-6xl w-full mx-auto velvet-bg rounded-3xl bg-genius-light/40 backdrop-blur-xl border border-genius-cream/40 shadow-2xl p-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium mb-6 text-genius-brown drop-shadow-md">
              Signature Collections
            </h2>
            <p className="text-xl text-genius-brown max-w-2xl mx-auto">
              Discover our most celebrated packaging designs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group luxury-hover bg-genius-cream/60 backdrop-blur-xl border border-genius-tan/40 rounded-2xl shadow-lg p-6">
                <div className="aspect-[4/5] bg-genius-light/60 border border-genius-cream/40 mb-4 flex items-center justify-center rounded-xl shadow-md">
                  <span className="text-4xl opacity-80 text-genius-brown">📦</span>
                </div>
                <h3 className="text-lg font-serif font-medium mb-2 text-genius-dark">Collection {item}</h3>
                <p className="text-genius-brown/80 text-sm">
                  Luxury packaging showcase
                </p>
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
                  href="https://wa.me/1234567890" // Replace with your WhatsApp number
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
                <li>+1 (555) 123-4567</li>
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
        href="https://wa.me/1234567890" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-genius-brown hover:bg-genius-dark transition-colors rounded-full shadow-2xl flex items-center justify-center w-16 h-16 float-animate"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={36} className="text-genius-cream" />
      </a>
    </div>
  )
}
