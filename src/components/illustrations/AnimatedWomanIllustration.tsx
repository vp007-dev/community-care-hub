import { motion } from "framer-motion";

export function AnimatedWomanIllustration({ className = "" }: { className?: string }) {
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
        fill="url(#womanBgGradient)"
        opacity="0.1"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Empowered Woman Figure - Center */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Head */}
        <circle cx="200" cy="140" r="35" fill="#E8C4B8" />
        {/* Beautiful long hair */}
        <path d="M165 125 Q160 100 180 90 Q200 85 220 90 Q240 100 235 125 L240 180 Q220 200 200 200 Q180 200 160 180 L165 125" fill="hsl(220, 25%, 15%)" />
        {/* Face details */}
        <circle cx="188" cy="138" r="3" fill="hsl(220, 25%, 20%)" />
        <circle cx="212" cy="138" r="3" fill="hsl(220, 25%, 20%)" />
        <path d="M190 152 Q200 160 210 152" stroke="hsl(350, 60%, 55%)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Bindi */}
        <circle cx="200" cy="125" r="3" fill="hsl(350, 80%, 50%)" />
        {/* Body - Saree */}
        <path d="M165 175 L150 320 Q200 340 250 320 L235 175 Q200 185 165 175" fill="url(#sareeGradient)" />
        {/* Saree pallu */}
        <path d="M165 175 Q140 200 150 250 Q155 280 170 290" stroke="hsl(340, 70%, 45%)" strokeWidth="15" fill="none" opacity="0.8" />
        {/* Arms */}
        <path d="M165 185 L130 230 L145 250" fill="#E8C4B8" />
        <path d="M235 185 L270 230 L255 250" fill="#E8C4B8" />
        {/* Bangles */}
        <circle cx="135" cy="235" r="8" stroke="hsl(45, 90%, 55%)" strokeWidth="3" fill="none" />
        <circle cx="265" cy="235" r="8" stroke="hsl(45, 90%, 55%)" strokeWidth="3" fill="none" />
      </motion.g>

      {/* Floating Laptop - Digital Skills */}
      <motion.g
        animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "85px 100px" }}
      >
        <rect x="50" y="80" width="70" height="45" rx="4" fill="hsl(220, 15%, 25%)" />
        <rect x="55" y="85" width="60" height="35" rx="2" fill="hsl(200, 80%, 55%)" opacity="0.8" />
        {/* Screen content */}
        <rect x="60" y="90" width="25" height="3" fill="white" opacity="0.8" />
        <rect x="60" y="96" width="20" height="3" fill="white" opacity="0.6" />
        <rect x="60" y="102" width="30" height="3" fill="white" opacity="0.4" />
        <rect x="40" y="125" width="90" height="8" rx="2" fill="hsl(220, 15%, 35%)" />
      </motion.g>

      {/* Sewing Machine - Tailoring Skills */}
      <motion.g
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <rect x="290" y="100" width="60" height="40" rx="5" fill="hsl(340, 70%, 55%)" />
        <rect x="285" y="140" width="70" height="15" rx="3" fill="hsl(340, 60%, 45%)" />
        {/* Needle area */}
        <rect x="335" y="90" width="5" height="15" fill="hsl(200, 15%, 40%)" />
        {/* Thread */}
        <circle cx="310" cy="85" r="12" stroke="hsl(45, 90%, 55%)" strokeWidth="4" fill="none" />
        {/* Fabric flowing */}
        <motion.path
          d="M350 130 Q370 140 380 160 Q370 170 350 165"
          fill="hsl(262, 70%, 75%)"
          animate={{ d: ["M350 130 Q370 140 380 160 Q370 170 350 165", "M350 130 Q375 145 385 165 Q375 175 355 170", "M350 130 Q370 140 380 160 Q370 170 350 165"] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.g>

      {/* Paint Palette - Arts */}
      <motion.g
        animate={{ rotate: [-5, 5, -5], y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "80px 280px" }}
      >
        <ellipse cx="80" cy="280" rx="40" ry="25" fill="hsl(30, 30%, 80%)" />
        <circle cx="65" cy="270" r="8" fill="hsl(350, 80%, 55%)" />
        <circle cx="85" cy="265" r="7" fill="hsl(45, 90%, 55%)" />
        <circle cx="100" cy="275" r="6" fill="hsl(200, 80%, 55%)" />
        <circle cx="90" cy="290" r="7" fill="hsl(160, 60%, 45%)" />
        <circle cx="70" cy="292" r="5" fill="hsl(262, 70%, 55%)" />
        {/* Brush */}
        <rect x="110" y="260" width="5" height="35" rx="1" fill="hsl(30, 50%, 40%)" transform="rotate(25, 110, 260)" />
        <ellipse cx="118" cy="252" rx="4" ry="10" fill="hsl(30, 25%, 25%)" transform="rotate(25, 118, 252)" />
      </motion.g>

      {/* Music Notes - Classical Music */}
      <motion.g
        animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ellipse cx="320" cy="260" rx="10" ry="8" fill="hsl(262, 70%, 55%)" transform="rotate(-20, 320, 260)" />
        <rect x="328" y="220" width="4" height="40" fill="hsl(262, 70%, 55%)" />
        <path d="M332 220 Q350 210 345 235" fill="hsl(262, 70%, 55%)" />
      </motion.g>
      <motion.g
        animate={{ y: [0, -12, 0], x: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <ellipse cx="350" cy="290" rx="8" ry="6" fill="hsl(340, 70%, 55%)" transform="rotate(-15, 350, 290)" />
        <rect x="356" y="258" width="3" height="32" fill="hsl(340, 70%, 55%)" />
      </motion.g>

      {/* Money/Independence Symbol */}
      <motion.g
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "330px 340px" }}
      >
        <circle cx="330" cy="340" r="22" fill="hsl(160, 60%, 45%)" />
        <text x="330" y="348" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white">₹</text>
      </motion.g>

      {/* Stars */}
      <motion.polygon
        points="60,180 63,190 73,190 65,197 68,207 60,200 52,207 55,197 47,190 57,190"
        fill="hsl(45, 90%, 55%)"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.polygon
        points="340,50 342,57 349,57 343,62 346,69 340,64 334,69 337,62 331,57 338,57"
        fill="hsl(340, 70%, 55%)"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.polygon
        points="50,350 52,357 59,357 53,362 56,369 50,364 44,369 47,362 41,357 48,357"
        fill="hsl(262, 70%, 55%)"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />

      {/* Empowerment Rays */}
      <motion.g
        opacity="0.3"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "200px 200px" }}
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line
            key={angle}
            x1="200"
            y1="200"
            x2={200 + 180 * Math.cos((angle * Math.PI) / 180)}
            y2={200 + 180 * Math.sin((angle * Math.PI) / 180)}
            stroke="url(#rayGradient)"
            strokeWidth="2"
            opacity="0.3"
          />
        ))}
      </motion.g>

      <defs>
        <linearGradient id="womanBgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(340, 70%, 55%)" />
          <stop offset="100%" stopColor="hsl(262, 70%, 55%)" />
        </linearGradient>
        <linearGradient id="sareeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(340, 70%, 55%)" />
          <stop offset="100%" stopColor="hsl(340, 60%, 45%)" />
        </linearGradient>
        <linearGradient id="rayGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(340, 70%, 55%)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
