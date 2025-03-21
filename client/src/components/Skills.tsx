import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaPython, 
  FaAws, 
  FaDocker, 
  FaFigma, 
  FaGithub 
} from "react-icons/fa";
import { BiSolidData } from "react-icons/bi";

const skills = [
  { name: "Frontend Development", proficiency: 95 },
  { name: "Backend Development", proficiency: 90 },
  { name: "UI/UX Design", proficiency: 85 },
  { name: "DevOps & Deployment", proficiency: 80 },
  { name: "Mobile Development", proficiency: 75 }
];

const technologies = [
  { name: "React", icon: FaReact, color: "text-blue-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
  { name: "Python", icon: FaPython, color: "text-blue-600" },
  { name: "AWS", icon: FaAws, color: "text-orange-500" },
  { name: "Docker", icon: FaDocker, color: "text-blue-400" },
  { name: "Figma", icon: FaFigma, color: "text-purple-500" },
  { name: "Git/GitHub", icon: FaGithub, color: "text-slate-800 dark:text-white" },
  { name: "Databases", icon: BiSolidData, color: "text-slate-600" }
];

const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView && !animated) {
      setAnimated(true);
    }
  }, [isInView, animated]);

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
    <section id="skills" className="py-24 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills & Expertise</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies and methodologies throughout my career.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="text-primary dark:text-blue-400">{skill.proficiency}%</span>
                </div>
                <div className="skill-progress h-6 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: animated ? `${skill.proficiency}%` : 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
                variants={itemVariants}
              >
                <tech.icon className={`text-3xl ${tech.color} mb-3`} />
                <span className="text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
