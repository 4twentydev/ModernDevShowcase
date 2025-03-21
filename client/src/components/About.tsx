import { motion } from "framer-motion";

const aboutImage = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80";
const resumeUrl = "/alex-chen-resume.pdf"; // This would be a real PDF in a production environment

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary rounded-xl opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-xl opacity-20"></div>
            <img 
              src={aboutImage} 
              alt="Alex working on a project" 
              className="w-full h-[400px] object-cover rounded-xl relative shadow-xl"
            />
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <p className="text-slate-600 dark:text-slate-400">
              I'm a passionate full-stack developer with over 10 years of experience crafting digital solutions that solve real-world problems. My journey in technology began when I built my first website at 14, and I've been hooked ever since.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              I specialize in building scalable web applications using modern frameworks and tools. My approach combines technical expertise with a keen eye for design and user experience.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              When I'm not coding, you'll find me hiking in the mountains, experimenting with photography, or contributing to open-source projects. I believe in continuous learning and regularly attend tech conferences and workshops.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-8">
              <div>
                <h3 className="text-4xl font-bold text-primary dark:text-blue-400">10+</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary dark:text-blue-400">120+</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary dark:text-blue-400">30+</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Happy Clients</p>
              </div>
            </div>
            
            <div className="pt-6">
              <a 
                href={resumeUrl} 
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-blue-600 text-white rounded-md shadow-lg shadow-blue-500/20 transition-all duration-300"
              >
                <i className="fas fa-download"></i>
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
