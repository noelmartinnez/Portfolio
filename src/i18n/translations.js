// UI "chrome" strings per language. Keys must match across `en` and `es`.
// Array content (experiences, projects, skills…) lives in ./data.js.

const CV_URL_ES =
  "https://drive.google.com/file/d/1g2QrZlhga14KXghBpJxlaSK7VLpUIOaY/view?usp=sharing";
const CV_URL_EN =
  "https://drive.google.com/file/d/1Gezppmza-NC5tQ7LWIHb3CHSLn8r7SzS/view?usp=sharing";

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
        { text: ", " },
        { text: "vLLM", bold: true },
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
    },
    languages: {
      title: "Languages",
      credential: "View credential",
      noCredential: "No credential",
    },
    works: {
      subtitle: "My work",
      title: "Proyects",
      p1:
        "The following projects demonstrate my ability to solve complex problems while working with diverse technologies.",
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
    focus: {
      title: "I wire LLMs into *real* backends.",
      lead: "Microservices, queues, pipelines and the metrics that prove they work.",
    },
    fx: {
      dragHint: "Scroll →",
      swipeHint: "Swipe →",
      formacionText: "Degree, certifications and languages: the foundation I build on.",
    },
    whatsapp: { message: "Can we talk?" },
    lang: { es: "Español", en: "English" },
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
      name: "Pepe",
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
        { text: ", " },
        { text: "vLLM", bold: true },
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
    },
    languages: {
      title: "Idiomas",
      credential: "Ver credencial",
      noCredential: "Sin credencial",
    },
    works: {
      subtitle: "Mi trabajo",
      title: "Proyectos",
      p1:
        "Los siguientes proyectos demuestran mi capacidad para resolver problemas complejos trabajando con tecnologías diversas.",
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
    focus: {
      title: "Integro LLMs en backends *reales.*",
      lead: "Microservicios, colas, pipelines y las métricas que demuestran que funcionan.",
    },
    fx: {
      dragHint: "Haz scroll →",
      swipeHint: "Desliza →",
      formacionText: "Grado, certificaciones e idiomas: la base sobre la que construyo.",
    },
    whatsapp: { message: "¿Hablamos?" },
    lang: { es: "Español", en: "English" },
  },
};
