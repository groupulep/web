import React, { useState } from "react";
import { Menu, X, BookOpen, Wallet, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
  onOpenCampus: () => void;
  onOpenFinancing: () => void;
}

export default function Header({ onNavClick, activeSection, onOpenCampus, onOpenFinancing }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "inicio", label: "Inicio" },
    { id: "quienes-somos", label: "Quiénes Somos" },
    { id: "programas", label: "Programas" },
    { id: "campus-virtual", label: "Campus Virtual" },
    { id: "financiamiento", label: "Financiamiento" },
    { id: "alianzas", label: "Alianzas" },
    { id: "noticias", label: "Noticias" },
    { id: "contacto", label: "Contacto" },
  ];

  const handleItemClick = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <header id="main-header" className="fixed top-0 left-0 w-full z-50 transition-all duration-300 shadow-md">
      {/* Main Header Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-100 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Brand: Softer, friendlier shield and typography */}
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleItemClick("inicio")}>
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-blue border-2 border-brand-gold flex flex-col items-center justify-center shadow-md shadow-brand-blue/15 relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
                {/* Diagonal shield shimmer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 to-transparent pointer-events-none" />
                <span className="font-black text-xl text-white tracking-widest font-display leading-none text-shadow-sm">U</span>
                <span className="text-[7px] text-brand-gold-light font-extrabold uppercase tracking-[0.15em] -mt-0.5">LEP</span>
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <h1 className="font-black text-2xl tracking-tight leading-none text-brand-navy font-display">
                    Fundación <span className="text-brand-blue bg-gradient-to-r from-brand-blue to-brand-blue-light bg-clip-text text-transparent">ULEP</span>
                  </h1>
                </div>
                <span className="text-[10px] text-slate-400 font-bold tracking-widest uppercase block mt-1">
                  Unidad Latinoamericana Empresarial
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-${item.id}`}
                    onClick={() => handleItemClick(item.id)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 relative group/nav ${
                      isActive
                        ? "text-brand-navy bg-sky-50 font-black"
                        : "text-slate-500 hover:text-brand-blue hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.label}</span>
                    {/* Animated bottom bar */}
                    <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-brand-gold rounded-full transform origin-left transition-transform duration-200 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"
                    }`} />
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons with soft, rounded gradients */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                id="header-btn-fintech"
                onClick={onOpenFinancing}
                className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-brand-gold-light/40 to-brand-gold-light/10 text-brand-gold-dark hover:from-brand-gold hover:to-brand-gold-dark hover:text-white transition-all duration-300 text-[11px] font-black uppercase tracking-widest flex items-center space-x-2 border border-brand-gold/40 shadow-sm cursor-pointer hover:scale-[1.03] active:scale-[0.97]"
              >
                <Wallet className="w-3.5 h-3.5 shrink-0" />
                <span>Financiamiento</span>
              </button>
              <button
                id="header-btn-campus"
                onClick={onOpenCampus}
                className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-brand-blue to-brand-blue-light text-white hover:from-brand-blue/90 hover:to-brand-blue-light/90 transition-all duration-300 text-[11px] font-black uppercase tracking-widest flex items-center space-x-2 shadow-md shadow-brand-blue/20 cursor-pointer hover:scale-[1.03] active:scale-[0.97]"
              >
                <BookOpen className="w-3.5 h-3.5 text-white" />
                <span>Campus Virtual</span>
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                id="mobile-campus-shortcut"
                onClick={onOpenCampus}
                className="p-2.5 rounded-xl bg-brand-navy border border-brand-gold text-white hover:bg-brand-blue transition-colors shadow-sm"
                title="Campus Virtual"
              >
                <BookOpen className="w-4 h-4 text-brand-gold-light" />
              </button>
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl text-slate-600 hover:text-brand-navy hover:bg-slate-100 transition-colors focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-slate-150 shadow-inner"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all ${
                      isActive
                        ? "text-brand-navy bg-brand-gold/10 font-black border-l-4 border-brand-gold pl-3"
                        : "text-slate-600 hover:text-brand-blue hover:bg-slate-50"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

              <div className="pt-4 border-t border-slate-150 grid grid-cols-1 gap-3">
                <button
                  id="mobile-btn-fintech"
                  onClick={() => {
                    onOpenFinancing();
                    setIsOpen(false);
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-50 text-brand-navy hover:text-brand-blue font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 border border-slate-200"
                >
                  <Wallet className="w-4 h-4 text-brand-gold" />
                  <span>Financiamiento</span>
                  <ChevronRight className="w-4 h-4 ml-auto text-slate-400" />
                </button>
                <button
                  id="mobile-btn-campus"
                  onClick={() => {
                    onOpenCampus();
                    setIsOpen(false);
                  }}
                  className="w-full py-3.5 px-4 rounded-xl bg-brand-navy border border-brand-gold text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg"
                >
                  <BookOpen className="w-4 h-4 text-brand-gold" />
                  <span>Acceso al Campus Virtual</span>
                  <ChevronRight className="w-4 h-4 ml-auto text-white/60" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
