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
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "Three JS",
    icon: threejs,
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
    name: "Spring Boot",
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
    name: "Imperial Commander",
    description:
      "Juego estilo naves espaciales donde cada una de ellas tiene su tripulación, hay grupos de naves, también hay enemigos, batallas entre naves, etc.",
    tags: [
      {
        name: "java",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/noelmartinnez/Imperial-Commander",
  },
  {
    name: "Project Management Web APP with PHP",
    description:
      "App web desarrollada en Linux usando PHP y con la ayuda de Laravel. Consiste en una página web con diferentes roles de usuarios, diferentes vistas, inicio de sesión, registro. Su función es el manejo de proyectos dentron de una empresa, los proyectos tienen tareas, y las tareas tienen issues (problemas).",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/noelmartinnez/Project-Management-Web-APP-with-PHP",
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
