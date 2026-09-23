import {
  java,
  python,
  js,
  docker,
  spring,
  altia,
  kubernetes,
  diploma_jenkins,
  anthropic_ai_fluency,
  fundamentia,
  kafka,
  node,
  UA,
  esencia,
  anabelperez,
} from "../assets";

// Nav links: `id` = section anchor; `titleKey` points at the translated label.
export const navLinks = [
  {
    id: "experience",
    titleKey: "nav.experience",
  },
  {
    id: "skills",
    titleKey: "nav.skills",
  },
  {
    id: "demos",
    titleKey: "nav.demos",
  },
  {
    id: "proyects",
    titleKey: "nav.proyects",
  },
  {
    id: "freelance",
    titleKey: "nav.freelance",
  },
  {
    id: "formacion",
    titleKey: "nav.formacion",
  },
  {
    id: "contact",
    titleKey: "nav.contact",
  },
];

// Core stack shown as 3D balls (names not translated).
const technologies = [
  { name: "Java", icon: java },
  { name: "Spring Boot", icon: spring },
  { name: "Python", icon: python },
  { name: "Node.js", icon: node },
  { name: "Kafka", icon: kafka },
  { name: "Docker", icon: docker },
  { name: "Kubernetes", icon: kubernetes },
];

// Invariant bases (icons/images/links). Translated text lives in src/i18n/data.js
// keyed by the same `id`; LanguageContext zips them together.
const experiencesBase = [
  // logoWordmark: el logo es una palabra pequeña sobre mucho blanco; se amplía
  // dentro de la misma caja cuadrada que el resto.
  { id: "fundamentia", icon: fundamentia, iconBg: "#ffffff", logoWordmark: true },
  { id: "altia", icon: altia, iconBg: "#383E56" },
];

const projectsBase = [
  // Los proyectos del CV van primero.
  {
    id: "imgtwin",
    tags: [
      { name: "python" },
      { name: "tensorflow" },
      { name: "faiss" },
    ],
    source_code_link: "https://github.com/noelmartinnez/ImgTwin",
  },
  {
    id: "autobnb",
    tags: [
      { name: "java" },
      { name: "springboot" },
      { name: "hibernate" },
    ],
    source_code_link: "https://github.com/noelmartinnez/AutoBnB",
  },
  {
    id: "connect4",
    tags: [{ name: "python" }],
    source_code_link: "https://github.com/noelmartinnez/Connect-Four-AI-with-Python",
  },
  {
    id: "starwars",
    tags: [
      { name: "ionic" },
      { name: "angular" },
    ],
    source_code_link: "https://github.com/noelmartinnez/StarWars-Ionic-APP",
  },
  {
    id: "mnist",
    tags: [
      { name: "python" },
      { name: "deeplearning" },
    ],
    source_code_link: "https://github.com/noelmartinnez/MNIST-with-Python",
  },
  {
    id: "backprop",
    tags: [
      { name: "python" },
      { name: "neuralnetworks" },
    ],
    source_code_link: "https://github.com/noelmartinnez/Backpropagation-with-Python",
  },
];

const certificadosBase = [
  {
    id: "aifluency",
    image: anthropic_ai_fluency,
    source_code_link: "https://verify.skilljar.com/c/enfv9mgx7orz",
  },
  {
    id: "js",
    image: js,
    source_code_link: "https://drive.google.com/file/d/1ToVp3kXaBW32h7LiACkwTNXomqq5mf3E/view?usp=sharing",
  },
  {
    id: "jenkins",
    image: diploma_jenkins,
    source_code_link: "https://drive.google.com/file/d/1khS0DbdeQ73pGXkQ4x4m86L-P4C2nVIm/view?usp=sharing",
  },
];

// Webs desarrolladas para clientes como trabajo freelance.
const freelanceBase = [
  {
    id: "esencia",
    image: esencia,
    live_link: "https://bellezaconesencia.es/",
  },
  {
    id: "anabelperez",
    image: anabelperez,
    live_link: "https://anabelperez.vercel.app/",
  },
];

const idiomasBase = [
  { id: "spanish" },
  {
    id: "english",
    source_code_link: "https://drive.google.com/file/d/1EPXq2uUIQjOEHVtYS5Qlg2KIqLFD8fXT/view?usp=sharing",
  },
  {
    id: "valenciano",
    source_code_link: "https://drive.google.com/file/d/1QExdkF5w5sFMJKeogAygoR8o63DvqmFM/view?usp=sharing",
  },
];

const educacionBase = [{ id: "ua", image: UA }];

// Real-time demos: invariant metadata only. Title/concept/ui text live in
// src/i18n/data.js keyed by the same `id`; `file` is the path shown in the window bar.
const demosBase = [
  { id: "ner", widgetKey: "ner", file: "privacyshield/ner.demo", accent: "#915eff" },
  { id: "tokenizer", widgetKey: "tokenizer", file: "playground/tokenizer.demo", accent: "#a78bfa" },
];

// Full skill set shown as category badges (tech names not translated; category titles are).
const skillsBase = [
  { id: "languages", skills: ["Java", "Python", "JavaScript (Node.js)", "SQL"] },
  { id: "backend", skills: ["Spring Boot", "Spring Cloud", "Spring Security", "Hibernate", "Camunda (BPM)", "REST APIs", "Microservices"] },
  { id: "data", skills: ["Kafka", "MySQL", "PostgreSQL", "Oracle"] },
  { id: "ai", skills: ["Spring AI", "Azure AI Foundry", "vLLM", "Prompt Engineering", "NER", "PyTorch", "Hugging Face"] },
  { id: "devops", skills: ["Docker", "Kubernetes", "Jenkins", "Harbor", "Argo CD", "JUnit", "Mockito", "Selenium", "Puppeteer"] },
];

export {
  technologies,
  experiencesBase,
  projectsBase,
  certificadosBase,
  freelanceBase,
  idiomasBase,
  educacionBase,
  skillsBase,
  demosBase,
};
