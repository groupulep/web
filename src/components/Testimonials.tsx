import React from "react";
import { TESTIMONIALS_DATA } from "../data";
import { Star, Quote, Sparkles } from "lucide-react";
import { StudentAvatar } from "./illustrations/VectorIllustrations";

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-slate-50 border-t border-slate-200 text-slate-800 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-brand-gold-dark border-b-2 border-brand-gold pb-1 mb-4 inline-block">
            Casos de Éxito y Orgullo
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-4 tracking-tight font-display">
            Testimonios de Nuestra Comunidad
          </h3>
          <p className="text-slate-600 font-light mt-3 text-sm sm:text-base">
            Conoce la experiencia real de nuestros egresados y cómo los programas de la Fundación ULEP impulsaron sus competencias, negocios e inserción laboral.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {TESTIMONIALS_DATA.map((test) => (
            <div
              key={test.id}
              className="bg-white border border-slate-200 p-6 md:p-8 rounded-xl relative flex flex-col justify-between space-y-6 hover:border-slate-300 hover:shadow-lg transition-all duration-300 group shadow-sm"
            >
              {/* Quote Mark background decorator */}
              <div className="absolute top-6 right-8 text-slate-100 group-hover:text-brand-gold/10 transition-colors pointer-events-none">
                <Quote className="w-14 h-14 rotate-180" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold shrink-0" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-600 font-light italic leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              {/* Student Profile row */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-100 relative z-10">
                <StudentAvatar name={test.name} />
                <div className="overflow-hidden">
                  <h5 className="font-bold text-brand-navy text-xs sm:text-sm leading-none truncate font-display">
                    {test.name}
                  </h5>
                  <span className="text-[10px] text-slate-500 font-medium block mt-1.5 truncate">
                    {test.role}
                  </span>
                  <span className="text-[9px] text-brand-gold-dark font-bold uppercase tracking-wider block mt-0.5 truncate">
                    {test.program}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Highlight Card */}
        <div className="mt-16 bg-white border border-slate-200 p-6 rounded-xl shadow-sm max-w-4xl mx-auto flex items-start space-x-3 text-left">
          <Sparkles className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
          <p className="text-xs text-slate-600 font-light leading-relaxed">
            Nuestros egresados cuentan con un índice de empleabilidad o formalización comercial superior al <strong className="text-brand-navy font-bold">82%</strong> a los seis meses de su certificación. ULEP no solo imparte educación: facilitamos conexiones laborales y de crecimiento reales.
          </p>
        </div>

      </div>
    </section>
  );
}
