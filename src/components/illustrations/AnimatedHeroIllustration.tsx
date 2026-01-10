import { motion } from "framer-motion";

export function AnimatedHeroIllustration({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <motion.circle
        cx="250"
        cy="250"
        r="200"
        fill="url(#heroGradient)"
        opacity="0.1"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating Books Stack */}
      <motion.g
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="100" y="280" width="80" height="15" rx="2" fill="hsl(220, 80%, 55%)" />
        <rect x="105" y="265" width="75" height="15" rx="2" fill="hsl(340, 70%, 55%)" />
        <rect x="95" y="250" width="85" height="15" rx="2" fill="hsl(160, 60%, 45%)" />
        <rect x="100" y="235" width="80" height="15" rx="2" fill="hsl(45, 90%, 55%)" />
      </motion.g>

      {/* Pencil */}
      <motion.g
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "195px 210px" }}
      >
        <polygon points="180,180 210,180 195,150" fill="hsl(30, 80%, 70%)" />
        <rect x="180" y="180" width="30" height="80" fill="hsl(45, 90%, 55%)" />
        <rect x="180" y="250" width="30" height="10" fill="hsl(340, 70%, 55%)" />
        <polygon points="180,260 210,260 195,280" fill="hsl(220, 15%, 30%)" />
      </motion.g>

      {/* Central Heart */}
      <motion.path
        d="M250 200c-20-30-60-30-70 0c-10 30 20 60 70 90c50-30 80-60 70-90c-10-30-50-30-70 0z"
        fill="url(#heartGradient)"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "250px 240px" }}
      />

      {/* Student Figure 1 */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      >
        <circle cx="320" cy="300" r="25" fill="#F5D0C5" />
        <ellipse cx="320" cy="285" rx="22" ry="18" fill="hsl(220, 25%, 15%)" />
        <rect x="300" y="325" width="40" height="55" rx="8" fill="hsl(220, 80%, 55%)" />
        {/* Backpack */}
        <rect x="342" y="335" width="18" height="35" rx="4" fill="hsl(16, 90%, 55%)" />
      </motion.g>

      {/* Student Figure 2 */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <circle cx="380" cy="320" r="22" fill="#E8C4B8" />
        <path d="M360 305c0 0 8-20 20-20s20 20 20 20c4 4 2 8-4 8h-32c-6 0-8-4-4-8z" fill="hsl(30, 40%, 25%)" />
        <rect x="362" y="342" width="36" height="50" rx="7" fill="hsl(340, 70%, 55%)" />
        {/* Pigtails */}
        <circle cx="355" cy="310" r="8" fill="hsl(30, 40%, 25%)" />
        <circle cx="405" cy="310" r="8" fill="hsl(30, 40%, 25%)" />
      </motion.g>

      {/* Flying Stars */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "250px 250px" }}
      >
        <motion.polygon
          points="420,150 423,160 433,160 425,167 428,177 420,170 412,177 415,167 407,160 417,160"
          fill="hsl(45, 90%, 55%)"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.polygon
          points="80,200 83,210 93,210 85,217 88,227 80,220 72,227 75,217 67,210 77,210"
          fill="hsl(16, 90%, 55%)"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.polygon
          points="150,380 152,387 159,387 153,392 156,399 150,394 144,399 147,392 141,387 148,387"
          fill="hsl(262, 70%, 55%)"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
        />
      </motion.g>

      {/* Graduation Cap */}
      <motion.g
        animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "400px 100px" }}
      >
        <polygon points="370,100 430,100 450,80 390,80" fill="hsl(220, 25%, 15%)" />
        <rect x="380" y="100" width="40" height="8" fill="hsl(220, 25%, 15%)" />
        <circle cx="400" cy="80" r="6" fill="hsl(45, 90%, 55%)" />
        <line x1="400" y1="80" x2="420" y2="95" stroke="hsl(45, 90%, 55%)" strokeWidth="2" />
        <circle cx="422" cy="98" r="4" fill="hsl(45, 90%, 55%)" />
      </motion.g>

      {/* Light Bulb (Ideas) */}
      <motion.g
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ellipse cx="120" cy="120" rx="25" ry="30" fill="hsl(45, 95%, 65%)" />
        <rect x="110" y="148" width="20" height="12" rx="2" fill="hsl(220, 15%, 50%)" />
        {/* Light rays */}
        <line x1="90" y1="120" x2="70" y2="120" stroke="hsl(45, 90%, 55%)" strokeWidth="3" strokeLinecap="round" />
        <line x1="95" y1="95" x2="80" y2="80" stroke="hsl(45, 90%, 55%)" strokeWidth="3" strokeLinecap="round" />
        <line x1="120" y1="85" x2="120" y2="65" stroke="hsl(45, 90%, 55%)" strokeWidth="3" strokeLinecap="round" />
        <line x1="145" y1="95" x2="160" y2="80" stroke="hsl(45, 90%, 55%)" strokeWidth="3" strokeLinecap="round" />
        <line x1="150" y1="120" x2="170" y2="120" stroke="hsl(45, 90%, 55%)" strokeWidth="3" strokeLinecap="round" />
      </motion.g>

      {/* Floating Circles */}
      <motion.circle
        cx="430" cy="380"
        r="15"
        fill="hsl(160, 60%, 45%)"
        opacity="0.6"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="70" cy="350"
        r="12"
        fill="hsl(340, 70%, 55%)"
        opacity="0.5"
        animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="350" cy="450"
        r="18"
        fill="hsl(220, 80%, 55%)"
        opacity="0.4"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <defs>
        <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(16, 90%, 55%)" />
          <stop offset="50%" stopColor="hsl(262, 70%, 55%)" />
          <stop offset="100%" stopColor="hsl(220, 80%, 55%)" />
        </linearGradient>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(16, 90%, 55%)" />
          <stop offset="100%" stopColor="hsl(340, 70%, 55%)" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
