"use client";
/*import { Ghost } from "lucide-react";
import { useEffect, useState } from "react";

interface FloatingGhostProps {
  delay?: number;
  duration?: number;
  size?: number;
  startX?: number;
  startY?: number;
}

const FloatingGhost = ({ 
  delay = 0, 
  duration = 8, 
  size = 50, 
  startX = Math.random() * 100, 
  startY = Math.random() * 100 
}: FloatingGhostProps) => {
  const [position, setPosition] = useState({ x: startX, y: startY });

  useEffect(() => {
    const animate = () => {
      setPosition({
        x: startX + Math.sin(Date.now() * 0.001 + delay) * 20,
        y: startY + Math.cos(Date.now() * 0.0008 + delay) * 15
      });
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, [startX, startY, delay]);

  return (
    <div
      className="absolute pointer-events-none opacity-20 animate-pulse"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      <Ghost size={size} className="text-white" />
    </div>
  );
};

export default FloatingGhost;
*/
"use client";

import { Ghost } from "lucide-react";
import { useEffect, useState } from "react";

interface FloatingGhostProps {
  delay?: number;
  duration?: number;
  size?: number;
  startX?: number;
  startY?: number;
}

const FloatingGhost = ({
  delay = 0,
  duration = 6, // Faster for more lively movement
  size = 48,
  startX = -10, // Start from left side
  startY = Math.random() * 80 + 10 // Random Y position
}: FloatingGhostProps) => {
  const [position, setPosition] = useState({ x: startX, y: startY });
  const [opacity, setOpacity] = useState(0.6);

  useEffect(() => {
    const animate = () => {
      const time = (Date.now() + delay * 1000) * 0.001; // More lively movement
      
      // Left to right movement with floating motion
      const progress = (time * 0.3) % 1.2; // Reset cycle for continuous flow
      const newX = progress * 110 - 10; // Move from -10% to 100%
      const newY = startY + Math.sin(time * 2 + delay) * 15 + Math.cos(time * 1.5 + delay) * 8;
      
      // More visible opacity with gentle variation
      const newOpacity = 0.4 + Math.sin(time * 0.8 + delay) * 0.3;
      
      setPosition({
        x: newX,
        y: Math.max(5, Math.min(85, newY))
      });
      
      setOpacity(Math.max(0.2, Math.min(0.8, newOpacity)));
    };

    const interval = setInterval(animate, 60); // Faster update for smoother movement
    return () => clearInterval(interval);
  }, [startX, startY, delay]);

  return (
    <div
      className="absolute pointer-events-none transition-all duration-1000 ease-in-out"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        opacity: opacity,
        transform: `rotate(${Math.sin(Date.now() * 0.0002 + delay) * 5}deg)`, // Gentle rotation
        filter: 'blur(0.5px)' // Slight blur for ethereal effect
      }}
    >
      <Ghost 
        size={size} 
        className="text-white drop-shadow-lg" 
        style={{
          animation: `float ${duration}s ease-in-out infinite`,
          animationDelay: `${delay}s`,
          filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))'
        }}
      />
      
      {/* Add custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          25% {
            transform: translateY(-8px) scale(1.05);
          }
          50% {
            transform: translateY(-4px) scale(0.98);
          }
          75% {
            transform: translateY(-12px) scale(1.02);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingGhost;