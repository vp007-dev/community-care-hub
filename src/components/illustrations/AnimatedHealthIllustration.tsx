import { motion } from "framer-motion";

export function AnimatedHealthIllustration({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background */}
      <motion.circle
        cx="200"
        cy="200"
        r="180"
        fill="url(#healthBgGradient)"
        opacity="0.1"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heartbeat Line */}
      <motion.path
        d="M40 200 L100 200 L120 200 L140 160 L160 240 L180 180 L200 220 L220 200 L360 200"
        stroke="hsl(160, 60%, 45%)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Central Heart with Pulse */}
      <motion.g
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "200px 130px" }}
      >
        <path
          d="M200 100c-15-25-50-25-55 0c-5 25 15 50 55 75c40-25 60-50 55-75c-5-25-40-25-55 0z"
          fill="url(#heartPulseGradient)"
        />
        <path
          d="M185 120 L200 120 L200 105 L215 105 L215 120 L230 120 L230 135 L215 135 L215 150 L200 150 L200 135 L185 135 Z"
          fill="white"
        />
      </motion.g>

      {/* Doctor Figure */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Head */}
        <circle cx="120" cy="260" r="28" fill="#F5D0C5" />
        {/* Hair */}
        <ellipse cx="120" cy="243" rx="24" ry="18" fill="hsl(30, 40%, 25%)" />
        {/* Body - White Coat */}
        <rect x="90" y="288" width="60" height="80" rx="10" fill="white" stroke="hsl(200, 20%, 90%)" strokeWidth="2" />
        {/* Stethoscope */}
        <path d="M108 295 Q90 320 100 350" stroke="hsl(200, 15%, 35%)" strokeWidth="3" fill="none" />
        <circle cx="100" cy="352" r="8" fill="hsl(200, 15%, 35%)" />
        <circle cx="100" cy="352" r="4" fill="hsl(200, 15%, 50%)" />
        {/* Smile */}
        <path d="M110 268 Q120 278 130 268" stroke="hsl(350, 60%, 50%)" strokeWidth="2" fill="none" />
      </motion.g>

      {/* Nurse/Helper Figure */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        {/* Head */}
        <circle cx="280" cy="265" r="25" fill="#E8C4B8" />
        {/* Hair with bun */}
        <ellipse cx="280" cy="250" rx="22" ry="15" fill="hsl(220, 25%, 15%)" />
        <circle cx="280" cy="238" r="10" fill="hsl(220, 25%, 15%)" />
        {/* Body - Scrubs */}
        <rect x="255" y="290" width="50" height="70" rx="8" fill="hsl(180, 50%, 45%)" />
        {/* Clipboard */}
        <rect x="305" y="310" width="25" height="35" rx="3" fill="hsl(30, 30%, 85%)" />
        <rect x="310" y="318" width="15" height="3" fill="hsl(200, 15%, 60%)" />
        <rect x="310" y="325" width="15" height="3" fill="hsl(200, 15%, 60%)" />
        <rect x="310" y="332" width="10" height="3" fill="hsl(200, 15%, 60%)" />
      </motion.g>

      {/* Medicine Pills */}
      <motion.g
        animate={{ rotate: [0, 10, 0], y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "320px 120px" }}
      >
        <ellipse cx="320" cy="110" rx="20" ry="10" fill="hsl(340, 70%, 55%)" />
        <ellipse cx="320" cy="130" rx="20" ry="10" fill="hsl(200, 80%, 55%)" />
        <rect x="300" y="110" width="40" height="20" fill="url(#pillGradient)" />
      </motion.g>

      {/* Syringe */}
      <motion.g
        animate={{ x: [0, 5, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "80px 120px" }}
      >
        <rect x="60" y="110" width="50" height="20" rx="3" fill="hsl(200, 20%, 95%)" stroke="hsl(200, 15%, 70%)" strokeWidth="1" />
        <rect x="50" y="115" width="15" height="10" fill="hsl(200, 15%, 80%)" />
        <polygon points="110,115 110,125 125,120" fill="hsl(200, 15%, 70%)" />
        {/* Liquid */}
        <rect x="65" y="113" width="25" height="14" fill="hsl(160, 60%, 65%)" opacity="0.7" />
      </motion.g>

      {/* Floating Medical Cross Symbols */}
      <motion.g
        animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="345" y="240" width="25" height="8" rx="2" fill="hsl(160, 60%, 45%)" />
        <rect x="354" y="231" width="8" height="25" rx="2" fill="hsl(160, 60%, 45%)" />
      </motion.g>

      <motion.g
        animate={{ y: [0, -8, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <rect x="45" y="320" width="20" height="6" rx="2" fill="hsl(200, 80%, 55%)" />
        <rect x="52" y="313" width="6" height="20" rx="2" fill="hsl(200, 80%, 55%)" />
      </motion.g>

      {/* Floating Stars/Sparkles */}
      <motion.polygon
        points="360,60 363,70 373,70 365,77 368,87 360,80 352,87 355,77 347,70 357,70"
        fill="hsl(45, 90%, 55%)"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.polygon
        points="50,180 52,187 59,187 53,192 56,199 50,194 44,199 47,192 41,187 48,187"
        fill="hsl(160, 60%, 55%)"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      />

      {/* DNA Helix */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "365px 330px" }}
      >
        <ellipse cx="365" cy="320" rx="15" ry="5" fill="hsl(262, 70%, 55%)" opacity="0.7" />
        <ellipse cx="365" cy="330" rx="15" ry="5" fill="hsl(200, 80%, 55%)" opacity="0.7" />
        <ellipse cx="365" cy="340" rx="15" ry="5" fill="hsl(262, 70%, 55%)" opacity="0.7" />
        <line x1="350" y1="320" x2="380" y2="340" stroke="hsl(200, 15%, 60%)" strokeWidth="2" opacity="0.5" />
        <line x1="380" y1="320" x2="350" y2="340" stroke="hsl(200, 15%, 60%)" strokeWidth="2" opacity="0.5" />
      </motion.g>

      <defs>
        <linearGradient id="healthBgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(160, 60%, 45%)" />
          <stop offset="100%" stopColor="hsl(200, 80%, 55%)" />
        </linearGradient>
        <linearGradient id="heartPulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(350, 80%, 55%)" />
          <stop offset="100%" stopColor="hsl(340, 70%, 45%)" />
        </linearGradient>
        <linearGradient id="pillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="hsl(340, 70%, 55%)" />
          <stop offset="50%" stopColor="hsl(340, 70%, 55%)" />
          <stop offset="50%" stopColor="hsl(200, 80%, 55%)" />
          <stop offset="100%" stopColor="hsl(200, 80%, 55%)" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
