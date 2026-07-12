import React, { useState, useEffect } from "react";
import { Wallet, CheckSquare, Clock, FileText, ChevronRight, CheckCircle2, ShieldAlert, Sparkles, Send, HelpCircle, MessageCircle } from "lucide-react";
import { Program } from "../types";
import { PROGRAMS_DATA } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface FinancingProps {
  onPreInscribeWithProgram?: (program: Program) => void;
  selectedDefaultProgram?: Program | null;
}

export default function Financing({ onPreInscribeWithProgram, selectedDefaultProgram }: FinancingProps) {
  // Programs for dropdown
  const programsList = PROGRAMS_DATA.filter(p => p.price > 0);

  // Form State
  const [fullName, setFullName] = useState("");
  const [docId, setDocId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedProgramId, setSelectedProgramId] = useState(programsList[0]?.id || "");
  const [financeAmount, setFinanceAmount] = useState(programsList[0]?.price || 320000);
  const [installments, setInstallments] = useState(6); // 3, 6, 9, 12 months

  // Survey Questionnaire State
  const [eduLevel, setEduLevel] = useState("Bachiller");
  const [laborState, setLaborState] = useState("Trabajador Independiente/Emprendedor");
  const [paymentPlan, setPaymentPlan] = useState("Ingresos de mi propio negocio");
  const [motivation, setMotivation] = useState("Para crear y estructurar mi propio negocio");

  // Calculation State
  const interestRate = 0.015; // 1.5% monthly flat interest
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  // Application Status State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationResult, setApplicationResult] = useState<any | null>(null);

  // Synchronize amount when program changes
  useEffect(() => {
    const prog = PROGRAMS_DATA.find(p => p.id === selectedProgramId);
    if (prog) {
      setFinanceAmount(prog.price);
    }
  }, [selectedProgramId]);

  // Handle external selection sync
  useEffect(() => {
    if (selectedDefaultProgram && selectedDefaultProgram.price > 0) {
      setSelectedProgramId(selectedDefaultProgram.id);
      setFinanceAmount(selectedDefaultProgram.price);
    }
  }, [selectedDefaultProgram]);

  // Amortization calculation logic
  useEffect(() => {
    // Basic flat rate formula: (Amount / Installments) + (Amount * InterestRate)
    const principalPay = financeAmount / installments;
    const interestPay = financeAmount * interestRate;
    const monthly = Math.round(principalPay + interestPay);
    
    const total = monthly * installments;
    const interest = total - financeAmount;

    setMonthlyPayment(monthly);
    setTotalCost(total);
    setTotalInterest(interest);
  }, [financeAmount, installments]);

  const handleApplyFinance = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !docId || !email || !phone) {
      alert("Por favor diligencia todos los campos del formulario.");
      return;
    }

    setIsSubmitting(true);

    const programTitle = PROGRAMS_DATA.find(p => p.id === selectedProgramId)?.title || "Programa de Formación";
    const appId = `ULEP-FT-${Math.floor(Math.random() * 900000 + 100000)}`;
    const dateStr = new Date().toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" });

    // Format WhatsApp message
    const messageText = `¡Hola, Fundación ULEP! 👋

Deseo solicitar financiamiento educativo para mi capacitación en Popayán. Aquí está mi encuesta de datos completada:

📝 DATOS PERSONALES
- Nombre Completo: ${fullName}
- Cédula de Ciudadanía: ${docId}
- Correo Electrónico: ${email}
- Teléfono Celular: ${phone}

📚 DETALLES DEL PROGRAMA
- Curso/Diplomado: ${programTitle}
- Valor del Programa: $${financeAmount.toLocaleString()} COP
- Plazo Solicitado: ${installments} meses
- Cuota Mensual Estimada: $${monthlyPayment.toLocaleString()} COP

📋 ENCUESTA DE ADMISIÓN
- Nivel de Estudios: ${eduLevel}
- Situación Laboral: ${laborState}
- Plan de Pago: ${paymentPlan}
- Motivación: ${motivation}

ID de Referencia: ${appId}
Fecha de Solicitud: ${dateStr}

Agradezco su atención y quedo atento a la validación de mi matrícula digital.`;

    const encodedText = encodeURIComponent(messageText);
    const whatsappLink = `https://api.whatsapp.com/send?phone=573127654321&text=${encodedText}`;

    // Simulate digital credit risk engine scoring in 2 seconds
    setTimeout(() => {
      setIsSubmitting(false);
      setApplicationResult({
        fullName,
        docId,
        programTitle,
        financeAmount,
        installments,
        monthlyPayment,
        interestRate: "1.5% mensual",
        status: "Pre-Aprobado",
        applicationId: appId,
        date: dateStr,
        whatsappUrl: whatsappLink,
        survey: {
          eduLevel,
          laborState,
          paymentPlan,
          motivation
        }
      });

      // Try automatic redirection (pop-ups might be blocked by browsers, which is why we show the manual button as fallback)
      try {
        window.open(whatsappLink, "_blank", "noopener,noreferrer");
      } catch (err) {
        console.warn("Auto-redirect was blocked by the browser. User can click the green button.");
      }
    }, 1800);
  };

  const steps = [
    {
      icon: <CheckSquare className="w-6 h-6 text-blue-600" />,
      title: "1. Elige tu Programa",
      desc: "Navega por nuestra variada oferta de diplomados o cursos e identifica el que deseas cursar."
    },
    {
      icon: <FileText className="w-6 h-6 text-indigo-600" />,
      title: "2. Diligencia la Solicitud",
      desc: "Completa el formulario en línea que toma menos de cinco minutos con tus datos personales."
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-blue-light" />,
      title: "3. Pre-Aprobación Express",
      desc: "Nuestro motor de riesgo aliado evaluará tu postulación y te dará respuesta en menos de 24 horas."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-teal-600" />,
      title: "4. Firma Digital y Empieza",
      desc: "Formaliza tu contrato mediante firma electrónica instantánea y comienza a estudiar de inmediato."
    }
  ];

  const faqs = [
    {
      q: "¿Necesito tener historial crediticio previo para aplicar?",
      a: "No. Nuestras fintechs aliadas (ADDI, Coink) emplean variables alternativas para calificar el riesgo. Estudiantes de Popayán y jóvenes sin historial bancario son bienvenidos a postularse."
    },
    {
      q: "¿Cuál es la tasa de interés promedio de los créditos?",
      a: "La tasa es preferencial para fines educativos, rondando el 1.5% mensual fijo. Además, contamos con campañas especiales de 0% de interés en plazos de hasta 3 meses."
    },
    {
      q: "¿Puedo realizar abonos extraordinarios o pagar la totalidad anticipadamente?",
      a: "Totalmente. Puedes prepagar tu saldo total en cualquier momento sin sufrir ningún tipo de sanción o cargo financiero adicional, ahorrando el pago de intereses futuros."
    },
    {
      q: "¿Qué ocurre si no puedo pagar una cuota a tiempo?",
      a: "Te invitamos a comunicarte de inmediato con nuestra área de bienestar estudiantil y apoyo financiero para reestructurar el plazo o coordinar una prórroga de pago sin cobros abusivos."
    }
  ];

  return (
    <section id="financiamiento" className="py-24 bg-white text-slate-800 relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-brand-gold-dark border-b-2 border-brand-gold pb-1 mb-4 inline-block">
            Inclusión y Facilidad de Pago
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-4 tracking-tight font-display">
            Financiamiento Educativo Fintech
          </h3>
          <p className="text-slate-600 font-light mt-3 text-sm sm:text-base">
            En la Fundación ULEP creemos que la economía no debe ser una barrera para tu capacitación. Ofrecemos opciones flexibles de microcrédito directo en alianza con las mejores fintechs del país.
          </p>
        </div>

        {/* 4 Steps Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 text-left">
          {steps.map((st, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-xl relative shadow-sm hover:border-slate-300 hover:shadow-md transition-all group">
              <div className="p-3 bg-white border border-slate-200 rounded-lg inline-block mb-4 group-hover:bg-slate-100 transition-colors">
                {st.icon}
              </div>
              <h5 className="font-bold text-brand-navy text-base mb-2 font-display">{st.title}</h5>
              <p className="text-xs text-slate-600 leading-relaxed font-light">{st.desc}</p>
            </div>
          ))}
        </div>

        {/* Dynamic Calculator & Application form split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Column A (lg:6): Interactive Calculator & Visual amortization info */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-xl text-left space-y-6 shadow-sm">
            <h4 className="text-xl font-bold text-brand-navy flex items-center space-x-2 font-display">
              <Wallet className="w-5 h-5 text-brand-gold" />
              <span>Simulador de Cuota Mensual</span>
            </h4>
            <p className="text-xs text-slate-600 font-light">
              Elige el programa de tu interés para conocer el valor total y simular tu amortización.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-brand-navy mb-1.5 tracking-wider">1. Selecciona tu Programa</label>
                <select
                  value={selectedProgramId}
                  onChange={(e) => setSelectedProgramId(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                >
                  {programsList.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.title} (${p.price.toLocaleString()} COP)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-brand-navy mb-1.5 tracking-wider">2. Plazo de Financiamiento (Meses)</label>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 6, 9, 12].map(m => (
                    <button
                      key={m}
                      onClick={() => setInstallments(m)}
                      className={`py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                        installments === m
                          ? "bg-brand-navy text-white border-brand-navy shadow-md"
                          : "bg-white text-slate-600 border-slate-300 hover:border-brand-navy hover:text-brand-navy"
                      }`}
                    >
                      {m} Meses
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculations display */}
            <div className="bg-white p-5 rounded-lg border border-slate-200 space-y-3.5 shadow-sm">
              <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
                <span className="text-xs text-slate-500 font-semibold">Inversión Base (Programa):</span>
                <span className="text-sm font-bold text-slate-800">${financeAmount.toLocaleString()} COP</span>
              </div>
              
              <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
                <span className="text-xs text-slate-500 font-semibold">Intereses Totales Estimados:</span>
                <span className="text-xs text-brand-gold-dark font-bold">+${totalInterest.toLocaleString()} COP</span>
              </div>

              <div className="flex justify-between items-center pb-2.5 border-b border-slate-100">
                <span className="text-xs text-slate-500 font-semibold">Valor Total a Financiar:</span>
                <span className="text-sm font-bold text-slate-800">${totalCost.toLocaleString()} COP</span>
              </div>

              <div className="flex justify-between items-center pt-1.5">
                <div>
                  <span className="text-[10px] text-brand-navy uppercase tracking-wider font-bold block">Cuota Mensual Fija</span>
                  <span className="text-xs text-slate-500 font-light">Tasa preferencial: {interestRate * 100}% mes</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-brand-navy font-display">${monthlyPayment.toLocaleString()} COP</span>
                  <span className="text-[10px] text-slate-500 block font-medium">por {installments} meses</span>
                </div>
              </div>
            </div>

            {/* Micro warning */}
            <div className="flex items-start space-x-2 bg-blue-50/50 p-3 rounded-xl border border-blue-100 text-[11px] text-slate-500 leading-normal font-light">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Simulación meramente informativa. Alianzas fintech directas con ADDI, Coink y microfinancieras locales de Popayán para desembolso directo.</span>
            </div>
          </div>

          {/* Column B (lg:6): Direct Pre-Approval Express Form / Amortization printout */}
          <div className="lg:col-span-6 bg-white border border-slate-200 p-6 md:p-8 rounded-xl text-left shadow-sm">
            <AnimatePresence mode="wait">
              {!applicationResult ? (
                /* Application Form */
                <motion.form
                  key="fin-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleApplyFinance}
                  className="space-y-4"
                >
                  <h4 className="text-xl font-bold text-brand-navy flex items-center space-x-2 font-display">
                    <Send className="w-5 h-5 text-brand-gold" />
                    <span>Encuesta de Financiamiento</span>
                  </h4>
                  <p className="text-xs text-slate-600 font-light">
                    Completa tus datos personales y esta breve encuesta para generar tu solicitud de crédito educativo y enviarla directamente por WhatsApp.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-brand-navy mb-1.5 tracking-wider">Nombre Completo</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Ej. Juan Pérez Medina"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-brand-navy mb-1.5 tracking-wider">Cédula de Ciudadanía</label>
                      <input
                        type="text"
                        required
                        value={docId}
                        onChange={(e) => setDocId(e.target.value)}
                        placeholder="Ej. 1061738221"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-brand-navy mb-1.5 tracking-wider">Correo Electrónico</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ej. juan@correo.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-brand-navy mb-1.5 tracking-wider">Teléfono WhatsApp</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ej. 3127654321"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                      />
                    </div>
                  </div>

                  {/* Survey Section */}
                  <div className="pt-4 border-t border-slate-200">
                    <span className="text-[10px] text-brand-navy font-bold uppercase tracking-wider block mb-3">Preguntas de la Encuesta</span>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-brand-navy mb-1.5 tracking-wider">¿Nivel de Estudios?</label>
                        <select
                          value={eduLevel}
                          onChange={(e) => setEduLevel(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                        >
                          <option value="Bachiller">Bachiller</option>
                          <option value="Técnico / Tecnólogo">Técnico / Tecnólogo</option>
                          <option value="Profesional">Profesional</option>
                          <option value="Otro">Otro nivel</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-brand-navy mb-1.5 tracking-wider">¿Situación Laboral?</label>
                        <select
                          value={laborState}
                          onChange={(e) => setLaborState(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                        >
                          <option value="Trabajador Independiente/Emprendedor">Independiente / Emprendedor</option>
                          <option value="Empleado">Empleado en empresa</option>
                          <option value="Desempleado">Desempleado</option>
                          <option value="Estudiante">Estudiante activo</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                      <div>
                        <label className="block text-xs font-bold uppercase text-brand-navy mb-1.5 tracking-wider">¿Cómo pagarás tu cuota?</label>
                        <select
                          value={paymentPlan}
                          onChange={(e) => setPaymentPlan(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                        >
                          <option value="Ingresos de mi propio negocio">Ingresos de mi propio negocio</option>
                          <option value="Mi salario / empleo actual">Mi salario / empleo actual</option>
                          <option value="Apoyo familiar o patrocinio">Apoyo de mi familia</option>
                          <option value="Ahorros personales u otros">Ahorros u otros medios</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-brand-navy mb-1.5 tracking-wider">¿Motivación del estudio?</label>
                        <select
                          value={motivation}
                          onChange={(e) => setMotivation(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                        >
                          <option value="Para crear y estructurar mi propio negocio">Crear / Estructurar mi propio negocio</option>
                          <option value="Para postularme a un nuevo empleo">Postularme a un nuevo empleo</option>
                          <option value="Para conseguir un ascenso laboral">Ascender laboralmente</option>
                          <option value="Por superación y gusto personal">Gusto personal y superación</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-lg bg-brand-navy hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center space-x-2.5 cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          <span>Procesando Encuesta y Enlace...</span>
                        </>
                      ) : (
                        <>
                          <span>Generar Solicitud y Enviar a WhatsApp 🚀</span>
                          <ChevronRight className="w-4 h-4 stroke-[3px]" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                /* Dynamic simulated pre-approval success card with WhatsApp sending instructions */
                <motion.div
                  key="fin-result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 border border-emerald-100">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded">
                      Encuesta Lista para Enviar
                    </span>
                    <h4 className="text-xl font-bold text-slate-900 mt-3">¡Encuesta Generada, {fullName.split(" ")[0]}!</h4>
                    <p className="text-xs text-slate-500 mt-1">Hemos procesado tu perfil. Haz clic abajo para enviarlo por WhatsApp.</p>
                  </div>

                  {/* Summary Sheet */}
                  <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl space-y-3 font-mono text-xs">
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">ID Solicitud:</span>
                      <span className="text-slate-800 font-bold">{applicationResult.applicationId}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Beneficiario:</span>
                      <span className="text-slate-750">{applicationResult.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500">Programa:</span>
                      <span className="text-slate-750 truncate max-w-[200px]">{applicationResult.programTitle}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-2">
                      <span className="text-slate-500 font-bold text-blue-600 font-sans">Financiación Fija:</span>
                      <span className="text-blue-600 font-bold font-sans">
                        {applicationResult.installments} cuotas de ${applicationResult.monthlyPayment.toLocaleString()} COP
                      </span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                      <span className="text-slate-500">Estudios / Trabajo:</span>
                      <span className="text-slate-600 truncate max-w-[200px]">{applicationResult.survey.eduLevel} / {applicationResult.survey.laborState}</span>
                    </div>
                  </div>

                  {/* WhatsApp Prompt */}
                  <div className="space-y-2 text-left bg-emerald-50/50 border border-emerald-100 p-4 rounded-xl">
                    <h5 className="font-bold text-slate-900 text-xs flex items-center space-x-1.5 text-emerald-800">
                      <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Acceso Directo por WhatsApp</span>
                    </h5>
                    <p className="text-[11px] text-slate-600 leading-normal font-light">
                      Tu solicitud con la encuesta ha sido estructurada. Haz clic en el botón de abajo para enviar los datos directamente a nuestro asesor académico mediante un chat seguro de WhatsApp.
                    </p>
                  </div>

                  <div className="flex flex-col gap-2.5 pt-2">
                    <a
                      href={applicationResult.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white font-black text-sm flex items-center justify-center space-x-2.5 transition-all shadow-md shadow-emerald-500/15 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <MessageCircle className="w-5 h-5 shrink-0" />
                      <span>ENVIAR SOLICITUD A WHATSAPP</span>
                    </a>
                    
                    <button
                      onClick={() => setApplicationResult(null)}
                      className="w-full py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold text-xs transition-colors border-2 border-slate-200/50 cursor-pointer"
                    >
                      Calcular Otro Programa / Llenar de nuevo
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* FAQs */}
        <div className="pt-12 border-t border-slate-200 text-left">
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <h4 className="text-2xl font-bold text-slate-900 flex items-center justify-center space-x-2">
              <HelpCircle className="w-5.5 h-5.5 text-blue-600" />
              <span>Preguntas Frecuentes sobre Financiamiento</span>
            </h4>
            <p className="text-xs text-slate-500 font-light mt-1.5">Resolvemos tus dudas principales para que estudies con total tranquilidad.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <h5 className="font-bold text-slate-900 text-sm mb-2">{faq.q}</h5>
                <p className="text-xs text-slate-500 font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
