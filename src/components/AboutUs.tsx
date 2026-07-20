import React, { useState } from "react";
import { Shield, Lightbulb, Users, Target, Award, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AboutUsIllustration } from "./illustrations/VectorIllustrations";

interface AboutUsProps {
  onLearnMorePrograms: () => void;
}

export default function AboutUs({ onLearnMorePrograms }: AboutUsProps) {
  const [showMoreModal, setShowMoreModal] = useState(false);

  const values = [
    {
      icon: <Users className="w-6 h-6 text-brand-navy" />,
      title: "Compromiso Social",
      desc: "Trabajamos por el bienestar y desarrollo de las comunidades del Cauca, impulsando oportunidades laborales y de emprendimiento real."
    },
    {
      icon: <Award className="w-6 h-6 text-brand-gold" />,
      title: "Calidad de Formación",
      desc: "Nuestros instructores y programas curriculares cumplen con altos estándares prácticos y de cara a las demandas de Popayán."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-brand-blue" />,
      title: "Innovación & Tecnología",
      desc: "Integramos herramientas digitales de vanguardia e inteligencia artificial para potenciar las ideas y procesos de negocio regionales."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      title: "Transparencia Ética",
      desc: "Garantizamos un manejo ético, claro y responsable de todos nuestros convenios, alianzas e informes de impacto institucional."
    }
  ];

  return (
    <section id="quienes-somos" className="py-24 bg-white border-t border-slate-100 text-slate-800 relative overflow-hidden">
      {/* Soft background glow blobs */}
      <div className="absolute top-1/4 -left-10 w-80 h-80 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-10 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vector illustration with golden offset and double frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              {/* Gold frame offsets */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-brand-gold pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-brand-gold pointer-events-none" />
              
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/5 to-brand-gold/5 rounded-xl blur-sm opacity-25 group-hover:opacity-40 transition-all pointer-events-none" />
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-xl bg-slate-50 p-4">
                <AboutUsIllustration />
                <div className="absolute bottom-4 right-4 bg-white/95 border border-brand-gold/60 px-3.5 py-1.5 rounded text-[10px] text-brand-gold-dark font-bold flex items-center space-x-1.5 shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-brand-gold animate-pulse"></span>
                  <span className="uppercase tracking-widest">Popayán • Suroccidente</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-bold tracking-wider uppercase text-brand-gold-dark block border-l-4 border-brand-gold pl-3">Identidad Institucional</span>
            <h3 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight leading-tight font-display">
              ¿Quiénes Somos en la Fundación ULEP?
            </h3>
            <p className="text-slate-600 font-light text-base leading-relaxed">
              La <strong>Fundación Unidad Latinoamericana Empresarial de Popayán (ULEP)</strong> es una institución de formación continua, nacida en el departamento del Cauca. Promovemos el crecimiento técnico, laboral y empresarial mediante programas prácticos y adaptados a la realidad económica local y nacional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 relative overflow-hidden group hover:border-brand-navy transition-colors shadow-sm">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-navy" />
                <h4 className="font-bold text-lg text-brand-navy flex items-center space-x-2 mb-2">
                  <Target className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>Misión</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Ofrecer formación para el trabajo y desarrollo humano con alta pertinencia, permitiendo que emprendedores, jóvenes y profesionales accedan a herramientas reales de crecimiento laboral.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 relative overflow-hidden group hover:border-brand-gold transition-colors shadow-sm">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold" />
                <h4 className="font-bold text-lg text-brand-navy flex items-center space-x-2 mb-2">
                  <Award className="w-5 h-5 text-brand-gold shrink-0" />
                  <span>Visión 2030</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  Ser la institución de educación complementaria y apoyo empresarial líder en el Cauca, expandiendo nuestro Campus Virtual Moodle mediante alianzas estratégicas y fintech.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="about-btn-modal-open"
                onClick={() => setShowMoreModal(true)}
                className="px-6 py-3.5 rounded-lg bg-brand-navy hover:bg-slate-800 text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest flex items-center space-x-2 shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Conoce más sobre nosotros</span>
                <ArrowUpRight className="w-4 h-4 text-brand-gold" />
              </button>
            </div>
          </div>
        </div>

        {/* Section: Values showcase */}
        <div className="mt-20 pt-16 border-t border-slate-200 text-left">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h4 className="text-2xl font-bold text-brand-navy mb-3 font-display">Pilares y Valores Institucionales</h4>
            <p className="text-slate-500 font-semibold text-xs uppercase tracking-widest">
              Cada acción de nuestra fundación se rige por la excelencia y la inclusión social
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 group shadow-sm text-left"
              >
                <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg inline-block mb-4 group-hover:bg-slate-100 transition-colors">
                  {val.icon}
                </div>
                <h5 className="font-bold text-brand-navy text-base mb-2 group-hover:text-brand-gold-dark transition-colors font-display">
                  {val.title}
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed font-light">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deep Institutional Information Modal */}
      <AnimatePresence>
        {showMoreModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMoreModal(false)}
              className="absolute inset-0 bg-brand-navy/30 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl bg-white border border-brand-blue-light/40 rounded-3xl shadow-2xl p-6 md:p-8 max-h-[85vh] overflow-y-auto text-left"
            >
              <button
                onClick={() => setShowMoreModal(false)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer font-bold"
              >
                ✕
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase text-brand-blue bg-sky-50 px-3 py-1 rounded-full">Fundación ULEP</span>
                  <h4 className="text-2xl font-black text-brand-navy mt-3 font-display">Acreditación e Impacto Regional</h4>
                </div>

                <div className="prose max-w-none text-slate-600 space-y-4 text-xs md:text-sm leading-relaxed font-normal">
                  <p>
                    Fundada en la histórica ciudad de Popayán, ULEP nació de la necesidad de tender un puente entre el conocimiento académico y las demandas prácticas de los sectores comercial, de servicios y agroindustrial del departamento del Cauca.
                  </p>

                  <h5 className="text-brand-navy font-bold text-sm mt-4 border-l-4 border-brand-blue pl-3 uppercase tracking-wider font-display">Modelo Pedagógico de Alta Pertinencia</h5>
                  <p>
                    Nuestra metodología combina sesiones dinámicas y casos de estudio con simulación digital, garantizando que cada estudiante pueda aplicar de inmediato las habilidades gerenciales o digitales en sus respectivos entornos.
                  </p>

                  <h5 className="text-brand-navy font-bold text-sm mt-4 border-l-4 border-brand-blue pl-3 uppercase tracking-wider font-display">Inclusión y Compromiso Social</h5>
                  <p>
                    Trabajamos de la mano con gremios, asociaciones comerciales y entidades gubernamentales para proveer subsidios, planes de financiación express y becas dirigidas a mujeres emprendedoras, caficultores, jóvenes del suroccidente y asociaciones locales.
                  </p>

                  <h5 className="text-brand-navy font-bold text-sm mt-4 border-l-4 border-brand-blue pl-3 uppercase tracking-wider font-display">Rendición de Cuentas</h5>
                  <p>
                    Como Entidad Sin Ánimo de Lucro (ESAL) legalmente constituida en Colombia, la Fundación ULEP publica anualmente sus informes de impacto, estados de transparencia y certificaciones oficiales, avalando un óptimo gobierno corporativo frente a la comunidad académica y aliados del ecosistema fintech.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-150 flex justify-end">
                  <button
                    onClick={() => {
                      setShowMoreModal(false);
                      onLearnMorePrograms();
                    }}
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-gold to-brand-gold-dark text-white font-black text-xs uppercase tracking-widest cursor-pointer hover:scale-[1.03] active:scale-[0.97] transition-transform shadow-md shadow-brand-blue/10"
                  >
                    Ver Programas de Formación
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
