import { motion } from "framer-motion";

export function AnimatedContactIllustration({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Circles */}
      <motion.circle
        cx="200"
        cy="150"
        r="130"
        fill="url(#contactGradient)"
        opacity="0.1"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Large Envelope */}
      <motion.g
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Envelope body */}
        <rect x="100" y="100" width="200" height="130" rx="8" fill="hsl(160, 60%, 50%)" />
        {/* Envelope flap */}
        <path d="M100 100 L200 170 L300 100" fill="hsl(160, 60%, 45%)" />
        {/* Inner shadow */}
        <path d="M100 100 L200 160 L300 100 L300 230 L100 230 Z" fill="hsl(160, 55%, 55%)" opacity="0.5" />
        {/* Letter inside */}
        <rect x="130" y="130" width="140" height="80" rx="4" fill="white" />
        <line x1="145" y1="150" x2="255" y2="150" stroke="hsl(200, 15%, 80%)" strokeWidth="3" />
        <line x1="145" y1="165" x2="240" y2="165" stroke="hsl(200, 15%, 85%)" strokeWidth="3" />
        <line x1="145" y1="180" x2="220" y2="180" stroke="hsl(200, 15%, 80%)" strokeWidth="3" />
      </motion.g>

      {/* Floating Chat Bubble 1 */}
      <motion.g
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="40" y="60" width="80" height="50" rx="12" fill="hsl(220, 80%, 55%)" />
        <polygon points="70,110 85,110 70,125" fill="hsl(220, 80%, 55%)" />
        <circle cx="60" cy="85" r="5" fill="white" />
        <circle cx="80" cy="85" r="5" fill="white" />
        <circle cx="100" cy="85" r="5" fill="white" />
      </motion.g>

      {/* Floating Chat Bubble 2 */}
      <motion.g
        animate={{ y: [0, -8, 0], x: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <rect x="280" y="50" width="70" height="40" rx="10" fill="hsl(340, 70%, 55%)" />
        <polygon points="320,90 335,90 320,102" fill="hsl(340, 70%, 55%)" />
        <rect x="295" y="65" width="40" height="4" rx="2" fill="white" opacity="0.8" />
        <rect x="295" y="73" width="30" height="4" rx="2" fill="white" opacity="0.6" />
      </motion.g>

      {/* Phone Icon */}
      <motion.g
        animate={{ rotate: [-5, 5, -5], y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 200px" }}
      >
        <rect x="40" y="180" width="40" height="60" rx="6" fill="hsl(45, 90%, 55%)" />
        <rect x="45" y="188" width="30" height="40" rx="3" fill="hsl(220, 25%, 20%)" />
        <circle cx="60" cy="235" r="4" fill="white" opacity="0.5" />
      </motion.g>

      {/* Location Pin */}
      <motion.g
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <path d="M340 180 C340 160 320 150 320 130 C320 110 340 100 360 100 C380 100 400 110 400 130 C400 150 380 160 380 180 L360 220 Z" fill="hsl(350, 80%, 55%)" />
        <circle cx="360" cy="135" r="15" fill="white" />
      </motion.g>

      {/* Flying Paper Planes */}
      <motion.g
        animate={{ 
          x: [0, 50, 100],
          y: [0, -30, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon points="30,40 70,50 50,60 45,55" fill="hsl(200, 80%, 60%)" />
        <polygon points="50,60 70,50 65,65" fill="hsl(200, 70%, 50%)" />
      </motion.g>

      {/* Stars */}
      <motion.polygon
        points="350,250 352,256 358,256 353,260 355,266 350,262 345,266 347,260 342,256 348,256"
        fill="hsl(45, 90%, 55%)"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.polygon
        points="50,270 52,276 58,276 53,280 55,286 50,282 45,286 47,280 42,276 48,276"
        fill="hsl(262, 70%, 55%)"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />

      {/* Connection Lines */}
      <motion.path
        d="M120 85 Q150 100 160 120"
        stroke="hsl(160, 60%, 45%)"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
        opacity="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path
        d="M280 90 Q260 110 260 120"
        stroke="hsl(340, 70%, 55%)"
        strokeWidth="2"
        strokeDasharray="5,5"
        fill="none"
        opacity="0.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />

      <defs>
        <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(160, 60%, 45%)" />
          <stop offset="100%" stopColor="hsl(200, 80%, 55%)" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
