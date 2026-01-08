export function HealthIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="200" cy="200" r="180" fill="url(#healthGradient)" opacity="0.1" />
      
      {/* Heart with cross */}
      <g transform="translate(120, 100)">
        <path
          d="M80 30c-20-30-60-30-70 0c-10 30 10 60 70 100c60-40 80-70 70-100c-10-30-50-30-70 0z"
          fill="url(#heartGradient)"
        />
        {/* Cross on heart */}
        <rect x="70" y="40" width="20" height="50" rx="4" fill="white" opacity="0.9" />
        <rect x="55" y="55" width="50" height="20" rx="4" fill="white" opacity="0.9" />
      </g>
      
      {/* Stethoscope */}
      <g transform="translate(60, 180)">
        <path
          d="M30 0c0 30 0 60 30 80c30 20 60 20 90 0c30-20 30-50 30-80"
          fill="none"
          stroke="hsl(220, 25%, 30%)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="30" cy="0" r="12" fill="hsl(220, 25%, 40%)" />
        <circle cx="180" cy="0" r="12" fill="hsl(220, 25%, 40%)" />
        <circle cx="105" cy="100" r="25" fill="hsl(220, 25%, 40%)" stroke="hsl(220, 25%, 30%)" strokeWidth="4" />
        <circle cx="105" cy="100" r="12" fill="hsl(220, 25%, 50%)" />
      </g>
      
      {/* Doctor figure */}
      <g transform="translate(250, 200)">
        {/* Head */}
        <circle cx="50" cy="30" r="28" fill="#E8C4B8" />
        {/* Hair */}
        <ellipse cx="50" cy="15" rx="25" ry="18" fill="hsl(220, 25%, 15%)" />
        {/* Eyes */}
        <circle cx="42" cy="28" r="4" fill="hsl(220, 25%, 15%)" />
        <circle cx="58" cy="28" r="4" fill="hsl(220, 25%, 15%)" />
        {/* Smile */}
        <path d="M42 40c4 5 12 5 16 0" stroke="hsl(16, 90%, 45%)" strokeWidth="2" fill="none" />
        {/* Body - white coat */}
        <rect x="25" y="58" width="50" height="80" rx="8" fill="white" stroke="hsl(220, 20%, 85%)" strokeWidth="2" />
        {/* Coat details */}
        <line x1="50" y1="60" x2="50" y2="138" stroke="hsl(220, 20%, 85%)" strokeWidth="2" />
        {/* Stethoscope */}
        <path d="M35 70c0 10 15 20 15 30" stroke="hsl(160, 60%, 40%)" strokeWidth="3" fill="none" />
        <circle cx="50" cy="105" r="8" fill="hsl(160, 60%, 40%)" />
      </g>
      
      {/* Medicine/Pills */}
      <g transform="translate(50, 300)">
        <rect x="0" y="0" width="50" height="30" rx="15" fill="hsl(16, 90%, 55%)" />
        <rect x="25" y="0" width="25" height="30" rx="0 15 15 0" fill="white" />
      </g>
      
      <g transform="translate(280, 320)">
        <rect x="0" y="0" width="40" height="25" rx="12" fill="hsl(200, 80%, 50%)" />
        <rect x="20" y="0" width="20" height="25" rx="0 12 12 0" fill="hsl(200, 80%, 70%)" />
      </g>
      
      {/* Heartbeat line */}
      <g transform="translate(60, 350)">
        <path
          d="M0 20h40l10-15l15 30l15-30l10 15h40l10-10l15 20l10-20l10 10h80"
          fill="none"
          stroke="hsl(160, 60%, 45%)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      
      {/* Medical cross symbols */}
      <g fill="hsl(160, 60%, 45%)" opacity="0.4">
        <g transform="translate(320, 100)">
          <rect x="8" y="0" width="10" height="26" rx="2" />
          <rect x="0" y="8" width="26" height="10" rx="2" />
        </g>
        <g transform="translate(40, 120)">
          <rect x="6" y="0" width="8" height="20" rx="2" />
          <rect x="0" y="6" width="20" height="8" rx="2" />
        </g>
      </g>
      
      {/* Floating health icons */}
      <g opacity="0.5">
        {/* Syringe */}
        <g transform="translate(330, 250) rotate(45)">
          <rect x="0" y="8" width="40" height="10" rx="2" fill="hsl(200, 80%, 60%)" />
          <rect x="40" y="5" width="5" height="16" fill="hsl(220, 20%, 60%)" />
          <polygon points="45,13 55,13 45,13" fill="hsl(220, 20%, 50%)" />
          <line x1="55" y1="13" x2="60" y2="13" stroke="hsl(220, 20%, 50%)" strokeWidth="2" />
        </g>
      </g>
      
      {/* Stars */}
      <g fill="hsl(160, 60%, 45%)" opacity="0.4">
        <polygon points="350,60 352,66 358,66 353,70 355,76 350,72 345,76 347,70 342,66 348,66" />
        <polygon points="70,80 72,86 78,86 73,90 75,96 70,92 65,96 67,90 62,86 68,86" />
      </g>
      
      <defs>
        <linearGradient id="healthGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(160, 60%, 45%)" />
          <stop offset="100%" stopColor="hsl(200, 80%, 50%)" />
        </linearGradient>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(350, 80%, 55%)" />
          <stop offset="100%" stopColor="hsl(16, 90%, 55%)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
