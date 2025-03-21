import { Link } from "wouter";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 bg-slate-800 dark:bg-slate-900 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="#" className="text-2xl font-bold flex items-center mb-4">
              <span className="text-primary dark:text-blue-400">{'{'}</span>
              <span>Alex Chen</span>
              <span className="text-primary dark:text-blue-400">{'}'}</span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              Building exceptional digital experiences with a focus on design, functionality, and performance.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 hover:bg-primary hover:text-white rounded-full transition-colors"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 hover:bg-primary hover:text-white rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 hover:bg-primary hover:text-white rounded-full transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-slate-700 hover:bg-primary hover:text-white rounded-full transition-colors"
                aria-label="Dribbble"
              >
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-400 hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-primary transition-colors">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-primary transition-colors">Skills</a>
              </li>
              <li>
                <a href="#about" className="text-slate-400 hover:text-primary transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-primary transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <i className="fas fa-envelope text-primary"></i>
                <a href="mailto:alex@example.com" className="text-slate-400 hover:text-primary transition-colors">
                  alex@example.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-phone text-primary"></i>
                <a href="tel:+11234567890" className="text-slate-400 hover:text-primary transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span className="text-slate-400">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© {currentYear} Alex Chen. All rights reserved.</p>
          <p className="text-slate-400 text-sm mt-2 md:mt-0">Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
