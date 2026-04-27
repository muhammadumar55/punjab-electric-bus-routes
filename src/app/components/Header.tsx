import { useState, useEffect } from 'react';
import { Smartphone, Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
const Logo = '/assets/app_logo.svg';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#F5F7F6] backdrop-blur-lg shadow-lg border-b border-[#1F7A5A]/10'
          : 'bg-transparent'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className={`relative transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'
                }`}>
                <div className="relative bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <img
                    src={Logo}
                    alt="App Logo"
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
              <span
                className={`font-bold transition-all duration-300 ${isScrolled ? 'text-2xl text-[#1F2937]' : 'text-2xl text-[#1F2937]'
                  }`}
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Punjab E-Buses Routes
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className={`font-medium transition-colors relative group ${isScrolled ? 'text-[#1F2937]/70 hover:text-[#1F7A5A]' : 'text-[#1F2937]/70 hover:text-[#1F7A5A]'
                    }`}
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1F7A5A] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="hidden md:block"
            >
              <a
                href="/punjab_electric_bus_routes.apk"
                download
                className="group relative px-6 py-3 bg-gradient-to-r from-[#1F7A5A] to-[#2E8B6C] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" strokeWidth={2} />
                Download
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-50 p-2 rounded-xl bg-[#1F7A5A]/10 hover:bg-[#1F7A5A]/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#1F7A5A]" strokeWidth={2} />
              ) : (
                <Menu className="w-6 h-6 text-[#1F7A5A]" strokeWidth={2} />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-40 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 px-6 pb-8">
                {/* Navigation Links */}
                <nav className="flex-1 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-6 py-4 rounded-2xl font-semibold text-[#1F2937] hover:bg-[#1F7A5A]/5 hover:text-[#1F7A5A] transition-all"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                {/* Download Button */}
                <motion.a
                  href="/punjab_electric_bus_routes.apk"
                  download
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#1F7A5A] to-[#2E8B6C] text-white rounded-2xl font-bold shadow-lg flex items-center justify-center gap-3 hover:shadow-xl transition-shadow"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Download className="w-6 h-6" strokeWidth={2} />
                  Download APK
                </motion.a>

                {/* Menu Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="mt-6 pt-6 border-t border-[#1F7A5A]/10"
                >
                  <div className="flex items-center gap-2 text-sm text-[#1F2937]/60">
                    <div className="w-2 h-2 rounded-full bg-[#1F7A5A] animate-pulse" />
                    <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                      Free • No sign-up • Works offline
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
