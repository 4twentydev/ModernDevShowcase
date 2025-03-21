import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useTheme } from "@/hooks/use-theme";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 bg-white/5 backdrop-blur-lg border-b border-slate-200/20 dark:border-slate-800/20 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#home" className="text-2xl font-bold tracking-tight flex items-center gap-2">
          <span className="text-primary dark:text-blue-400">{'{'}</span>
          <span>AC</span>
          <span className="text-primary dark:text-blue-400">{'}'}</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="hover:text-primary dark:hover:text-blue-400 transition-colors duration-200">Home</a>
          <a href="#projects" className="hover:text-primary dark:hover:text-blue-400 transition-colors duration-200">Projects</a>
          <a href="#skills" className="hover:text-primary dark:hover:text-blue-400 transition-colors duration-200">Skills</a>
          <a href="#about" className="hover:text-primary dark:hover:text-blue-400 transition-colors duration-200">About</a>
          <a href="#contact" className="hover:text-primary dark:hover:text-blue-400 transition-colors duration-200">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-200 dark:bg-slate-800 transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <i className="fas fa-moon text-blue-300"></i>
            ) : (
              <i className="fas fa-sun text-yellow-500"></i>
            )}
          </button>
          
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};

export default Navbar;
