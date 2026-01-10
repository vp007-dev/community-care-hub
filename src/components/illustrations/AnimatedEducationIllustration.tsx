import { motion } from "framer-motion";

export function AnimatedEducationIllustration({ className = "" }: { className?: string }) {
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
        fill="url(#eduBgGradient)"
        opacity="0.1"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Central Open Book */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Left page */}
        <path d="M200 180 L100 160 L100 280 L200 300 Z" fill="white" stroke="hsl(220, 15%, 85%)" strokeWidth="2" />
        {/* Right page */}
        <path d="M200 180 L300 160 L300 280 L200 300 Z" fill="hsl(220, 20%, 98%)" stroke="hsl(220, 15%, 85%)" strokeWidth="2" />
        {/* Spine */}
        <rect x="195" y="175" width="10" height="130" fill="hsl(220, 80%, 55%)" />
        {/* Text lines left */}
        <line x1="115" y1="185" x2="180" y2="195" stroke="hsl(220, 15%, 75%)" strokeWidth="2" />
        <line x1="115" y1="200" x2="175" y2="210" stroke="hsl(220, 15%, 80%)" strokeWidth="2" />
        <line x1="115" y1="215" x2="170" y2="225" stroke="hsl(220, 15%, 75%)" strokeWidth="2" />
        <line x1="115" y1="230" x2="165" y2="240" stroke="hsl(220, 15%, 80%)" strokeWidth="2" />
        {/* Text lines right */}
        <line x1="220" y1="195" x2="285" y2="185" stroke="hsl(220, 15%, 75%)" strokeWidth="2" />
        <line x1="225" y1="210" x2="285" y2="200" stroke="hsl(220, 15%, 80%)" strokeWidth="2" />
        <line x1="230" y1="225" x2="285" y2="215" stroke="hsl(220, 15%, 75%)" strokeWidth="2" />
        <line x1="235" y1="240" x2="285" y2="230" stroke="hsl(220, 15%, 80%)" strokeWidth="2" />
      </motion.g>

      {/* Graduation Cap */}
      <motion.g
        animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "200px 80px" }}
      >
        <polygon points="140,90 260,90 280,70 120,70" fill="hsl(220, 25%, 20%)" />
        <rect x="170" y="90" width="60" height="12" fill="hsl(220, 25%, 20%)" />
        <circle cx="200" cy="70" r="8" fill="hsl(45, 90%, 55%)" />
        <path d="M200 78 Q220 85 225 105" stroke="hsl(45, 90%, 55%)" strokeWidth="3" fill="none" />
        <circle cx="228" cy="108" r="6" fill="hsl(45, 90%, 55%)" />
      </motion.g>

      {/* Student 1 - Reading */}
      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      >
        <circle cx="80" cy="260" r="22" fill="#F5D0C5" />
        <ellipse cx="80" cy="248" rx="18" ry="14" fill="hsl(220, 25%, 15%)" />
        <rect x="60" y="282" width="40" height="50" rx="6" fill="hsl(220, 80%, 55%)" />
        {/* Small book */}
        <rect x="55" y="310" width="25" height="18" rx="2" fill="hsl(45, 90%, 55%)" transform="rotate(-15, 55, 310)" />
      </motion.g>

      {/* Student 2 - Raising hand */}
      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <circle cx="320" cy="260" r="22" fill="#E8C4B8" />
        <path d="M302 248 Q310 235 320 235 Q330 235 338 248" fill="hsl(30, 40%, 25%)" />
        {/* Pigtails */}
        <circle cx="298" cy="255" r="7" fill="hsl(30, 40%, 25%)" />
        <circle cx="342" cy="255" r="7" fill="hsl(30, 40%, 25%)" />
        <rect x="300" y="282" width="40" height="50" rx="6" fill="hsl(340, 70%, 55%)" />
        {/* Raised arm */}
        <path d="M340 290 L360 250 L355 245" fill="#E8C4B8" />
        <circle cx="355" cy="242" r="8" fill="#E8C4B8" />
      </motion.g>

      {/* Floating ABC Letters */}
      <motion.g
        animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="60" cy="140" r="20" fill="hsl(350, 80%, 55%)" />
        <text x="60" y="147" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">A</text>
      </motion.g>
      <motion.g
        animate={{ y: [0, -10, 0], x: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <circle cx="340" cy="130" r="20" fill="hsl(160, 60%, 45%)" />
        <text x="340" y="137" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">B</text>
      </motion.g>
      <motion.g
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        <circle cx="60" cy="340" r="18" fill="hsl(220, 80%, 55%)" />
        <text x="60" y="347" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">C</text>
      </motion.g>

      {/* Floating 123 Numbers */}
      <motion.g
        animate={{ y: [0, -7, 0], rotate: [-5, 5, -5] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "350px 340px" }}
      >
        <circle cx="350" cy="340" r="18" fill="hsl(45, 90%, 55%)" />
        <text x="350" y="347" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">1</text>
      </motion.g>

      {/* Pencil */}
      <motion.g
        animate={{ rotate: [-8, 8, -8], y: [0, -5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "340px 200px" }}
      >
        <polygon points="335,160 345,160 340,145" fill="hsl(30, 70%, 70%)" />
        <rect x="335" y="160" width="10" height="50" fill="hsl(45, 90%, 55%)" />
        <rect x="335" y="200" width="10" height="8" fill="hsl(340, 70%, 55%)" />
        <polygon points="335,208 345,208 340,220" fill="hsl(220, 15%, 30%)" />
      </motion.g>

      {/* Light Bulb (Ideas) */}
      <motion.g
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ellipse cx="200" cy="130" rx="18" ry="22" fill="hsl(45, 95%, 65%)" />
        <rect x="192" y="150" width="16" height="10" rx="2" fill="hsl(220, 15%, 50%)" />
        {/* Light rays */}
        <line x1="175" y1="130" x2="160" y2="130" stroke="hsl(45, 90%, 55%)" strokeWidth="3" strokeLinecap="round" />
        <line x1="180" y1="110" x2="168" y2="98" stroke="hsl(45, 90%, 55%)" strokeWidth="3" strokeLinecap="round" />
        <line x1="220" y1="110" x2="232" y2="98" stroke="hsl(45, 90%, 55%)" strokeWidth="3" strokeLinecap="round" />
        <line x1="225" y1="130" x2="240" y2="130" stroke="hsl(45, 90%, 55%)" strokeWidth="3" strokeLinecap="round" />
      </motion.g>

      {/* Stars */}
      <motion.polygon
        points="380,180 383,190 393,190 385,197 388,207 380,200 372,207 375,197 367,190 377,190"
        fill="hsl(262, 70%, 55%)"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.polygon
        points="20,200 23,210 33,210 25,217 28,227 20,220 12,227 15,217 7,210 17,210"
        fill="hsl(16, 90%, 55%)"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Ruler */}
      <motion.g
        animate={{ x: [0, 5, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "50px 200px" }}
      >
        <rect x="35" y="190" width="50" height="12" rx="2" fill="hsl(30, 30%, 85%)" stroke="hsl(30, 20%, 70%)" />
        <line x1="45" y1="192" x2="45" y2="198" stroke="hsl(30, 20%, 50%)" strokeWidth="1" />
        <line x1="55" y1="192" x2="55" y2="200" stroke="hsl(30, 20%, 50%)" strokeWidth="1" />
        <line x1="65" y1="192" x2="65" y2="198" stroke="hsl(30, 20%, 50%)" strokeWidth="1" />
        <line x1="75" y1="192" x2="75" y2="200" stroke="hsl(30, 20%, 50%)" strokeWidth="1" />
      </motion.g>

      <defs>
        <linearGradient id="eduBgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(220, 80%, 55%)" />
          <stop offset="100%" stopColor="hsl(262, 70%, 55%)" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
