import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGoogle, FaMicrosoft, FaAws, FaShopify, FaSpotify } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const heroImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div 
            className="lg:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary dark:text-blue-400 font-mono tracking-wider">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Alex Chen
              <span className="block mt-2 text-primary dark:text-blue-400">Full-Stack Developer</span>
            </h1>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl">
              I build exceptional digital experiences with modern technologies. Focused on creating responsive, accessible, and performant web applications.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-md bg-primary hover:bg-blue-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
              >
                Get in touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-md border border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-blue-400 transition-all duration-300"
              >
                View my work
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-10 dark:opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-100 to-violet-100 dark:from-slate-800 dark:to-slate-900"></div>
              <img 
                src={heroImage} 
                alt="Alex Chen" 
                className="absolute inset-0 w-full h-full object-cover rounded-full"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-secondary flex items-center justify-center text-white">
                <span className="text-sm font-mono">10+ years</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-24 flex flex-wrap gap-10 justify-center lg:justify-between items-center py-8 border-t border-b border-slate-200 dark:border-slate-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <FaGoogle className="h-8 w-auto" />
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <FaMicrosoft className="h-8 w-auto" />
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <SiTailwindcss className="h-8 w-auto" />
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <FaShopify className="h-8 w-auto" />
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            <FaSpotify className="h-8 w-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
