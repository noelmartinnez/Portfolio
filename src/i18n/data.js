// Translatable text for data collections, keyed by the same `id` as the invariant
// bases in src/constants/index.js. LanguageContext zips them together.

export const dataTranslations = {
  en: {
    experiences: {
      fundamentia: {
        title: "Backend Software Engineer",
        company_name: "Fundamentia Business Consulting",
        date: "March 2025 - August 2026",
        points: [
          {
            label: "PrivacyShield · European AI anonymisation SaaS",
            text: "Fine-tuned NER models (PyTorch, Hugging Face), reaching a 90% F1. Led the project's backend development on a microservices architecture with Java, Spring Boot, Kafka and MySQL, and integrated LLMs through Spring AI and Azure AI Foundry to detect and anonymise 20+ types of entities, both simple and complex, achieving a 99% F1. Optimised prompts by evaluating precision, recall, latency and cost, cutting inference time and cost through caching. I also prepared service versioning for deployment on Kubernetes.",
          },
          {
            label: "Document-processing RPA",
            text: "Built Java and MySQL microservices that sent data as XML to Node.js RPA bots which, using Selenium and Puppeteer, filled in web forms automatically. They processed ~400 documents a month, saving ~100 hours of manual work.",
          },
          {
            label: "SimplyData · Intelligent Document Processing for banking",
            text: "Built Java microservices and solutions with open-source LLMs (Qwen, Gemma) using vLLM to extract information from documents, on a production platform in the banking sector.",
          },
        ],
      },
      altia: {
        title: "Backend & Infrastructure Engineer",
        company_name: "Altia Consultores",
        date: "September 2024 - March 2025",
        points: [
          {
            label: "HUNTERS · Altia's corporate intranet",
            text: "Built new features, improvements and fixes on Java, Spring Boot and Spring Cloud microservices, with PostgreSQL and Oracle databases where I designed schemas and optimised queries. Modelled business processes with Camunda (BPM) and raised test coverage to 85% with JUnit and Mockito. Deployed services as Docker containers on Kubernetes and maintained CI/CD pipelines with Jenkins, Harbor and Argo CD.",
          },
        ],
      },
    },
    projects: {
      connect4: {
        name: "Connect Four AI",
        description:
          "An artificial intelligence algorithm that plays Connect 4 using classic adversarial search techniques. Its decision engine is based on the MinMax algorithm optimised with Alpha-Beta pruning.",
      },
      starwars: {
        name: "StarWars APP",
        description:
          "Application developed with Ionic Framework and AngularJS that acts as an interactive encyclopaedia of the Star Wars universe. The app uses an external REST API to obtain data on characters, planets, ships and films, presented in a responsive mobile interface.",
      },
      autobnb: {
        name: "AutoBnB",
        description:
          "Vehicle rental platform (Final Degree Project, 9/10): a full-stack, Airbnb-style web app built with Java, Spring Boot and Hibernate, with listing, search and time-slot booking plus dynamic pricing.",
      },
      mnist: {
        name: "MNIST Digit Classifier",
        description:
          "Academic project for the Intelligent Systems course (Computer Engineering, University of Alicante) that trains and evaluates neural networks to classify handwritten digits from the MNIST dataset, including experiments with several architectures to compare and improve accuracy.",
      },
      backprop: {
        name: "Backpropagation from Scratch",
        description:
          "Project that implements a multilayer perceptron and its forward propagation phase from scratch, with worked examples that walk through how the backpropagation algorithm updates weights during supervised learning.",
      },
      imgtwin: {
        name: "ImgTwin",
        description:
          "A tool that detects duplicate images: it extracts image embeddings with MobileNet (TensorFlow), compresses them with PCA and indexes them with FAISS for fast similarity search. It includes an interface to review and delete the matches.",
      },
    },
    freelance: {
      esencia: {
        name: "ESENCIA",
        client: "Wellness centre · Maite Pomares Agulló",
        description:
          "Official website for a wellness and beauty centre: services catalogue, FAQs, contact form and a direct booking call-to-action.",
      },
      anabelperez: {
        name: "Anabel Pérez Lara",
        client: "Personal portfolio",
        description:
          "Bilingual portfolio (ES/EN) showcasing her academic and professional work. Built in React and deployed on Vercel, with a typographic design, smooth animations and a fully responsive layout.",
      },
    },
    certificados: {
      aifluency: {
        name: "AI Fluency: Framework & Foundations",
        description:
          "Certifies the ability to collaborate with AI systems effectively, efficiently, ethically and safely, following Anthropic's AI Fluency framework.",
      },
      js: {
        name: "JavaScript",
        description:
          "Demonstrating skills in implementing fundamental programming strategies in JavaScript, in accordance with industry standards and best practices.",
      },
      jenkins: {
        name: "Jenkins",
        description:
          "Validating skills in the configuration and administration of Jenkins, a continuous integration and continuous delivery (CI/CD) tool, to automate development and deployment processes.",
      },
    },
    educacion: {
      ua: {
        institution: "University of Alicante",
        degree: "Bachelor's Degree in Computer Engineering",
        date: "2020 - 2024",
        details: "Final Degree Project: 9/10",
      },
    },
    idiomas: {
      spanish: { name: "Spanish", level: "Native" },
      english: { name: "English", level: "B1 · Trinity College London" },
      valenciano: { name: "Valencian", level: "C1" },
    },
    skills: {
      languages: { category: "Languages" },
      backend: { category: "Backend" },
      data: { category: "Data & Messaging" },
      ai: { category: "AI & LLMs" },
      devops: { category: "DevOps, Testing & RPA" },
    },
    demos: {
      ner: {
        title: "Live NER + Anonymization",
        shortTitle: "Anonymizer",
        concept:
          "A miniature version of the NER and anonymisation pipeline I built for PrivacyShield. Type whatever you like and watch the entities get anonymised.",
        ui: {
          sampleText:
            "Please contact John Miller at john.miller@example.com or call +1 415-555-0182. His ID number is 12345678Z, born on 03/14/1990. IBAN: ES91 2100 0418 4502 0005 1332.",
          legend: {
            person: "Person",
            email: "Email",
            date: "Date",
            dni: "ID number",
            phone: "Phone",
            iban: "IBAN",
          },
          detectLabel: "Detect",
          anonymizeLabel: "Anonymize",
          placeholder: "Type or paste text with personal data…",
        },
      },
      tokenizer: {
        title: "Live Tokenizer",
        shortTitle: "Tokenizer",
        concept:
          "Type anything and watch it get split into tokens the way an LLM would see it. Switch between word, subword and character segmentation to see how the same sentence turns into a very different number of tokens - and a different cost.",
        ui: {
          sampleText: "Backend engineers fine-tune transformers to anonymize personal data.",
          modeLabels: { word: "Word", subword: "Subword", char: "Character" },
          tokensLabel: "Tokens",
          costLabel: "Est. cost",
        },
      },
    },
  },

  es: {
    experiences: {
      fundamentia: {
        title: "Backend Software Engineer",
        company_name: "Fundamentia Business Consulting",
        date: "Marzo 2025 - Agosto 2026",
        points: [
          {
            label: "PrivacyShield · SaaS europeo de anonimización con IA",
            text: "Realicé fine-tuning de modelos NER (PyTorch, Hugging Face) hasta obtener un F1 del 90%. Lideré el desarrollo backend del proyecto, con una arquitectura de microservicios en Java, Spring Boot, Kafka y MySQL, e integré LLMs mediante Spring AI y Azure AI Foundry para detectar y anonimizar +20 tipos de entidades, tanto simples como complejas, consiguiendo un F1 del 99%. Optimicé los prompts evaluando precision, recall, latencia y coste, reduciendo tiempos y costes de inferencia mediante caché. Además, preparé el versionado de los servicios para su despliegue en Kubernetes.",
          },
          {
            label: "RPA de trámites documentales",
            text: "Desarrollé microservicios en Java y MySQL que transmitían datos en XML a bots RPA en Node.js que, con Selenium y Puppeteer, rellenaban automáticamente los trámites web. Procesaban ~400 documentos mensuales, con un ahorro de ~100 horas de trabajo manual.",
          },
          {
            label: "SimplyData · Intelligent Document Processing para banca",
            text: "Desarrollé microservicios en Java y soluciones con LLMs open-source (Qwen, Gemma) utilizando vLLM para la extracción de información de documentos, en una plataforma en producción del sector bancario.",
          },
        ],
      },
      altia: {
        title: "Backend & Infrastructure Engineer",
        company_name: "Altia Consultores",
        date: "Septiembre 2024 - Marzo 2025",
        points: [
          {
            label: "HUNTERS · Intranet corporativa de Altia",
            text: "Desarrollé nuevas funcionalidades, mejoras y correcciones sobre microservicios en Java, Spring Boot y Spring Cloud, con bases de datos PostgreSQL y Oracle en las que diseñé esquemas y optimicé consultas. Modelé procesos de negocio con Camunda (BPM) y aumenté la cobertura de tests hasta el 85% con JUnit y Mockito. Desplegué servicios como contenedores Docker en Kubernetes y mantuve pipelines CI/CD con Jenkins, Harbor y Argo CD.",
          },
        ],
      },
    },
    projects: {
      connect4: {
        name: "IA Conecta Cuatro",
        description:
          "Algoritmo de inteligencia artificial que juega al Conecta 4 mediante técnicas clásicas de búsqueda adversaria. Su motor de decisión se basa en el algoritmo MinMax optimizado con poda Alfa-Beta.",
      },
      starwars: {
        name: "StarWars APP",
        description:
          "Aplicación desarrollada con Ionic Framework y AngularJS que actúa como una enciclopedia interactiva del universo de Star Wars. Usa una API REST externa para obtener datos de personajes, planetas, naves y películas, presentados en una interfaz móvil.",
      },
      autobnb: {
        name: "AutoBnB",
        description:
          "Plataforma de alquiler de vehículos (TFG, 9/10): aplicación web full-stack al estilo de Airbnb desarrollada con Java, Spring Boot e Hibernate, con publicación, búsqueda y reserva por franjas horarias y precios dinámicos.",
      },
      mnist: {
        name: "Clasificador de dígitos MNIST",
        description:
          "Proyecto académico de la asignatura Sistemas Inteligentes que entrena y evalúa redes neuronales para clasificar dígitos manuscritos del dataset MNIST, incluyendo experimentos con varias arquitecturas para comparar y mejorar la precisión.",
      },
      backprop: {
        name: "Backpropagation desde cero",
        description:
          "Proyecto que implementa un perceptrón multicapa y su fase de propagación hacia delante desde cero, con ejemplos resueltos que explican cómo el algoritmo de backpropagation actualiza los pesos durante el aprendizaje supervisado.",
      },
      imgtwin: {
        name: "ImgTwin",
        description:
          "Herramienta de detección de imágenes duplicadas: extrae embeddings de imágenes con MobileNet (TensorFlow), los comprime con PCA y los indexa con FAISS para buscar similitudes rápidamente. Incluye una interfaz para revisar y eliminar las coincidencias.",
      },
    },
    freelance: {
      esencia: {
        name: "ESENCIA",
        client: "Centro de bienestar · Maite Pomares Agulló",
        description:
          "Web oficial de un centro de bienestar y belleza: catálogo de servicios, FAQs, formulario de contacto y llamada directa a la reserva.",
      },
      anabelperez: {
        name: "Anabel Pérez Lara",
        client: "Portfolio personal",
        description:
          "Portfolio bilingüe (ES/EN) donde recoge sus trabajos universitarios y profesionales. Desarrollado en React y desplegado en Vercel, con diseño tipográfico, animaciones suaves y totalmente responsive.",
      },
    },
    certificados: {
      aifluency: {
        name: "AI Fluency: Framework & Foundations",
        description:
          "Acredita la capacidad de colaborar con sistemas de IA de forma eficaz, eficiente, ética y segura, siguiendo el marco AI Fluency de Anthropic.",
      },
      js: {
        name: "JavaScript",
        description:
          "Acredita las habilidades para implementar estrategias de programación fundamentales en JavaScript, conforme a los estándares y buenas prácticas de la industria.",
      },
      jenkins: {
        name: "Jenkins",
        description:
          "Valida las habilidades en la configuración y administración de Jenkins, una herramienta de integración y entrega continua (CI/CD), para automatizar los procesos de desarrollo y despliegue.",
      },
    },
    educacion: {
      ua: {
        institution: "Universidad de Alicante",
        degree: "Grado en Ingeniería Informática",
        date: "2020 - 2024",
        details: "TFG: 9/10",
      },
    },
    idiomas: {
      spanish: { name: "Español", level: "Nativo" },
      english: { name: "Inglés", level: "B1 · Trinity College London" },
      valenciano: { name: "Valenciano", level: "C1" },
    },
    skills: {
      languages: { category: "Lenguajes" },
      backend: {
        category: "Backend",
        skills: ["Spring Boot", "Spring Cloud", "Spring Security", "Hibernate", "Camunda (BPM)", "APIs REST", "Microservicios"],
      },
      data: { category: "Datos & Mensajería" },
      ai: { category: "IA & LLMs" },
      devops: { category: "DevOps, Testing & RPA" },
    },
    demos: {
      ner: {
        title: "NER y anonimización en vivo",
        shortTitle: "Anonimizador",
        concept:
          "Una versión en miniatura del pipeline de NER y anonimización que construí para PrivacyShield. Escribe el texto que quieras y observa cómo se anonimizan las entidades.",
        ui: {
          sampleText:
            "Por favor, contacta con María García en maria.garcia@example.com o llama al 612 345 678. Su DNI es 12345678Z y nació el 14/03/1990. IBAN: ES91 2100 0418 4502 0005 1332.",
          legend: {
            person: "Persona",
            email: "Email",
            date: "Fecha",
            dni: "Nº de identificación",
            phone: "Teléfono",
            iban: "IBAN",
          },
          detectLabel: "Detectar",
          anonymizeLabel: "Anonimizar",
          placeholder: "Escribe o pega texto con datos personales…",
        },
      },
      tokenizer: {
        title: "Tokenizador en vivo",
        shortTitle: "Tokenizador",
        concept:
          "Escribe lo que quieras y observa cómo se divide en tokens, tal y como lo vería un LLM. Cambia entre segmentación por palabra, subpalabra y carácter para ver cómo la misma frase se convierte en un número de tokens - y un coste - muy distinto.",
        ui: {
          sampleText: "Los ingenieros backend afinan transformers para anonimizar datos personales.",
          modeLabels: { word: "Palabra", subword: "Subpalabra", char: "Carácter" },
          tokensLabel: "Tokens",
          costLabel: "Coste est.",
        },
      },
    },
  },
};
