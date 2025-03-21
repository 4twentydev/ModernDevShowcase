import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          className="md:hidden overflow-hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-2 space-y-4 flex flex-col">
            <a 
              href="#home" 
              className="py-2 hover:text-primary dark:hover:text-blue-400 transition-colors"
              onClick={handleLinkClick}
            >
              Home
            </a>
            <a 
              href="#projects" 
              className="py-2 hover:text-primary dark:hover:text-blue-400 transition-colors"
              onClick={handleLinkClick}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="py-2 hover:text-primary dark:hover:text-blue-400 transition-colors"
              onClick={handleLinkClick}
            >
              Skills
            </a>
            <a 
              href="#about" 
              className="py-2 hover:text-primary dark:hover:text-blue-400 transition-colors"
              onClick={handleLinkClick}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="py-2 hover:text-primary dark:hover:text-blue-400 transition-colors"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
