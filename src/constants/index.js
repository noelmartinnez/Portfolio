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
    title: "Acerca de mí",
  },
  {
    id: "experiencia",
    title: "Experiencia",
  },
  {
    id: "titulos",
    title: "Títulos",
    dropdown: [
      {
        id: "certificados",
        title: "· Certificados",
      },
      {
        id: "idiomas",
        title: "· Idiomas",
      },
    ],
  },
  {
    id: "proyectos",
    title: "Proyectos",
  },
  {
    id: "contacto",
    title: "Contacto",
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
    name: "AWS",
    icon: aws,
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
    name: "Node.js",
    icon: node,
  },
  {
    name: "Python",
    icon: python,
    
  },
  {
    name: "Apache Kafka",
    icon: kafka,
    
  },
  {
    name: "Camunda",
    icon: camunda,
  },
    {
    name: "Jenkins",
    icon: jenkins,
  },
    {
    name: "Argo CD",
    icon: argocd,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Fundamentia Business Consulting, S.L.",
    icon: fundamentia,
    iconBg: "#383E56",
    date: "Marzo 2025 - Actualidad",
    points: [
      "Diseño e implementación de microservicios con Java (v17) y Spring Boot.", 
      "Automatización de pruebas y flujos web con Selenium y Puppeteer (Node.js).",
      "Validación de escenarios (+1000 pruebas) con reporting (Allure Report + Mocha).",
      "Integración de Apache Kafka como sistema de mensajería para flujos internos.",
      "Contenerización con Docker para entornos de desarrollo y despliegue.",
      "Uso de expresiones regulares (RegEx) para la extracción de datos estructurados.",
    ],
  },
  {
    title: "Backend & Infrastructure Engineer",
    company_name: "Altia Consultores, S.A.",
    icon: altia,
    iconBg: "#383E56",
    date: "Septiembre 2024 - Marzo 2025",
    points: [
      "Diseño y desarrollo de arquitectura de microservicios en Java (v17) y Spring Boot.",
      "Despliegue y orquestación de contenedores Docker en clústeres de Kubernetes.",
      "Modelado e integración de procesos de negocio (BPM) con Camunda.",
      "Automatización de pipelines CI/CD con Jenkins, Harbor y Argo CD.",
      "Implementación de pruebas unitarias con Mockito y JUnit",
    ],
  },
];

const projects = [
  {
    name: "Connect Four AI",
    description:
      "He desarrollado un algoritmo de inteligencia artificial para jugar a Conecta 4, utilizando técnicas clásicas de búsqueda adversarial. El motor de decisión se basa en el algoritmo MinMax optimizado mediante poda Alpha-Beta.",
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
      "Aplicación desarrollada con Ionic Framework y AngularJS que actúa como una enciclopedia interactiva del universo Star Wars. La app consume una API REST externa para obtener datos sobre personajes, planetas, naves y películas, que se presentan en una interfaz móvil responsive.",
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
      "Aplicación web multiplataforma inspirada en el modelo de negocio de Airbnb, pero centrada en vehículos. La plataforma permite tanto a usuarios como a propietarios gestionar de forma sencilla el proceso de alquiler de coches, motos u otros vehículos, de manera flexible y autogestionada.",
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
      "Demostrando habilidades para implementar estrategias fundamentales de programación en JavaScript, conforme a los estándares y prácticas recomendadas de la industria.",
    image: js,
    source_code_link: "https://drive.google.com/file/d/1ToVp3kXaBW32h7LiACkwTNXomqq5mf3E/view?usp=sharing",
  },
  {
    name: "Jenkins",
    description:
      "Validando habilidades en la configuración y administración de Jenkins, herramienta de integración continua y entrega continua (CI/CD), para automatizar procesos de desarrollo y despliegue.",
    image: diploma_jenkins,
    source_code_link: "https://drive.google.com/file/d/1khS0DbdeQ73pGXkQ4x4m86L-P4C2nVIm/view?usp=sharing",
  },
];

const idiomas = [
  {
    name: "English - B1 (Trinity)",
    description:
      "Este idioma refleja el nivel de competencia alcanzado gracias a mi dedicación y esfuerzo, lo que me permite comunicarme eficazmente en diversas situaciones.",
    image: english,
    source_code_link: "https://drive.google.com/file/d/1EPXq2uUIQjOEHVtYS5Qlg2KIqLFD8fXT/view?usp=sharing",
  },
  {
    name: "Valenciano - C1",
    description:
      "Este idioma refleja el nivel de competencia alcanzado gracias a mi dedicación y esfuerzo, lo que me permite comunicarme eficazmente en diversas situaciones.",
    image: valenciano,
    source_code_link: "https://drive.google.com/file/d/1QExdkF5w5sFMJKeogAygoR8o63DvqmFM/view?usp=sharing",
  },
];

export { technologies, experiences, projects, certificados, idiomas };
