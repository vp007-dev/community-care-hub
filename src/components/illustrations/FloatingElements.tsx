import { motion } from "framer-motion";

interface FloatingElementsProps {
  variant?: "hearts" | "stars" | "education" | "health" | "empowerment" | "mixed";
  className?: string;
}

export function FloatingElements({ variant = "mixed", className = "" }: FloatingElementsProps) {
  const elements = {
    hearts: [
      { x: "10%", y: "20%", size: 24, delay: 0, color: "hsl(340, 70%, 55%)" },
      { x: "85%", y: "15%", size: 18, delay: 0.3, color: "hsl(16, 90%, 55%)" },
      { x: "75%", y: "70%", size: 20, delay: 0.6, color: "hsl(340, 70%, 55%)" },
      { x: "15%", y: "75%", size: 16, delay: 0.9, color: "hsl(16, 90%, 55%)" },
    ],
    stars: [
      { x: "5%", y: "10%", size: 20, delay: 0, color: "hsl(45, 90%, 55%)" },
      { x: "90%", y: "25%", size: 16, delay: 0.4, color: "hsl(45, 90%, 55%)" },
      { x: "80%", y: "80%", size: 22, delay: 0.8, color: "hsl(45, 90%, 55%)" },
      { x: "20%", y: "85%", size: 14, delay: 1.2, color: "hsl(45, 90%, 55%)" },
    ],
    education: [
      { x: "8%", y: "15%", size: 22, delay: 0, type: "book", color: "hsl(220, 80%, 55%)" },
      { x: "88%", y: "20%", size: 18, delay: 0.3, type: "star", color: "hsl(45, 90%, 55%)" },
      { x: "82%", y: "75%", size: 20, delay: 0.6, type: "pencil", color: "hsl(45, 90%, 55%)" },
      { x: "12%", y: "80%", size: 16, delay: 0.9, type: "star", color: "hsl(262, 70%, 55%)" },
    ],
    health: [
      { x: "6%", y: "12%", size: 24, delay: 0, type: "cross", color: "hsl(160, 60%, 45%)" },
      { x: "92%", y: "18%", size: 18, delay: 0.4, type: "heart", color: "hsl(350, 80%, 55%)" },
      { x: "85%", y: "78%", size: 20, delay: 0.8, type: "cross", color: "hsl(200, 80%, 55%)" },
      { x: "10%", y: "82%", size: 16, delay: 1, type: "star", color: "hsl(160, 60%, 45%)" },
    ],
    empowerment: [
      { x: "7%", y: "18%", size: 22, delay: 0, type: "star", color: "hsl(340, 70%, 55%)" },
      { x: "90%", y: "22%", size: 18, delay: 0.3, type: "heart", color: "hsl(340, 70%, 55%)" },
      { x: "83%", y: "76%", size: 20, delay: 0.7, type: "sparkle", color: "hsl(262, 70%, 55%)" },
      { x: "15%", y: "78%", size: 16, delay: 1, type: "star", color: "hsl(45, 90%, 55%)" },
    ],
    mixed: [
      { x: "5%", y: "10%", size: 20, delay: 0, type: "star", color: "hsl(45, 90%, 55%)" },
      { x: "92%", y: "15%", size: 18, delay: 0.2, type: "heart", color: "hsl(340, 70%, 55%)" },
      { x: "88%", y: "75%", size: 22, delay: 0.5, type: "star", color: "hsl(262, 70%, 55%)" },
      { x: "8%", y: "80%", size: 16, delay: 0.8, type: "heart", color: "hsl(16, 90%, 55%)" },
      { x: "50%", y: "5%", size: 14, delay: 1, type: "sparkle", color: "hsl(160, 60%, 45%)" },
    ],
  };

  const selectedElements = elements[variant] || elements.mixed;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {selectedElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: el.x, top: el.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        >
          {(el as any).type === "heart" || variant === "hearts" ? (
            <svg width={el.size} height={el.size} viewBox="0 0 24 24" fill={el.color}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (el as any).type === "cross" ? (
            <svg width={el.size} height={el.size} viewBox="0 0 24 24" fill={el.color}>
              <rect x="10" y="4" width="4" height="16" rx="1" />
              <rect x="4" y="10" width="16" height="4" rx="1" />
            </svg>
          ) : (el as any).type === "book" ? (
            <svg width={el.size} height={el.size} viewBox="0 0 24 24" fill={el.color}>
              <path d="M4 4h5c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4V4zm16 0h-5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5V4z" />
            </svg>
          ) : (el as any).type === "pencil" ? (
            <svg width={el.size} height={el.size} viewBox="0 0 24 24" fill={el.color}>
              <polygon points="12,2 14,8 14,20 12,22 10,20 10,8" />
            </svg>
          ) : (el as any).type === "sparkle" ? (
            <svg width={el.size} height={el.size} viewBox="0 0 24 24" fill={el.color}>
              <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7l2-7z" />
            </svg>
          ) : (
            <svg width={el.size} height={el.size} viewBox="0 0 24 24" fill={el.color}>
              <polygon points="12,2 14.5,9 22,9 16,13.5 18.5,21 12,16 5.5,21 8,13.5 2,9 9.5,9" />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
