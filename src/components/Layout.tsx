import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HardHat, BookOpen, User, FolderKanban, Download, Mail, Menu, X, ChevronRight, Youtube, Facebook, Twitter, Instagram, MessageCircle, Video, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { ThemeToggle } from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: HardHat },
    { name: 'Blog', path: '/blog', icon: BookOpen },
    { name: 'Projects', path: '/projects', icon: FolderKanban },
    { name: 'About', path: '/about', icon: User },
    { name: 'Resources', path: '/resources', icon: Download },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  useEffect(() => {
    setIsMenuOpen(false);
    
    // Update document title based on current route
    const baseTitle = "Er. Tekraj Khadka";
    const currentNavItem = navItems.find(item => item.path === location.pathname);
    
    if (currentNavItem) {
      document.title = currentNavItem.name === 'Home' 
        ? `${baseTitle} | Civil Engineer`
        : `${currentNavItem.name} | ${baseTitle}`;
    } else {
      document.title = baseTitle;
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Blueprint Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-30" />
        <div className="absolute inset-0 blueprint-subgrid opacity-20" />
      </div>

      <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#0a1122]/95 backdrop-blur-md border-b border-blueprint-900/10 dark:border-white/10 h-20 flex items-center shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blueprint-700 to-blueprint-900 flex items-center justify-center text-white rounded-lg shadow-md border border-blueprint-900/20 group-hover:scale-105 transition-transform">
              <span className="font-mono font-bold text-xl">T.K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-blueprint-900 dark:text-white text-lg tracking-tight uppercase leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blueprint-900 to-blueprint-600 dark:from-white dark:to-blue-300">Er. Tekraj Khadka</span>
              <span className="text-xs font-mono text-blueprint-600 dark:text-blue-400 font-semibold uppercase tracking-widest leading-none mt-1">Civil Engineer & AI Enthusiast</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-5 py-2.5 text-sm font-bold uppercase tracking-widest transition-all relative group overflow-hidden rounded-md flex items-center gap-2",
                  location.pathname === item.path 
                    ? "text-white" 
                    : "text-slate-600 dark:text-slate-300 hover:text-blueprint-900 hover:bg-blueprint-50 dark:hover:bg-white/5 dark:hover:text-white"
                )}
              >
                {location.pathname === item.path && (
                  <motion.div 
                    layoutId="nav-bg"
                    className="absolute inset-0 bg-gradient-to-r from-blueprint-700 to-blueprint-900 shadow-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <item.icon size={18} className={location.pathname === item.path ? "text-white" : "text-blueprint-600 dark:text-slate-400 group-hover:text-blueprint-900 dark:group-hover:text-white transition-colors"} />
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-blueprint-900 dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#070b14] pt-28 px-4 md:hidden"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between p-4 border rounded-none text-lg font-medium",
                    location.pathname === item.path 
                      ? "bg-blueprint-900 text-white border-blueprint-900 dark:bg-blue-600 dark:border-blue-600" 
                      : "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={20} />
                    {item.name}
                  </div>
                  <ChevronRight size={18} />
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 relative z-10">
        {children}
      </main>

      <footer className="bg-blueprint-900 text-white py-12 relative z-10 border-t-8 border-blueprint-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white flex items-center justify-center text-blueprint-900 rounded-none">
                  <span className="font-mono font-bold text-base">TK</span>
                </div>
                <span className="font-bold text-white text-lg tracking-tighter uppercase">Er. Tekraj Khadka</span>
              </div>
              <p className="text-blueprint-300 max-w-md text-sm leading-relaxed">
                Teaching by evoking emotions and inspiring students to learn. Focused on structural engineering concepts, applied mathematics, AI integration, and the latest trends in civil engineering.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="px-6 py-2 bg-transparent border border-white/20 hover:bg-white/10 transition-colors text-sm font-mono uppercase tracking-widest">
                  Inquire Now
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-blueprint-300">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {navItems.slice(1).map(item => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-white/60 hover:text-white transition-colors">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-blueprint-300">Contact Point</h4>
              <ul className="space-y-3 text-sm text-white/60 mb-6">
                <li className="flex items-center gap-2">
                  <MapPin size={16} /> Lalitpur, Nepal
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} /> <a href="mailto:khadkatekraj150@gmail.com" className="hover:text-white transition-colors underline decoration-white/30 underline-offset-4">khadkatekraj150@gmail.com</a>
                </li>
              </ul>
              <div className="flex gap-4 text-blueprint-300">
                <a href="#" className="hover:text-white transition-colors" title="YouTube"><Youtube size={18} /></a>
                <a href="#" className="hover:text-white transition-colors" title="Facebook"><Facebook size={18} /></a>
                <a href="#" className="hover:text-white transition-colors" title="X (Twitter)"><Twitter size={18} /></a>
                <a href="#" className="hover:text-white transition-colors" title="Instagram"><Instagram size={18} /></a>
                <a href="#" className="hover:text-white transition-colors" title="TikTok"><Video size={18} /></a>
                <a href="#" className="hover:text-white transition-colors" title="WhatsApp"><MessageCircle size={18} /></a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Er. Tekraj Khadka. Evoking Emotion, Inspiring Knowledge.
            </p>
            <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
              Built for Civil Engineering Excellence in Nepal
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
