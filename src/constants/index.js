import {
  javascript,
  reactjs,
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
  cpp,
  diploma_jenkins,
  fundamentia,
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
    name: "React",
    icon: reactjs,
  },
  {
    name: "C++",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Fundamentia Business Consulting, S.L.",
    icon: fundamentia,
    iconBg: "#383E56",
    date: "Marzo 2025 - Actualidad",
    points: [
      "Desarrollo y mantenimiento de módulos de extracción de datos con Java 17 en proyectos sensibles.",
      "Mejora del código con Python, expresiones regulares y SonarQube.",
      "Cumplimiento de estrictos protocolos de seguridad y confidencialidad.",
    ],
  },
  {
    title: "Backend & Infrastructure Engineer",
    company_name: "Altia Consultores, S.A.",
    icon: altia,
    iconBg: "#383E56",
    date: "Septiembre 2024 - Marzo 2025",
    points: [
      "Gestión y desarrollo de arquitectura de microservicios basada en Java / Spring Boot.",
      "Despliegue de aplicaciones en contenedores Docker sobre Kubernetes.",
      "Gestión de procesos de negocio (BMP) utilizando Camunda.",
      "Gestión de procesos de CI/CD con Jenkins, Harbor y Argo.",
    ],
  },
];

const projects = [
  {
    name: "Connect Four AI",
    description:
      "He desarrollado un algoritmo de búsqueda para el juego Conecta-4. El algoritmo de busqueda implementado es el algoritmo MinMax junto a la poda de decisiones Alpha-Beta.",
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
      "Se trata de una aplicación para consultar datos sobre el mundo de Star Wars, una especie de Wikipedia.",
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
      "Aplicación multiplataforma de Java y Spring Boot. La aplicación permite a los usuarios alquilar vehículos. Por otro lado, al igual que en Airbnb, donde los usuarios ponen en alquiler sus propios hogares, aquí los propietarios de los vehículos pueden poner sus vehículos en alquiler.",
    tags: [
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "java",
        color: "blue-text-gradient",
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
    name: "Programador JavaScript",
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
    name: "English B1 Trinity",
    description:
      "Este idioma refleja el nivel de competencia alcanzado gracias a mi dedicación y esfuerzo, lo que me permite comunicarme eficazmente en diversas situaciones.",
    image: english,
    source_code_link: "https://drive.google.com/file/d/1EPXq2uUIQjOEHVtYS5Qlg2KIqLFD8fXT/view?usp=sharing",
  },
  {
    name: "Valenciano C1",
    description:
      "Este idioma refleja el nivel de competencia alcanzado gracias a mi dedicación y esfuerzo, lo que me permite comunicarme eficazmente en diversas situaciones.",
    image: valenciano,
    source_code_link: "https://drive.google.com/file/d/1QExdkF5w5sFMJKeogAygoR8o63DvqmFM/view?usp=sharing",
  },
];

export { technologies, experiences, projects, certificados, idiomas };
