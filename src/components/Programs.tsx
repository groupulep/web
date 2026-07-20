import React, { useState } from "react";
import { Program, ProgramCategory } from "../types";
import { PROGRAMS_DATA } from "../data";
import { Clock, MapPin, Award, BookOpen, Star, Sparkles, CheckCircle2, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ProgramIllustration, InstructorAvatar } from "./illustrations/VectorIllustrations";

interface ProgramsProps {
  onPreInscribe: (program: Program) => void;
}

export default function Programs({ onPreInscribe }: ProgramsProps) {
  const [activeCategory, setActiveCategory] = useState<ProgramCategory | "Todos">("Todos");
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [showVideo, setShowVideo] = useState(false);

  const categories: (ProgramCategory | "Todos")[] = ["Todos", "Cursos", "Talleres", "Diplomados", "Seminarios", "Empresas"];

  // Filter programs
  const filteredPrograms = activeCategory === "Todos"
    ? PROGRAMS_DATA
    : PROGRAMS_DATA.filter(p => p.category === activeCategory);

  // Flagship program (star program)
  const flagshipProgram = PROGRAMS_DATA.find(p => p.id === "emprendimiento") || PROGRAMS_DATA[0];

  return (
    <section id="programas" className="py-24 bg-slate-50 text-slate-800 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-brand-navy bg-brand-gold/20 border border-brand-gold/60 px-4 py-2 rounded-full">
            Oferta Académica de Excelencia
          </span>
          <h3 className="text-3xl sm:text-4xl font-black text-brand-navy mt-4 tracking-tight font-display">
            Nuestros Programas de Formación
          </h3>
          <p className="text-slate-500 font-light mt-3 text-xs sm:text-sm">
            Impulsa tus competencias laborales y potencia tus iniciativas comerciales con metodologías prácticas guiadas por docentes líderes del Suroccidente colombiano.
          </p>
        </div>

        {/* Flagship Program Showcase Banner (El Programa Estrella) */}
        <div className="mb-20 bg-white border border-slate-200 rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-brand-navy text-brand-gold text-[10px] font-bold px-6 py-2 rounded-bl-xl uppercase tracking-widest flex items-center space-x-1.5 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-brand-gold stroke-brand-gold" />
            <span>Programa Destacado</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 text-left">
            
            {/* Left Col: Info & Highlight */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2 text-brand-navy text-[10px] font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-brand-gold shrink-0 animate-pulse" />
                <span>Recomendado por gremios empresariales</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-brand-navy leading-tight font-display">
                {flagshipProgram.title}
              </h4>
              <p className="text-slate-600 font-light text-xs sm:text-sm leading-relaxed">
                {flagshipProgram.description}
              </p>

              <div className="flex flex-wrap gap-4 text-[11px] font-semibold text-slate-700">
                <span className="flex items-center space-x-1.5 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
                  <Clock className="w-4 h-4 text-brand-gold" />
                  <span>Duración: {flagshipProgram.duration}</span>
                </span>
                <span className="flex items-center space-x-1.5 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
                  <MapPin className="w-4 h-4 text-brand-gold" />
                  <span>Modalidad: {flagshipProgram.modality}</span>
                </span>
                <span className="flex items-center space-x-1.5 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
                  <Award className="w-4 h-4 text-brand-gold" />
                  <span>Certificación Directa</span>
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => setSelectedProgram(flagshipProgram)}
                  className="px-6 py-3.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-brand-navy hover:bg-slate-50 transition-all text-xs font-bold uppercase tracking-widest cursor-pointer shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Saber Más</span>
                </button>
                <button
                  onClick={() => onPreInscribe(flagshipProgram)}
                  className="px-6 py-3.5 rounded-lg bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Inscribirme Ahora</span>
                  <ChevronRight className="w-4 h-4 stroke-[3px]" />
                </button>
              </div>
            </div>

            {/* Right Col: Interactive Simulated Video Player */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-brand-blue-light/40 aspect-video group bg-slate-100 shadow-lg">
                {!showVideo ? (
                  <>
                    <div className="absolute inset-0 w-full h-full p-4 flex items-center justify-center bg-slate-50">
                      <ProgramIllustration category="emprendimiento" />
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                      <button
                        onClick={() => setShowVideo(true)}
                        className="h-14 w-14 bg-brand-gold hover:bg-brand-gold-light text-brand-navy rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer border border-brand-gold-dark"
                        title="Ver Video Promocional"
                      >
                        <Play className="w-6 h-6 fill-brand-navy stroke-brand-navy translate-x-0.5" />
                      </button>
                      <span className="text-[9px] font-bold text-brand-navy mt-4 tracking-wider uppercase bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-brand-blue-light/30 shadow-sm">
                        Testimonio y Experiencia (1:15 min)
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-slate-50 flex flex-col justify-between p-4 text-slate-800 text-left">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-[10px] text-brand-blue font-bold uppercase tracking-wider">Video de Presentación - ULEP Popayán</span>
                      <button onClick={() => setShowVideo(false)} className="text-slate-400 hover:text-slate-600 text-xs font-bold cursor-pointer">
                        ✕
                      </button>
                    </div>
                    {/* Simulated elegant video content with transcripts or mock screen */}
                    <div className="flex-grow flex items-center justify-center text-center p-3">
                      <div className="space-y-2">
                        <p className="text-brand-navy font-serif italic text-xs md:text-sm font-medium">
                          "Estudiar en ULEP me abrió las puertas al comercio electrónico regional de inmediato."
                        </p>
                        <p className="text-slate-500 text-[10px] uppercase tracking-wider">
                          — María H. Ordóñez, Egresada ULEP 2025
                        </p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-200 text-[9px] text-slate-400 flex justify-between">
                      <span>0:45 / 1:15</span>
                      <span className="animate-pulse text-brand-gold-dark font-bold">● REPRODUCIENDO</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer border ${
                activeCategory === cat
                  ? "bg-brand-navy text-white border-brand-navy shadow-md scale-[1.02]"
                  : "bg-white text-slate-500 border-slate-200 hover:text-brand-navy hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:border-slate-300"
            >
              {/* Vector Illustration representation */}
              <div className="relative h-48 overflow-hidden bg-slate-100 p-4 flex items-center justify-center">
                <ProgramIllustration category={program.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-80 pointer-events-none" />
                <span className="absolute top-4 left-4 bg-brand-navy border border-brand-gold text-brand-gold text-[9px] font-bold px-3 py-1.5 rounded uppercase tracking-widest shadow-sm z-10">
                  {program.category}
                </span>
                <span className="absolute bottom-4 right-4 bg-brand-gold text-brand-navy text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider z-10">
                  {program.modality}
                </span>
              </div>

              {/* Text Area */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h5 className="font-bold text-brand-navy text-base group-hover:text-brand-gold transition-colors leading-snug line-clamp-2 font-display">
                    {program.title}
                  </h5>
                  <p className="text-xs text-slate-600 font-light mt-2 line-clamp-3 leading-relaxed">
                    {program.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Inversión</span>
                    <span className="text-brand-navy font-bold text-sm">
                      {program.price === 0 ? (
                        <span className="text-brand-gold-dark font-bold uppercase tracking-wider text-xs">Gratuito / Beca</span>
                      ) : (
                        `$${program.price.toLocaleString()} COP`
                      )}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{program.duration}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => setSelectedProgram(program)}
                  className="w-full py-3.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-brand-navy transition-all text-xs font-bold uppercase tracking-widest border border-slate-200 shadow-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  Detalles
                </button>
                <button
                  onClick={() => onPreInscribe(program)}
                  className="w-full py-3.5 rounded-lg bg-brand-navy hover:bg-slate-800 text-white transition-all text-xs font-bold uppercase tracking-widest cursor-pointer shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  Postularme
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Program Detailed Information Pop-Up Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProgram(null)}
              className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl bg-white border-2 border-brand-gold rounded-3xl shadow-2xl p-6 md:p-8 max-h-[85vh] overflow-y-auto text-left"
            >
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer font-bold"
              >
                ✕
              </button>

              <div className="space-y-6">
                {/* Banner inside modal */}
                <div>
                  <span className="text-[10px] font-extrabold uppercase text-brand-gold bg-brand-navy px-3.5 py-1.5 rounded-full border border-brand-gold">
                    {selectedProgram.category}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-black text-brand-navy mt-4 font-display">{selectedProgram.title}</h4>
                  <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-500 mt-2">
                    <span className="flex items-center space-x-1.5"><Clock className="w-4 h-4 text-brand-gold" /> <span>{selectedProgram.duration}</span></span>
                    <span className="flex items-center space-x-1.5"><MapPin className="w-4 h-4 text-brand-gold" /> <span>Modalidad {selectedProgram.modality}</span></span>
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-100 uppercase tracking-wide text-[11px]">
                      {selectedProgram.price === 0 ? "Gratuito / Convenio ESAL" : `$${selectedProgram.price.toLocaleString()} COP`}
                    </span>
                  </div>
                </div>

                {/* Grid info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  <div className="space-y-4">
                    <h5 className="font-bold text-brand-navy text-sm uppercase tracking-wider flex items-center space-x-2 border-l-2 border-brand-gold pl-2">
                      <BookOpen className="w-4.5 h-4.5 text-brand-gold" />
                      <span>Objetivos de Aprendizaje</span>
                    </h5>
                    <ul className="space-y-2 text-xs text-slate-500 font-light leading-relaxed">
                      {selectedProgram.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>

                    <h5 className="font-bold text-brand-navy text-sm uppercase tracking-wider flex items-center space-x-2 pt-2 border-l-2 border-brand-gold pl-2">
                      <Award className="w-4.5 h-4.5 text-brand-gold" />
                      <span>Estructura de Módulos</span>
                    </h5>
                    <ul className="space-y-1.5 text-xs text-slate-500 font-mono">
                      {selectedProgram.modules.map((mod, i) => (
                        <li key={i} className="flex items-center space-x-2 border-b border-slate-100 pb-1.5 last:border-b-0">
                          <ChevronRight className="w-3.5 h-3.5 text-brand-blue" />
                          <span>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructor Bio Profile */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
                    <div>
                      <h5 className="font-bold text-brand-navy text-xs uppercase tracking-wider mb-3 font-display">Docente Titular</h5>
                      <div className="flex items-center space-x-3 mb-3">
                        <InstructorAvatar name={selectedProgram.instructor.name} />
                        <div>
                          <h6 className="font-bold text-slate-900 text-sm leading-none">{selectedProgram.instructor.name}</h6>
                          <span className="text-[11px] text-brand-navy font-bold mt-1.5 block leading-tight">{selectedProgram.instructor.role}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed font-light">
                        {selectedProgram.instructor.bio}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-200 text-[11px] text-slate-500 space-y-1">
                      <div className="flex justify-between">
                        <span>Método Certificación:</span>
                        <span className="text-slate-800 font-bold">Insignia Digital Directa</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Requisitos:</span>
                        <span className="text-slate-800 font-bold">Mayor de 16 años</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-150 flex flex-col sm:flex-row justify-end items-center gap-3">
                  <button
                    onClick={() => setSelectedProgram(null)}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest cursor-pointer"
                  >
                    Cerrar
                  </button>
                  <button
                    onClick={() => {
                      const prog = selectedProgram;
                      setSelectedProgram(null);
                      onPreInscribe(prog);
                    }}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-gold to-brand-gold-dark text-white font-black text-xs uppercase tracking-widest cursor-pointer hover:scale-[1.03] active:scale-[0.97] transition-transform shadow-md shadow-brand-blue/10"
                  >
                    Postularme a este Programa
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
