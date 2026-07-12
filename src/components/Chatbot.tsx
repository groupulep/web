import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, User, Bot, PhoneCall } from "lucide-react";
import { ChatMessage } from "../types";
import { motion, AnimatePresence } from "motion/react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "init",
      role: "assistant",
      text: "¡Hola! Soy **ULEP-Bot**, el asistente virtual de la Fundación ULEP. \n\nEstoy aquí para guiarte en tu inscripción académica, resolver dudas sobre el Campus Virtual o explicarte cómo solicitar financiación flexible con nuestras Fintechs aliadas.\n\n¿En qué te puedo colaborar hoy?",
      timestamp: new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    try {
      // API call to the server proxy
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: messages.slice(-10).map(m => ({ role: m.role, text: m.text }))
        })
      });

      if (!response.ok) {
        throw new Error("API Network error");
      }

      const data = await response.json();
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: "assistant",
        text: data.text,
        timestamp: new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chatbot API Fetch Error:", err);
      // Local graceful fallback if server or endpoint has issues
      setTimeout(() => {
        const errorFallbackMsg: ChatMessage = {
          id: `bot-err-${Date.now()}`,
          role: "assistant",
          text: `Hola, disculpa la molestia. En este momento estoy experimentando una leve interrupción de conexión con mi cerebro de Inteligencia Artificial. \n\nNo obstante, te puedo adelantar que la **Fundación ULEP** en Popayán ofrece el **Curso Estrella de Emprendimiento**, opciones de crédito educativo con Fintechs aliadas, y un **Campus Virtual** accesible 24/7.\n\nSi deseas hablar directamente con un asesor humano en WhatsApp, por favor haz clic en el botón de **Hablar con Asesor** en el panel.`,
          timestamp: new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" })
        };
        setMessages((prev) => [...prev, errorFallbackMsg]);
      }, 1000);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickReply = (text: string) => {
    handleSendMessage(text);
  };

  return (
    <div id="floating-chatbot-container" className="fixed bottom-6 right-6 z-50">
      
      {/* 1. Floating Pulse Trigger Button */}
      <button
        id="chatbot-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all relative cursor-pointer"
        title="Hablar con ULEP-Bot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -45 }} animate={{ rotate: 0 }} exit={{ rotate: 45 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }} className="relative">
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1.5 -right-1.5 h-3 w-3 rounded-full bg-red-500 border border-white animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* 2. Sleek Chat Panel Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chatbot-panel"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="absolute bottom-16 right-0 w-[340px] sm:w-[380px] h-[520px] bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between"
          >
            {/* Header */}
            <div className="bg-slate-50 px-4 py-4 border-b border-slate-150 flex items-center justify-between">
              <div className="flex items-center space-x-2.5 text-left">
                <div className="h-9 w-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-extrabold text-sm text-slate-950 leading-none">ULEP-Bot</h5>
                  <span className="text-[10px] text-blue-600 font-semibold tracking-wide flex items-center mt-0.5 space-x-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping"></span>
                    <span>Asistente Inteligente ULEP</span>
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable conversation bubble workspace */}
            <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-slate-50/50 scrollbar-thin scrollbar-thumb-slate-200">
              {messages.map((m) => {
                const isUser = m.role === "user";
                return (
                  <div key={m.id} className={`flex items-start gap-2 text-left ${isUser ? "flex-row-reverse" : "flex-row"}`}>
                    <div className={`h-7 w-7 rounded-lg shrink-0 flex items-center justify-center text-xs ${isUser ? "bg-indigo-600 text-white" : "bg-blue-600 text-white"}`}>
                      {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>

                    <div className="space-y-1 max-w-[78%]">
                      <div className={`p-3 rounded-2xl text-xs md:text-sm leading-relaxed ${
                        isUser
                          ? "bg-indigo-600 text-white rounded-tr-none shadow-sm"
                          : "bg-white text-slate-700 rounded-tl-none border border-slate-150 shadow-sm whitespace-pre-line"
                      }`}>
                        {m.text}
                      </div>
                      <span className="text-[9px] text-slate-400 block text-right font-light px-1">{m.timestamp}</span>
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-start gap-2 text-left">
                  <div className="h-7 w-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-white border border-slate-150 text-slate-400 text-xs px-4 py-3 rounded-2xl rounded-tl-none flex items-center space-x-1.5 shadow-sm">
                    <div className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></div>
                    <div className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              )}
              <div ref={messageEndRef} />
            </div>

            {/* Quick response tags container */}
            <div className="px-3 py-2 border-t border-slate-150 bg-slate-50 overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-none">
              <button
                onClick={() => handleQuickReply("¿Cuáles son los programas de formación?")}
                className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-full cursor-pointer transition-colors"
              >
                📚 Ver Programas
              </button>
              <button
                onClick={() => handleQuickReply("¿Cómo funciona el Financiamiento con Fintech?")}
                className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-full cursor-pointer transition-colors"
              >
                💳 Financiamiento
              </button>
              <button
                onClick={() => handleQuickReply("¿Qué requisitos tiene el Campus Virtual?")}
                className="px-2.5 py-1 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 text-[10px] font-bold rounded-full cursor-pointer transition-colors"
              >
                💻 Campus Virtual
              </button>
            </div>

            {/* Form actions bar */}
            <div className="p-3 bg-white border-t border-slate-150">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputText);
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Haz tu pregunta aquí..."
                  className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl disabled:opacity-40 transition-colors cursor-pointer"
                  title="Enviar"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Direct human redirect link */}
              <div className="pt-2 border-t border-slate-100 mt-2 flex justify-between items-center text-[10px] text-slate-400">
                <span>¿Prefieres asesoría humana directa?</span>
                <a
                  href="https://wa.me/573127654321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold hover:underline flex items-center space-x-0.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                  <span>WhatsApp Directo</span>
                </a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
