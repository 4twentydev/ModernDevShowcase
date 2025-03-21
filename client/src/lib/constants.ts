import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online stores with real-time data visualization.",
    longDescription: "This dashboard provides e-commerce store owners with detailed analytics and insights about their business. Features include real-time sales tracking, inventory management, customer behavior analysis, and predictive sales forecasting using machine learning algorithms. The responsive design ensures a seamless experience across all devices.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
    category: "webApp",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    title: "Fitness Tracker App",
    description: "A cross-platform mobile application for tracking workouts, nutrition, and progress.",
    longDescription: "This fitness application helps users track their workouts, nutrition intake, and overall fitness progress. Features include custom workout plans, calorie tracking, progress photos, and integration with fitness wearables. The app uses machine learning to provide personalized workout recommendations based on user goals and performance.",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
    category: "mobile",
    technologies: ["React Native", "Redux", "Firebase", "Jest"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 3,
    title: "Code Editor Extension",
    description: "A VS Code extension for improved developer workflow with AI-powered code suggestions.",
    longDescription: "This VS Code extension enhances developer productivity by providing intelligent code suggestions, automated refactoring, and code quality analysis. The extension uses AI to understand code context and provide tailored recommendations. It supports multiple programming languages and integrates with popular linting tools.",
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=800&q=80",
    category: "openSource",
    technologies: ["TypeScript", "VS Code API", "WebAssembly", "OpenAI"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 4,
    title: "Banking App Redesign",
    description: "Complete UX/UI redesign for a major banking application, improving user engagement by 42%.",
    longDescription: "This project involved a comprehensive redesign of a banking application with over 2 million users. The design process included user research, journey mapping, wireframing, and usability testing. The new design focuses on accessibility, simplified navigation, and personalized user experiences, resulting in a 42% increase in daily active users.",
    image: "https://images.unsplash.com/photo-1561069934-eee225952461?auto=format&fit=crop&w=800&q=80",
    category: "uiUx",
    technologies: ["Figma", "Prototyping", "User Testing", "Design System"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 5,
    title: "AI Content Generator",
    description: "Platform that uses AI to create SEO-optimized content for marketing teams and bloggers.",
    longDescription: "This content generation platform leverages advanced AI algorithms to create high-quality, SEO-optimized content for marketing teams and bloggers. Features include content idea generation, AI writing with human-like tone adjustments, keyword optimization, and content performance analytics. The platform integrates with popular CMS solutions for seamless workflow.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    category: "webApp",
    technologies: ["Next.js", "GPT-4", "TailwindCSS", "Prisma"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 6,
    title: "Developer Toolkit",
    description: "Collection of utilities for web developers including formatters, converters, and debugging tools.",
    longDescription: "This developer toolkit provides a comprehensive set of utilities to streamline web development workflows. Tools include code formatters, data converters, API testers, and debugging utilities. The application is built as a Progressive Web App (PWA), allowing offline access to essential development tools. The project is open-source with an active community of contributors.",
    image: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?auto=format&fit=crop&w=800&q=80",
    category: "openSource",
    technologies: ["Vue.js", "JavaScript", "LocalStorage", "PWA"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];
