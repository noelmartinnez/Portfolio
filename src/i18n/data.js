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
          "Led backend development on a European project focused on entity anonymisation and AI/LLM integration.",
          "Implemented the backend architecture, microservices and REST APIs using Java, Spring Boot, Kafka and MySQL.",
          "Integrated Spring AI with Azure AI Foundry to evaluate LLMs applied to entity extraction and anonymisation, achieving 99% accuracy in identifying entities specified in the input prompts.",
          "Fine-tuned NER models (Python, PyTorch, Hugging Face) to a 90% F1-score, designing and optimising prompts based on precision, recall, latency and cost metrics.",
          "Developed RPA solutions (Node.js, Selenium, Puppeteer) that automated the processing of ~400 XML files per month without manual intervention.",
          "Participated in architectural decisions and presented technical results to the team.",
        ],
      },
      altia: {
        title: "Backend & Infrastructure Engineer",
        company_name: "Altia Consultores",
        date: "September 2024 - March 2025",
        points: [
          "Developed microservices with Java, Spring Boot, and Spring Cloud, applying a layered architecture and best practices.",
          "Integrated relational databases (PostgreSQL and Oracle), designing schemas and optimizing queries.",
          "Deployed and orchestrated Docker containers on Kubernetes, and maintained CI/CD pipelines with Jenkins, Harbor, and Argo CD.",
          "Modeled business processes with Camunda (BPM) and developed tests with Mockito and JUnit, increasing code coverage to 85%.",
        ],
      },
    },
    projects: {
      connect4: {
        name: "Connect Four AI",
        description:
          "I have developed an artificial intelligence algorithm to play Connect 4, using classic adversarial search techniques. The decision engine is based on the MinMax algorithm optimised using Alpha-Beta pruning.",
      },
      starwars: {
        name: "StarWars APP",
        description:
          "Application developed with Ionic Framework and AngularJS that acts as an interactive encyclopaedia of the Star Wars universe. The app uses an external REST API to obtain data on characters, planets, ships and films, presented in a responsive mobile interface.",
      },
      autobnb: {
        name: "AutoBnB",
        description:
          "A multi-platform web application inspired by the Airbnb business model, but focused on vehicles. It lets users and owners easily manage renting cars, motorcycles, or other vehicles in a flexible, self-managed way.",
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
          "A lightweight tool that detects and removes duplicate or near-duplicate images. It extracts MobileNet embeddings, compresses them with PCA, and indexes them with FAISS for fast similarity search, offering an interactive Matplotlib UI to review and delete matches.",
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
        details: "GPA: 7.5/10 · Final Degree Project: 9/10",
      },
    },
    idiomas: {
      spanish: { name: "Spanish", level: "Native" },
      english: { name: "English", level: "B1 · Trinity College London" },
      valenciano: { name: "Valencian", level: "C1" },
    },
    skills: {
      ai: { category: "AI & LLMs" },
      backend: { category: "Backend" },
      data: { category: "Data & Messaging" },
      devops: { category: "DevOps & Testing" },
      automation: { category: "Automation & BPM" },
    },
    demos: {
      ner: {
        title: "Live NER + Anonymization",
        subtitle: "Type text, watch entities light up",
        concept:
          "A miniature version of the NER + anonymization pipeline I built for a European entity-anonymization project: it detects people, emails, dates, ID numbers, phone numbers and IBANs, then can redact them into consistent pseudonyms.",
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
      rag: {
        title: "RAG Pipeline",
        subtitle: "From query to grounded answer",
        concept:
          "The classic Retrieval-Augmented Generation flow, staged step by step: the query is embedded, the closest documents are retrieved by cosine similarity, folded into an augmented prompt, and a final answer is generated.",
        ui: {
          query: "How do I bring AI models to production?",
          steps: {
            query: "Query",
            retrieve: "Retrieve",
            augment: "Augment",
            generate: "Generate",
          },
          retrievedIntro: "Retrieved context:",
          corpusLabels: {
            c1: "Java microservices",
            c2: "Event streaming with Kafka",
            c3: "Docker containers",
            c4: "Kubernetes orchestration",
            c5: "REST APIs at scale",
            c6: "Named entity recognition",
            c7: "LLMs with Spring AI",
            c8: "Embeddings & RAG",
            c9: "Fine-tuning with PyTorch",
            c10: "Prompt engineering",
          },
          answer:
            "Combine Spring AI with your existing Docker/Kubernetes pipeline: containerize the fine-tuned model, expose it behind a REST API, and monitor it like any other microservice.",
          replayLabel: "Replay",
          nextLabel: "Next step",
        },
      },
      tokenizer: {
        title: "Live Tokenizer",
        subtitle: "See how text becomes tokens",
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
          "Lideré el desarrollo backend de un proyecto europeo de anonimización de entidades e integración de IA/LLMs.",
          "Diseñé e implementé la arquitectura backend, microservicios y APIs REST con Java, Spring Boot, Kafka y MySQL.",
          "Integré Spring AI con Azure AI Foundry para evaluar LLMs aplicados a extracción y anonimización de entidades, alcanzando un 99% de precisión en la identificación de entidades especificadas en los prompts.",
          "Realicé fine-tuning de modelos NER (Python, PyTorch, Hugging Face) con un F1-score del 90%, diseñando y optimizando prompts mediante métricas de precision, recall, tiempos y costes.",
          "Desarrollé soluciones RPA (Node.js, Selenium, Puppeteer) que automatizan el procesamiento de ~400 XMLs al mes sin intervención manual.",
          "Participé en decisiones de arquitectura y presenté resultados técnicos ante el equipo.",
        ],
      },
      altia: {
        title: "Backend & Infrastructure Engineer",
        company_name: "Altia Consultores",
        date: "Septiembre 2024 - Marzo 2025",
        points: [
          "Desarrollé microservicios con Java, Spring Boot y Spring Cloud, aplicando arquitectura por capas y buenas prácticas.",
          "Integré bases de datos relacionales (PostgreSQL y Oracle), diseñando esquemas y optimizando consultas.",
          "Desplegué y orquesté contenedores Docker en Kubernetes, y mantuve pipelines CI/CD con Jenkins, Harbor y Argo CD.",
          "Modelé procesos de negocio con Camunda (BPM) y desarrollé pruebas con Mockito y JUnit, incrementando la cobertura de código hasta el 85%.",
        ],
      },
    },
    projects: {
      connect4: {
        name: "IA Conecta Cuatro",
        description:
          "He desarrollado un algoritmo de inteligencia artificial para jugar al Conecta 4, empleando técnicas clásicas de búsqueda adversaria. El motor de decisión se basa en el algoritmo MinMax optimizado mediante poda Alfa-Beta.",
      },
      starwars: {
        name: "StarWars APP",
        description:
          "Aplicación desarrollada con Ionic Framework y AngularJS que actúa como una enciclopedia interactiva del universo de Star Wars. Usa una API REST externa para obtener datos de personajes, planetas, naves y películas, presentados en una interfaz móvil.",
      },
      autobnb: {
        name: "AutoBnB",
        description:
          "Una aplicación web multiplataforma inspirada en el modelo de negocio de Airbnb, pero enfocada en vehículos. Permite a usuarios y propietarios gestionar fácilmente el alquiler de coches, motos u otros vehículos de forma flexible y autogestionada.",
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
          "Herramienta ligera que detecta y elimina imágenes duplicadas o muy similares. Extrae embeddings con MobileNet, los comprime con PCA y los indexa con FAISS para una búsqueda de similitud rápida, con una interfaz interactiva en Matplotlib para revisar y eliminar coincidencias.",
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
        details: "Nota media: 7,5/10 · TFG: 9/10",
      },
    },
    idiomas: {
      spanish: { name: "Español", level: "Nativo" },
      english: { name: "Inglés", level: "B1 · Trinity College London" },
      valenciano: { name: "Valenciano", level: "C1" },
    },
    skills: {
      ai: { category: "IA y LLMs" },
      backend: { category: "Backend" },
      data: { category: "Datos y Mensajería" },
      devops: { category: "DevOps y Testing" },
      automation: { category: "Automatización y BPM" },
    },
    demos: {
      ner: {
        title: "NER y anonimización en vivo",
        subtitle: "Escribe texto y observa cómo se iluminan las entidades",
        concept:
          "Una versión en miniatura del pipeline de NER y anonimización que construí para un proyecto europeo de anonimización de entidades: detecta personas, emails, fechas, números de identificación, teléfonos e IBANs, y puede sustituirlos por pseudónimos consistentes.",
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
      rag: {
        title: "Pipeline RAG",
        subtitle: "De la consulta a una respuesta fundamentada",
        concept:
          "El flujo clásico de Retrieval-Augmented Generation, mostrado paso a paso: la consulta se convierte en vector, se recuperan los documentos más cercanos por similitud coseno, se integran en un prompt aumentado y se genera una respuesta final.",
        ui: {
          query: "¿Cómo llevo modelos de IA a producción?",
          steps: {
            query: "Consulta",
            retrieve: "Recuperar",
            augment: "Aumentar",
            generate: "Generar",
          },
          retrievedIntro: "Contexto recuperado:",
          corpusLabels: {
            c1: "Microservicios en Java",
            c2: "Streaming de eventos con Kafka",
            c3: "Contenedores Docker",
            c4: "Orquestación con Kubernetes",
            c5: "APIs REST a gran escala",
            c6: "Reconocimiento de entidades (NER)",
            c7: "LLMs con Spring AI",
            c8: "Embeddings y RAG",
            c9: "Fine-tuning con PyTorch",
            c10: "Ingeniería de prompts",
          },
          answer:
            "Combina Spring AI con tu pipeline de Docker/Kubernetes: containeriza el modelo afinado, expónlo tras una API REST y monitorízalo como a cualquier otro microservicio.",
          replayLabel: "Repetir",
          nextLabel: "Siguiente paso",
        },
      },
      tokenizer: {
        title: "Tokenizador en vivo",
        subtitle: "Descubre cómo el texto se convierte en tokens",
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
