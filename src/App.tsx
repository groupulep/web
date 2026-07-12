import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Programs from "./components/Programs";
import CampusVirtual from "./components/CampusVirtual";
import Financing from "./components/Financing";
import Partners from "./components/Partners";
import NewsAndEvents from "./components/NewsAndEvents";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import { Program } from "./types";
import { CheckCircle2, Star, Sparkles, BookOpen, Clock, Award, X, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");
  
  // Pre-inscription Modal state
  const [enrollProgram, setEnrollProgram] = useState<Program | null>(null);
  const [enrollName, setEnrollName] = useState("");
  const [enrollEmail, setEnrollEmail] = useState("");
  const [enrollPhone, setEnrollPhone] = useState("");
  const [enrollSuccess, setEnrollSuccess] = useState(false);

  // General Notification Alert State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Trigger toast notification
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // Handle tab and navigation state
  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenCampusDirect = () => {
    window.open("https://ulep.milaulas.com", "_blank", "noopener,noreferrer");
    triggerToast("Abriendo Campus Virtual ulep.milaulas.com en pestaña nueva.");
  };

  const handleOpenFinancingDirect = () => {
    handleScrollTo("financiamiento");
    triggerToast("¡Simula tus cuotas de financiamiento aquí!");
  };

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enrollName || !enrollEmail || !enrollPhone) {
      alert("Por favor completa todos los campos del formulario.");
      return;
    }

    setEnrollSuccess(true);
    triggerToast(`¡Postulación exitosa a ${enrollProgram?.title}! Revisa tu correo.`);
  };

  const handleResetEnroll = () => {
    setEnrollProgram(null);
    setEnrollName("");
    setEnrollEmail("");
    setEnrollPhone("");
    setEnrollSuccess(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased overflow-x-hidden flex flex-col justify-between">
      
      <div>
        {/* Dynamic Toast Alerts */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] max-w-sm sm:max-w-md w-full px-4"
            >
              <div className="bg-white border border-blue-100 text-blue-900 p-4 rounded-2xl shadow-xl flex items-start space-x-3 text-left">
                <CheckCircle2 className="w-5.5 h-5.5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-xs uppercase tracking-wider text-blue-900">Notificación ULEP</h5>
                  <p className="text-xs text-slate-600 mt-1 leading-normal font-light">{toastMessage}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 1. Barra de Navegación Institucional (Header) */}
        <Header
          onNavClick={handleScrollTo}
          activeSection={activeSection}
          onOpenCampus={handleOpenCampusDirect}
          onOpenFinancing={handleOpenFinancingDirect}
        />

        {/* 2. Main Content Sections */}
        <main className="pt-20">
          {activeSection === "inicio" && (
            <>
              <Hero
                onLearnMore={() => handleScrollTo("programas")}
                onApplyNow={() => handleScrollTo("programas")}
              />
              <Testimonials />
            </>
          )}
          {activeSection === "quienes-somos" && (
            <AboutUs
              onLearnMorePrograms={() => handleScrollTo("programas")}
            />
          )}
          {activeSection === "programas" && (
            <Programs
              onPreInscribe={(prog) => setEnrollProgram(prog)}
            />
          )}
          {activeSection === "financiamiento" && (
            <Financing
              selectedDefaultProgram={enrollProgram}
              onPreInscribeWithProgram={(prog) => setEnrollProgram(prog)}
            />
          )}
          {activeSection === "alianzas" && (
            <Partners
              onContactAlliance={() => handleScrollTo("contacto")}
            />
          )}
          {activeSection === "campus-virtual" && (
            <CampusVirtual
              onContactSupport={() => handleScrollTo("contacto")}
            />
          )}
          {activeSection === "noticias" && (
            <NewsAndEvents
              onRegisterEventSuccess={(title) => triggerToast(`¡Registro confirmado al evento: "${title}"!`)}
            />
          )}
          {activeSection === "contacto" && (
            <Contact
              onSuccess={(name) => triggerToast(`¡Mensaje enviado, gracias ${name}! Asesor asignado.`)}
            />
          )}

          {/* Dedicated Final Call to Action */}
          <section className="bg-brand-navy py-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight font-display">
                Tu Futuro Profesional Comienza Aquí
              </h2>
              <p className="text-slate-300 font-light text-lg mb-10 max-w-2xl mx-auto">
                No esperes más para adquirir las habilidades que el mercado laboral exige. Únete a los más de 1200 egresados que ya transformaron sus vidas con la Fundación ULEP.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => handleScrollTo("programas")}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-gold to-brand-gold-dark text-white font-black uppercase tracking-widest text-xs transition-transform hover:scale-[1.03] active:scale-[0.97] shadow-xl shadow-brand-blue/20 cursor-pointer"
                >
                  Explorar Programas
                </button>
                <button
                  onClick={handleOpenFinancingDirect}
                  className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 font-black uppercase tracking-widest text-xs transition-transform hover:scale-[1.03] active:scale-[0.97] backdrop-blur-sm cursor-pointer"
                >
                  Simular Financiamiento
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* 11. Footer / Pie de Página */}
      <Footer
        onNavClick={handleScrollTo}
      />

      {/* 12. Floating Chatbot Assistant */}
      <Chatbot />

      {/* ====================================================================== */}
      {/* GLOBAL DEDICATED PRE-INSCRIPTION ENROLLMENT DIALOG MODAL                 */}
      {/* ====================================================================== */}
      <AnimatePresence>
        {enrollProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleResetEnroll}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 md:p-8 text-left overflow-hidden"
            >
              <button
                onClick={handleResetEnroll}
                className="absolute top-6 right-6 p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors"
              >
                ✕
              </button>

              <AnimatePresence mode="wait">
                {!enrollSuccess ? (
                  /* Form flow */
                  <motion.form
                    key="enroll-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleEnrollSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded">
                        Formulario de Matrícula 2026
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 mt-3">Postulación de Matrícula</h4>
                      <p className="text-xs text-slate-500 mt-1 leading-normal">
                        Estás solicitando ingreso al programa: <strong className="text-slate-800">{enrollProgram.title}</strong>
                      </p>
                    </div>

                    <div className="space-y-3.5">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">Nombre Completo *</label>
                        <input
                          type="text"
                          required
                          value={enrollName}
                          onChange={(e) => setEnrollName(e.target.value)}
                          placeholder="Ej. Juan Pérez Medina"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">Correo Electrónico *</label>
                        <input
                          type="email"
                          required
                          value={enrollEmail}
                          onChange={(e) => setEnrollEmail(e.target.value)}
                          placeholder="Ej. juan@correo.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">Celular WhatsApp *</label>
                        <input
                          type="tel"
                          required
                          value={enrollPhone}
                          onChange={(e) => setEnrollPhone(e.target.value)}
                          placeholder="Ej. 312 765 4321"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 space-y-2 text-xs text-slate-600">
                      <div className="flex justify-between">
                        <span>Duración:</span>
                        <span className="text-slate-800 font-bold">{enrollProgram.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Modalidad:</span>
                        <span className="text-slate-800 font-bold">{enrollProgram.modality}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Costo Académico:</span>
                        <span className="text-blue-700 font-extrabold">
                          {enrollProgram.price === 0 ? "Gratuito (Beca)" : `$${enrollProgram.price.toLocaleString()} COP`}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col gap-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm transition-all"
                      >
                        Enviar Postulación de Matrícula
                      </button>
                      {enrollProgram.price > 0 && (
                        <button
                          type="button"
                          onClick={() => {
                            const p = enrollProgram;
                            handleResetEnroll();
                            handleScrollTo("financiamiento");
                            triggerToast(`Simulador cargado con ${p.title}.`);
                          }}
                          className="w-full py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs text-center flex items-center justify-center space-x-1 border border-slate-200"
                        >
                          <span>Solicitar Financiamiento Fintech</span>
                        </button>
                      )}
                    </div>
                  </motion.form>
                ) : (
                  /* Success Flow */
                  <motion.div
                    key="enroll-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-6 text-center space-y-6"
                  >
                    <div className="h-16 w-16 bg-blue-100 text-blue-600 flex items-center justify-center mx-auto rounded-full">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-slate-900">¡Postulación Recibida!</h4>
                      <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                        Excelente elección, <strong>{enrollName}</strong>. Hemos registrado tu postulación de ingreso al programa <strong>{enrollProgram.title}</strong> de la Fundación ULEP.
                      </p>
                      <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed mt-2 font-light">
                        Un correo institucional con tu comprobante académico y el código único de seguimiento ha sido despachado a <strong className="text-slate-800">{enrollEmail}</strong>. Un asesor te llamará en las próximas horas para coordinar tu inducción.
                      </p>
                    </div>

                    <div className="pt-4 flex gap-2">
                      {enrollProgram.price > 0 && (
                        <button
                          onClick={() => {
                            handleResetEnroll();
                            handleScrollTo("financiamiento");
                          }}
                          className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs"
                        >
                          Calcular Cuotas Fintech
                        </button>
                      )}
                      <button
                        onClick={handleResetEnroll}
                        className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs"
                      >
                        Finalizar e ir al Portal
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
