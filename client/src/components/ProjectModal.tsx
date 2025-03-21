import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Project } from "@/lib/types";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modal = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { delay: 0.1 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <motion.div 
              className="fixed inset-0 bg-slate-900 bg-opacity-75"
              variants={backdrop}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={onClose}
            />
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            
            <motion.div 
              className="inline-block align-bottom bg-white dark:bg-slate-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full p-6"
              variants={modal}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button 
                  onClick={onClose}
                  className="text-slate-500 hover:text-slate-800 dark:hover:text-white"
                  aria-label="Close modal"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              
              {project ? (
                <div className="mt-2">
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2.5 py-1.5 bg-slate-100 dark:bg-slate-700 rounded-md text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold mb-2">Project Details</h3>
                    <p className="text-slate-600 dark:text-slate-400">{project.longDescription}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-6">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-md flex items-center gap-2"
                      >
                        <i className="fab fa-github"></i>
                        View Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary hover:bg-blue-600 text-white rounded-md flex items-center gap-2"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ) : (
                <div className="animate-pulse">
                  <div className="h-48 bg-slate-200 dark:bg-slate-700 rounded-lg mb-4"></div>
                  <div className="h-8 bg-slate-200 dark:bg-slate-700 rounded-lg w-1/2 mb-4"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-lg mb-2"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-lg mb-2"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-lg mb-2"></div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-lg w-4/5"></div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
