import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { Project, ProjectCategory } from "@/lib/types";
import { projects } from "@/lib/constants";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filterProjects = (category: ProjectCategory | "all") => {
    setActiveFilter(category);
  };

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-24 px-4 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work. Each project showcases different skills and technologies.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <button 
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === "all" 
                ? "bg-primary text-white" 
                : "bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"
            }`}
            onClick={() => filterProjects("all")}
          >
            All
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === "webApp" 
                ? "bg-primary text-white" 
                : "bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"
            }`}
            onClick={() => filterProjects("webApp")}
          >
            Web Apps
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === "mobile" 
                ? "bg-primary text-white" 
                : "bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"
            }`}
            onClick={() => filterProjects("mobile")}
          >
            Mobile
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === "uiUx" 
                ? "bg-primary text-white" 
                : "bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"
            }`}
            onClick={() => filterProjects("uiUx")}
          >
            UI/UX
          </button>
          <button 
            className={`px-4 py-2 rounded-full transition-colors ${
              activeFilter === "openSource" 
                ? "bg-primary text-white" 
                : "bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"
            }`}
            onClick={() => filterProjects("openSource")}
          >
            Open Source
          </button>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard 
                project={project} 
                onViewDetails={() => handleViewDetails(project)} 
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            View all projects
            <i className="fas fa-arrow-right"></i>
          </a>
        </motion.div>
      </div>

      <ProjectModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        project={selectedProject} 
      />
    </section>
  );
};

export default Projects;
