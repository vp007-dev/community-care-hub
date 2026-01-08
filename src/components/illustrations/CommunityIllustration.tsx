export function CommunityIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="200" cy="200" r="180" fill="url(#communityGradient)" opacity="0.1" />
      
      {/* Central hands forming heart */}
      <g transform="translate(100, 120)">
        {/* Left hand */}
        <path
          d="M40 100c-20-10-40 0-40 30c0 40 60 70 100 90c0 0 10-50 0-70c-10-20-40-40-60-50z"
          fill="#E8C4B8"
        />
        {/* Right hand */}
        <path
          d="M160 100c20-10 40 0 40 30c0 40-60 70-100 90c0 0-10-50 0-70c10-20 40-40 60-50z"
          fill="#D4A574"
        />
        {/* Heart in center */}
        <path
          d="M100 140c-15-20-40-20-45 0c-5 20 10 40 45 60c35-20 50-40 45-60c-5-20-30-20-45 0z"
          fill="hsl(16, 90%, 55%)"
        />
      </g>
      
      {/* People circle */}
      {/* Person 1 - top */}
      <g transform="translate(175, 40)">
        <circle cx="25" cy="20" r="18" fill="#F5D0C5" />
        <ellipse cx="25" cy="8" rx="16" ry="12" fill="hsl(220, 25%, 15%)" />
        <rect x="12" y="38" width="26" height="35" rx="6" fill="hsl(16, 90%, 55%)" />
      </g>
      
      {/* Person 2 - top right */}
      <g transform="translate(290, 90)">
        <circle cx="25" cy="20" r="18" fill="#E8C4B8" />
        <path d="M10 5c0-8 10-12 15-12s15 4 15 12c5 0 8 5 5 10h-40c-3-5 0-10 5-10z" fill="hsl(30, 40%, 30%)" />
        <rect x="12" y="38" width="26" height="35" rx="6" fill="hsl(200, 80%, 50%)" />
      </g>
      
      {/* Person 3 - right */}
      <g transform="translate(320, 200)">
        <circle cx="25" cy="20" r="18" fill="#D4A574" />
        <ellipse cx="25" cy="5" rx="18" ry="15" fill="hsl(220, 25%, 15%)" />
        <rect x="12" y="38" width="26" height="35" rx="6" fill="hsl(160, 60%, 45%)" />
      </g>
      
      {/* Person 4 - bottom right */}
      <g transform="translate(280, 310)">
        <circle cx="25" cy="20" r="18" fill="#F5D0C5" />
        <ellipse cx="25" cy="8" rx="16" ry="12" fill="hsl(30, 60%, 25%)" />
        <rect x="12" y="38" width="26" height="35" rx="6" fill="hsl(262, 70%, 55%)" />
      </g>
      
      {/* Person 5 - bottom */}
      <g transform="translate(175, 340)">
        <circle cx="25" cy="20" r="18" fill="#E8C4B8" />
        <path d="M8 10c0 0 5-15 17-15s17 15 17 15c5 5 3 10-2 10h-30c-5 0-7-5-2-10z" fill="hsl(220, 25%, 15%)" />
        <rect x="12" y="38" width="26" height="30" rx="6" fill="hsl(45, 90%, 55%)" />
      </g>
      
      {/* Person 6 - bottom left */}
      <g transform="translate(70, 310)">
        <circle cx="25" cy="20" r="18" fill="#D4A574" />
        <ellipse cx="25" cy="8" rx="15" ry="13" fill="hsl(220, 25%, 15%)" />
        <rect x="12" y="38" width="26" height="35" rx="6" fill="hsl(330, 70%, 55%)" />
      </g>
      
      {/* Person 7 - left */}
      <g transform="translate(30, 200)">
        <circle cx="25" cy="20" r="18" fill="#F5D0C5" />
        <path d="M10 15c-5-15 10-22 15-22s20 7 15 22c3 3 2 8-3 8h-24c-5 0-6-5-3-8z" fill="hsl(30, 50%, 25%)" />
        <rect x="12" y="38" width="26" height="35" rx="6" fill="hsl(16, 70%, 60%)" />
      </g>
      
      {/* Person 8 - top left */}
      <g transform="translate(60, 90)">
        <circle cx="25" cy="20" r="18" fill="#E8C4B8" />
        <ellipse cx="25" cy="6" rx="17" ry="14" fill="hsl(220, 25%, 15%)" />
        <rect x="12" y="38" width="26" height="35" rx="6" fill="hsl(175, 60%, 40%)" />
      </g>
      
      {/* Connecting lines (subtle) */}
      <g stroke="hsl(16, 90%, 55%)" strokeWidth="1" opacity="0.2">
        <line x1="200" y1="80" x2="200" y2="120" />
        <line x1="315" y1="130" x2="260" y2="160" />
        <line x1="345" y1="240" x2="260" y2="220" />
        <line x1="305" y1="350" x2="260" y2="280" />
        <line x1="200" y1="360" x2="200" y2="320" />
        <line x1="95" y1="350" x2="140" y2="280" />
        <line x1="55" y1="240" x2="140" y2="220" />
        <line x1="85" y1="130" x2="140" y2="160" />
      </g>
      
      {/* Stars */}
      <g fill="hsl(16, 90%, 55%)" opacity="0.4">
        <polygon points="200,10 202,16 208,16 203,20 205,26 200,22 195,26 197,20 192,16 198,16" />
        <polygon points="380,200 382,206 388,206 383,210 385,216 380,212 375,216 377,210 372,206 378,206" />
        <polygon points="20,200 22,206 28,206 23,210 25,216 20,212 15,216 17,210 12,206 18,206" />
      </g>
      
      <defs>
        <linearGradient id="communityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(16, 90%, 55%)" />
          <stop offset="50%" stopColor="hsl(262, 70%, 55%)" />
          <stop offset="100%" stopColor="hsl(160, 60%, 45%)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
