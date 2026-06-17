import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Ooshas Global', href: 'https://ooshasglobal.com' },
  { label: 'Ooshas Prep', href: 'https://ooshasprep.com' }
];

const products = [
  {
    title: "Ooshas Global",
    description: "Study abroad guidance, admissions, visas, and global education opportunities.",
    href: "https://ooshasglobal.com",
    icon: "🌍",
  },
  {
    title: "Ooshas Prep",
    description: "Expert coaching and preparation for IELTS, PTE, TOEFL, GRE, GMAT, and more.",
    href: "https://ooshasprep.com",
    icon: "📚",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white shadow-md py-1.5'
            : 'bg-[#F9F9F9] py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="./logo.png"
                alt="Ooshas Global"
                className={`transition-all duration-300 sm:h-16 h-12`}
              />
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <motion.button
                  className="flex items-center gap-1 text-gray-700 hover:text-orange-500 font-medium text-base transition-colors duration-200"
                  whileHover={{ y: -2 }}
                >
                  Products
                  <motion.div
                    animate={{ rotate: productsOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      className="absolute top-full -right-[100%] transform mt-4 w-[320px] shadow-xl bg-white border border-gray-200 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {products.map((product, index) => (
                            <motion.a
                              key={product.title}
                              href={product.href}
                              initial={{ opacity: 0, y: 40 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.02, duration: 0.1 }}
                              className="flex items-start gap-3 p-3 px-4 hover:scale-105 hover:bg-orange-50 transition-all duration-200 group"
                            >
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-900 group-hover:text-orange-500 transition-colors">
                                  {product.title}
                                </h4>
                               
                              </div>
                              <ArrowRight
                                size={16}
                                className="text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all mt-1"
                              />
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Nav Links */}
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="text-gray-700 hover:text-orange-500 font-medium text-base transition-colors duration-200 relative group"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </nav>

            {/* Mobile toggle */}
            <motion.button
              className="lg:hidden p-2 text-black transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="text-black stroke-[1.5]" size={28}/>
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="text-black stroke-[1.5]" size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white lg:hidden overflow-y-auto"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
              <img
                src="./logo.png"
                alt="Ooshas Global"
                className="h-14"
              />
              <motion.button
                onClick={() => setMobileOpen(false)}
                className="p-1"
                whileTap={{ scale: 0.9 }}
              >
                <X className="text-black stroke-[1.5]" size={28} />
              </motion.button>
            </div>

            {/* Mobile Menu Content */}
            <div className="px-6 py-6">
              {/* Products Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-4"
              >
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                  Our Products
                </h3>
                <div className="space-y-2">
                  {products.slice(0, 5).map((product, index) => (
                    <motion.a
                      key={product.title}
                      href={product.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + index * 0.05 }}
                      className="flex items-center gap-4 py-2 transition-colors group"
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 group-hover:text-orange-500">
                          {product.title}
                        </h4>
                        
                      </div>
                      <ArrowRight
                        size={18}
                        className="text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all"
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Navigation Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-4"
              >
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                  Navigation
                </h3>
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 + index * 0.05 }}
                      className="flex items-center justify-between py-2 text-base font-medium text-gray-700 hover:text-orange-500 rounded-xl transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                      <ArrowRight size={18} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}