'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X, Home, GalleryVertical, Video, Edit, PenTool, Brush, Type, Image as ImageIcon } from 'lucide-react';

// Small list of nav items — keeps icons and routes in one place for easy updates
const navLinks = [
  { name: 'Home', icon: Home, href: '/' },
  { name: 'Gallery', icon: GalleryVertical, href: '/gallery' },
  { name: 'Video', icon: Video, href: '/video' },
  { name: 'Edit', icon: Edit, href: '/edit' },
  { name: 'Pen', icon: PenTool, href: '/pen' },
  { name: 'Brush', icon: Brush, href: '/brush' },
  { name: 'Text', icon: Type, href: '/text' },
  { name: 'Image', icon: ImageIcon, href: '/image' },
];

// Toggle button for dark/light mode. Pulled out so the markup stays tidy.
function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  // Use resolvedTheme to avoid flashes while theme is resolving on hydrate
  const isDark = resolvedTheme === 'dark';
  
  const handleToggle = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  
  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label="Toggle dark mode"
    >
      <Sun className="h-5 w-5 text-yellow-500 dark:hidden" />
      <Moon className="h-5 w-5 text-blue-400 hidden dark:block" />
    </button>
  );
}

// Simple mobile menu; keep the DOM lightweight when it's closed
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50">
      <div className="px-4 py-3 space-y-2">
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={onClose}
            >
              <Icon className="h-5 w-5" />
              {link.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}

// Top navigation bar – logo, primary links, utilities and mobile menu
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Open/close the mobile dropdown
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Utility to close mobile menu (used on navigation and outside clicks)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo section - left side */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-semibold text-gray-900 dark:text-white">
              Krea AI
            </span>
          </div>

          {/* Desktop navigation - center */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 group"
                  title={link.name}
                >
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                </a>
              );
            })}
          </div>

          {/* Right side - utilities and mobile menu */}
          <div className="flex items-center gap-2">
            {/* Desktop utilities */}
            <div className="hidden md:flex items-center gap-2">
              <button
                title="Gallery"
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Gallery"
              >
                <GalleryVertical className="h-5 w-5" />
              </button>
              <button
                title="Support"
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Support"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </button>
              <button
                title="Notifications"
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Notifications"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 7l2.586 2.586a2 2 0 002.828 0L12.828 7H4.828z" />
                </svg>
              </button>
            </div>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* User profile button */}
            <button 
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="User profile"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </nav>
  );
}