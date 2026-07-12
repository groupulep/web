import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle2, Send, HeartHandshake, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactProps {
  onSuccess: (name: string) => void;
  defaultSubject?: string;
}

export default function Contact({ onSuccess, defaultSubject = "General" }: ContactProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState(defaultSubject);
  const [message, setMessage] = useState("");
  
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    
    if (!fullName || !email || !phone || !message) {
      setErrorMessage("Por favor diligencia todos los campos obligatorios.");
      return;
    }

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSendSuccess(true);
      onSuccess(fullName);
    }, 1500);
  };

  const handleResetForm = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setSubject("General");
    setMessage("");
    setErrorMessage("");
    setSendSuccess(false);
  };

  return (
    <section id="contacto" className="py-24 bg-white text-slate-800 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-brand-gold-dark border-b-2 border-brand-gold pb-1 mb-4 inline-block">
            Atención al Usuario
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-4 tracking-tight font-display">
            Contáctanos y Resuelve tus Dudas
          </h3>
          <p className="text-slate-600 font-light mt-3 text-sm sm:text-base">
            Estamos listos para asesorarte sobre matrículas, requisitos, opciones de financiamiento directo o convenios institucionales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column A (lg:5): Localized Physical Info & Embedded Google Map */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-brand-navy flex items-center space-x-2 font-display">
                <HeartHandshake className="w-5 h-5 text-brand-gold shrink-0" />
                <span>Atención en Popayán</span>
              </h4>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Nuestras oficinas centrales están situadas en el corazón colonial de la capital caucana, con cómodos horarios de atención al público.
              </p>
            </div>

            {/* List with icons */}
            <div className="space-y-5 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start space-x-3.5">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-brand-navy font-display">Dirección Física</h5>
                  <p className="text-slate-600 font-light mt-1">Calle 5 # 4-22, Sector Centro Histórico, Popayán, Cauca, Colombia</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Clock className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-brand-navy font-display">Horario de Atención</h5>
                  <p className="text-slate-600 font-light mt-1">Lunes a Viernes: 8:00 AM - 12:00 M | 2:00 PM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-extrabold text-brand-navy font-display">Contacto Telefónico & WhatsApp</h5>
                  <p className="text-slate-500 font-light mt-1">Línea Fija: (602) 824-3321</p>
                  <p className="text-brand-navy font-bold mt-1 text-xs uppercase tracking-wider">
                    <a href="https://wa.me/573127654321" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold-dark transition-colors inline-flex items-center space-x-1">
                      <span>WhatsApp Académico: +57 312 765 4321</span>
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-extrabold text-brand-navy font-display">Correo Institucional</h5>
                  <p className="text-slate-500 font-light mt-1 hover:text-brand-gold-dark transition-colors">
                    <a href="mailto:info@fundacionulep.org">info@fundacionulep.org</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Real Google Map embedded iframe */}
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 p-1.5 aspect-video w-full">
              <iframe
                title="Ubicación Fundación ULEP Popayán"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.082725064732!2d-76.60920448550186!3d2.441914198220556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e300311c0000001%3A0x6b403d58285fb20b!2sParque%20Caldas!5e0!3m2!1ses!2sco!4v1680000000000!5m2!1ses!2sco"
                className="w-full h-full rounded-lg border-0 opacity-90 hover:opacity-100 transition-opacity"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Column B (lg:7): Active Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 md:p-8 text-left shadow-sm">
            <AnimatePresence mode="wait">
              {!sendSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <h4 className="text-xl font-bold text-brand-navy flex items-center space-x-2 font-display">
                    <MessageSquare className="w-5 h-5 text-brand-gold shrink-0" />
                    <span>Escríbenos tu Mensaje</span>
                  </h4>
                  <p className="text-xs text-slate-600 font-light">
                    Diligencia este formulario y nuestro equipo de admisiones o bienestar estudiantil te dará respuesta prioritaria.
                  </p>

                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center space-x-2 animate-pulse font-medium">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-brand-navy mb-1.5 tracking-wider">Nombre Completo *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Ej. María Helena Ordóñez"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-brand-navy mb-1.5 tracking-wider">WhatsApp / Celular *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Ej. 314 555 4321"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-brand-navy mb-1.5 tracking-wider">Correo Electrónico *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Ej. maria@ejemplo.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-brand-navy mb-1.5 tracking-wider">Asunto / Tipo Consulta</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
                      >
                        <option value="General">Información General</option>
                        <option value="Inscripciones">Admisiones e Inscripciones</option>
                        <option value="Financiamiento">Financiamiento Educativo Fintech</option>
                        <option value="Alianzas">Alianzas y Convenios Corporativos</option>
                        <option value="Soporte">Soporte Técnico Campus Virtual</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase text-brand-navy mb-1.5 tracking-wider">Mensaje o Consulta *</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Redacta detalladamente tu consulta, duda académica o propuesta de alianza empresarial."
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full py-4 rounded-lg bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2.5 cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                    >
                      {isSending ? (
                        <>
                          <div className="h-4 w-4 border-2 border-brand-gold border-t-transparent rounded-full animate-spin mr-2"></div>
                          <span>Enviando mensaje...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar Mensaje Institucional</span>
                          <Send className="w-4 h-4 text-brand-gold stroke-[2px]" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                /* Success screen */
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="h-16 w-16 bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mx-auto rounded-full">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-2xl font-black text-brand-navy font-display">¡Mensaje Enviado Exitosamente!</h4>
                    <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                      Muchas gracias por escribirnos, <strong>{fullName}</strong>. Hemos registrado tu consulta sobre <strong>{subject}</strong>. Un asesor de la Fundación ULEP Popayán se contactará contigo vía WhatsApp o correo electrónico en un lapso no mayor a 24 horas.
                    </p>
                  </div>

                  <div className="pt-4 max-w-sm mx-auto">
                    <button
                      onClick={handleResetForm}
                      className="w-full py-3.5 rounded-2xl bg-slate-50 border-2 border-slate-150 hover:bg-slate-100 text-slate-500 font-bold text-xs uppercase tracking-widest cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Enviar otra Consulta
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
