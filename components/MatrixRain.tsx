
import React, { useEffect, useRef } from 'react';

interface Drop {
  x: number;
  y: number;
  speed: number;
  fontSize: number;
  opacity: number;
  depth: number; // 0 = far, 1 = near
}

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateSize();

    // Cinematic Matrix Character Set
    const characters = 'ｦｱｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ2345789Z:・.="*+-<>[]{}@#$%^&*';
    
    let width = canvas.width;
    let height = canvas.height;
    
    const drops: Drop[] = [];
    // Multiply density significantly
    const getDropCount = () => Math.floor(width / 6); 

    const createDrop = (xOverride?: number): Drop => {
      const depth = Math.random(); // Randomly assign depth for parallax-like feel
      return {
        x: xOverride !== undefined ? xOverride : Math.random() * width,
        y: Math.random() * height * 1.5 - height, // Spread them out vertically
        speed: 1.5 + depth * 6, // Far drops move slower, near drops move faster
        fontSize: 10 + depth * 16, // Far drops are smaller
        opacity: 0.15 + depth * 0.85, // Far drops are dimmer
        depth: depth
      };
    };

    // Initial population
    const targetCount = getDropCount();
    for (let i = 0; i < targetCount; i++) {
      drops.push(createDrop());
    }

    const draw = () => {
      // Trail effect: Darker background clear for longer, persistent trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Sort drops by depth to draw "far" ones first (rudimentary z-indexing)
      // Note: Re-sorting every frame is expensive, we'll just draw them in order 
      // as they are created with random depths for visual chaos.

      drops.forEach((drop) => {
        // Occasionally change characters mid-fall for "glitch" feel
        const char = characters.charAt(Math.floor(Math.random() * characters.length));
        
        ctx.font = `bold ${drop.fontSize}px 'Share Tech Mono', monospace`;
        
        // Dynamic green based on depth
        const greenValue = Math.floor(160 + (drop.depth * 95));
        ctx.fillStyle = `rgba(0, ${greenValue}, 65, ${drop.opacity})`;
        
        // Draw the character
        ctx.fillText(char, drop.x, drop.y);

        // Draw a "Head" (Bright/White leading character)
        // High-density drops have a higher chance of a head for that "rain" look
        if (Math.random() > 0.92) {
          ctx.fillStyle = `rgba(180, 255, 200, ${drop.opacity})`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#00FF41';
          ctx.fillText(char, drop.x, drop.y);
          ctx.shadowBlur = 0; // Reset shadow for performance
        }

        // Advance position
        drop.y += drop.speed;

        // Reset drop when it reaches bottom
        if (drop.y > height + 100) {
          const x = Math.random() * width;
          const newParams = createDrop(x);
          Object.assign(drop, newParams);
          drop.y = -100; // Start slightly above
        }
      });
    };

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      updateSize();
      width = canvas.width;
      height = canvas.height;
      
      const newTargetCount = getDropCount();
      if (drops.length < newTargetCount) {
        for (let i = drops.length; i < newTargetCount; i++) drops.push(createDrop());
      } else if (drops.length > newTargetCount) {
        drops.splice(newTargetCount);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ 
        filter: 'contrast(1.4) brightness(1.1) drop-shadow(0 0 2px rgba(0, 255, 65, 0.3))',
      }}
    />
  );
};

export default MatrixRain;
