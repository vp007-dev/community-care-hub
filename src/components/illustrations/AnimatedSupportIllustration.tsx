import { motion } from "framer-motion";

export function AnimatedSupportIllustration({ className = "" }: { className?: string }) {
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
      {/* Background */}
      <motion.circle
        cx="200"
        cy="150"
        r="130"
        fill="url(#supportGradient)"
        opacity="0.1"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Large Heart with Hands */}
      <motion.g
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "200px 150px" }}
      >
        {/* Left Hand */}
        <path
          d="M120 180 C100 160 90 140 110 120 C130 100 160 110 180 140 L200 170"
          fill="#F5D0C5"
        />
        {/* Right Hand */}
        <path
          d="M280 180 C300 160 310 140 290 120 C270 100 240 110 220 140 L200 170"
          fill="#E8C4B8"
        />
        {/* Heart in Center */}
        <path
          d="M200 120 C180 90 140 90 130 130 C120 170 160 200 200 240 C240 200 280 170 270 130 C260 90 220 90 200 120"
          fill="url(#heartSupportGradient)"
        />
        {/* Heart shine */}
        <ellipse cx="165" cy="135" rx="15" ry="10" fill="white" opacity="0.3" />
      </motion.g>

      {/* Floating Coins */}
      <motion.g
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="80" cy="100" r="25" fill="hsl(45, 90%, 55%)" />
        <circle cx="80" cy="100" r="20" stroke="hsl(45, 80%, 45%)" strokeWidth="3" fill="none" />
        <text x="80" y="108" textAnchor="middle" fontSize="20" fontWeight="bold" fill="hsl(45, 80%, 35%)">₹</text>
      </motion.g>

      <motion.g
        animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <circle cx="320" cy="80" r="22" fill="hsl(160, 60%, 50%)" />
        <circle cx="320" cy="80" r="17" stroke="hsl(160, 50%, 40%)" strokeWidth="3" fill="none" />
        <text x="320" y="88" textAnchor="middle" fontSize="18" fontWeight="bold" fill="white">$</text>
      </motion.g>

      {/* Gift Box */}
      <motion.g
        animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "60px 220px" }}
      >
        <rect x="35" y="200" width="50" height="45" rx="4" fill="hsl(340, 70%, 55%)" />
        <rect x="35" y="190" width="50" height="15" rx="3" fill="hsl(340, 60%, 45%)" />
        <rect x="55" y="190" width="10" height="55" fill="hsl(45, 90%, 55%)" />
        <rect x="35" y="195" width="50" height="5" fill="hsl(45, 90%, 55%)" />
        {/* Ribbon bow */}
        <ellipse cx="55" cy="188" rx="12" ry="8" fill="hsl(45, 90%, 55%)" />
        <ellipse cx="65" cy="188" rx="12" ry="8" fill="hsl(45, 85%, 50%)" />
      </motion.g>

      {/* Helping Hands Icons */}
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <circle cx="340" cy="200" r="30" fill="hsl(200, 80%, 55%)" opacity="0.2" />
        <path
          d="M325 195 L330 205 L340 195 L350 205 L355 195"
          stroke="hsl(200, 80%, 55%)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M330 210 L340 220 L350 210"
          stroke="hsl(200, 80%, 55%)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>

      {/* Stars / Sparkles */}
      <motion.polygon
        points="50,60 53,70 63,70 55,77 58,87 50,80 42,87 45,77 37,70 47,70"
        fill="hsl(45, 90%, 55%)"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
      <motion.polygon
        points="350,260 352,267 359,267 353,272 356,279 350,274 344,279 347,272 341,267 348,267"
        fill="hsl(262, 70%, 55%)"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      />
      <motion.polygon
        points="150,60 152,67 159,67 153,72 156,79 150,74 144,79 147,72 141,67 148,67"
        fill="hsl(160, 60%, 55%)"
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
      />

      {/* Floating Hearts */}
      <motion.path
        d="M100 260 C95 255 85 255 85 265 C85 275 100 285 100 285 C100 285 115 275 115 265 C115 255 105 255 100 260"
        fill="hsl(340, 70%, 55%)"
        animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path
        d="M300 270 C297 267 291 267 291 273 C291 279 300 285 300 285 C300 285 309 279 309 273 C309 267 303 267 300 270"
        fill="hsl(16, 90%, 55%)"
        opacity="0.7"
        animate={{ y: [0, -8, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }}
      />

      {/* Growing Plant (symbolizing growth from support) */}
      <motion.g
        animate={{ scaleY: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "200px 280px" }}
      >
        <rect x="195" y="265" width="10" height="20" fill="hsl(30, 40%, 45%)" rx="2" />
        <ellipse cx="200" cy="255" rx="20" ry="15" fill="hsl(160, 60%, 50%)" />
        <ellipse cx="185" cy="260" rx="12" ry="10" fill="hsl(160, 55%, 45%)" />
        <ellipse cx="215" cy="260" rx="12" ry="10" fill="hsl(160, 55%, 45%)" />
      </motion.g>

      <defs>
        <linearGradient id="supportGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(16, 90%, 55%)" />
          <stop offset="100%" stopColor="hsl(340, 70%, 55%)" />
        </linearGradient>
        <linearGradient id="heartSupportGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(350, 80%, 60%)" />
          <stop offset="100%" stopColor="hsl(340, 70%, 50%)" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
