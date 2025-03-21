import { motion } from "framer-motion";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  onViewDetails: () => void;
}

const ProjectCard = ({ project, onViewDetails }: ProjectCardProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "webApp":
        return "bg-primary";
      case "mobile":
        return "bg-secondary";
      case "uiUx":
        return "bg-primary";
      case "openSource":
        return "bg-accent";
      default:
        return "bg-primary";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "webApp":
        return "Web App";
      case "mobile":
        return "Mobile";
      case "uiUx":
        return "UI/UX";
      case "openSource":
        return "Open Source";
      default:
        return category;
    }
  };

  return (
    <motion.div 
      className="project-card relative bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:transform hover:translate-y-[-5px] transition-all duration-300"
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="relative h-56">
        <img 
          src={project.image} 
          alt={`${project.title} preview`} 
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-mono text-white ${getCategoryColor(project.category)}`}>
          {getCategoryLabel(project.category)}
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded-md text-xs">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center pt-2">
          <button 
            onClick={onViewDetails}
            className="text-primary hover:text-blue-700 dark:hover:text-blue-300"
          >
            View Details
          </button>
          <div className="flex gap-3">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
                aria-label="View GitHub repository"
              >
                <i className="fab fa-github"></i>
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
                aria-label="View live project"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
