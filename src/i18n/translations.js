// UI "chrome" strings per language. Keys must match across `en` and `es`.
// Array content (experiences, projects, skills…) lives in ./data.js.

const CV_URL_ES =
  "https://drive.google.com/file/d/1qX2S9phtCmry6eF_hGpD5RKaWAVC6OIU/view?usp=sharing";
const CV_URL_EN =
  "https://drive.google.com/file/d/1WELpLhilwe4-W1kQRlDWLZ-KN5TFEtzE/view?usp=sharing";

export const translations = {
  en: {
    meta: { cvUrl: CV_URL_EN },
    nav: {
      experience: "Experience",
      skills: "Skills",
      demos: "Demos",
      proyects: "Proyects",
      freelance: "Freelance",
      formacion: "Background",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Noel",
      roleLine1: "Backend Software Engineer",
      roleLine2: "specialising in AI/LLMs",
      ctaCv: "Download CV",
      paragraph: [
        { text: "I take " },
        { text: "AI/LLMs", bold: true },
        { text: " to production in corporate and regulated environments. I design backend architectures with " },
        { text: "Java", bold: true },
        { text: ", " },
        { text: "Spring Boot", bold: true },
        { text: ", and " },
        { text: "microservices", bold: true },
        { text: ", integrating language models (" },
        { text: "Spring AI", bold: true },
        { text: ", " },
        { text: "Azure AI Foundry", bold: true },
        { text: ") with measurable results." },
      ],
    },
    experience: {
      subtitle: "What have I done so far?",
      title: "Work Experience",
    },
    skills: {
      subtitle: "What I work with",
      title: "Skills",
    },
    demos: {
      subtitle: "See it live",
      title: "Real-time Demos",
      categories: { nlp: "NLP", llm: "LLM" },
      tryLabel: "Try demo",
      hideLabel: "Hide demo",
    },
    freelance: {
      subtitle: "Client work",
      title: "Freelance",
      paragraph:
        "Alongside my main job I design and build websites for real clients, taking care of everything from the design and the copy to the deployment and the ongoing maintenance.",
      viewSite: "Visit site",
    },
    formacion: {
      subtitle: "Where I come from",
      title: "Education & Training",
    },
    certificates: {
      subtitle: "Learning",
      title: "Certificates",
      paragraph:
        "Certifications are key to my professional development, reflecting my commitment to continuous improvement and lifelong learning. Each one supports my dedication to staying up to date and honing my skills in various areas.",
    },
    education: {
      subtitle: "Academic background",
      title: "Education",
    },
    languages: {
      subtitle: "Learning",
      title: "Languages",
      paragraph:
        "In this section, I highlight my language skills, which reflect my ability to communicate in various contexts and my commitment to continuous learning.",
      credential: "View credential",
      noCredential: "No credential",
    },
    works: {
      subtitle: "My work",
      title: "Proyects",
      p1:
        "The following projects support my skills and experience, and demonstrate my ability to solve complex problems while working with diverse technologies.",
      p2:
        "I enjoy working on challenging projects that give me the opportunity to continuously learn and grow.",
      viewOnGithub: "View on GitHub",
    },
    contact: {
      subtitle: "Get in",
      title: "Contact",
      nameLabel: "Enter your name",
      emailLabel: "Enter your email",
      messageLabel: "Enter your message",
      messagePlaceholder: "What do you want to tell me?",
      send: "Send",
      sending: "Sending...",
      errorFields: "Please complete all fields.",
      success: "Thank you! I will contact you as soon as possible.",
      errorGeneric: "Oops, something went wrong. Please try again.",
    },
    footer: {
      rights: "© 2026 Noel Martínez. All Rights Reserved.",
      instagram: "Instagram page",
      github: "GitHub account",
      linkedin: "LinkedIn profile",
    },
    whatsapp: { message: "Can we talk?" },
    lang: { toggleAriaLabel: "Switch language", es: "Español", en: "English" },
  },

  es: {
    meta: { cvUrl: CV_URL_ES },
    nav: {
      experience: "Experiencia",
      skills: "Skills",
      demos: "Demos",
      proyects: "Proyectos",
      freelance: "Freelance",
      formacion: "Formación",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Noel",
      roleLine1: "Backend Software Engineer",
      roleLine2: "especializado en IA/LLMs",
      ctaCv: "Descargar CV",
      paragraph: [
        { text: "Llevo soluciones de " },
        { text: "IA/LLMs", bold: true },
        {
          text:
            " a producción en entornos corporativos y regulados. Diseño arquitecturas backend con ",
        },
        { text: "Java", bold: true },
        { text: ", " },
        { text: "Spring Boot", bold: true },
        { text: " y " },
        { text: "microservicios", bold: true },
        { text: ", integrando modelos de lenguaje (" },
        { text: "Spring AI", bold: true },
        { text: ", " },
        { text: "Azure AI Foundry", bold: true },
        { text: ") con resultados medibles." },
      ],
    },
    experience: {
      subtitle: "¿Qué he hecho hasta ahora?",
      title: "Experiencia Laboral",
    },
    skills: {
      subtitle: "Con lo que trabajo",
      title: "Skills",
    },
    demos: {
      subtitle: "Pruébalo en directo",
      title: "Demos en tiempo real",
      categories: { nlp: "NLP", llm: "LLM" },
      tryLabel: "Probar demo",
      hideLabel: "Ocultar demo",
    },
    freelance: {
      subtitle: "Trabajos para clientes",
      title: "Freelance",
      paragraph:
        "Además de mi trabajo principal, diseño y desarrollo webs para clientes reales, encargándome de todo: desde el diseño y los textos hasta el despliegue y el mantenimiento posterior.",
      viewSite: "Ver web",
    },
    formacion: {
      subtitle: "De dónde vengo",
      title: "Formación",
    },
    certificates: {
      subtitle: "Aprendizaje",
      title: "Certificados",
      paragraph:
        "Las certificaciones son clave en mi desarrollo profesional y reflejan mi compromiso con la mejora continua y el aprendizaje a lo largo de la vida. Cada una respalda mi dedicación a mantenerme actualizado y perfeccionar mis habilidades en diversas áreas.",
    },
    education: {
      subtitle: "Formación académica",
      title: "Educación",
    },
    languages: {
      subtitle: "Aprendizaje",
      title: "Idiomas",
      paragraph:
        "En esta sección destaco mis competencias lingüísticas, que reflejan mi capacidad para comunicarme en distintos contextos y mi compromiso con el aprendizaje continuo.",
      credential: "Ver credencial",
      noCredential: "Sin credencial",
    },
    works: {
      subtitle: "Mi trabajo",
      title: "Proyectos",
      p1:
        "Los siguientes proyectos avalan mis habilidades y experiencia, y demuestran mi capacidad para resolver problemas complejos trabajando con tecnologías diversas.",
      p2:
        "Disfruto trabajando en proyectos desafiantes que me dan la oportunidad de aprender y crecer de forma continua.",
      viewOnGithub: "Ver en GitHub",
    },
    contact: {
      subtitle: "Ponte en",
      title: "Contacto",
      nameLabel: "Introduce tu nombre",
      emailLabel: "Introduce tu correo",
      messageLabel: "Introduce tu mensaje",
      messagePlaceholder: "¿Qué quieres contarme?",
      send: "Enviar",
      sending: "Enviando...",
      errorFields: "Por favor, completa todos los campos.",
      success: "¡Gracias! Me pondré en contacto contigo lo antes posible.",
      errorGeneric: "Vaya, algo ha salido mal. Inténtalo de nuevo.",
    },
    footer: {
      rights: "© 2026 Noel Martínez. Todos los derechos reservados.",
      instagram: "Página de Instagram",
      github: "Cuenta de GitHub",
      linkedin: "Perfil de LinkedIn",
    },
    whatsapp: { message: "¿Hablamos?" },
    lang: { toggleAriaLabel: "Cambiar idioma", es: "Español", en: "English" },
  },
};
