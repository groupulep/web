import React from "react";
import { BookOpen, Laptop, ShieldCheck, GraduationCap, HelpCircle, ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { VirtualCampusIllustration } from "./illustrations/VectorIllustrations";

interface CampusVirtualProps {
  onContactSupport: () => void;
}

export default function CampusVirtual({ onContactSupport }: CampusVirtualProps) {
  const campusUrl = "https://ulep.milaulas.com";

  const handleOpenCampus = () => {
    window.open(campusUrl, "_blank", "noopener,noreferrer");
  };

  const steps = [
    {
      num: "01",
      title: "Revisar tus Credenciales",
      desc: "Tu usuario es tu correo electrónico registrado y tu contraseña inicial es tu número de documento de identidad sin puntos ni espacios.",
      icon: <ShieldCheck className="w-5 h-5 text-brand-blue-light" />
    },
    {
      num: "02",
      title: "Acceder al Portal Oficial",
      desc: "Haz clic en el botón de acceso para abrir de forma segura nuestro servidor oficial provisto en ulep.milaulas.com.",
      icon: <Laptop className="w-5 h-5 text-brand-blue-light" />
    },
    {
      num: "03",
      title: "Iniciar tu Aprendizaje 24/7",
      desc: "Navega por tus módulos matriculados, descarga material didáctico, participa en foros e interactúa con tus tutores en tiempo real.",
      icon: <GraduationCap className="w-5 h-5 text-brand-blue-light" />
    }
  ];

  return (
    <section id="campus-virtual" className="py-24 bg-white text-slate-800 relative min-h-[80vh] flex items-center">
      {/* Decorative ambient background lights */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-brand-gold-dark border-b-2 border-brand-gold pb-1 mb-4 inline-flex items-center space-x-1.5 font-display">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Servidor Activo Moodle LMS</span>
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-4 tracking-tight font-display">
            Plataforma Campus Virtual ULEP
          </h3>
          <p className="text-slate-600 font-light mt-3 text-sm sm:text-base">
            Bienvenido al portal oficial de educación virtual de la Fundación ULEP. Nuestra aula digital está lista para acompañarte en tu formación técnica e integral en Popayán.
          </p>
        </div>

        {/* Hero Card Redirection Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Information and Redirection Callout */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h4 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight leading-tight">
              Ingresa Directamente a tus Clases y Evaluaciones
            </h4>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              Hemos unificado toda nuestra estructura académica digital en un servidor ágil y seguro de Moodle. Aquí podrás descargar guías, subir tareas, ver videoconferencias grabadas y realizar tus evaluaciones de certificación.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3.5 shadow-sm">
              <div className="flex items-center space-x-2 text-brand-navy font-bold text-sm font-display">
                <BookOpen className="w-5 h-5 text-brand-gold-dark" />
                <span>Enlace Directo Académico</span>
              </div>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Haz clic en el enlace a continuación para ser redirigido automáticamente a la plataforma oficial.
              </p>
              <div className="pt-1.5">
                <a
                  href={campusUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 font-bold text-xs text-brand-navy hover:text-brand-gold-dark transition-colors bg-white px-3 py-1.5 rounded border border-slate-300"
                >
                  <span className="font-mono">{campusUrl}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Glowing Big Action Redirect Button */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleOpenCampus}
                className="px-8 py-4.5 rounded-lg bg-brand-navy hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center space-x-2.5 cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto uppercase tracking-widest"
              >
                <span>INGRESAR AL CAMPUS VIRTUAL</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2px] text-brand-gold" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Illustration of Virtual Campus */}
          <div className="lg:col-span-6 relative">
            <div className="bg-brand-navy rounded-xl p-6 shadow-xl border border-slate-800 relative overflow-hidden min-h-[380px] flex items-center justify-center">
              <VirtualCampusIllustration />
            </div>
          </div>
        </div>

        {/* Step-by-step instructions */}
        <div className="pt-12 border-t border-slate-200 text-left">
          <h4 className="text-lg font-bold text-brand-navy mb-8 text-center sm:text-left font-display">Instrucciones de Acceso Rápido</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((st) => (
              <div key={st.num} className="bg-slate-50 border border-slate-200 p-6 rounded-xl relative shadow-sm hover:border-slate-300 hover:shadow-md transition-all">
                <div className="absolute top-4 right-6 text-3xl font-black text-slate-200 font-mono select-none">
                  {st.num}
                </div>
                <div className="p-2.5 bg-white rounded-lg inline-block mb-4 shadow-sm border border-slate-100">
                  {st.icon}
                </div>
                <h5 className="font-bold text-brand-navy text-sm mb-2 font-display">{st.title}</h5>
                <p className="text-xs text-slate-600 leading-relaxed font-light">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Banner Callout */}
        <div className="mt-16 bg-white border border-brand-gold/60 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-sm">
          <div className="flex items-start space-x-3">
            <HelpCircle className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
            <div>
              <h5 className="font-bold text-brand-navy text-sm font-display">¿Tienes problemas de inicio de sesión o bloqueo de cuenta?</h5>
              <p className="text-xs text-slate-600 font-light mt-0.5 leading-relaxed">
                Nuestros asesores de soporte tecnológico están disponibles para restablecer tu contraseña o solucionar fallas de matriculación académica.
              </p>
            </div>
          </div>
          <button
            onClick={onContactSupport}
            className="px-6 py-3.5 rounded-lg bg-slate-50 border border-slate-200 text-brand-navy hover:text-brand-gold-dark hover:border-brand-gold-dark font-bold text-xs shrink-0 cursor-pointer shadow-sm transition-all uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98]"
          >
            Soporte Académico
          </button>
        </div>

      </div>
    </section>
  );
}
