export function WomanIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="200" cy="200" r="180" fill="url(#womanGradient)" opacity="0.1" />
      
      {/* Woman figure */}
      <g>
        {/* Hair */}
        <path
          d="M200 80c-35 0-60 25-60 55c0 15 5 25 10 35c-10 5-20 15-20 30c0 20 15 35 35 35h70c20 0 35-15 35-35c0-15-10-25-20-30c5-10 10-20 10-35c0-30-25-55-60-55z"
          fill="hsl(220, 25%, 15%)"
        />
        
        {/* Face */}
        <ellipse cx="200" cy="145" rx="45" ry="50" fill="#F5D0C5" />
        
        {/* Eyes */}
        <ellipse cx="185" cy="140" rx="5" ry="6" fill="hsl(220, 25%, 15%)" />
        <ellipse cx="215" cy="140" rx="5" ry="6" fill="hsl(220, 25%, 15%)" />
        
        {/* Smile */}
        <path
          d="M188 160c6 8 18 8 24 0"
          stroke="hsl(16, 90%, 45%)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Bindi */}
        <circle cx="200" cy="125" r="4" fill="hsl(0, 80%, 50%)" />
        
        {/* Neck */}
        <rect x="190" y="190" width="20" height="25" fill="#F5D0C5" />
        
        {/* Traditional dress (Saree style) */}
        <path
          d="M140 215c0 0 10-5 60-5s60 5 60 5v120c0 10-10 20-60 20s-60-10-60-20v-120z"
          fill="url(#sareeGradient)"
        />
        
        {/* Saree pallu (drape) */}
        <path
          d="M145 220c0 0 20 10 55 10c-10 20-30 100-30 120c-20-10-25-80-25-130z"
          fill="url(#palluGradient)"
          opacity="0.8"
        />
        
        {/* Arms */}
        <path
          d="M145 230c-15 10-25 30-30 50c-3 10 5 15 10 10c10-10 25-35 30-50"
          fill="#F5D0C5"
        />
        <path
          d="M255 230c15 10 25 30 30 50c3 10-5 15-10 10c-10-10-25-35-30-50"
          fill="#F5D0C5"
        />
        
        {/* Book in hand */}
        <rect x="250" y="275" width="30" height="40" rx="3" fill="hsl(16, 90%, 55%)" />
        <rect x="253" y="280" width="24" height="2" fill="white" opacity="0.5" />
        <rect x="253" y="286" width="24" height="2" fill="white" opacity="0.5" />
        <rect x="253" y="292" width="24" height="2" fill="white" opacity="0.5" />
        
        {/* Decorative elements */}
        <circle cx="200" cy="220" r="8" fill="gold" opacity="0.8" />
        
        {/* Earrings */}
        <circle cx="155" cy="155" r="6" fill="gold" />
        <circle cx="245" cy="155" r="6" fill="gold" />
      </g>
      
      {/* Floating elements - symbols of empowerment */}
      <g opacity="0.6">
        {/* Graduation cap */}
        <g transform="translate(80, 100)">
          <rect x="0" y="10" width="40" height="5" fill="hsl(16, 90%, 55%)" />
          <polygon points="20,0 40,10 20,20 0,10" fill="hsl(16, 90%, 45%)" />
          <line x1="35" y1="10" x2="45" y2="25" stroke="hsl(16, 90%, 55%)" strokeWidth="2" />
          <circle cx="45" cy="28" r="4" fill="gold" />
        </g>
        
        {/* Computer/laptop */}
        <g transform="translate(290, 120)">
          <rect x="0" y="0" width="35" height="25" rx="3" fill="hsl(220, 20%, 30%)" />
          <rect x="3" y="3" width="29" height="19" fill="hsl(200, 80%, 60%)" />
          <rect x="-5" y="25" width="45" height="5" rx="2" fill="hsl(220, 20%, 40%)" />
        </g>
        
        {/* Sewing needle and thread */}
        <g transform="translate(310, 280)">
          <ellipse cx="15" cy="15" rx="15" ry="15" fill="none" stroke="hsl(330, 70%, 60%)" strokeWidth="3" strokeDasharray="5 3" />
          <line x1="30" y1="15" x2="50" y2="5" stroke="hsl(220, 20%, 50%)" strokeWidth="2" />
          <ellipse cx="52" cy="4" rx="3" ry="5" fill="hsl(220, 20%, 50%)" />
        </g>
        
        {/* Music note */}
        <g transform="translate(70, 280)">
          <ellipse cx="10" cy="25" rx="8" ry="6" fill="hsl(262, 70%, 55%)" />
          <rect x="16" y="5" width="3" height="22" fill="hsl(262, 70%, 55%)" />
          <path d="M19 5c10-3 15 5 15 10" stroke="hsl(262, 70%, 55%)" strokeWidth="3" fill="none" />
        </g>
        
        {/* Paintbrush */}
        <g transform="translate(320, 200)">
          <rect x="0" y="15" width="8" height="30" fill="hsl(30, 60%, 50%)" />
          <path d="M0 15L4 0L8 15z" fill="hsl(16, 90%, 55%)" />
        </g>
      </g>
      
      {/* Stars decoration */}
      <g fill="hsl(16, 90%, 55%)" opacity="0.4">
        <polygon points="50,50 52,56 58,56 53,60 55,66 50,62 45,66 47,60 42,56 48,56" />
        <polygon points="350,80 352,86 358,86 353,90 355,96 350,92 345,96 347,90 342,86 348,86" />
        <polygon points="330,350 332,356 338,356 333,360 335,366 330,362 325,366 327,360 322,356 328,356" />
        <polygon points="70,350 72,356 78,356 73,360 75,366 70,362 65,366 67,360 62,356 68,356" />
      </g>
      
      <defs>
        <linearGradient id="womanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(16, 90%, 55%)" />
          <stop offset="100%" stopColor="hsl(330, 70%, 50%)" />
        </linearGradient>
        <linearGradient id="sareeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(16, 90%, 55%)" />
          <stop offset="100%" stopColor="hsl(16, 90%, 45%)" />
        </linearGradient>
        <linearGradient id="palluGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(30, 80%, 60%)" />
          <stop offset="100%" stopColor="hsl(16, 90%, 50%)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
