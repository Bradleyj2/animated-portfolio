import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ExternalLink, FileText, User, Mail, Briefcase, GamepadIcon, Palette, Heart } from 'lucide-react';

// Comprehensive website search index
const SEARCH_INDEX = [
  // Main Pages
  {
    title: "Home",
    excerpt: "Welcome to the Archive of Worlds - Experiments in memory, trust, and play are preserved here. Enter a journey.",
    href: "/",
    category: "Pages",
    icon: "🏠"
  },
  {
    title: "About",
    excerpt: "Background in neuroscience, interaction design, and AI. Focus on building technology that connects meaningfully with human behavior. Multidisciplinary designer shaping accessible, human-centered digital experiences. Understanding user emotions, empathy, and psychology in design.",
    href: "/about",
    category: "Pages",
    icon: "👤"
  },
  {
    title: "Contact",
    excerpt: "Encrypted message form and social links. Get in touch to discuss design, neuropsychology, or collaboration opportunities.",
    href: "/contact",
    category: "Pages",
    icon: "📧"
  },
  
  // Case Studies
  {
    title: "Hemispheres",
    excerpt: "A neuro-narrative experiment exploring internal struggle through interactive storytelling. Dual avatars represent logic and intuition. Interactive game design exploring emotions, feelings, and psychological gameplay. Narrative design and player experience optimization.",
    href: "/hemispheres",
    category: "Case Studies",
    icon: "🧠"
  },
  {
    title: "Service Blueprinting Template",
    excerpt: "Strategic service design framework for complex organizational challenges. Customer journey mapping and stakeholder alignment.",
    href: "/service-blueprint",
    category: "Case Studies",
    icon: "📋"
  },
  {
    title: "Omnichannel Strategy",
    excerpt: "Integrated customer experience design across multiple touchpoints. Cross-platform user journey and brand consistency.",
    href: "/omnichannel-strategy",
    category: "Case Studies",
    icon: "🔄"
  },
  {
    title: "VIU by HUB",
    excerpt: "Digital trust in the insurance industry through strategic design leadership. Trust building and user confidence. Understanding user emotions and empathy in insurance design. Making complex financial decisions feel simple and trustworthy.",
    href: "/viu-by-hub",
    category: "Case Studies",
    icon: "🏢"
  },
  {
    title: "Accessibility Brand Guidelines",
    excerpt: "Comprehensive accessibility standards and implementation framework. WCAG compliance and inclusive design principles.",
    href: "/accessibility-guidelines",
    category: "Case Studies",
    icon: "♿"
  },
  {
    title: "Second Opinion",
    excerpt: "Healthcare decision support system for improved patient outcomes. Medical system design and patient care optimization. Simplifying caregiver decision-making with insights, prototypes, and tested solutions. Caregiver interviews and healthcare platform design.",
    href: "/second-opinion",
    category: "Case Studies",
    icon: "🏥"
  },
  
  // Skills & Expertise
  {
    title: "Neuroscience",
    excerpt: "Background in cognitive neuroscience and human behavior. Understanding how people think, feel, and interact with technology. Exploring emotions, empathy, and psychological patterns in design. Memory, trust, and play in human-computer interaction.",
    href: "/about",
    category: "Expertise",
    icon: "🧬"
  },
  {
    title: "Interaction Design",
    excerpt: "User-centered design methodology and human-computer interaction. Creating intuitive digital experiences.",
    href: "/about",
    category: "Expertise",
    icon: "💻"
  },
  {
    title: "AI & Machine Learning",
    excerpt: "Experience with artificial intelligence and machine learning applications. Building intelligent systems that enhance human capabilities.",
    href: "/about",
    category: "Expertise",
    icon: "🤖"
  },
  {
    title: "Service Design",
    excerpt: "Strategic service design and customer experience optimization. Process mapping and stakeholder alignment.",
    href: "/about",
    category: "Expertise",
    icon: "🎯"
  },
  {
    title: "Game Design",
    excerpt: "Interactive storytelling and psychological gameplay. Narrative design and player experience optimization. Exploring emotions, feelings, and internal struggle through interactive experiences. Dual avatars representing logic and intuition.",
    href: "/about",
    category: "Expertise",
    icon: "🎮"
  }
];

// Helper function to highlight searched text
const highlightText = (text: string, query: string) => {
  if (!query.trim()) return text;
  
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, index) => 
    regex.test(part) ? (
      <span key={index} className="text-[#b388ff] font-semibold">
        {part}
      </span>
    ) : part
  );
};

// Debounce hook
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

interface ArchiveSearchProps {
  scrollProgress?: number;
}

const ArchiveSearch = ({ scrollProgress = 0 }: ArchiveSearchProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [placeholderText, setPlaceholderText] = useState('');
  const [searchResults, setSearchResults] = useState<typeof SEARCH_INDEX>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  
  // Debounce search query for better performance
  const debouncedQuery = useDebounce(searchQuery, 200);

  useEffect(() => {
    if (isSearchOpen) {
      setPlaceholderText("Search archive records...");
      // Focus input immediately
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    } else {
      setSearchQuery('');
      setSearchResults([]);
      setPlaceholderText('');
      setSelectedIndex(0);
    }
  }, [isSearchOpen]);

  // Enhanced search functionality across entire website
  useEffect(() => {
    if (debouncedQuery.trim() === '') {
      setSearchResults([]);
      setSelectedIndex(0);
      return;
    }

    const query = debouncedQuery.toLowerCase();
    const filtered = SEARCH_INDEX.filter(item => 
      // Search in title
      item.title.toLowerCase().includes(query) ||
      // Search in excerpt
      item.excerpt.toLowerCase().includes(query) ||
      // Search in category
      item.category.toLowerCase().includes(query)
    );
    
    setSearchResults(filtered);
    setSelectedIndex(0);
  }, [debouncedQuery]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isSearchOpen) return;

      switch (e.key) {
        case 'Escape':
          setIsSearchOpen(false);
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < searchResults.length - 1 ? prev + 1 : 0
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : searchResults.length - 1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (searchResults[selectedIndex]) {
            window.location.href = searchResults[selectedIndex].href;
            setIsSearchOpen(false);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, searchResults, selectedIndex]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleResultClick = (href: string) => {
    window.location.href = href;
    setIsSearchOpen(false);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Pages':
        return <FileText className="w-4 h-4" />;
      case 'Case Studies':
        return <Briefcase className="w-4 h-4" />;
      case 'Expertise':
        return <User className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div ref={searchContainerRef} className="relative">
      {/* Search Icon Button - uses --nav-search-icon-color from Navigation for visibility */}
      <motion.button
        className="w-8 h-8 flex items-center justify-center transition-colors duration-300 relative"
        style={{
          color: 'var(--nav-search-icon-color, #000000)'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleSearchToggle}
        aria-label="Open archive scanner"
      >
        {/* Radar Scanner Animation */}
        <AnimatePresence>
          {isSearchOpen && (
            <>
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-lavender-400/60"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: [0.8, 1.2, 0.8], 
                  opacity: [0, 0.8, 0] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              {/* Middle ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-lavender-400/80"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ 
                  scale: [0.9, 1.1, 0.9], 
                  opacity: [0, 0.6, 0] 
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.3
                }}
              />
              {/* Inner ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-lavender-300/40"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.05, 1], 
                  opacity: [0, 0.4, 0] 
                }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.6
                }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Search Icon */}
        <motion.div
          className="[color:var(--nav-search-icon-color,#000000)]"
          animate={isSearchOpen ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ zIndex: 10 }}
        >
          <Search 
            className="w-5 h-5 search-icon dynamic-color" 
            style={{
              strokeWidth: 2.5,
              zIndex: 10
            } as React.CSSProperties}
          />
        </motion.div>
      </motion.button>

      {/* Expanding Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed right-4 sm:right-4 left-4 sm:left-auto top-20 w-[calc(100vw-2rem)] sm:w-96 z-[99999]"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Search Input Container */}
            <div className="bg-black border-2 border-white rounded-lg shadow-2xl shadow-white/30 backdrop-blur-sm search-dropdown">
              {/* Search Input */}
              <div className="relative p-4">
                <div className="relative">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={placeholderText}
                    className="w-full bg-transparent text-white placeholder:text-gray-400 text-sm outline-none pr-8"
                    style={{
                      caretColor: '#a78bfa' // neon lavender cursor
                    }}
                  />
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="absolute right-0 top-0 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200"
                    aria-label="Close search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Search Results */}
              {searchResults.length > 0 && (
              <motion.div
                className="border-t border-white"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="max-h-96 overflow-y-auto">
                    {searchResults.map((item, index) => (
                      <motion.div
                        key={`${item.href}-${index}`}
                        className={`block p-3 hover:bg-gray-800 transition-colors duration-200 border-b border-gray-700 last:border-b-0 cursor-pointer ${
                          index === selectedIndex ? 'bg-gray-800' : ''
                        }`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleResultClick(item.href)}
                        onMouseEnter={() => setSelectedIndex(index)}
                      >
                        <div className="flex items-start space-x-3">
                          {/* Category Icon */}
                          <div className="flex-shrink-0 mt-1 text-gray-400">
                            {getCategoryIcon(item.category)}
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            {/* Title */}
                            <div className="text-white font-medium text-sm mb-1">
                              {highlightText(item.title, searchQuery)}
                            </div>
                            
                            {/* Excerpt */}
                            <div className="text-gray-400 text-xs leading-relaxed mb-2">
                              {highlightText(item.excerpt, searchQuery)}
                            </div>
                            
                            {/* Category and Link */}
                            <div className="flex items-center justify-between">
                              <span className="text-gray-500 text-xs font-mono">
                                {item.category}
                              </span>
                              <ExternalLink className="w-3 h-3 text-lavender-400/60" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* No Results */}
              {searchQuery && searchResults.length === 0 && (
                <motion.div
                  className="p-4 text-center border-t border-purple-400/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-purple-300/70 text-sm">
                    No archive records found for "{searchQuery}"
                  </div>
                </motion.div>
              )}

              {/* Search Tips - Always show when search is open */}
              <motion.div
                className="p-4 text-center border-t border-purple-400/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-white text-xs">
                  <div className="mb-2">Search across the entire archive:</div>
                  <div className="space-x-2 text-white">
                    <span>↑↓ Navigate</span>
                    <span>•</span>
                    <span>Enter Select</span>
                    <span>•</span>
                    <span>ESC Close</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArchiveSearch; 