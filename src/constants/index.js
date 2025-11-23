import {
  javascript,
  python,
  java,
  carrent,
  js,
  docker,
  spring,
  node,
  about,
  coche,
  altia,
  valenciano,
  english,
  kubernetes,
  diploma_jenkins,
  fundamentia,
  aws,
  argocd,
  camunda,
  jenkins,
  kafka,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About me",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "titles",
    title: "Titles",
    dropdown: [
      {
        id: "certificates",
        title: "· Certificates",
      },
      {
        id: "languages",
        title: "· Languages",
      },
    ],
  },
  {
    id: "proyects",
    title: "Proyects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Camunda",
    icon: camunda,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Fundamentia Business Consulting, S.L.",
    icon: fundamentia,
    iconBg: "#383E56",
    date: "March 2025 - Present",
    points: [
      "Design and implementation of Java and Spring Boot microservices.",
      "Complete migration of a Java project from version 8 to 17.",
      "Processing, analysis, and transformation of XML/JSON data.",
      "Integration of Apache Kafka and optimization of MySQL persistence.",
      "Application of RegEx for structured data extraction, cleaning, and normalization.",
      "Fine-tuning NER models using Python, PyTorch, and HuggingFace.",
      "Corpus preparation and automated data extraction using Label Studio.",
      "Experiment tracking, model versioning, and metric analysis with MLflow.",
      "Data versioning and lineage management using lakeFS.",
      "Development of web automation and scraping tools with JavaScript, Selenium, and Puppeteer."
    ],
  },
  {
    title: "Backend & Infrastructure Engineer",
    company_name: "Altia Consultores, S.A.",
    icon: altia,
    iconBg: "#383E56",
    date: "September 2024 - March 2025",
    points: [
      "Development of microservice architectures using Java, Spring Boot, and Spring Cloud.",
      "Creation of RESTful APIs, including controllers, services, and DTOs.",
      "Integration of relational databases (PostgreSQL and Oracle Database).",
      "Use of Postman for designing, testing, and validating REST endpoints.",
      "Deployment and orchestration of Docker containers in Kubernetes production clusters.",
      "Modeling and integration of business processes (BPM) with Camunda.",
      "Creation and maintenance of CI/CD pipelines with Jenkins, Harbor, and Argo CD.",
      "Development of unit and integration tests with Mockito and JUnit."
    ],
  },
];

const projects = [
  {
    name: "Connect Four AI",
    description:
      "I have developed an artificial intelligence algorithm to play Connect 4, using classic adversarial search techniques. The decision engine is based on the MinMax algorithm optimised using Alpha-Beta pruning.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/noelmartinnez/Connect-Four-AI-with-Python",
  },
  {
    name: "StarWars APP",
    description:
      "Application developed with Ionic Framework and AngularJS that acts as an interactive encyclopaedia of the Star Wars universe. The app uses an external REST API to obtain data on characters, planets, ships and films, which are presented in a responsive mobile interface.",
    tags: [
      {
        name: "ionic",
        color: "green-text-gradient",
      },
      {
        name: "angular",
        color: "pink-text-gradient",
      },
    ],
    image: about,
    source_code_link: "https://github.com/noelmartinnez/StarWars-Ionic-APP",
  },
  {
    name: "AutoBnB",
    description:
      "A multi-platform web application inspired by the Airbnb business model, but focused on vehicles. The platform allows both users and owners to easily manage the process of renting cars, motorcycles, or other vehicles in a flexible and self-managed way.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: coche,
    source_code_link: "https://github.com/noelmartinnez/AutoBnB",
  },
];

const certificados = [
  {
    name: "JavaScript",
    description:
      "Demonstrating skills in implementing fundamental programming strategies in JavaScript, in accordance with industry standards and best practices.",
    image: js,
    source_code_link: "https://drive.google.com/file/d/1ToVp3kXaBW32h7LiACkwTNXomqq5mf3E/view?usp=sharing",
  },
  {
    name: "Jenkins",
    description:
      "Validating skills in the configuration and administration of Jenkins, a continuous integration and continuous delivery (CI/CD) tool, to automate development and deployment processes.",
    image: diploma_jenkins,
    source_code_link: "https://drive.google.com/file/d/1khS0DbdeQ73pGXkQ4x4m86L-P4C2nVIm/view?usp=sharing",
  },
];

const idiomas = [
  {
    name: "English - B1 (Trinity)",
    description:
      "This language reflects the level of proficiency I have achieved through my dedication and effort, enabling me to communicate effectively in a variety of situations.",
    image: english,
    source_code_link: "https://drive.google.com/file/d/1EPXq2uUIQjOEHVtYS5Qlg2KIqLFD8fXT/view?usp=sharing",
  },
  {
    name: "Valenciano - C1",
    description:
      "This language reflects the level of proficiency I have achieved through my dedication and effort, enabling me to communicate effectively in a variety of situations.",
    image: valenciano,
    source_code_link: "https://drive.google.com/file/d/1QExdkF5w5sFMJKeogAygoR8o63DvqmFM/view?usp=sharing",
  },
];

export { technologies, experiences, projects, certificados, idiomas };
