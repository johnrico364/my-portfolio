import {
  FaArrowRight,
  FaCodeBranch,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaServer,
  FaSun,
} from "react-icons/fa";

export const profile = {
  name: "Alex Fullstack",
  role: "Fullstack Developer",
  shortIntro:
    "I build fast, scalable, and user-focused web applications from frontend experience to backend architecture.",
  about:
    "I am a fullstack developer focused on creating reliable products that solve real business problems. I enjoy turning ideas into polished applications, improving performance, and collaborating in agile teams.",
  email: "alex.fullstack.dev@example.com",
  location: "Metro Manila, Philippines",
  resumeLink: "#",
  socials: [
    { label: "GitHub", href: "https://github.com/your-username", icon: FaGithub },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-handle", icon: FaLinkedin },
  ],
};

export const projects = [
  {
    title: "E-Commerce Admin Dashboard",
    description:
      "A full dashboard for product, order, and user management with role-based access and analytics widgets.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://example.com/admin-dashboard",
    repoLink: "https://github.com/your-username/ecommerce-dashboard",
  },
  {
    title: "TaskFlow Collaboration App",
    description:
      "A collaborative task management app with boards, due dates, file uploads, and real-time updates.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "Firebase", "Tailwind", "DaisyUI"],
    liveLink: "https://example.com/taskflow",
    repoLink: "https://github.com/your-username/taskflow",
  },
  {
    title: "DevHire Job Platform",
    description:
      "A job portal where companies post roles and developers apply, with filtering, saved jobs, and profile pages.",
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "TypeScript", "PostgreSQL", "Prisma"],
    liveLink: "https://example.com/devhire",
    repoLink: "https://github.com/your-username/devhire",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: FaCode,
    items: ["React", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "DaisyUI"],
  },
  {
    title: "Backend",
    icon: FaServer,
    items: ["Node.js", "Express.js", "REST APIs", "Authentication", "SQL/NoSQL"],
  },
  {
    title: "Tools",
    icon: FaGithub,
    items: ["Git & GitHub", "Vite", "Postman", "Figma", "CI/CD Basics"],
  },
];

export const services = [
  "Fullstack web app development from planning to deployment",
  "Responsive frontend implementation with React and Tailwind",
  "Backend API integration, authentication, and database design",
];

export {
  FaArrowRight,
  FaCodeBranch,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaMoon,
  FaSun,
};

