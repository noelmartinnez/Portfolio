import { t } from "maath/dist/misc-7d870b3c.esm";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  //swift,
  cs,
  python,
  java,
  aws,
  php,
  sql,
  //matlab,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  comunicamos,
  seo,
  js,
  docker,
  spring,
  typeScript,
  node,
  ionic,
  about,
  coche,
} from "../assets";

/* Para los botones del NavBar */
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
    id: "certificados",
    title: "Certificados",
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

/* Para las tarjetas del About */
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typeScript,
  },
  {
    name: "Node.js",
    icon: node,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Ionic",
    icon: ionic,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "C C++ C#",
    icon: cs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Spring",
    icon: spring,
  },
];

const experiences = [
  {
    title: "Gestor de SEO y Desarrollador Web con Elementor",
    company_name: "Comunicamos Experience",
    icon: comunicamos,
    iconBg: "#383E56",
    date: "Julio 2023 - Agosto 2023",
    points: [
      "Diseño y maquetación web utilizando Elementor",
      "Optimización web y Diseño responsive",
      "Investigación de palabras clave relevantes",
      "Optimización para una mejor posición en los motores de búsqueda",
    ],
  },
  /* Con ir añadiendo aquí la */
  /* {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }, */
];

const projects = [
  {
    name: "Connect Four AI Python",
    description:
      "En este código se ha desarrollado un algoritmo de búsqueda en juegos para el juego Conecta-4. El algoritmo de busqueda que se ha implementado es el algoritmo MinMax junto a la poda de decisiones Alpha-Beta.",
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
    name: "StarWars Ionic APP",
    description:
      "Se trata de una aplicación para consultar datos sobre el mundo de Star Wars, una especie de wikipedia.",
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
        name: "spring",
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
    name: "Optimización SEO Básica",
    description:
      "Cumpliendo con las competencias para ejecutar estrategias básicas/intermedias de optimización SEO.",
    image: seo,
    source_code_link: "https://drive.google.com/file/d/1CrLxogiIgwwyfJIJra0Ox_7yqM7Jorux/view?usp=sharing",
  },
  {
    name: "Programador JavaScript",
    description:
      "Demostrando habilidades para implementar estrategias fundamentales de programación en JavaScript, conforme a los estándares y prácticas recomendadas de la industria.",
    image: js,
    source_code_link: "https://drive.google.com/file/d/1ToVp3kXaBW32h7LiACkwTNXomqq5mf3E/view?usp=sharing",
  },
];

export { services, technologies, experiences, projects, certificados };
