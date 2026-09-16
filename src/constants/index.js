import {
  java,
  js,
  docker,
  spring,
  springai,
  altia,
  kubernetes,
  diploma_jenkins,
  anthropic_ai_fluency,
  anthropic_logo,
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
  { name: "Spring AI", icon: springai },
  { name: "Node.js", icon: node },
  { name: "Kafka", icon: kafka },
  { name: "Docker", icon: docker },
  { name: "Kubernetes", icon: kubernetes },
];

// Invariant bases (icons/images/links). Translated text lives in src/i18n/data.js
// keyed by the same `id`; LanguageContext zips them together.
const experiencesBase = [
  { id: "fundamentia", icon: fundamentia, iconBg: "#383E56" },
  { id: "altia", icon: altia, iconBg: "#383E56" },
];

const projectsBase = [
  {
    id: "connect4",
    tags: [{ name: "python", color: "blue-text-gradient" }],
    source_code_link: "https://github.com/noelmartinnez/Connect-Four-AI-with-Python",
  },
  {
    id: "starwars",
    tags: [
      { name: "ionic", color: "green-text-gradient" },
      { name: "angular", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/noelmartinnez/StarWars-Ionic-APP",
  },
  {
    id: "autobnb",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "springboot", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/noelmartinnez/AutoBnB",
  },
  {
    id: "mnist",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "deeplearning", color: "green-text-gradient" },
    ],
    source_code_link: "https://github.com/noelmartinnez/MNIST-with-Python",
  },
  {
    id: "backprop",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "neuralnetworks", color: "green-text-gradient" },
    ],
    source_code_link: "https://github.com/noelmartinnez/Backpropagation-with-Python",
  },
  {
    id: "imgtwin",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "tensorflow", color: "green-text-gradient" },
      { name: "faiss", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/noelmartinnez/ImgTwin",
  },
];

const certificadosBase = [
  {
    id: "aifluency",
    image: anthropic_ai_fluency,
    link_icon: anthropic_logo,
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

// Real-time demos: invariant metadata only. Title/subtitle/concept/ui text live in
// src/i18n/data.js keyed by the same `id`; widget positions/vectors live in
// src/components/demos/lib (also invariant, so switching language never remounts WebGL).
const demosBase = [
  { id: "ner", category: "nlp", widgetKey: "ner", accent: "#915eff" },
  { id: "rag", category: "llm", widgetKey: "rag", accent: "#c084fc" },
  { id: "tokenizer", category: "llm", widgetKey: "tokenizer", accent: "#a78bfa" },
];

// Full skill set shown as category badges (tech names not translated; category titles are).
const skillsBase = [
  { id: "ai", skills: ["Spring AI", "Azure AI Foundry", "LLMs", "Prompt Engineering", "NER", "Python", "PyTorch", "Hugging Face"] },
  { id: "backend", skills: ["Java", "Spring Boot", "Spring Framework", "Spring Security", "Spring Cloud", "REST APIs", "Microservices"] },
  { id: "data", skills: ["Kafka", "MySQL", "PostgreSQL", "Oracle", "XML/JSON"] },
  { id: "devops", skills: ["Docker", "Kubernetes", "Jenkins", "Harbor", "Argo CD", "JUnit", "Mockito"] },
  { id: "automation", skills: ["RPA", "Node.js", "Selenium", "Puppeteer", "Camunda"] },
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
