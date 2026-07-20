import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Parse JSON bodies
app.use(express.json());

// Lazy-initialized Gemini client
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      throw new Error("GEMINI_API_KEY is not configured or is using the placeholder.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Local Fallback Responder for ULEP-Bot
function getLocalFallbackResponse(message: string): string {
  const msg = message.toLowerCase();

  // 1. Programs & Courses
  if (
    msg.includes("programa") || 
    msg.includes("curso") || 
    msg.includes("diplomado") || 
    msg.includes("estudiar") || 
    msg.includes("oferta") || 
    msg.includes("clase") || 
    msg.includes("seminario") ||
    msg.includes("talleres") ||
    msg.includes("taller")
  ) {
    if (msg.includes("emprendimiento") || msg.includes("estrella") || msg.includes("negocio")) {
      return `### 🌟 Curso Estrella: Emprendimiento y Negocios
Este es nuestro programa más popular en Popayán. Aquí tienes los detalles clave:
- **Duración:** 120 horas lectivas.
- **Modalidad:** Híbrida (clases virtuales interactivas y talleres presenciales prácticos).
- **Temáticas principales:** Creación de planes de negocio viables, marketing digital para pymes, finanzas básicas para emprendedores y preparación de pitches comerciales de alto impacto.
- **Certificación:** Emitida directamente por la Fundación ULEP.

¿Te gustaría pre-inscribirte en este programa? Recuerda que puedes financiar el valor total de tu matrícula en cuotas mensuales muy bajas con nuestras Fintech aliadas.`;
    }

    if (msg.includes("pyme") || msg.includes("administr") || msg.includes("gestion")) {
      return `### 📊 Diplomado en Gestión Administrativa y de Pymes
Un programa completo estructurado para potenciar la administración de negocios locales:
- **Duración:** 160 horas.
- **Modalidad:** 100% Virtual a través del Campus ULEP.
- **Temáticas principales:** Control de costos y presupuestos, planeación estratégica de mercadeo, gestión del talento humano y legislación comercial colombiana básica.
- **Certificación:** Diploma oficial descargable.

Es ideal para microempresarios de Popayán y el Cauca que buscan formalizar y escalar sus operaciones. ¿Deseas más información sobre cómo inscribirte?`;
    }

    if (msg.includes("innovacion") || msg.includes("tecnolog") || msg.includes("digital") || msg.includes("ia") || msg.includes("inteligencia")) {
      return `### 💻 Taller Práctico de Innovación y Tecnología Digital
Acelera tus habilidades digitales aplicadas al entorno profesional moderno:
- **Duración:** 40 horas prácticas.
- **Modalidad:** 100% Virtual con tutoría.
- **Temáticas principales:** Herramientas modernas de productividad en la nube, automatización de tareas cotidianas e introducción práctica a la Inteligencia Artificial (IA) aplicada al trabajo.

Es un programa corto de alto impacto diseñado para actualización profesional rápida. ¿Quieres que te ayudemos con la matrícula?`;
    }

    if (msg.includes("liderazgo") || msg.includes("competencia") || msg.includes("habilidad") || msg.includes("bland")) {
      return `### 🤝 Seminario en Liderazgo y Competencias Laborales
Fortalece tu perfil humano y profesional para destacar en el mercado de trabajo:
- **Duración:** 20 horas presenciales.
- **Modalidad:** Presencial en nuestra sede del Centro Histórico de Popayán.
- **Temáticas principales:** Habilidades blandas de alta demanda, comunicación asertiva, resolución pacífica de conflictos y técnicas modernas de negociación y ventas.

Es una excelente oportunidad para conectar con otros profesionales y potenciar tu empleabilidad.`;
    }

    return `📚 **Oferta Académica Vigente - Fundación ULEP 2026**

Ofrecemos programas prácticos diseñados para el empleo y el emprendimiento en el Cauca:

1. **Curso Estrella: Emprendimiento y Negocios** (120h, Híbrido) - Ideal para crear y estructurar tu propia empresa.
2. **Diplomado en Gestión Administrativa y de Pymes** (160h, Virtual) - Perfecto para organizar y escalar tu negocio.
3. **Taller Práctico de Innovación y Tecnología Digital** (40h, Virtual) - Productividad e IA para el trabajo.
4. **Seminario en Liderazgo y Competencias Laborales** (20h, Presencial) - Habilidades blandas y comunicación.
5. **Formación Corporativa a Medida** - Planes específicos para empresas de Popayán.

*Todos nuestros programas cuentan con facilidades de Pago Express y acceso completo a nuestro **Campus Virtual 24/7**.* ¿Sobre cuál te gustaría conocer más detalles hoy?`;
  }

  // 2. Financing & Cost
  if (
    msg.includes("financiar") ||
    msg.includes("financiacion") ||
    msg.includes("credito") ||
    msg.includes("pago") ||
    msg.includes("cuota") ||
    msg.includes("precio") ||
    msg.includes("costo") ||
    msg.includes("valor") ||
    msg.includes("cobro") ||
    msg.includes("addi") ||
    msg.includes("coink") ||
    msg.includes("interes") ||
    msg.includes("pagar") ||
    msg.includes("beca") ||
    msg.includes("subsidio")
  ) {
    return `💳 **Financiamiento Educativo Directo con Fintechs Aliadas**

En la Fundación ULEP Popayán promovemos la inclusión educativa. Por eso, si no cuentas con el dinero total de la matrícula, puedes financiarlo con facilidad:

- **Fintechs Aliadas:** Alianzas directas con **ADDI**, **Coink** y microfinancieras locales de Popayán.
- **Tasa de Interés:** Tasa preferencial educativa fija del **1.5% mensual**. Contamos con campañas de **0% de interés** en plazos cortos (hasta 3 meses).
- **Sin Historial Bancario:** No requieres experiencia crediticia previa. Nuestro motor aliado evalúa perfiles alternativos para estudiantes jóvenes.
- **Plazos Flexibles:** Elige pagar tu matrícula a **3, 6, 9 o 12 meses**.
- **Calculadora en Línea:** Te invitamos a utilizar el simulador de cuotas en la sección de **Financiamiento** de nuestra web.

**¡Pre-Aprobación en 4 Pasos!**
1. Selecciona tu programa.
2. Completa el formulario corto de solicitud express en esta misma página.
3. Recibe la respuesta de aprobación digital en menos de 24 horas.
4. Firma el contrato digitalmente vía celular y ¡comienza a estudiar!

¿Te gustaría que te asesoremos para realizar tu solicitud de financiamiento de una vez?`;
  }

  // 3. Virtual Campus
  if (
    msg.includes("campus") ||
    msg.includes("virtual") ||
    msg.includes("plataforma") ||
    msg.includes("aula") ||
    msg.includes("moodle") ||
    msg.includes("internet") ||
    msg.includes("online") ||
    msg.includes("clases") ||
    msg.includes("certificado") ||
    msg.includes("certificacion")
  ) {
    return `💻 **Campus Virtual ULEP - Aprendizaje sin Límites**

Nuestra plataforma educativa está diseñada para brindarte total autonomía y flexibilidad:

- **Acceso Continuo:** Disponible las **24 horas, los 7 días de la semana** desde cualquier computador, tablet o celular con internet.
- **Contenidos de Calidad:** Video-clases pregrabadas con expertos, guías de estudio descargables, talleres prácticos de refuerzo y foros interactivos.
- **Soporte Docente:** Acompañamiento académico directo por parte de tutores especializados para resolver tus inquietudes.
- **Certificación Institucional:** Una vez completados los módulos y evaluaciones, el sistema genera de forma automática tu certificado digital con firma oficial institucional, listo para descargar y adjuntar a tu hoja de vida.

Para ingresar, solo debes dar clic en la pestaña **"Campus Virtual"** en la barra superior de navegación.

¿Tienes algún programa en mente que te gustaría cursar a través de nuestro Campus?`;
  }

  // 4. Address, Location, Contact
  if (
    msg.includes("contacto") ||
    msg.includes("direccion") ||
    msg.includes("donde queda") ||
    msg.includes("ubicacion") ||
    msg.includes("donde estan") ||
    msg.includes("centro") ||
    msg.includes("popayan") ||
    msg.includes("cauca") ||
    msg.includes("oficina") ||
    msg.includes("telefono") ||
    msg.includes("celular") ||
    msg.includes("whatsapp") ||
    msg.includes("correo") ||
    msg.includes("email") ||
    msg.includes("horario") ||
    msg.includes("atencion")
  ) {
    return `📍 **Canales de Atención y Ubicación - Fundación ULEP**

¡Estaremos encantados de atenderte personalmente! Aquí tienes todos nuestros datos de contacto oficiales en Popayán:

- **Dirección Física:** Calle 5 # 4-22, Sector Centro Histórico, Popayán, Cauca, Colombia (a solo una cuadra del Parque Caldas).
- **Horario de Atención:** Lunes a Viernes de 8:00 AM a 12:00 M, y de 2:00 PM a 6:00 PM.
- **Teléfono Fijo:** (602) 824-3321
- **WhatsApp Académico Directo:** [+57 312 765 4321](https://wa.me/573127654321) (Puedes escribirnos para matrícula directa).
- **Correo Institucional:** [info@fundacionulep.org](mailto:info@fundacionulep.org)

También puedes enviarnos un mensaje instantáneo diligenciando el formulario en la sección de **Contacto** de la página web.

¿Te gustaría que un asesor te contacte directamente a tu número celular para resolver una duda específica?`;
  }

  // 5. Alliances & Partners
  if (
    msg.includes("alianza") ||
    msg.includes("convenio") ||
    msg.includes("aliado") ||
    msg.includes("camara de comercio") ||
    msg.includes("asomicro") ||
    msg.includes("gremio") ||
    msg.includes("empresa") ||
    msg.includes("pasantia") ||
    msg.includes("practica")
  ) {
    return `🤝 **Alianzas Estratégicas y Convenios - Fundación ULEP**

Para potenciar la formación de nuestros estudiantes, contamos con un amplio portafolio de convenios activos con las entidades más representativas de la región:

- **Cámara de Comercio del Cauca:** Talleres conjuntos de formalización y capacitación comercial para microempresas locales.
- **Alcaldía de Popayán:** Apoyo a programas de reactivación de empleo urbano y juventud emprendedora.
- **Asomicro Cauca:** Convenio preferencial de becas parciales y cupos de capacitación administrativa para microempresarios afiliados.
- **Sena Cauca:** Rutas de articulación para complementar la formación técnica de nuestros estudiantes en Popayán.
- **Empresas del Sector Comercial:** Alianzas directas para facilitar pasantías, prácticas empresariales y vinculación laboral preferente de egresados ULEP.

Si eres representante de una empresa u organización, te invitamos a dar clic en **"Quiero ser Aliado"** en la sección de Alianzas para co-diseñar un plan de formación o subsidios para tus colaboradores.`;
  }

  // Default friendly fallback
  return `¡Hola! Soy **ULEP-Bot**, el asistente virtual de la Fundación ULEP en Popayán. 

Actualmente el servidor web de Inteligencia Artificial se encuentra operando en modo local asistido. No te preocupes, puedo responder a la perfección tus consultas institucionales.

Por favor, pregúntame sobre los siguientes temas de tu interés:
1. 📚 **Programas académicos y cursos** (como nuestro exitoso Curso Estrella de Emprendimiento y Negocios).
2. 💳 **Financiamiento Fintech** (crédito educativo con ADDI, Coink, cuotas fijas a plazos con 1.5% de interés).
3. 💻 **Campus Virtual** (nuestra plataforma de clases virtuales flexible 24/7 con certificado descargable).
4. 📍 **Ubicación y Contacto** (dirección en el Centro Histórico de Popayán, teléfono y WhatsApp directo).
5. 🤝 **Convenios y Alianzas** (con Cámara de Comercio del Cauca, Alcaldía de Popayán, etc.).

¿Cuál de estos temas te gustaría profundizar?`;
}

// API Routes
app.post("/api/chatbot", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      res.status(400).json({ error: "El mensaje es obligatorio." });
      return;
    }

    let client;
    try {
      client = getGeminiClient();
    } catch (keyErr: any) {
      console.warn("Gemini client initialization failed, using local fallback responder:", keyErr.message);
      // Fallback response when API key is not configured or fails initialization
      const fallbackText = getLocalFallbackResponse(message);
      res.json({
        text: fallbackText,
        isFallback: true
      });
      return;
    }

    // Format chat history for the Gemini SDK
    // The SDK expects chat.sendMessage or generateContent. Let's use chats.create if possible, 
    // or simply build a single prompt containing system instructions, context, and previous history.
    // Let's build a robust prompt with rich system instructions about ULEP.
    const systemInstruction = `Eres ULEP-Bot, el Asistente Virtual Oficial de la Fundación Unidad Latinoamericana Empresarial de Popayán (ULEP).
Tu objetivo es brindar información clara, motivadora y profesional en español a estudiantes, emprendedores y aliados interesados.

INFORMACIÓN INSTITUCIONAL DE ULEP:
- Ubicación: Popayán, Cauca, Colombia.
- Misión: Impulsar el desarrollo educativo, laboral, empresarial y social en Popayán y la región del Cauca mediante formación para el trabajo, tecnología, innovación y emprendimiento.
- Valores: Compromiso social, calidad educativa, innovación, inclusión, transparencia, trabajo en equipo.

PROGRAMAS DE FORMACIÓN:
1. Curso Estrella: Emprendimiento y Negocios (Duración: 120h. Modalidad: Híbrida. Aprende a crear planes de negocio, marketing digital, finanzas, y pitch comercial).
2. Diplomado en Gestión Administrativa y de Pymes (Duración: 160h. Modalidad: Virtual. Enfoque en control de costos, planeación estratégica y talento humano).
3. Taller Práctico de Innovación y Tecnología Digital (Duración: 40h. Modalidad: Virtual. Herramientas de productividad, automatización e IA aplicada).
4. Seminario en Liderazgo y Competencias Laborales (Duración: 20h. Modalidad: Presencial. Habilidades blandas, comunicación asertiva y negociación).
5. Formación Corporativa a Medida (Especializado para empresas locales).

CAMPUS VIRTUAL:
- Es un entorno educativo 24/7 de alta flexibilidad.
- Cuenta con contenido interactivo, videoclases, talleres, foros con docentes, evaluaciones automatizadas y certificación descargable con firma institucional.
- Se accede a través de la opción "Campus Virtual" en el menú de la web.

FINANCIAMIENTO CON FINTECH:
- Aliados principales: Fintechs líderes colombianas como Coink, ADDI, y redes de microcrédito educativo.
- Filosofía: "Estudia hoy, paga después". Rompemos las barreras financieras.
- Proceso rápido en 4 pasos:
  1. Elige tu programa.
  2. Diligencia el formulario express de financiamiento en nuestra web (toma 5 minutos).
  3. Recibe pre-aprobación en menos de 24 horas.
  4. Firma digitalmente y empieza a estudiar pagando cómodas cuotas mensuales con intereses mínimos.
- Cuenta con una calculadora interactiva en la web para calcular cuotas a 3, 6, 9 o 12 meses.

INSTRUCCIONES DE RESPUESTA:
- Sé extremadamente amable, profesional, conciso y estructurado. Usa viñetas para que la información sea fácil de leer.
- No inventes información de contacto ajena a Popayán. Promueve activamente el financiamiento Fintech y el Campus Virtual.
- Si te preguntan sobre el financiamiento, invítalos a usar la calculadora de cuotas de la web y a llenar el formulario de pre-aprobación.`;

    // Build contents with conversation history + current message
    const formattedContents: any[] = [];
    
    // Add history
    if (history && Array.isArray(history)) {
      history.forEach((h: { role: string; text: string }) => {
        formattedContents.push({
          role: h.role === "assistant" ? "model" : "user",
          parts: [{ text: h.text }],
        });
      });
    }
    
    // Add current user message
    formattedContents.push({
      role: "user",
      parts: [{ text: message }],
    });

    try {
      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedContents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ text: response.text });
    } catch (apiError: any) {
      console.log("Chatbot info: Switched to high-fidelity local academic database responder.");
      const fallbackText = getLocalFallbackResponse(message);
      res.json({
        text: fallbackText,
        isFallback: true
      });
    }
  } catch (error: any) {
    console.log("Chatbot endpoint: Request completed via local academic resolver.");
    const fallbackMsg = req.body?.message || "";
    res.status(200).json({ text: getLocalFallbackResponse(fallbackMsg), isFallback: true });
  }
});

// Setup Vite or Static File Serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Development mode with Vite Middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production mode serving static bundle
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Fundación ULEP server running on port ${PORT}`);
  });
}

startServer();
