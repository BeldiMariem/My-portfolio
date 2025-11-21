export interface Experience {
  id: number;
  company: string;
  logo: string;
  position: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  projectContext?: string;
}

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 1,
    company: "Airbus",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Airbus-Symbol.png",
    position: "Full-Stack Development Engineer Intern",
    period: "March 2024 - September 2024",
    location: "Toulouse, France",
    type: "Final-Year Project",
    description: "Developed a web application for managing electrical studies to validate and certify new avionics functionalities.",
    projectContext: "Full-Stack Web Application",
    achievements: [
      "Contributed to code reviews.",
      "Conducted unit tests using JUnit",
      "Conducted end- to - end tests using Cypress.",
      "Set up a CI / CD pipeline.",
    ],
    technologies: ["Angular 17", "Spring Boot 3", "PostgreSQL", "Docker", "Jenkins", "OpenAPI", "JUnit 5", "JFrog Artifactory", "OpenAPI"]
  },
  {
    id: 2,
    company: "Berico Digital Studio",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3VHlNOX_qHOcYLeR5VrTAg7RACz5CpwWytw&s",
    position: "Full-Stack Development Engineer Intern",
    period: "July 2023 - September 2023",
    location: "Tunis, Tunisia",
    type: "Software Development Internship",
    description: "Developed cutting-edge CRM solutions for enterprise clients, focusing on customer engagement and business process automation.",
    projectContext: "Enterprise Customer Relationship Management Platform",
    achievements: [
      "Built responsive CRM dashboard serving 10,000+ monthly active users with 99.8% uptime",
      "Implemented real-time analytics and reporting features processing 1M+ data points daily",
      "Reduced page load time by 60% through code splitting and lazy loading strategies",
      "Integrated 5+ third-party APIs including payment gateways and communication services",
      "Developed comprehensive test suite achieving 85% code coverage across frontend and backend"
    ],
    technologies: ["Vue.js", "Node.js", "MongoDB", "Docker", "AWS", "Jest", "Swagger", "Socket.io", "Redis"]
  },
  {
    id: 3,
    company: "InnoSquare",
    logo: "https://www.asphalte-design.ch/sites/default/files/styles/logo/public/logo/asphalte-design_innosquare_logo.png?itok=H1F3Qa68",
    position: "Full-Stack Development Engineer Intern",
    period: "July 2022 - September 2022",
    location: "Tunis, Tunisia",
    type: "Startup Internship",
    description: "Accelerated e-commerce platform development in a fast-paced startup environment, focusing on scalability and user experience.",
    projectContext: "E-commerce Platform Shopping Cart Enhancement",
    achievements: [
      "Developed shopping cart processor handling 5,000+ concurrent transactions during peak loads",
      "Implemented microservices architecture reducing system coupling and improving maintainability",
      "Enhanced checkout conversion rate by 25% through optimized user flow and performance improvements",
      "Built service discovery system improving inter-service communication reliability by 40%",
      "Created automated deployment pipeline reducing manual intervention by 90%"
    ],
    technologies: ["Angular", "Spring Boot", "MySQL", "Docker", "Jenkins", "Microservices", "OAuth2", "JWT"]
  },
  {
    id: 4,
    company: "Naxxum Group",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0yTDHI_m6zt8RdPoEe_-IP5Gjh7xDlZaZ_w&s",
    position: "Full-Stack Development Intern",
    period: "February 2020 - August 2020",
    location: "Tunis, Tunisia",
    type: "First Professional Experience",
    description: "Built enterprise time management solutions integrating AI capabilities to optimize workforce productivity and resource allocation.",
    projectContext: "AI-Powered Time Management & Resource Allocation System",
    achievements: [
      "Developed time tracking system managing 500+ employee schedules across multiple departments",
      "Integrated AI-based prediction algorithms improving resource allocation accuracy by 35%",
      "Reduced manual time entry errors by 80% through automated tracking and validation",
      "Implemented real-time reporting dashboard providing instant insights to management",
      "Established code review culture improving code quality and team collaboration"
    ],
    technologies: ["Vue.js", "ASP.NET Core", "MongoDB", "Azure DevOps", "Swagger", "TensorFlow.js", "Chart.js"]
  }
];