export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  liveUrl: string;
  githubUrl?: string;
  features: string[];
  technologies: string[];
  badge: string;
  category: string;
  architecture?: string;
  challenges?: string[];
  solutions?: string[];
  demoCredentials?: {
    username: string;
    password: string;
  };
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "📝 ToDo List App",
    subtitle: "Angular & Spring Boot • AWS Deployment",
    description: "A modern, collaborative Todo List application, built with Angular and Spring Boot, deployed on AWS cloud infrastructure.",
    fullDescription: `A comprehensive full-stack Todo application built with modern web technologies. Features real-time collaboration, team boards, calendar integration, and multiple authentication methods including Google OAuth. The application is deployed on AWS using ECS Fargate, RDS PostgreSQL, and Application Load Balancer for high availability and scalability.

• Backend: Spring Boot 3 with Java 21, JUnit 5 unit tests, Mockito
• Frontend: Angular 20 with Jasmine/Karma unit tests, Protractor e2e tests
• DevOps: Docker Compose for local development, Docker Hub for images, Jenkins CI/CD
• Database: PostgreSQL with integration tests using TestContainers
• Security: JWT authentication with Spring Security tests`,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    liveUrl: "http://todo-app-alb-911217416.us-east-1.elb.amazonaws.com",
    githubUrl: "https://github.com/BeldiMariem",
    badge: "Full Stack",
    category: "web",
    architecture: `
      - Frontend: Angular 20.1 with Material UI, deployed on ECS Fargate
      - Backend: Spring Boot 3 with Java21 and WebSocket support
      - Database: PostgreSQL on AWS RDS
      - Authentication: JWT + OAuth2 with Google
      - Testing: JUnit 5 backend tests, Jasmine/Karma frontend tests
      - Containerization: Docker Compose, Docker Hub images
      - CI/CD: Jenkins pipeline with automated testing
      - Deployment: AWS ECS, ALB, VPC with public/private subnets, Auto-scaling
    `,
    challenges: [
      "Implementing real-time updates across multiple clients",
      "Managing concurrent user sessions in collaborative boards",
      "Writing comprehensive unit tests for WebSocket functionality",
      "Setting up Docker multi-container environment with Compose"
    ],
    solutions: [
      "Used WebSocket/STOMP for real-time notifications and updates",
      "Implemented optimistic UI updates with conflict resolution",
      "Created JUnit tests with WebSocketTestClient and MockMvc",
      "Used Docker Compose to manage frontend, backend, and database services"
    ],
    demoCredentials: {
      username: "mariemBeldi",
      password: "Password..20"
    },
    features: [
      "Real-time Notifications",
      "Team Collaboration", 
      "Calendar Integration",
      "Google OAuth",
      "AWS ECS Fargate",
      "WebSocket Communication",
      "Unit Testing Coverage",
      "Docker Containerization"
    ],
    technologies: ["Angular20+", "Spring Boot with Java21", "PostgreSQL", "AWS", "Docker", "Docker Compose", "Docker Hub", "JUnit", "Jasmine", "WebSocket", "Jenkins", "OAuth2"]
  },
  {
    id: 2,
    title: "🔗 URL Shortener",
    subtitle: "React & Node.js • Render Deployment", 
    description: "A complete URL Shortener application with React frontend, Node.js/Express backend, and MongoDB Atlas, featuring clean architecture and comprehensive testing.",
    fullDescription: `Shorty is a full-stack URL shortening service built with React and Node.js, following clean architecture principles. The application includes user authentication, admin dashboard, URL analytics, and integration with Google Custom Search API.

• Backend: Node.js/Express with Jest unit tests, Supertest for API testing
• Frontend: React 19 with React Testing Library, Jest unit tests
• DevOps: Docker Compose for local setup, Docker Hub for container images
• Database: MongoDB with integration tests using MongoDB Memory Server
• E2E Testing: Cypress for complete user journey testing`,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    liveUrl: "https://shortyapp.onrender.com",
    githubUrl: "https://github.com/BeldiMariem",
    badge: "Full Stack",
    category: "web",
    architecture: `
      - Frontend: React 19 with Bootstrap, responsive design
      - Backend: Node.js/Express with Clean Architecture
      - Database: MongoDB Atlas with Mongoose ODM
      - Authentication: JWT with secure session management
      - Testing: Jest backend tests, React Testing Library frontend tests
      - Containerization: Docker Compose, Docker Hub deployment
      - E2E Testing: Cypress for complete workflow testing
      - Search: Google Custom Search API integration
    `,
    challenges: [
      "Implementing clean architecture in Node.js with proper testing",
      "Setting up Docker multi-container environment",
      "Writing comprehensive unit tests for URL shortening logic",
      "Managing frontend and backend testing in CI/CD pipeline"
    ],
    solutions: [
      "Separated concerns into domain, use cases, infrastructure layers with testable units",
      "Used Docker Compose to orchestrate React, Node.js, and MongoDB services",
      "Created Jest tests for business logic and API endpoints",
      "Configured Jenkins to run both frontend and backend test suites"
    ],
    features: [
      "URL Shortening",
      "User Authentication",
      "Admin Dashboard",
      "Google Search",
      "Clean Architecture",
      "URL Analytics",
      "Unit Testing",
      "Docker Deployment"
    ],
    technologies: ["React19", "Node.js", "ExpressJs", "MongoDB", "JWT", "Docker", "Docker Compose", "Docker Hub", "Jenkins", "Nexus", "Jest", "React Testing Library", "Cypress"]
  },
  {
    id: 3,
    title: "💬 Real-Time Chat",
    subtitle: "Vue & Go • Fly.io Deployment",
    description: "A real-time chat application built with Go backend, Vue.js frontend, and Firebase Firestore. Features clean architecture and gRPC-Web communication.",
    fullDescription: `A real-time chat application exploring modern backend development with Go. Features multiple chat rooms, user authentication with Firebase, and real-time messaging using gRPC-Web for efficient client-server communication.

• Backend: Go 1.24 with native testing package, testify for assertions
• Frontend: Vue.js 3 with Vitest unit tests, Vue Test Utils
• DevOps: Docker Compose for development, Docker Hub for production images
• Real-time: gRPC-Web with protocol buffers, WebSocket fallback
• E2E Testing: Playwright for complete chat functionality testing`,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop", 
    liveUrl: "https://chat-app-real-time.fly.dev",
    githubUrl: "https://github.com/BeldiMariem",
    badge: "Real-time",
    category: "web",
    architecture: `
      - Frontend: Vue.js 3 with Composition API, Vitest unit tests
      - Backend: Go 1.24 with gRPC-Web protocol, native Go tests
      - Database: Firebase Firestore for real-time data
      - Authentication: Firebase Authentication
      - Testing: Go testing package, Vitest frontend tests
      - Containerization: Docker Compose, Docker Hub images
      - Communication: gRPC-Web for efficient RPC
      - E2E Testing: Playwright for user workflows
    `,
    challenges: [
      "Learning Go testing patterns and best practices",
      "Setting up Docker environment for Go and Vue.js",
      "Writing tests for real-time gRPC-Web functionality",
      "Managing frontend state testing with Vue 3 Composition API"
    ],
    solutions: [
      "Studied Go testing patterns with table-driven tests and mocks",
      "Used Docker Compose to manage Go backend and Vue frontend services",
      "Created comprehensive test suites for gRPC handlers and services",
      "Implemented Vue composables with testable reactive state"
    ],
    features: [
      "Real-time Messaging",
      "Multiple Rooms", 
      "Firebase Auth",
      "gRPC-Web",
      "Unit Testing",
      "Docker Deployment",
      "Clean Architecture",
      "Responsive Design"
    ],
    technologies: ["Vue3", "Go1.24+", "Firebase", "gRPC", "Docker", "Docker Compose", "Docker Hub", "Vitest", "Go Testing", "Playwright", "Protocol Buffers"]
  }
];