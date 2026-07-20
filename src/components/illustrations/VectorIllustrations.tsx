import React from "react";

// ============================================================================
// 1. HERO ILLUSTRATION - Collaborative Learning & Business Incubation
// ============================================================================
export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 500 400"
      className="w-full h-full select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Soft background radial gradient */}
        <radialGradient id="hero-bg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#eff6ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        {/* Primary blue gradient */}
        <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>

        {/* Golden yellow highlight gradient */}
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>

        {/* Deep Navy gradient */}
        <linearGradient id="navy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>

        {/* Shadow filter */}
        <filter id="drop-shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="6" stdDeviation="5" floodColor="#0f172a" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* Background glow */}
      <circle cx="250" cy="200" r="220" fill="url(#hero-bg-glow)" />

      {/* Grid pattern accent */}
      <g opacity="0.15">
        <circle cx="80" cy="80" r="2" fill="#1d4ed8" />
        <circle cx="100" cy="80" r="2" fill="#1d4ed8" />
        <circle cx="120" cy="80" r="2" fill="#1d4ed8" />
        <circle cx="80" cy="100" r="2" fill="#1d4ed8" />
        <circle cx="100" cy="100" r="2" fill="#1d4ed8" />
        <circle cx="120" cy="100" r="2" fill="#1d4ed8" />
        <circle cx="80" cy="120" r="2" fill="#1d4ed8" />
        <circle cx="100" cy="120" r="2" fill="#1d4ed8" />
        <circle cx="120" cy="120" r="2" fill="#1d4ed8" />
      </g>

      {/* Abstract floating shapes representing innovation and academy */}
      <g className="animate-float">
        {/* Floating Lightbulb */}
        <g transform="translate(400, 80) scale(0.95)" filter="url(#drop-shadow)">
          <circle cx="30" cy="30" r="24" fill="#fef3c7" />
          <path
            d="M30,12 C21.16,12 14,19.16 14,28 C14,33.52 16.78,38.38 21,41.25 L21,46 C21,47.1 21.9,48 23,48 L37,48 C38.1,48 39,47.1 39,46 L39,41.25 C43.22,38.38 46,33.52 46,28 C46,19.16 38.84,12 30,12 Z"
            fill="url(#gold-grad)"
          />
          <path d="M25,48 L35,48 L33,52 L27,52 Z" fill="#92400e" />
          <path
            d="M30,18 L30,22 M22,30 L18,30 M38,30 L42,30 M24,24 L21,21 M36,24 L39,21"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Floating Graduation Cap */}
        <g transform="translate(60, 280) scale(0.9)" filter="url(#drop-shadow)">
          <circle cx="30" cy="30" r="24" fill="#e0f2fe" />
          <path d="M30,14 L12,22 L30,30 L48,22 Z" fill="url(#navy-grad)" />
          <path d="M18,27.5 L18,36 C18,39 23.3,41 30,41 C36.7,41 42,39 42,36 L42,27.5 L30,33 Z" fill="url(#blue-grad)" />
          <path d="M41,22 L41,34 L43,36 L45,34 L45,22 Z" fill="url(#gold-grad)" />
        </g>

        {/* Business Growth Chart Arrow */}
        <g transform="translate(380, 260) scale(0.85)" filter="url(#drop-shadow)">
          <rect x="0" y="0" width="70" height="70" rx="16" fill="#ecfdf5" />
          <path
            d="M15,50 L28,37 L36,45 L55,24"
            fill="none"
            stroke="#10b981"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M46,24 L55,24 L55,33" fill="none" stroke="#10b981" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>

      {/* Main Base Table / Platform Desk */}
      <ellipse cx="250" cy="340" rx="190" ry="16" fill="#e2e8f0" />
      <ellipse cx="250" cy="336" rx="180" ry="12" fill="#f1f5f9" />

      {/* Centered Graphic - Laptop Screen / Innovation Hub */}
      <g transform="translate(150, 150)" filter="url(#drop-shadow)">
        {/* Laptop Screen */}
        <rect x="20" y="20" width="160" height="110" rx="8" fill="url(#navy-grad)" />
        <rect x="25" y="25" width="150" height="100" rx="4" fill="#1e293b" />
        
        {/* Code / Visual Graphics on Screen */}
        <rect x="35" y="40" width="60" height="30" rx="3" fill="#3b82f6" fillOpacity="0.2" />
        <circle cx="50" cy="55" r="8" fill="#60a5fa" />
        <rect x="110" y="40" width="30" height="6" rx="2" fill="#60a5fa" />
        <rect x="110" y="52" width="40" height="6" rx="2" fill="#e2e8f0" fillOpacity="0.4" />
        <rect x="110" y="64" width="25" height="6" rx="2" fill="#e2e8f0" fillOpacity="0.4" />
        
        {/* Chart bars on Laptop Screen */}
        <rect x="35" y="85" width="15" height="30" rx="2" fill="url(#gold-grad)" />
        <rect x="55" y="75" width="15" height="40" rx="2" fill="url(#blue-grad)" />
        <rect x="75" y="90" width="15" height="25" rx="2" fill="#10b981" />
        
        {/* Laptop Base */}
        <path d="M5,130 L195,130 C195,135 185,142 170,142 L30,142 C15,142 5,135 5,130 Z" fill="#94a3b8" />
        <rect x="85" y="130" width="30" height="4" fill="#cbd5e1" />
      </g>

      {/* Main Vector Character Draw - Student/Egresada pointing to success */}
      <g transform="translate(80, 140)" filter="url(#drop-shadow)">
        {/* Left Character (Female student) */}
        {/* Body / Torso */}
        <path d="M40,140 L70,140 C72,120 70,95 62,88 L48,88 C40,95 38,120 40,140 Z" fill="url(#blue-grad)" />
        {/* Neck */}
        <rect x="51" y="76" width="8" height="15" rx="2" fill="#fbcfe8" />
        {/* Head */}
        <circle cx="55" cy="65" r="16" fill="#fbcfe8" />
        {/* Hair */}
        <path d="M36,62 C36,45 42,42 55,42 C68,42 74,45 74,62 C74,66 72,70 72,70 L38,70 C38,70 36,66 36,62 Z" fill="#1e293b" />
        <rect x="34" y="55" width="12" height="15" rx="3" fill="#1e293b" />
        <rect x="64" y="55" width="12" height="15" rx="3" fill="#1e293b" />
        {/* Face elements */}
        <path d="M50,65 Q55,69 60,65" stroke="#db2777" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Glasses */}
        <circle cx="49" cy="60" r="4" stroke="#172554" strokeWidth="1.5" fill="none" />
        <circle cx="61" cy="60" r="4" stroke="#172554" strokeWidth="1.5" fill="none" />
        <line x1="53" y1="60" x2="57" y2="60" stroke="#172554" strokeWidth="1.5" />
      </g>

      <g transform="translate(320, 130)" filter="url(#drop-shadow)">
        {/* Right Character (Male Entrepreneur/Mentor) */}
        {/* Body / Torso */}
        <path d="M35,150 L65,150 C68,130 65,100 58,93 L42,93 C35,100 32,130 35,150 Z" fill="url(#navy-grad)" />
        {/* Tie */}
        <path d="M48,93 L52,93 L53,115 L48,122 L47,115 Z" fill="url(#gold-grad)" />
        {/* Neck */}
        <rect x="46" y="81" width="8" height="15" rx="2" fill="#fed7aa" />
        {/* Head */}
        <circle cx="50" cy="70" r="16" fill="#fed7aa" />
        {/* Hair */}
        <path d="M34,66 C34,50 42,48 50,48 C58,48 66,50 66,66 C66,68 64,68 64,68 L36,68 Z" fill="#451a03" />
        {/* Smile */}
        <path d="M46,71 Q50,75 54,71" stroke="#9a3412" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>

      {/* Floating Sparkles around the characters */}
      <g opacity="0.8">
        <path d="M250,50 L253,60 L263,63 L253,66 L250,76 L247,66 L237,63 L247,60 Z" fill="#f59e0b" className="animate-pulse" />
        <path d="M120,240 L121.5,245 L126.5,246.5 L121.5,248 L120,253 L118.5,248 L113.5,246.5 L118.5,245 Z" fill="#3b82f6" />
      </g>
    </svg>
  );
}

// ============================================================================
// 2. VIRTUAL CAMPUS ILLUSTRATION - Online Classes & Student Dashboard
// ============================================================================
export function VirtualCampusIllustration() {
  return (
    <svg
      viewBox="0 0 500 350"
      className="w-full h-full select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="campus-bg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#eff6ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="navy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>
        <filter id="drop-shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* Background radial glow */}
      <circle cx="250" cy="175" r="160" fill="url(#campus-bg-glow)" />

      {/* Base platform */}
      <ellipse cx="250" cy="300" rx="170" ry="12" fill="#cbd5e1" />
      <ellipse cx="250" cy="296" rx="160" ry="8" fill="#e2e8f0" />

      {/* Large Tablet/Monitor representing Moodle Campus */}
      <g transform="translate(100, 50)" filter="url(#drop-shadow)">
        {/* Frame */}
        <rect x="10" y="10" width="280" height="210" rx="16" fill="url(#navy-grad)" />
        <rect x="18" y="18" width="264" height="194" rx="10" fill="#f8fafc" />

        {/* Dashboard Header Bar */}
        <rect x="18" y="18" width="264" height="36" rx="10" fill="#f1f5f9" />
        <circle cx="34" cy="36" r="5" fill="#ef4444" />
        <circle cx="48" cy="36" r="5" fill="#f59e0b" />
        <circle cx="62" cy="36" r="5" fill="#10b981" />
        
        {/* Moodle logo text placeholder */}
        <text x="90" y="41" fill="#172554" fontSize="10" fontWeight="900" fontFamily="sans-serif">
          CAMPUS VIRTUAL ULEP
        </text>

        {/* Course Card Grid inside Platform */}
        {/* Left Side: Navigation pane */}
        <rect x="26" y="62" width="65" height="142" rx="6" fill="#eff6ff" />
        <rect x="32" y="72" width="53" height="8" rx="2" fill="url(#blue-grad)" />
        <rect x="32" y="88" width="40" height="5" rx="1" fill="#94a3b8" />
        <rect x="32" y="100" width="45" height="5" rx="1" fill="#94a3b8" />
        <rect x="32" y="112" width="35" height="5" rx="1" fill="#94a3b8" />
        <rect x="32" y="124" width="48" height="5" rx="1" fill="#94a3b8" />

        {/* Right Side: Main learning stream */}
        {/* Active Class Box */}
        <rect x="98" y="62" width="176" height="64" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="106" y="70" width="60" height="8" rx="2" fill="#10b981" />
        <rect x="106" y="84" width="120" height="6" rx="2" fill="#1e293b" />
        <rect x="106" y="94" width="150" height="5" rx="1" fill="#64748b" />
        <rect x="106" y="102" width="90" height="5" rx="1" fill="#64748b" />

        {/* Video progress indicator bar */}
        <rect x="106" y="114" width="130" height="4" rx="2" fill="#cbd5e1" />
        <rect x="106" y="114" width="90" height="4" rx="2" fill="url(#blue-grad)" />
        <circle cx="196" cy="116" r="4.5" fill="#1d4ed8" />

        {/* Classroom Modules */}
        <rect x="98" y="134" width="84" height="62" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="104" y="142" width="72" height="28" rx="4" fill="#f3f4f6" />
        <circle cx="140" cy="156" r="8" fill="url(#gold-grad)" />
        <polygon points="138,152 144,156 138,160" fill="#ffffff" />
        <rect x="104" y="176" width="60" height="5" rx="1" fill="#1e293b" />
        <rect x="104" y="184" width="40" height="4" rx="1" fill="#64748b" />

        <rect x="190" y="134" width="84" height="62" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="196" y="142" width="72" height="28" rx="4" fill="#ecfdf5" />
        {/* Mini chart */}
        <path d="M204,162 L216,150 L224,156 L240,146" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
        <rect x="196" y="176" width="60" height="5" rx="1" fill="#1e293b" />
        <rect x="196" y="184" width="40" height="4" rx="1" fill="#64748b" />
      </g>

      {/* Floating vector accessories */}
      {/* 1. Shield Check badge (Security) */}
      <g transform="translate(60, 110) scale(0.9)" filter="url(#drop-shadow)" className="animate-float">
        <circle cx="25" cy="25" r="22" fill="#ecfdf5" />
        <path
          d="M25,13 L15,17.5 L15,26.5 C15,32.7 19.3,38.5 25,40 C30.7,38.5 35,32.7 35,26.5 L35,17.5 Z"
          fill="#10b981"
        />
        <path d="M21,25.5 L24,28.5 L29,21.5" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* 2. Global Network sphere (Connect) */}
      <g transform="translate(360, 80) scale(0.8)" filter="url(#drop-shadow)">
        <circle cx="30" cy="30" r="28" fill="#eff6ff" />
        <circle cx="30" cy="30" r="20" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 2" />
        <line x1="30" y1="5" x2="30" y2="55" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="5" y1="30" x2="55" y2="30" stroke="#3b82f6" strokeWidth="1.5" />
        <circle cx="30" cy="15" r="4.5" fill="url(#blue-grad)" />
        <circle cx="15" cy="30" r="4.5" fill="url(#blue-grad)" />
        <circle cx="45" cy="30" r="4.5" fill="url(#gold-grad)" />
        <circle cx="30" cy="45" r="4.5" fill="url(#blue-grad)" />
      </g>

      {/* 3. Floating Chat Bubble representing 24/7 Teacher Support */}
      <g transform="translate(350, 180) scale(0.85)" filter="url(#drop-shadow)" className="animate-float">
        <path d="M15,15 L65,15 C70.5,15 75,19.5 75,25 L75,55 C75,60.5 70.5,65 65,65 L35,65 L20,77 L20,65 L15,65 C9.5,65 5,60.5 5,55 L5,25 C5,19.5 9.5,15 15,15 Z" fill="#60a5fa" />
        {/* Support agent face inside chat bubble */}
        <circle cx="28" cy="40" r="10" fill="#ffffff" />
        <path d="M28,34 Q32,34 32,38" fill="none" stroke="#1d4ed8" strokeWidth="1.5" />
        <rect x="24" y="43" width="8" height="4" rx="1" fill="#1d4ed8" />
        <line x1="45" y1="36" x2="62" y2="36" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <line x1="45" y1="44" x2="55" y2="44" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// ============================================================================
// 3. FINANCING ILLUSTRATION - Easy payments & Fintech study loan credit
// ============================================================================
export function FinancingIllustration() {
  return (
    <svg
      viewBox="0 0 500 350"
      className="w-full h-full select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="finance-bg-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ecfdf5" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="emerald-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <filter id="drop-shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* Background radial glow */}
      <circle cx="250" cy="175" r="160" fill="url(#finance-bg-glow)" />

      {/* Base table platform */}
      <ellipse cx="250" cy="300" rx="170" ry="12" fill="#cbd5e1" />
      <ellipse cx="250" cy="296" rx="160" ry="8" fill="#e2e8f0" />

      {/* Main visual - Mobile phone screen with a secure virtual wallet */}
      <g transform="translate(160, 50)" filter="url(#drop-shadow)">
        {/* Smartphone body */}
        <rect x="20" y="10" width="140" height="230" rx="20" fill="#1e293b" />
        <rect x="25" y="15" width="130" height="220" rx="16" fill="#0f172a" />
        <rect x="28" y="20" width="124" height="210" rx="12" fill="#f8fafc" />

        {/* Top speaker & camera */}
        <rect x="70" y="27" width="40" height="4" rx="2" fill="#334155" />
        <circle cx="118" cy="29" r="2.5" fill="#334155" />

        {/* Home Indicator */}
        <rect x="65" y="222" width="50" height="4" rx="2" fill="#cbd5e1" />

        {/* App UI inside phone */}
        {/* Balance card */}
        <rect x="36" y="44" width="108" height="62" rx="8" fill="url(#blue-grad)" />
        <text x="44" y="60" fill="#93c5fd" fontSize="7" fontWeight="bold" fontFamily="sans-serif">
          CRÉDITO EDUCATIVO ULEP
        </text>
        <text x="44" y="80" fill="#ffffff" fontSize="14" fontWeight="900" fontFamily="sans-serif">
          Pre-Aprobado
        </text>
        <text x="44" y="94" fill="#eff6ff" fontSize="7" fontFamily="sans-serif">
          Tasa Fija Regional
        </text>

        {/* Quick approval circles */}
        <rect x="36" y="116" width="108" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <circle cx="56" cy="136" r="12" fill="#ecfdf5" />
        <path d="M51,136 L54,139 L61,132" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        
        <rect x="74" y="126" width="60" height="7" rx="2" fill="#1e293b" />
        <rect x="74" y="137" width="40" height="5" rx="1" fill="#64748b" />

        {/* Confirm Transaction Button */}
        <rect x="36" y="168" width="108" height="26" rx="6" fill="url(#emerald-grad)" />
        <text x="90" y="184" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          Firmar Crédito Digital
        </text>
      </g>

      {/* Floating 3D Coin Stack on the right */}
      <g transform="translate(305, 170)" filter="url(#drop-shadow)">
        {/* Coin 1 */}
        <ellipse cx="30" cy="80" rx="24" ry="10" fill="#b45309" />
        <ellipse cx="30" cy="76" rx="24" ry="10" fill="url(#gold-grad)" />
        
        {/* Coin 2 */}
        <ellipse cx="30" cy="66" rx="24" ry="10" fill="#b45309" />
        <ellipse cx="30" cy="62" rx="24" ry="10" fill="url(#gold-grad)" />

        {/* Coin 3 */}
        <ellipse cx="30" cy="52" rx="24" ry="10" fill="#b45309" />
        <ellipse cx="30" cy="48" rx="24" ry="10" fill="url(#gold-grad)" />
        
        {/* Dollar symbol on top coin */}
        <text x="30" y="52" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
          $
        </text>
      </g>

      {/* Piggy Bank with Graduation Cap on the left side */}
      <g transform="translate(60, 150) scale(0.9)" filter="url(#drop-shadow)" className="animate-float">
        {/* Piggy Body */}
        <ellipse cx="45" cy="50" rx="35" ry="28" fill="#fbcfe8" />
        {/* Piggy Nose */}
        <rect x="74" y="44" width="12" height="15" rx="4" fill="#f472b6" />
        <circle cx="78" cy="51" r="1.5" fill="#be185d" />
        <circle cx="82" cy="51" r="1.5" fill="#be185d" />
        {/* Ear */}
        <polygon points="20,28 35,12 36,30" fill="#f472b6" />
        {/* Eye */}
        <circle cx="60" cy="40" r="3.5" fill="#1e293b" />
        {/* Legs */}
        <rect x="25" y="74" width="10" height="15" rx="3" fill="#f472b6" />
        <rect x="55" y="74" width="10" height="15" rx="3" fill="#f472b6" />
        {/* Tail */}
        <path d="M11,54 Q4,50 8,44" fill="none" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" />

        {/* Little Graduation Cap placed on the piggy bank ear */}
        <g transform="translate(18, 2) scale(0.65)">
          <polygon points="30,10 5,20 30,30 55,20" fill="#172554" />
          <path d="M12,24 L12,35 C12,38 20,40 30,40 C40,40 48,38 48,35 L48,24" fill="#1d4ed8" />
          <path d="M48,20 L48,32 L51,34 L51,20" fill="#f59e0b" />
        </g>
      </g>

      {/* Floating Sparkles around for financial success */}
      <g opacity="0.8">
        <path d="M250,30 L251.5,35 L256.5,36.5 L251.5,38 L250,43 L248.5,38 L243.5,36.5 L248.5,35 Z" fill="#10b981" />
        <path d="M140,260 L141.5,265 L146.5,266.5 L141.5,268 L140,273 L138.5,268 L133.5,266.5 L138.5,265 Z" fill="#f59e0b" />
      </g>
    </svg>
  );
}

// ============================================================================
// 4. ABOUT US ILLUSTRATION - Academic Leadership, Governance & Values
// ============================================================================
export function AboutUsIllustration() {
  return (
    <svg
      viewBox="0 0 500 400"
      className="w-full h-full select-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="about-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="navy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.06" />
        </filter>
      </defs>

      <circle cx="250" cy="200" r="180" fill="url(#about-bg)" />

      {/* Main Base Shield Frame */}
      <g transform="translate(150, 60)" filter="url(#shadow)">
        {/* Shield background */}
        <path
          d="M100,20 C100,20 180,30 180,90 C180,180 100,240 100,240 C100,240 20,180 20,90 C20,30 100,20 100,20 Z"
          fill="url(#navy-grad)"
        />
        
        {/* Shield Inner border */}
        <path
          d="M100,30 C100,30 170,39 170,92 C170,172 100,226 100,226 C100,226 30,172 30,92 C30,39 100,30 100,30 Z"
          fill="none"
          stroke="url(#gold-grad)"
          strokeWidth="4"
        />

        {/* Laurels left */}
        <path
          d="M50,150 Q25,120 40,80 Q45,100 60,110"
          fill="none"
          stroke="#fef3c7"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="35" cy="115" r="3" fill="#f59e0b" />
        <circle cx="42" cy="95" r="3" fill="#f59e0b" />

        {/* Laurels right */}
        <path
          d="M150,150 Q175,120 160,80 Q155,100 140,110"
          fill="none"
          stroke="#fef3c7"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="165" cy="115" r="3" fill="#f59e0b" />
        <circle cx="158" cy="95" r="3" fill="#f59e0b" />

        {/* Academy Pillars Icon in center */}
        <g transform="translate(65, 80)">
          {/* Base */}
          <rect x="5" y="60" width="60" height="8" rx="2" fill="url(#gold-grad)" />
          <rect x="10" y="52" width="50" height="8" rx="1" fill="#fef3c7" />
          
          {/* Columns */}
          <rect x="16" y="18" width="6" height="34" rx="1" fill="#ffffff" />
          <rect x="32" y="18" width="6" height="34" rx="1" fill="#ffffff" />
          <rect x="48" y="18" width="6" height="34" rx="1" fill="#ffffff" />
          
          {/* Pediment / Triangle Roof */}
          <polygon points="35,2 5,18 65,18" fill="url(#gold-grad)" />
          <circle cx="35" cy="12" r="2.5" fill="#ffffff" />
        </g>
      </g>

      {/* Graduation Scroll on left */}
      <g transform="translate(70, 240) scale(0.95)" filter="url(#shadow)">
        <rect x="0" y="0" width="80" height="80" rx="16" fill="#eff6ff" />
        <path d="M20,30 L60,30 M20,42 L60,42 M20,54 L45,54" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
        <path d="M50,54 L60,54" stroke="url(#gold-grad)" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="50" y="24" width="6" height="36" rx="2" fill="url(#gold-grad)" opacity="0.15" />
      </g>

      {/* Gears of collaboration / Teamwork on right */}
      <g transform="translate(340, 230) scale(0.95)" filter="url(#shadow)">
        <rect x="0" y="0" width="80" height="80" rx="16" fill="#fcfdf7" />
        <circle cx="40" cy="40" r="18" fill="none" stroke="#d97706" strokeWidth="4" />
        <circle cx="40" cy="40" r="8" fill="none" stroke="#d97706" strokeWidth="3" />
        <path d="M40,16 L40,24 M40,56 L40,64 M16,40 L24,40 M56,40 L64,40" stroke="#d97706" strokeWidth="4" strokeLinecap="round" />
        <path d="M23,23 L29,29 M51,51 L57,57 M23,57 L29,51 M51,23 L57,29" stroke="#d97706" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* Tiny spark stars */}
      <path d="M110,60 L112,65 L117,66 L112,67 L110,72 L108,67 L103,66 L108,65 Z" fill="#f59e0b" />
      <path d="M380,80 L381.5,85 L386.5,86 L381.5,87 L380,92 L378.5,87 L373.5,86 L378.5,85 Z" fill="#3b82f6" />
    </svg>
  );
}

// ============================================================================
// 5. DYNAMIC PROGRAM CATEGORY ILLUSTRATION
// ============================================================================
interface ProgramIllustrationProps {
  category: string;
}

export function ProgramIllustration({ category }: ProgramIllustrationProps) {
  // Normalize category string
  const cat = category.toLowerCase();

  if (cat.includes("emprend") || cat.includes("negocio") || cat.includes("estrella")) {
    // ROCKET & LIGHTBULB (Emprendimiento)
    return (
      <svg viewBox="0 0 400 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="rocket-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
          <linearGradient id="sky-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#eff6ff" />
            <stop offset="100%" stopColor="#dbeafe" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#sky-grad)" rx="12" />
        
        {/* Floating circles */}
        <circle cx="80" cy="180" r="50" fill="#3b82f6" fillOpacity="0.06" />
        <circle cx="320" cy="70" r="40" fill="#f59e0b" fillOpacity="0.06" />

        {/* Success Launch Wave */}
        <path d="M0,240 Q100,160 220,180 T400,120 L400,240 Z" fill="#93c5fd" fillOpacity="0.25" />

        {/* Rocket Icon */}
        <g transform="translate(140, 40) scale(1.1)">
          {/* Flame */}
          <path d="M50,110 C50,130 40,140 50,150 C60,140 50,130 50,110 Z" fill="#f97316" />
          <path d="M48,112 C48,125 43,132 48,140 C53,132 48,125 48,112 Z" fill="#f59e0b" />
          
          {/* Wings */}
          <path d="M22,95 L10,115 L32,105 Z" fill="#1e293b" />
          <path d="M78,95 L90,115 L68,105 Z" fill="#1e293b" />
          
          {/* Main Body */}
          <path d="M50,10 L25,65 L25,100 L75,100 L75,65 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="3.5" />
          <path d="M50,10 L75,65 L75,100 L50,100 Z" fill="#f1f5f9" />
          
          {/* Red Rocket Nose */}
          <path d="M50,10 C40,25 32,45 32,55 L68,55 C68,45 60,25 50,10 Z" fill="url(#rocket-grad)" />
          
          {/* Round Window */}
          <circle cx="50" cy="75" r="11" fill="#3b82f6" stroke="#1e293b" strokeWidth="3" />
          <circle cx="47" cy="72" r="4" fill="#ffffff" fillOpacity="0.5" />
        </g>

        {/* Small floating ideas stars */}
        <circle cx="60" cy="60" r="4" fill="#f59e0b" />
        <path d="M330,130 L332,133 L335,134 L332,135 L330,138 L328,135 L325,134 L328,133 Z" fill="#3b82f6" />
        <path d="M70,140 L71.5,143 L74.5,144 L71.5,145 L70,148 L68.5,145 L65.5,144 L68.5,143 Z" fill="#10b981" />
      </svg>
    );
  }

  if (cat.includes("tecnolog") || cat.includes("digital") || cat.includes("market") || cat.includes("sistemas")) {
    // DIGITAL HUB & CODE (Tecnología / Redes)
    return (
      <svg viewBox="0 0 400 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tech-sky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="screen-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-sky)" rx="12" />
        
        {/* Network grid background effect */}
        <g opacity="0.1" stroke="#3b82f6" strokeWidth="1">
          <line x1="50" y1="0" x2="50" y2="240" />
          <line x1="150" y1="0" x2="150" y2="240" />
          <line x1="250" y1="0" x2="250" y2="240" />
          <line x1="350" y1="0" x2="350" y2="240" />
          <line x1="0" y1="60" x2="400" y2="60" />
          <line x1="0" y1="140" x2="400" y2="140" />
        </g>

        {/* Laptop / Screen mockup */}
        <g transform="translate(90, 40)">
          {/* Screen Body */}
          <rect x="20" y="10" width="180" height="120" rx="10" fill="url(#screen-grad)" stroke="#1e293b" strokeWidth="3" />
          <rect x="25" y="15" width="170" height="110" rx="6" fill="#090d16" />
          
          {/* Inner Code lines */}
          <rect x="35" y="28" width="55" height="7" rx="2.5" fill="#3b82f6" />
          <rect x="35" y="42" width="110" height="6" rx="2" fill="#10b981" />
          <rect x="35" y="54" width="80" height="6" rx="2" fill="#64748b" fillOpacity="0.5" />
          <rect x="35" y="66" width="95" height="6" rx="2" fill="#f59e0b" />
          <rect x="35" y="78" width="40" height="6" rx="2" fill="#3b82f6" />
          
          {/* Interactive visual tags */}
          <rect x="135" y="25" width="45" height="15" rx="3" fill="#3b82f6" fillOpacity="0.2" />
          <text x="157.5" y="35" fill="#60a5fa" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
            &lt;/&gt;
          </text>
          
          {/* Database Stack icon */}
          <g transform="translate(142, 55)">
            <ellipse cx="18" cy="10" rx="14" ry="4" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="1.5" />
            <path d="M4,10 L4,20 C4,22 10,24 18,24 C26,24 32,22 32,20 L32,10" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="1.5" />
            <path d="M4,20 L4,30 C4,32 10,34 18,34 C26,34 32,32 32,30 L32,20" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="1.5" />
          </g>

          {/* Stand */}
          <path d="M5,130 L215,130 C215,134 205,142 190,142 L30,142 C15,142 5,134 5,130 Z" fill="#475569" />
          <rect x="95" y="130" width="30" height="4" fill="#64748b" />
        </g>

        {/* Floating clouds / gear */}
        <g transform="translate(45, 80) scale(0.8)" opacity="0.8">
          <circle cx="20" cy="20" r="16" fill="#3b82f6" fillOpacity="0.15" />
          <path d="M12,23 C8,23 5,20 5,16 C5,12 8,9 12,9 C13,6 16,4 20,4 C24,4 28,7 28.5,10 C31.5,10 34,12.5 34,16 C34,19.5 31.5,22 28.5,23" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
        </g>
      </svg>
    );
  }

  if (cat.includes("pymes") || cat.includes("gesti") || cat.includes("admin") || cat.includes("empresas") || cat.includes("gremial")) {
    // PROFESSIONAL BUSINESS DESK (Administración y Pymes)
    return (
      <svg viewBox="0 0 400 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="admin-sky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ecfdf5" />
            <stop offset="100%" stopColor="#d1fae5" />
          </linearGradient>
          <linearGradient id="badge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#admin-sky)" rx="12" />

        {/* Flat desk base */}
        <ellipse cx="200" cy="215" rx="160" ry="8" fill="#a7f3d0" />
        <ellipse cx="200" cy="210" rx="150" ry="6" fill="#d1fae5" />

        {/* Clipboard checklist */}
        <g transform="translate(145, 30)">
          {/* Board */}
          <rect x="0" y="10" width="110" height="145" rx="8" fill="#ffffff" stroke="#1e293b" strokeWidth="3" />
          {/* Top Clip */}
          <rect x="35" y="0" width="40" height="15" rx="3" fill="#475569" stroke="#1e293b" strokeWidth="2.5" />
          <circle cx="55" cy="7" r="2.5" fill="#f59e0b" />
          
          {/* Rows & Checks */}
          <circle cx="22" cy="42" r="7.5" fill="#d1fae5" />
          <path d="M18,42 L21,45 L26,39" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="38" y="38" width="54" height="6" rx="2" fill="#1e293b" />

          <circle cx="22" cy="68" r="7.5" fill="#d1fae5" />
          <path d="M18,68 L21,71 L26,65" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="38" y="64" width="45" height="6" rx="2" fill="#1e293b" />

          <circle cx="22" cy="94" r="7.5" fill="#d1fae5" />
          <path d="M18,94 L21,97 L26,91" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="38" y="90" width="60" height="6" rx="2" fill="#1e293b" />
          
          {/* Target flag */}
          <rect x="18" y="114" width="75" height="24" rx="4" fill="url(#badge-grad)" />
          <text x="55.5" y="129" fill="#ffffff" fontSize="8.5" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            100% PRÁCTICO
          </text>
        </g>

        {/* Floating growth chart on left */}
        <g transform="translate(50, 70) scale(0.9)">
          <rect x="0" y="0" width="70" height="80" rx="8" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
          <path d="M10,70 L22,50 L34,58 L54,34 L62,42" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="54" cy="34" r="4.5" fill="#f59e0b" />
          <line x1="10" y1="70" x2="60" y2="70" stroke="#64748b" strokeWidth="2" />
        </g>

        {/* Small badge of security on right */}
        <g transform="translate(285, 80) scale(0.8)">
          <polygon points="30,5 55,18 55,48 30,65 5,48 5,18" fill="url(#badge-grad)" stroke="#1e293b" strokeWidth="2" />
          <path d="M20,32 L26,38 L40,24" fill="none" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    );
  }

  // DEFAULT / GENERAL EDUCATION (Includes general, agronegocios, or fallbacks)
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fallback-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#eff6ff" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
        <linearGradient id="sprout-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#fallback-sky)" rx="12" />

      {/* Sprout / Academic seed graphic */}
      <g transform="translate(130, 40) scale(1.1)">
        {/* Pot */}
        <path d="M40,110 L100,110 L90,140 L50,140 Z" fill="#b45309" stroke="#1e293b" strokeWidth="3" />
        <rect x="35" y="100" width="70" height="10" rx="2" fill="#d97706" stroke="#1e293b" strokeWidth="3" />

        {/* Sprout stems */}
        <path d="M70,100 Q70,50 90,30" fill="none" stroke="#047857" strokeWidth="5.5" strokeLinecap="round" />
        <path d="M70,100 Q60,65 45,50" fill="none" stroke="#10b981" strokeWidth="4.5" strokeLinecap="round" />

        {/* Leaves */}
        <path d="M90,30 C90,30 110,25 110,40 C110,55 90,45 90,30 Z" fill="url(#sprout-grad)" stroke="#1e293b" strokeWidth="2.5" />
        <path d="M45,50 C45,50 30,50 30,62 C30,74 45,66 45,50 Z" fill="#10b981" stroke="#1e293b" strokeWidth="2" />
        
        {/* Floating star for knowledge growth */}
        <path d="M70,15 L73,20 L78,21 L73,22 L70,27 L67,22 L62,21 L67,20 Z" fill="#f59e0b" />
      </g>

      {/* Graduation mortarboard on side */}
      <g transform="translate(45, 120) scale(0.75)">
        <polygon points="30,10 5,20 30,30 55,20" fill="#172554" stroke="#1e293b" strokeWidth="2" />
        <path d="M12,24 L12,35 C12,38 20,40 30,40 C40,40 48,38 48,35 L48,24" fill="#3b82f6" stroke="#1e293b" strokeWidth="2" />
      </g>
    </svg>
  );
}

// ============================================================================
// 6. NEWS ARTICLE ILLUSTRATION
// ============================================================================
interface NewsIllustrationProps {
  id: string;
}

export function NewsIllustration({ id }: NewsIllustrationProps) {
  if (id === "noticia-1") {
    // DIGITAL HUB LABORATORY
    return (
      <svg viewBox="0 0 400 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lab-sky" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#eff6ff" />
            <stop offset="100%" stopColor="#e0f2fe" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#lab-sky)" rx="12" />

        <g transform="translate(100, 35)">
          {/* Main Monitor */}
          <rect x="20" y="10" width="160" height="105" rx="8" fill="#1e293b" />
          <rect x="25" y="15" width="150" height="95" rx="4" fill="#ffffff" />
          
          {/* Code panel representation */}
          <rect x="35" y="28" width="50" height="28" rx="3" fill="#e0f2fe" />
          <circle cx="60" cy="42" r="8" fill="#3b82f6" />
          <line x1="56" y1="42" x2="64" y2="42" stroke="#ffffff" strokeWidth="2" />
          
          <rect x="95" y="28" width="70" height="6" rx="2" fill="#f59e0b" />
          <rect x="95" y="40" width="55" height="5" rx="2" fill="#1e293b" />
          <rect x="95" y="52" width="65" height="5" rx="2" fill="#64748b" />
          
          {/* Bar Charts represent progress */}
          <rect x="35" y="75" width="20" height="25" rx="2" fill="#10b981" />
          <rect x="60" y="65" width="20" height="35" rx="2" fill="#3b82f6" />
          <rect x="85" y="80" width="20" height="20" rx="2" fill="#f59e0b" />

          {/* Stand */}
          <rect x="90" y="115" width="20" height="20" fill="#64748b" />
          <ellipse cx="100" cy="135" rx="40" ry="6" fill="#475569" />
        </g>
      </svg>
    );
  }

  if (id === "noticia-2") {
    // GRADUATION COHORT SUCCESS
    return (
      <svg viewBox="0 0 400 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad-sky" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#fde68a" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad-sky)" rx="12" />

        {/* Staggered Flying Mortarboards */}
        <g transform="translate(130, 45)">
          {/* Main central hat */}
          <g transform="translate(20, 20) scale(1.3)">
            <polygon points="40,10 5,22 40,34 75,22" fill="#172554" />
            <path d="M15,26 L15,40 C15,45 26,48 40,48 C54,48 65,45 65,40 L65,26" fill="#1e3a8a" />
            {/* Tassel */}
            <path d="M65,22 L65,36 L68,38 L71,36 L71,22" fill="#f59e0b" />
          </g>

          {/* Side floating hats */}
          <g transform="translate(-60, 60) scale(0.95) rotate(-15)">
            <polygon points="40,10 5,22 40,34 75,22" fill="#1e293b" />
            <path d="M15,26 L15,38 C15,43 26,46 40,46 C54,46 65,43 65,38 L65,26" fill="#334155" />
          </g>

          <g transform="translate(110, 40) scale(0.9) rotate(10)">
            <polygon points="40,10 5,22 40,34 75,22" fill="#1e293b" />
            <path d="M15,26 L15,38 C15,43 26,46 40,46 C54,46 65,43 65,38 L65,26" fill="#334155" />
          </g>
        </g>

        {/* Confetti stars */}
        <path d="M60,60 L62,63 L65,64 L62,65 L60,68 L58,65 L55,64 L58,63 Z" fill="#10b981" />
        <path d="M330,80 L331.5,83 L334.5,84 L331.5,85 L330,88 L328.5,85 L325.5,84 L328.5,83 Z" fill="#3b82f6" />
        <circle cx="80" cy="150" r="3" fill="#f59e0b" />
        <circle cx="310" cy="160" r="4" fill="#ec4899" />
      </svg>
    );
  }

  // FINTECH CREDIT COOPERATION
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fin-sky" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ecfdf5" />
          <stop offset="100%" stopColor="#a7f3d0" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#fin-sky)" rx="12" />

      <g transform="translate(120, 50)">
        {/* Handshake & Shield representing cooperation */}
        <circle cx="80" cy="70" r="50" fill="#ffffff" stroke="#10b981" strokeWidth="3" />
        
        {/* Credit Card Graphic inside */}
        <g transform="translate(45, 45)">
          <rect x="0" y="0" width="70" height="42" rx="4" fill="#1e3a8a" />
          <rect x="6" y="6" width="14" height="10" rx="1.5" fill="#f59e0b" />
          <rect x="6" y="24" width="40" height="4" rx="1" fill="#ffffff" opacity="0.6" />
          <circle cx="58" cy="30" r="5" fill="#f59e0b" />
          <circle cx="52" cy="30" r="5" fill="#ef4444" opacity="0.8" />
        </g>
        
        {/* Checkmark security badge overlapping */}
        <g transform="translate(95, 75) scale(0.9)">
          <circle cx="20" cy="20" r="18" fill="#10b981" />
          <path d="M12,20 L17,25 L28,14" fill="none" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </svg>
  );
}

// ============================================================================
// 7. VECTOR STUDENT AVATAR
// ============================================================================
interface StudentAvatarProps {
  name: string;
}

export function StudentAvatar({ name }: StudentAvatarProps) {
  // Generate visual based on name to keep it consistent
  const lowerName = name.toLowerCase();
  const initials = name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();

  const isFemale = lowerName.includes("helena") || lowerName.includes("diana") || lowerName.includes("maria") || lowerName.includes("patricia") || lowerName.includes("chaux");

  // Determine avatar background color
  let bg = "bg-brand-navy text-brand-gold";
  if (lowerName.includes("helena")) bg = "bg-blue-600 text-white";
  if (lowerName.includes("carlos")) bg = "bg-brand-gold text-brand-navy";
  if (lowerName.includes("diana")) bg = "bg-emerald-600 text-white";

  return (
    <div className={`w-11 h-11 rounded-lg flex items-center justify-center font-bold text-sm tracking-wider shadow-sm border border-slate-200 select-none shrink-0 ${bg}`}>
      {isFemale ? (
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Female vector head */}
          <circle cx="16" cy="14" r="6" />
          <path d="M16,21 C10,21 6,24 6,28 L26,28 C26,24 22,21 16,21 Z" />
          <path d="M10,12 Q16,8 22,12 Q16,5 10,12" />
        </svg>
      ) : (
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Male vector head */}
          <circle cx="16" cy="13" r="6" />
          <path d="M16,20 C11,20 7,23 7,28 L25,28 C25,23 21,20 16,20 Z" />
          {/* Hair spike */}
          <polygon points="12,8 16,5 20,8" />
        </svg>
      )}
    </div>
  );
}

// ============================================================================
// 8. VECTOR INSTRUCTOR AVATAR
// ============================================================================
interface InstructorAvatarProps {
  name: string;
}

export function InstructorAvatar({ name }: InstructorAvatarProps) {
  const lowerName = name.toLowerCase();
  const isFemale = lowerName.includes("claudia") || lowerName.includes("bolaños");
  const isTeam = lowerName.includes("equipo") || lowerName.includes("gremial") || lowerName.includes("acad");

  if (isTeam) {
    return (
      <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center border-2 border-brand-gold shadow-sm select-none shrink-0">
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Multi-person team vector */}
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12,18 C8,18 5,21 5,25 L19,25 C19,21 16,18 12,18 Z" />
          
          <circle cx="21" cy="13" r="4" opacity="0.8" />
          <path d="M21,18.5 C18,18.5 16,21 16,25 L26,25 C26,21 24,18.5 21,18.5 Z" opacity="0.8" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 border-brand-gold select-none shrink-0 ${isFemale ? "bg-pink-100 text-pink-700" : "bg-blue-100 text-blue-700"}`}>
      {isFemale ? (
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Female academic with specs */}
          <circle cx="16" cy="14" r="5.5" />
          <path d="M16,21 C11,21 8,24 8,28 L24,28 C24,24 21,21 16,21 Z" />
          {/* Eyeglasses */}
          <circle cx="13.5" cy="13.5" r="1.5" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="18.5" cy="13.5" r="1.5" fill="none" stroke="currentColor" strokeWidth="1" />
          <line x1="15" y1="13.5" x2="17" y2="13.5" stroke="currentColor" strokeWidth="1" />
        </svg>
      ) : (
        <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          {/* Male academic vector */}
          <circle cx="16" cy="13" r="5.5" />
          <path d="M16,20 C11,20 8,23 8,28 L24,28 C24,23 21,20 16,20 Z" />
          {/* Tie */}
          <polygon points="15,20 17,20 18,25 16,27 14,25" fill="#f59e0b" />
        </svg>
      )}
    </div>
  );
}

