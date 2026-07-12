import { Program, Partner, News, Testimonial, Event } from "./types";

export const PROGRAMS_DATA: Program[] = [
  {
    id: "emprendimiento",
    category: "Cursos",
    title: "Curso de Emprendimiento y Negocios",
    shortDescription: "Aprende a estructurar tu idea de negocio, crear planes de mercadeo efectivos y dominar el pitch comercial.",
    description: "Este es el programa estrella de la Fundación ULEP. Está diseñado para guiarte paso a paso en la creación, validación y escalabilidad de tu modelo de negocio, adaptado a la realidad económica de Popayán y la región del Cauca.",
    duration: "120 horas",
    modality: "Híbrida",
    price: 320000,
    isFree: false,
    isFeatured: true,
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
    objectives: [
      "Definir y validar tu propuesta de valor en el mercado local y nacional.",
      "Aprender metodologías ágiles (Lean Startup, Design Thinking) para el diseño de productos.",
      "Estructurar un plan financiero completo incluyendo costos, presupuestos y punto de equilibrio.",
      "Diseñar estrategias de marketing digital y ventas con bajo presupuesto."
    ],
    modules: [
      "Módulo 1: Mentalidad Emprendedora y Propuesta de Valor",
      "Módulo 2: Validación de Mercado y Design Thinking",
      "Módulo 3: Finanzas para No Financieros y Estructura de Costos",
      "Módulo 4: Estrategia de Marketing Digital y Canales de Venta",
      "Módulo 5: Pitch Comercial y Técnicas de Negociación"
    ],
    instructor: {
      name: "Dra. Claudia Patricia Bolaños",
      role: "Especialista en Emprendimiento y Desarrollo Regional",
      bio: "Con más de 12 años de experiencia liderando incubadoras de negocios en el Cauca. Graduada de la Universidad del Cauca y asesora de múltiples proyectos de triple impacto.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: "pymes",
    category: "Diplomados",
    title: "Diplomado en Gestión Administrativa y de Pymes",
    shortDescription: "Domina las herramientas de gestión estratégica, finanzas corporativas y dirección de equipos para llevar tu negocio al siguiente nivel.",
    description: "Un diplomado riguroso que dota a administradores, gerentes y dueños de pequeñas y medianas empresas de Popayán de las habilidades directivas y herramientas tácticas necesarias para optimizar operaciones y expandirse.",
    duration: "160 horas",
    modality: "Virtual",
    price: 480000,
    isFree: false,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    objectives: [
      "Implementar un cuadro de mando integral para la toma de decisiones basada en datos.",
      "Alinear la planeación estratégica con objetivos financieros de mediano y largo plazo.",
      "Estructurar procesos eficientes de reclutamiento y motivación de talento humano.",
      "Optimizar la cadena de suministro y la relación con clientes (CRM)."
    ],
    modules: [
      "Módulo 1: Planeación Estratégica y Dirección de Pymes",
      "Módulo 2: Gestión Financiera Avanzada y Control de Costos",
      "Módulo 3: Liderazgo de Equipos y Talento Humano",
      "Módulo 4: Operaciones y Optimización de Procesos",
      "Módulo 5: Marco Legal, Tributario y Laboral en Colombia"
    ],
    instructor: {
      name: "Dr. Andrés Mauricio Gómez",
      role: "Consultor de Empresas y Ex-Directivo Gremial",
      bio: "MBA con énfasis en finanzas y consultor acreditado para el fortalecimiento empresarial en el suroccidente colombiano.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: "tecnologia",
    category: "Talleres",
    title: "Taller Práctico de Innovación y Tecnología Digital",
    shortDescription: "Aprende a utilizar herramientas digitales, inteligencia artificial y automatización para hacer más productivo tu trabajo o negocio.",
    description: "Una formación 100% práctica y orientada a la acción. Rompe la brecha tecnológica integrando herramientas de IA, diseño en la nube y gestión colaborativa a tus flujos diarios.",
    duration: "40 horas",
    modality: "Virtual",
    price: 150000,
    isFree: false,
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    objectives: [
      "Implementar herramientas de automatización de tareas (No-Code).",
      "Usar herramientas de inteligencia artificial para la redacción y mercadeo digital.",
      "Organizar flujos de trabajo eficientes usando Trello y Notion.",
      "Crear contenidos visuales profesionales en plataformas de diseño ágil."
    ],
    modules: [
      "Módulo 1: Fundamentos de la Transformación Digital",
      "Módulo 2: Gestión de Proyectos con Trello y Workspace",
      "Módulo 3: IA Generativa Aplicada al Marketing y Redacción",
      "Módulo 4: Automatización de Respuestas y Atención al Cliente"
    ],
    instructor: {
      name: "Ing. Liliana Restrepo",
      role: "Especialista en Tecnologías Educativas e IA",
      bio: "Ingeniera de Sistemas con maestría en Educación Digital. Apasionada por la democratización del conocimiento técnico.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: "liderazgo",
    category: "Seminarios",
    title: "Seminario en Liderazgo y Competencias Laborales",
    shortDescription: "Potencia tus habilidades blandas, comunicación asertiva y resolución de conflictos para crecer laboralmente.",
    description: "Orientado a estudiantes, profesionales y técnicos que desean diferenciarse en el mercado laboral mediante el desarrollo de habilidades socioemocionales de alto nivel.",
    duration: "20 horas",
    modality: "Presencial",
    price: 80000,
    isFree: false,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    objectives: [
      "Desarrollar un estilo de liderazgo adaptativo y empático.",
      "Dominar técnicas de comunicación asertiva para la resolución pacífica de conflictos.",
      "Aumentar la productividad personal mediante metodologías ágiles del tiempo.",
      "Mejorar la capacidad de trabajo en equipo multidisciplinario."
    ],
    modules: [
      "Módulo 1: Autoliderazgo e Inteligencia Emocional",
      "Módulo 2: Comunicación Asertiva y Negociación",
      "Módulo 3: Trabajo Colaborativo en Equipos Modernos"
    ],
    instructor: {
      name: "Psic. Fernando Muñoz",
      role: "Coach Organizacional y Especialista en Habilidades Blandas",
      bio: "Psicólogo organizacional con amplia trayectoria en formación corporativa y diseño de programas de bienestar humano.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: "marketing-rural",
    category: "Cursos",
    title: "Marketing Digital para Agronegocios y Turismo",
    shortDescription: "Posiciona tus productos agrícolas procesados, cafés especiales o proyectos de ecoturismo en el mercado digital.",
    description: "Una formación única diseñada para los emprendedores de Popayán y municipios aledaños del Cauca que desean vender directamente a clientes nacionales utilizando redes sociales y canales digitales.",
    duration: "80 horas",
    modality: "Híbrida",
    price: 240000,
    isFree: false,
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c3a9?auto=format&fit=crop&w=800&q=80",
    objectives: [
      "Diseñar una marca agrícola o turística con identidad regional atractiva.",
      "Crear perfiles comerciales efectivos en WhatsApp Business, Instagram y Facebook.",
      "Establecer sistemas de envío y pasarelas de pago sencillas para clientes externos.",
      "Aprender a fotografiar y contar la historia de tus productos (Storytelling)."
    ],
    modules: [
      "Módulo 1: Storytelling e Identidad de Marca Rural",
      "Módulo 2: Canales Digitales y WhatsApp Business para Ventas",
      "Módulo 3: Logística de Envíos, Empaque y Pasarelas de Pago",
      "Módulo 4: Campañas Orgánicas y Pautas con Bajo Presupuesto"
    ],
    instructor: {
      name: "Dra. Claudia Patricia Bolaños",
      role: "Especialista en Emprendimiento y Desarrollo Regional",
      bio: "Apasionada por vincular el campo caucano con el poder del internet. Conectora de agronegocios y mercados directos.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: "corporativo",
    category: "Empresas",
    title: "Programa Integral de Fortalecimiento Gremial",
    shortDescription: "Soluciones de capacitación a la medida para gremios, asociaciones comerciales y empresas del Cauca.",
    description: "ULEP se asocia con tu empresa o gremio para diseñar programas de capacitación intensivos enfocados en aumentar la productividad, el cumplimiento regulatorio y la innovación empresarial interna.",
    duration: "A convenir",
    modality: "Híbrida",
    price: 0,
    isFree: true,
    image: "https://images.unsplash.com/photo-1542744173-8e08d6266528?auto=format&fit=crop&w=800&q=80",
    objectives: [
      "Diagnosticar brechas de productividad y conocimiento corporativo.",
      "Diseñar programas curriculares a la medida exacta del sector empresarial.",
      "Impartir sesiones in-house o virtuales con metodologías de aprendizaje activo.",
      "Entregar reportes detallados de progreso, competencias adquiridas y certificación."
    ],
    modules: [
      "Estructura 100% personalizada según necesidades empresariales"
    ],
    instructor: {
      name: "Equipo Académico ULEP",
      role: "Consultoría e Instrucción Multidisciplinaria",
      bio: "Contamos con un pool de más de 30 expertos, consultores y académicos locales listos para capacitar a tu equipo.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
    }
  }
];

export const PARTNERS_DATA: Partner[] = [
  {
    id: "sena",
    name: "SENA Suroccidente",
    logoText: "SENA",
    logoBg: "bg-brand-blue text-white",
    description: "Servicio Nacional de Aprendizaje",
    benefits: "Articulación curricular, préstamo de ambientes de aprendizaje, convocatorias de empleo conjuntas y validación de competencias laborales.",
    website: "https://www.sena.edu.co"
  },
  {
    id: "alcaldia",
    name: "Alcaldía de Popayán",
    logoText: "Popayán",
    logoBg: "bg-blue-800 text-white",
    description: "Secretaría de DAFE Popayán",
    benefits: "Convenios para la formación gratuita de poblaciones vulnerables, apoyo a ferias de emprendimiento y co-financiación de micro-ideas.",
    website: "https://www.popayan.gov.co"
  },
  {
    id: "addi",
    name: "ADDI Fintech",
    logoText: "addi",
    logoBg: "bg-emerald-600 text-white font-black",
    description: "Aliado de Financiamiento Educativo",
    benefits: "Crédito educativo 100% digital, aprobación en 1 minuto, opciones con 0% de interés a plazos cortos y firma electrónica instantánea.",
    website: "https://addi.com"
  },
  {
    id: "coink",
    name: "Coink Financiera",
    logoText: "coink",
    logoBg: "bg-pink-600 text-white font-bold",
    description: "Fintech de Ahorro y Crédito",
    benefits: "Planes de ahorro programado para matrículas, créditos de bajo monto sin historial crediticio previo y educación financiera digital.",
    website: "https://coink.com"
  },
  {
    id: "unicauca",
    name: "Universidad del Cauca",
    logoText: "Unicauca",
    logoBg: "bg-red-700 text-white",
    description: "Aliado Académico",
    benefits: "Movilidad docente, desarrollo de proyectos de investigación aplicada y homologación de cursos de extensión.",
    website: "https://www.unicauca.edu.co"
  },
  {
    id: "camara-comercio",
    name: "Cámara de Comercio del Cauca",
    logoText: "CCC",
    logoBg: "bg-slate-800 text-white",
    description: "Aliado de Desarrollo Empresarial",
    benefits: "Formalización de ideas de negocio graduadas en ULEP, vinculación con ruedas de negocios y visibilidad comercial para egresados.",
    website: "https://cccauca.org.co"
  }
];

export const NEWS_DATA: News[] = [
  {
    id: "noticia-1",
    title: "ULEP Inaugura Laboratorio de Innovación Digital en Popayán",
    date: "10 de Junio, 2026",
    excerpt: "Con el apoyo de aliados tecnológicos y fintechs, abrimos un espacio dotado con computadores de última generación y acceso libre para beneficiarios.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    content: "La Fundación ULEP dio un paso histórico en su compromiso con el desarrollo del Cauca al inaugurar su nuevo Laboratorio de Innovación Digital. Este espacio, ubicado en el centro de Popayán, cuenta con 25 puestos de trabajo equipados con conectividad de alta velocidad y software avanzado para diseño, programación y marketing digital. El laboratorio estará disponible para todos los estudiantes matriculados en nuestros programas híbridos y virtuales, ofreciéndoles un espacio de coworking y mentoría presencial permanente. 'Queremos que la falta de herramientas tecnológicas no sea un impedimento para emprender', declaró el director académico."
  },
  {
    id: "noticia-2",
    title: "Más de 150 Nuevos Emprendedores se Gradúan en el Cauca",
    date: "28 de Mayo, 2026",
    excerpt: "En una emotiva ceremonia presencial, estudiantes del Curso Estrella de Emprendimiento recibieron sus certificaciones institucionales.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    content: "La Fundación ULEP celebró la graduación de su cohorte 2026-I, certificando a más de 150 beneficiarios de Popayán, Timbío y Cajibío en competencias de emprendimiento y planeación de negocios. De los planes de negocio sustentados ante el comité de jurados, un 40% son proyectos liderados por mujeres cabeza de familia en el sector agrícola procesado y ecoturismo. Con estas nuevas certificaciones, el total de beneficiarios de ULEP en la región supera la histórica marca de los mil graduados activos, aportando directamente a la dinamización laboral y creación de nuevos empleos en el departamento."
  },
  {
    id: "noticia-3",
    title: "ULEP Firma Alianza Estratégica con Fintechs para Crédito Educativo Directo",
    date: "12 de Abril, 2026",
    excerpt: "La alianza permitirá financiar hasta el 100% de la formación de los estudiantes con respuesta de pre-aprobación en menos de 24 horas.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
    content: "Con el propósito de democratizar la educación técnica y complementaria, la Fundación ULEP formalizó una alianza con destacadas entidades de tecnología financiera (Fintech). Mediante este nuevo modelo, los interesados en cursar cursos de extensión o diplomados pagos podrán postular a planes de financiación flexible en cuotas mensuales muy bajas, incluso con tasas preferenciales del 0% de interés a corto plazo. El proceso de solicitud se realiza en el portal web de la fundación, toma menos de cinco minutos y entrega una pre-aprobación automática para que el beneficiario inicie clases de inmediato."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "María Helena Ordóñez",
    role: "Fundadora de 'Café Macizo de Popayán'",
    program: "Curso de Emprendimiento y Negocios",
    quote: "La Fundación ULEP me dio las herramientas y la confianza para estructurar mi marca de café orgánico. Gracias al módulo financiero, hoy sé calcular mis costos exactos y vender por redes sociales en todo el país. ¡Superó mis expectativas!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "test-2",
    name: "Carlos Mario Restrepo",
    role: "Gerente de Ferretería El Clavo S.A.S.",
    program: "Diplomado en Gestión de Pymes",
    quote: "Dirigir un equipo de 12 personas en Popayán era un gran reto. Con el diplomado, aprendí a estructurar metas de productividad e implementar herramientas digitales que automatizan mis despachos. Mi negocio creció un 25% este año.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "test-3",
    name: "Diana Patricia Chaux",
    role: "Beneficiaria de Matrícula Financiada",
    program: "Taller Práctico de Tecnología Digital",
    quote: "No contaba con el dinero completo para matricularme en el taller, pero la alianza con ADDI facilitó mi acceso. Pagué mi formación en tres cuotas fijas sin intereses y obtuve mi primer empleo digital en atención al cliente.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5
  }
];

export const EVENTS_DATA: Event[] = [
  {
    id: "event-1",
    title: "Webinar Gratuito: ¿Cómo Estructurar tu Plan de Negocios en Popayán?",
    date: "18 de Julio, 2026",
    time: "4:00 PM",
    modality: "Virtual (Vía Zoom)",
    linkText: "Registrarse gratis"
  },
  {
    id: "event-2",
    title: "Taller Abierto: Introducción Práctica al Marketing Digital y TikTok Business",
    date: "25 de Julio, 2026",
    time: "2:00 PM",
    modality: "Híbrido (Aula ULEP & YouTube Live)",
    linkText: "Inscribirme"
  },
  {
    id: "event-3",
    title: "Feria de Empleo y Emprendimiento ULEP Popayán 2026",
    date: "05 de Agosto, 2026",
    time: "8:00 AM - 5:00 PM",
    modality: "Presencial (Parque Caldas de Popayán)",
    linkText: "Ver Agenda"
  }
];
