import React, { useState } from "react";
import { PARTNERS_DATA } from "../data";
import { Partner } from "../types";
import { Handshake, ExternalLink, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PartnersProps {
  onContactAlliance: () => void;
}

export default function Partners({ onContactAlliance }: PartnersProps) {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  return (
    <section id="alianzas" className="py-24 bg-white border-t border-slate-200 text-slate-800 relative overflow-hidden">
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-brand-gold-dark border-b-2 border-brand-gold pb-1 mb-4 inline-block">
            Ecosistema de Cooperación
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-4 tracking-tight font-display">
            Nuestras Alianzas Estratégicas
          </h3>
          <p className="text-slate-600 font-light mt-3 text-sm sm:text-base">
            Trabajamos hombro a hombro con entidades gremiales, educativas, gubernamentales y financieras líderes para construir un mejor futuro laboral y comercial en Popayán.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {PARTNERS_DATA.map((partner) => (
            <div
              key={partner.id}
              onClick={() => setSelectedPartner(partner)}
              className="bg-white border border-slate-200 hover:border-brand-navy p-6 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              {/* Styled Mock Logo Badge */}
              <div className={`h-16 w-16 rounded-lg ${partner.logoBg} flex items-center justify-center mb-4 shadow-sm font-bold tracking-tight text-center leading-none uppercase group-hover:scale-105 transition-transform duration-300 border border-slate-200`}>
                <span className="text-xs px-1 truncate max-w-full text-slate-800">{partner.logoText}</span>
              </div>
              <h5 className="font-bold text-brand-navy text-xs truncate max-w-full font-display">
                {partner.name}
              </h5>
              <span className="text-[10px] text-brand-gold-dark font-bold uppercase tracking-wider mt-1.5 block group-hover:text-brand-navy transition-colors">Ver Convenio</span>
            </div>
          ))}
        </div>

        {/* Strategic CTA Callout banner */}
        <div className="bg-brand-navy border border-slate-800 rounded-xl p-8 max-w-4xl mx-auto text-left flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl relative overflow-hidden">
          {/* Subtle light effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-2 max-w-xl relative z-10">
            <h4 className="text-lg font-bold text-white flex items-center space-x-2 font-display">
              <Handshake className="w-5 h-5 text-brand-gold shrink-0" />
              <span>¿Representas a una empresa o institución en Popayán?</span>
            </h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Establezcamos convenios institucionales para capacitar a tu personal, generar subsidios educativos o integrar pasantías laborales para nuestros egresados de alto nivel.
            </p>
          </div>
          <button
            onClick={onContactAlliance}
            className="px-6 py-4 rounded-lg bg-brand-gold hover:bg-brand-gold-dark text-brand-navy font-bold text-xs uppercase tracking-widest shrink-0 cursor-pointer shadow-md flex items-center space-x-2.5 hover:scale-[1.02] active:scale-[0.98] transition-all relative z-10"
          >
            <span>Quiero ser Aliado</span>
            <ArrowUpRight className="w-4 h-4 text-brand-navy stroke-[2px]" />
          </button>
        </div>

      </div>

      {/* Alliance Details Pop-Up Modal */}
      <AnimatePresence>
        {selectedPartner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPartner(null)}
              className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white border border-slate-200 rounded-xl shadow-2xl p-6 text-left"
            >
              <button
                onClick={() => setSelectedPartner(null)}
                className="absolute top-6 right-6 p-2 rounded bg-slate-50 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200 cursor-pointer"
              >
                ✕
              </button>

              <div className="space-y-6">
                
                {/* Header branding inside modal */}
                <div className="flex items-center space-x-4">
                  <div className={`h-14 w-14 rounded-lg ${selectedPartner.logoBg} flex items-center justify-center font-bold text-xs uppercase shadow-sm border border-slate-200 shrink-0`}>
                    <span className="text-slate-800 font-bold">{selectedPartner.logoText}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy leading-tight font-display">{selectedPartner.name}</h4>
                    <span className="text-[11px] text-brand-gold-dark font-bold uppercase mt-1 tracking-wider block">{selectedPartner.description}</span>
                  </div>
                </div>

                {/* Details Sheet */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <div className="space-y-1.5">
                    <span className="text-[10px] text-brand-navy uppercase tracking-wider font-bold block">Fecha Convenio</span>
                    <p className="text-xs text-slate-600 font-light">Renovado y vigente para el período académico 2026</p>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] text-brand-navy uppercase tracking-wider font-bold block">Objetivos de la Cooperación</span>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      Fomentar el acceso a programas técnicos-laborales, articular planes curriculares conjuntos y facilitar el desarrollo de ferias de emprendimiento en Popayán y la región del Cauca.
                    </p>
                  </div>

                  <div className="space-y-2 bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <span className="text-[10px] text-brand-navy uppercase tracking-widest font-bold flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                      <span>Beneficios Exclusivos Estudiantes</span>
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-light">
                      {selectedPartner.benefits}
                    </p>
                  </div>
                </div>

                {/* Web & Support */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3">
                  <a
                    href={selectedPartner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-3.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-brand-navy hover:bg-slate-100 transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center space-x-1.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Visitar Canal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => {
                      setSelectedPartner(null);
                      onContactAlliance();
                    }}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-brand-navy hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-widest cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
                  >
                    Consultar Detalle
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
