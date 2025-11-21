export interface SkillCategory {
  id: number;
  name: string;
  icon: string;
  skills: string[];
}

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 1,
    name: "Programming Languages",
    icon: "fas fa-code",
    skills: ["Java", "TypeScript", "JavaScript", "Go", "C#"]
  },
  {
    id: 2,
    name: "Backend Frameworks",
    icon: "fas fa-server",
    skills: ["Spring Boot", "Express.js", ".NET", "Symfony"]
  },
  {
    id: 3,
    name: "Frontend Frameworks",
    icon: "fas fa-desktop",
    skills: ["Angular", "React", "Vue.js"]
  },
  {
    id: 4,
    name: "Databases",
    icon: "fas fa-database",
    skills: ["PostgreSQL", "MongoDB", "MySQL"]
  },
  {
    id: 5,
    name: "Cloud & DevOps",
    icon: "fas fa-cloud",
    skills: ["AWS", "Docker", "Jenkins", "Artifactory", "Azure DevOps"]
  },
  {
    id: 6,
    name: "Modeling Tools",
    icon: "fas fa-project-diagram",
    skills: ["UML"]
  }
];