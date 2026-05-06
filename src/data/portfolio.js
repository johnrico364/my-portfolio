import {
  FaArrowRight,
  FaCodeBranch,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMoon,
  FaServer,
  FaSun,
} from "react-icons/fa";

export const profile = {
  name: "Jah Fullstack",
  role: "Fullstack Developer",
  shortIntro:
    "I build fast, scalable, and user-focused web applications from frontend experience to backend architecture.",
  about:
    "I am a fullstack developer focused on creating reliable products that solve real business problems. I enjoy turning ideas into polished applications, and improving performance.",
  email: "johnrico364@gmail.com",
  location: "Cebu, Philippines",
  resumeLink: "#",
  socials: [
    { label: "GitHub", href: "https://github.com/johnrico364", icon: FaGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/john-anthony-rico-259930330", icon: FaLinkedin },
    { label: "Facebook", href: "https://www.facebook.com/jah.wrldd", icon: FaFacebook },
    { label: "Instagram", href: "https://www.instagram.com/_jah.wrld/", icon: FaInstagram },
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
    liveDisabled: true,
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
  {
    title: "Food Hub",
    description:
      "A food ordering UI with menu browsing, cart flow, and checkout-focused layout built for practice and portfolio demos.",
    image: "/assets/projects/food_hub.png",
    tech: ["React", "CSS", "Responsive layout"],
    liveLink: "#",
    repoLink: "https://github.com/your-username/food-hub",
    liveDisabled: true,
  },
  {
    title: "Todo List App",
    description:
      "A task list with add, complete, and filter interactions—local-first demo without a public deployment.",
    image: "/assets/projects/todo_list.png",
    tech: ["React", "JavaScript", "Local storage"],
    liveLink: "#",
    repoLink: "https://github.com/your-username/todo-list",
    liveDisabled: true,
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: FaCode,
    items: ["React JS", "Next JS", "TypeScript", "Tailwind CSS", "DaisyUI", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: FaServer,
    items: ["Node.js", "Express.js", "MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: FaGithub,
    items: ["Git & GitHub", "Postman", "Figma"],
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

