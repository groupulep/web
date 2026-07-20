import React, { useEffect, useState } from "react";
import { ArrowRight, Sparkles, GraduationCap, Users, Shield, MapPin, Award, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HeroIllustration } from "./illustrations/VectorIllustrations";

interface HeroProps {
  onLearnMore: () => void;
  onApplyNow: () => void;
}

export default function Hero({ onLearnMore, onApplyNow }: HeroProps) {
  // Animated stats
  const [beneficiaries, setBeneficiaries] = useState(0);
  const [allies, setAllies] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [municipalities, setMunicipalities] = useState(0);

  useEffect(() => {
    const duration = 1500; // ms
    const steps = 60;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setBeneficiaries(Math.min(Math.floor((1250 / steps) * step), 1250));
      setAllies(Math.min(Math.floor((52 / steps) * step), 52));
      setSatisfaction(Math.min(Math.floor((96 / steps) * step), 96));
      setMunicipalities(Math.min(Math.floor((10 / steps) * step), 10));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative pt-32 pb-20 min-h-[90vh] bg-white flex flex-col justify-center overflow-hidden border-b border-slate-200">
      {/* Background Graphic Decorators - Clean Academic Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 flex-grow flex flex-col justify-center relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Academic Quality Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-slate-100 border border-slate-200 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600"
            >
              <Award className="w-4 h-4 text-brand-gold shrink-0" />
              <span>Institución de Educación Superior</span>
            </motion.div>

            {/* Impressive Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tight text-brand-navy leading-[1.1] font-display"
            >
              Forjamos Líderes para el <br className="hidden md:inline" />
              <span className="text-brand-blue">
                Éxito Profesional
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-base md:text-lg max-w-2xl font-light leading-relaxed"
            >
              Conéctate al progreso con la Fundación ULEP. Brindamos capacitación técnica especializada en emprendimiento, administración, finanzas y tecnología. Formación de alto nivel respaldada por excelencia académica.
            </motion.p>

            {/* Checklist of highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 text-xs font-semibold py-2"
            >
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Enfoque 100% Práctico</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Certificación Oficial Registrada</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Planes de Pago y Financiación</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Campus Virtual Moodle 24/7</span>
              </div>
            </motion.div>

            {/* CTA Buttons - Premium design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <button
                id="hero-btn-primary"
                onClick={onApplyNow}
                className="px-8 py-4 rounded-lg bg-brand-navy hover:bg-slate-800 text-white font-bold uppercase tracking-widest text-xs transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center space-x-2.5 active:scale-95 hover:scale-[1.02]"
              >
                <span>Inscribirme Ahora</span>
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </button>
              <button
                id="hero-btn-secondary"
                onClick={onLearnMore}
                className="px-8 py-4 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-brand-navy hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 font-bold uppercase tracking-widest text-xs flex items-center justify-center shadow-sm hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>Explorar Programas</span>
              </button>
            </motion.div>
          </div>

          {/* Overlapping, multi-layered visual elements for presentation (inspired by high-end university layouts) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Back glowing card border */}
              <div className="absolute inset-0 bg-brand-navy rounded-xl blur-xl opacity-5 pointer-events-none" />
              
              {/* Golden offset accent lines */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-brand-gold pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-brand-gold pointer-events-none" />

              {/* Main premium image container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white p-2">
                <div className="w-full h-[320px] md:h-[380px] rounded-xl overflow-hidden relative bg-slate-50 flex items-center justify-center p-4">
                  <HeroIllustration />
                </div>

                {/* Overlapping Floating Badge: LMS Portal */}
                <div className="absolute top-6 right-6 bg-white/95 border border-slate-200 p-3 rounded-xl flex items-center space-x-2 shadow-lg backdrop-blur-sm transform hover:scale-105 transition-transform z-10">
                  <div className="h-8 w-8 rounded bg-brand-navy flex items-center justify-center text-white">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] text-brand-blue font-bold uppercase tracking-widest block">CAMPUS</span>
                    <span className="text-xs font-semibold text-brand-navy leading-none block">Plataforma Moodle</span>
                  </div>
                </div>

                {/* Overlapping Floating Badge: Location */}
                <div className="absolute -bottom-4 -left-4 bg-white/95 border border-slate-200 p-3 rounded-xl flex items-center space-x-3 shadow-xl text-left max-w-[210px] transform hover:scale-105 transition-transform z-10">
                  <div className="h-9 w-9 rounded bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-brand-navy uppercase tracking-wider leading-tight">Presencia Regional</h4>
                    <p className="text-[10px] text-slate-500 font-medium mt-0.5">Sede Popayán e impacto en el Cauca</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Dynamic Animated Stats Bar - Overlaid on white section boundary */}
      <div className="bg-white border-y border-slate-150 relative z-20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-11">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Stat 1 */}
            <div className="flex flex-col justify-center">
              <span className="text-3xl md:text-4.5xl font-black text-brand-navy tracking-tight flex items-center justify-center space-x-1 font-display">
                <span>{beneficiaries.toLocaleString()}</span>
                <span className="text-brand-gold text-2xl font-light">+</span>
              </span>
              <span className="text-[11px] text-slate-500 mt-2.5 font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5">
                <Users className="w-4 h-4 text-brand-blue" />
                <span>Egresados Registrados</span>
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col justify-center pt-4 md:pt-0">
              <span className="text-3xl md:text-4.5xl font-black text-brand-blue tracking-tight flex items-center justify-center space-x-1 font-display">
                <span>{allies}</span>
                <span className="text-brand-gold text-2xl font-light">+</span>
              </span>
              <span className="text-[11px] text-slate-500 mt-2.5 font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5">
                <Shield className="w-4 h-4 text-brand-blue" />
                <span>Convenios Gremiales</span>
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col justify-center pt-4 md:pt-0">
              <span className="text-3xl md:text-4.5xl font-black text-emerald-700 tracking-tight flex items-center justify-center space-x-1 font-display">
                <span>{satisfaction}</span>
                <span className="text-brand-gold text-2xl font-light">%</span>
              </span>
              <span className="text-[11px] text-slate-500 mt-2.5 font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5">
                <Award className="w-4 h-4 text-emerald-600" />
                <span>Aprobación Académica</span>
              </span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col justify-center pt-4 md:pt-0">
              <span className="text-3xl md:text-4.5xl font-black text-brand-navy tracking-tight flex items-center justify-center space-x-1 font-display">
                <span>{municipalities}</span>
              </span>
              <span className="text-[11px] text-slate-500 mt-2.5 font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>Municipios del Suroccidente</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
