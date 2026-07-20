import React, { useState } from "react";
import { NEWS_DATA, EVENTS_DATA } from "../data";
import { News, Event } from "../types";
import { Calendar, Clock, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NewsIllustration } from "./illustrations/VectorIllustrations";

interface NewsAndEventsProps {
  onRegisterEventSuccess: (eventTitle: string) => void;
}

export default function NewsAndEvents({ onRegisterEventSuccess }: NewsAndEventsProps) {
  const [selectedNews, setSelectedNews] = useState<News | null>(null);
  const [registeredEvents, setRegisteredEvents] = useState<Record<string, boolean>>({});

  const handleRegisterEvent = (event: Event) => {
    setRegisteredEvents({ ...registeredEvents, [event.id]: true });
    onRegisterEventSuccess(event.title);
  };

  return (
    <section id="noticias" className="py-24 bg-slate-50 text-slate-800 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-brand-gold-dark border-b-2 border-brand-gold pb-1 mb-4 inline-block">
            Actualidad e Impacto
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold text-brand-navy mt-4 tracking-tight font-display">
            Noticias y Próximos Eventos
          </h3>
          <p className="text-slate-600 font-light mt-3 text-sm sm:text-base">
            Mantente informado de las inauguraciones, convenios, graduaciones y talleres prácticos gratuitos que organizamos permanentemente en el departamento del Cauca.
          </p>
        </div>

        {/* Dynamic News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 text-left">
          {NEWS_DATA.map((news) => (
            <div
              key={news.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-slate-300 hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100 p-4 flex items-center justify-center">
                <NewsIllustration id={news.id} />
                <span className="absolute bottom-4 left-4 bg-brand-navy border border-brand-gold text-[10px] font-bold text-brand-gold px-3 py-1 rounded uppercase tracking-wider z-10">
                  {news.date}
                </span>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="font-bold text-brand-navy text-base leading-snug group-hover:text-brand-gold-dark transition-colors line-clamp-2 font-display">
                    {news.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light mt-2 line-clamp-3">
                    {news.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedNews(news)}
                    className="text-xs font-bold text-brand-navy hover:text-brand-gold-dark transition-colors flex items-center space-x-1.5 cursor-pointer uppercase tracking-wider"
                  >
                    <span>Leer Artículo</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-gold stroke-[2px]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Events Column / Section */}
        <div className="pt-12 border-t border-slate-200 text-left">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h4 className="text-2xl font-bold text-brand-navy flex items-center space-x-2 font-display">
                <Calendar className="w-5 h-5 text-brand-gold shrink-0" />
                <span>Próximas Jornadas y Talleres Abiertos</span>
              </h4>
              <p className="text-xs text-slate-600 font-light mt-1">
                Regístrate de forma totalmente gratuita y asegura tu cupo para nuestras próximas transmisiones o conferencias presenciales.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTS_DATA.map((event) => {
              const isRegistered = registeredEvents[event.id];

              return (
                <div
                  key={event.id}
                  className="bg-white border border-slate-200 p-6 rounded-xl flex flex-col justify-between space-y-4 hover:border-slate-300 hover:shadow-lg transition-all shadow-sm"
                >
                  <div className="space-y-3.5">
                    {/* Badge */}
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] text-brand-gold font-bold bg-brand-navy border border-brand-gold/30 px-2.5 py-1 rounded uppercase tracking-wider">
                        {event.modality.includes("Virtual") ? "Virtual" : "Presencial / Híbrido"}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">{event.date}</span>
                    </div>

                    <h5 className="font-bold text-brand-navy text-sm sm:text-base leading-snug line-clamp-2 font-display">
                      {event.title}
                    </h5>

                    <div className="space-y-1.5 text-xs text-slate-600">
                      <div className="flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-gold" />
                        <span>Hora: {event.time}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                        <span>Lugar: {event.modality}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    {isRegistered ? (
                      <div className="w-full py-2.5 bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-xs rounded-lg flex items-center justify-center space-x-1.5 uppercase tracking-wider">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>¡Inscrito Correctamente!</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleRegisterEvent(event)}
                        className="w-full py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-widest hover:border-brand-navy hover:text-brand-navy cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        {event.linkText}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* News Detail Pop-Up Modal */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
              className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden text-left"
            >
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-6 right-6 p-2 rounded bg-white/85 text-slate-600 hover:text-slate-900 hover:bg-white transition-colors z-10 shadow border border-slate-200 cursor-pointer"
              >
                ✕
              </button>

              {/* Cover inside modal */}
              <div className="h-60 bg-slate-100 relative p-4 flex items-center justify-center">
                <NewsIllustration id={selectedNews.id} />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90 pointer-events-none" />
                <span className="absolute bottom-6 left-6 text-[10px] text-brand-gold font-bold uppercase tracking-wider bg-brand-navy px-3 py-1 rounded border border-brand-gold/50 z-10">
                  {selectedNews.date}
                </span>
              </div>

              <div className="p-6 md:p-8 space-y-4">
                <h4 className="text-xl md:text-2xl font-bold text-brand-navy leading-tight font-display">{selectedNews.title}</h4>
                
                <div className="text-xs md:text-sm text-slate-600 font-light leading-relaxed max-h-[200px] overflow-y-auto">
                  <p>{selectedNews.content}</p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Fundación ULEP • Sede Popayán</span>
                  <button
                    onClick={() => setSelectedNews(null)}
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-gold to-brand-gold-dark text-white font-black text-xs uppercase tracking-widest cursor-pointer hover:scale-[1.03] active:scale-[0.97] transition-transform shadow-md shadow-brand-blue/10"
                  >
                    Aceptar y Cerrar
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
