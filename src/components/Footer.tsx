import React, { useState } from "react";
import { GraduationCap, Mail, Send, CheckCircle2, ChevronRight, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Legal Modals State
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
    }, 1000);
  };

  const handleResetSub = () => {
    setSubscribed(false);
  };

  return (
    <footer id="main-footer" className="bg-[#0b1329] border-t border-[#1e293b] text-slate-400 py-16 text-left relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Col 1: Brand (lg:4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => onNavClick("inicio")}>
              <div className="h-10 w-10 rounded-lg bg-brand-gold flex items-center justify-center font-bold text-brand-navy text-base font-display">
                <span>U</span>
              </div>
              <div>
                <h5 className="font-bold text-white text-lg leading-none tracking-tight font-display">ULEP</h5>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block mt-1 font-semibold">Fundación Empresarial</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              La Fundación Unidad Latinoamericana Empresarial de Popayán (ULEP) impulsa el desarrollo social, educativo y empresarial de Popayán y el Cauca mediante programas curriculares prácticos orientados al trabajo digno e innovación tecnológica.
            </p>

            {/* Social Links Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800 hover:bg-brand-navy border border-slate-700 hover:border-brand-gold hover:text-brand-gold text-slate-300 rounded-lg transition-colors" title="Facebook ULEP">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800 hover:bg-brand-navy border border-slate-700 hover:border-brand-gold hover:text-brand-gold text-slate-300 rounded-lg transition-colors" title="Instagram ULEP">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800 hover:bg-brand-navy border border-slate-700 hover:border-brand-gold hover:text-brand-gold text-slate-300 rounded-lg transition-colors" title="LinkedIn ULEP">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-800 hover:bg-brand-navy border border-slate-700 hover:border-brand-gold hover:text-brand-gold text-slate-300 rounded-lg transition-colors" title="YouTube ULEP">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (lg:2.5) */}
          <div className="lg:col-span-2.5 space-y-4">
            <h6 className="text-xs uppercase tracking-wider font-bold text-white font-display">Secciones</h6>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "quienes-somos", label: "Quiénes Somos" },
                { id: "programas", label: "Programas de Formación" },
                { id: "campus-virtual", label: "Campus Virtual ULEP" },
                { id: "financiamiento", label: "Financiamiento Fintech" },
                { id: "alianzas", label: "Alianzas Estratégicas" },
                { id: "noticias", label: "Noticias & Boletines" },
                { id: "contacto", label: "Atención y Contacto" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavClick(link.id)}
                    className="hover:text-brand-gold transition-colors cursor-pointer flex items-center space-x-1"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Credentials (lg:2.5) */}
          <div className="lg:col-span-2.5 space-y-4 text-xs font-light">
            <h6 className="text-xs uppercase tracking-wider font-bold text-white font-display">Contacto</h6>
            <div className="space-y-3 leading-relaxed text-slate-400">
              <p>
                <strong className="text-slate-250">Oficina Principal:</strong><br />
                Calle 5 # 4-22, Sector Centro Histórico, Popayán, Cauca, Colombia
              </p>
              <p>
                <strong className="text-slate-250">Teléfonos:</strong><br />
                Fijo: (602) 824-3321<br />
                WhatsApp: +57 312 765 4321
              </p>
              <p>
                <strong className="text-slate-250">Correo Admisiones:</strong><br />
                <a href="mailto:info@fundacionulep.org" className="hover:text-white transition-colors">info@fundacionulep.org</a>
              </p>
            </div>
          </div>

          {/* Col 4: Newsletter Email (lg:3) */}
          <div className="lg:col-span-3 space-y-4">
            <h6 className="text-xs uppercase tracking-wider font-bold text-white font-display">Boletín Informativo</h6>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              Suscríbete a nuestra gaceta mensual para recibir convocatorias de becas gratuitas, ofertas académicas e invitaciones a foros de empleo.
            </p>

            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form
                  key="f-sub"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubscribe}
                  className="space-y-2 text-left"
                >
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Tu correo electrónico"
                      className="w-full bg-[#111c3a] border border-[#1e293b] rounded-lg pl-4 pr-11 py-3 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                    />
                    <button
                      type="submit"
                      className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-brand-gold hover:bg-brand-gold-dark text-brand-navy rounded-md flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
                      title="Suscribirse"
                    >
                      <Send className="w-3.5 h-3.5 stroke-[2px]" />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="f-sub-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-3 rounded-lg flex items-start space-x-2 text-xs"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <h6 className="font-bold">¡Suscrito Correctamente!</h6>
                    <button onClick={handleResetSub} className="text-[10px] underline hover:text-white mt-1 block font-semibold">
                      Suscribir otro correo
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#1e293b] flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 font-light gap-4">
          <p>© 2026 Fundación Unidad Latinoamericana Empresarial de Popayán ULEP. Todos los derechos reservados.</p>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
            <span>•</span>
            <button
              onClick={() => setShowTermsModal(true)}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Términos de Uso
            </button>
          </div>
        </div>

      </div>

      {/* Legals privacy policy modal */}
      <AnimatePresence>
        {showPrivacyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPrivacyModal(false)}
              className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full max-w-lg bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-2xl text-left text-slate-700 space-y-4 text-xs md:text-sm max-h-[80vh] overflow-y-auto"
            >
              <h4 className="text-lg font-bold text-brand-navy font-display">Política de Privacidad y Tratamiento de Datos</h4>
              <p className="font-light leading-relaxed">
                De conformidad con la Ley 1581 de 2012 de Habeas Data en Colombia, la Fundación ULEP es responsable del tratamiento de los datos recolectados en su portal web (formularios de contacto, pre-inscripción y pre-aprobación fintech).
              </p>
              <p className="font-light leading-relaxed">
                Sus datos personales serán utilizados única y exclusivamente para:
              </p>
              <ul className="list-disc pl-5 space-y-1 font-light">
                <li>Asesoría personalizada en programas de formación de ULEP.</li>
                <li>Gestión de pre-aprobación express con las entidades Fintech aliadas autorizadas por usted.</li>
                <li>Envío de alertas de clase en el Campus Virtual.</li>
                <li>Envío de boletines académicos periódicos.</li>
              </ul>
              <p className="font-light leading-relaxed">
                Usted puede ejercer su derecho a conocer, actualizar, rectificar o solicitar la eliminación de sus datos escribiendo directamente a <strong className="text-brand-navy font-bold">datos@fundacionulep.org</strong>.
              </p>
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="px-5 py-2.5 rounded-lg bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs cursor-pointer shadow-md transition-colors"
                >
                  Entendido y Aceptar
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Legals terms of use modal */}
        {showTermsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTermsModal(false)}
              className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full max-w-lg bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-2xl text-left text-slate-700 space-y-4 text-xs md:text-sm max-h-[80vh] overflow-y-auto"
            >
              <h4 className="text-lg font-bold text-brand-navy font-display">Términos y Condiciones de Uso del Campus Virtual</h4>
              <p className="font-light leading-relaxed">
                El acceso a la plataforma educativa Campus Virtual ULEP está sujeto a los siguientes lineamientos institucionales:
              </p>
              <ul className="list-decimal pl-5 space-y-1 font-light">
                <li><strong className="text-brand-navy font-bold">Derecho de Uso:</strong> El contenido multimedia y guías son propiedad intelectual de la Fundación ULEP. Está prohibida su copia o redistribución comercial no autorizada.</li>
                <li><strong className="text-brand-navy font-bold">Comportamiento en Foros:</strong> Los estudiantes se comprometen a interactuar con respeto, tolerancia y asertividad hacia compañeros y docentes.</li>
                <li><strong className="text-brand-navy font-bold">Emisión de Certificados:</strong> Los diplomas se otorgan automáticamente al culminar el 100% de las clases del módulo y obtener el puntaje mínimo requerido en la prueba de aptitudes.</li>
              </ul>
              <p className="font-light leading-relaxed">
                Cualquier intento de alteración o plagio en las evaluaciones virtuales acarreará la suspensión definitiva de los derechos académicos en la fundación.
              </p>
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setShowTermsModal(false)}
                  className="px-5 py-2.5 rounded-lg bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs cursor-pointer shadow-md transition-colors"
                >
                  Entendido y Aceptar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
