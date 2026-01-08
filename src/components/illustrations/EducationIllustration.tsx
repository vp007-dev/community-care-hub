export function EducationIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background circle */}
      <circle cx="200" cy="200" r="180" fill="url(#eduGradient)" opacity="0.1" />
      
      {/* Open book */}
      <g transform="translate(100, 180)">
        {/* Left page */}
        <path
          d="M100 0C60 0 20 10 0 20v140c20-10 60-15 100-15s80 5 100 15V20C180 10 140 0 100 0z"
          fill="white"
          stroke="hsl(220, 20%, 80%)"
          strokeWidth="2"
        />
        {/* Center fold */}
        <line x1="100" y1="5" x2="100" y2="145" stroke="hsl(220, 20%, 85%)" strokeWidth="2" />
        
        {/* Text lines - left page */}
        <g fill="hsl(220, 20%, 70%)">
          <rect x="15" y="25" width="70" height="4" rx="2" />
          <rect x="15" y="40" width="60" height="4" rx="2" />
          <rect x="15" y="55" width="65" height="4" rx="2" />
          <rect x="15" y="70" width="55" height="4" rx="2" />
          <rect x="15" y="85" width="70" height="4" rx="2" />
          <rect x="15" y="100" width="50" height="4" rx="2" />
        </g>
        
        {/* Text lines - right page */}
        <g fill="hsl(220, 20%, 70%)">
          <rect x="115" y="25" width="70" height="4" rx="2" />
          <rect x="115" y="40" width="60" height="4" rx="2" />
          <rect x="115" y="55" width="65" height="4" rx="2" />
          <rect x="115" y="70" width="55" height="4" rx="2" />
          <rect x="115" y="85" width="70" height="4" rx="2" />
          <rect x="115" y="100" width="50" height="4" rx="2" />
        </g>
      </g>
      
      {/* Graduation cap */}
      <g transform="translate(140, 70)">
        <polygon points="60,0 120,30 60,60 0,30" fill="hsl(220, 25%, 15%)" />
        <rect x="30" y="30" width="60" height="15" fill="hsl(220, 25%, 20%)" />
        <line x1="100" y1="30" x2="120" y2="60" stroke="hsl(16, 90%, 55%)" strokeWidth="3" />
        <circle cx="122" cy="65" r="8" fill="gold" />
      </g>
      
      {/* Pencil */}
      <g transform="translate(60, 120) rotate(-30)">
        <rect x="0" y="0" width="80" height="12" fill="hsl(45, 90%, 55%)" />
        <polygon points="80,0 95,6 80,12" fill="hsl(30, 60%, 50%)" />
        <polygon points="95,6 105,6 95,6" fill="hsl(220, 20%, 30%)" />
        <rect x="0" y="0" width="10" height="12" fill="hsl(16, 90%, 55%)" />
        <rect x="70" y="0" width="10" height="12" fill="hsl(30, 30%, 70%)" />
      </g>
      
      {/* Children figures */}
      <g transform="translate(80, 280)">
        {/* Child 1 */}
        <circle cx="30" cy="20" r="18" fill="#E8C4B8" />
        <ellipse cx="30" cy="5" rx="20" ry="12" fill="hsl(220, 25%, 15%)" />
        <circle cx="25" cy="18" r="3" fill="hsl(220, 25%, 15%)" />
        <circle cx="35" cy="18" r="3" fill="hsl(220, 25%, 15%)" />
        <path d="M25 28c3 4 7 4 10 0" stroke="hsl(16, 90%, 45%)" strokeWidth="2" fill="none" />
        <rect x="20" y="38" width="20" height="35" rx="5" fill="hsl(200, 80%, 50%)" />
      </g>
      
      <g transform="translate(170, 280)">
        {/* Child 2 */}
        <circle cx="30" cy="20" r="18" fill="#D4A574" />
        <ellipse cx="30" cy="8" rx="18" ry="15" fill="hsl(220, 25%, 15%)" />
        <circle cx="25" cy="18" r="3" fill="hsl(220, 25%, 15%)" />
        <circle cx="35" cy="18" r="3" fill="hsl(220, 25%, 15%)" />
        <path d="M25 28c3 4 7 4 10 0" stroke="hsl(16, 90%, 45%)" strokeWidth="2" fill="none" />
        <rect x="20" y="38" width="20" height="35" rx="5" fill="hsl(16, 90%, 55%)" />
      </g>
      
      <g transform="translate(260, 280)">
        {/* Child 3 */}
        <circle cx="30" cy="20" r="18" fill="#F5D0C5" />
        <path d="M15 10c0-10 10-15 15-15s15 5 15 15c3 0 5 5 5 10h-40c0-5 2-10 5-10z" fill="hsl(220, 25%, 15%)" />
        <circle cx="25" cy="18" r="3" fill="hsl(220, 25%, 15%)" />
        <circle cx="35" cy="18" r="3" fill="hsl(220, 25%, 15%)" />
        <path d="M25 28c3 4 7 4 10 0" stroke="hsl(16, 90%, 45%)" strokeWidth="2" fill="none" />
        <rect x="20" y="38" width="20" height="35" rx="5" fill="hsl(160, 60%, 45%)" />
      </g>
      
      {/* Floating elements */}
      <g opacity="0.5">
        {/* ABC letters */}
        <text x="310" y="100" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="hsl(16, 90%, 55%)">A</text>
        <text x="335" y="120" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="hsl(200, 80%, 50%)">B</text>
        <text x="320" y="145" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="hsl(160, 60%, 45%)">C</text>
        
        {/* 123 numbers */}
        <text x="40" y="250" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="hsl(262, 70%, 55%)">1</text>
        <text x="55" y="270" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="hsl(330, 70%, 55%)">2</text>
        <text x="45" y="290" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" fill="hsl(45, 90%, 55%)">3</text>
      </g>
      
      {/* Stars */}
      <g fill="gold" opacity="0.6">
        <polygon points="50,60 52,66 58,66 53,70 55,76 50,72 45,76 47,70 42,66 48,66" />
        <polygon points="350,180 352,186 358,186 353,190 355,196 350,192 345,196 347,190 342,186 348,186" />
        <polygon points="350,280 352,286 358,286 353,290 355,296 350,292 345,296 347,290 342,286 348,286" />
      </g>
      
      <defs>
        <linearGradient id="eduGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(200, 80%, 50%)" />
          <stop offset="100%" stopColor="hsl(262, 70%, 55%)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
