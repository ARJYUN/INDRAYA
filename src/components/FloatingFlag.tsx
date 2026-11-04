import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface FloatingFlagProps {
  className?: string;
}

export const FloatingFlag: React.FC<FloatingFlagProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Dimensions
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = 170;
    const height = 110;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Offscreen canvas for rendering the flat flag texture once
    const flagW = 126;
    const flagH = 76;
    const offscreen = document.createElement('canvas');
    offscreen.width = flagW * dpr;
    offscreen.height = flagH * dpr;
    const offCtx = offscreen.getContext('2d');
    if (!offCtx) return;

    offCtx.scale(dpr, dpr);

    // 1. Flag field background - Royal navy gradient
    const bgGrad = offCtx.createLinearGradient(0, 0, flagW, 0);
    bgGrad.addColorStop(0, '#061c5c');
    bgGrad.addColorStop(0.3, '#0a2f8f');
    bgGrad.addColorStop(0.7, '#1340b0');
    bgGrad.addColorStop(1, '#0c2d82');
    offCtx.fillStyle = bgGrad;
    offCtx.fillRect(0, 0, flagW, flagH);

    // 2. Gold border trim & inner lining
    offCtx.strokeStyle = '#f5c342';
    offCtx.lineWidth = 2.5;
    offCtx.strokeRect(1.5, 1.5, flagW - 3, flagH - 3);

    offCtx.strokeStyle = 'rgba(255, 235, 150, 0.45)';
    offCtx.lineWidth = 1;
    offCtx.strokeRect(4.5, 4.5, flagW - 9, flagH - 9);

    // 3. Central Emblem: Golden Lotus / Torch Aura + "ഇന്ദ്രയ"
    const cx = flagW * 0.52;
    const cy = flagH * 0.42;

    // Glowing sunburst circle behind emblem
    const aura = offCtx.createRadialGradient(cx, cy, 2, cx, cy, 22);
    aura.addColorStop(0, 'rgba(255, 235, 120, 0.4)');
    aura.addColorStop(0.7, 'rgba(245, 195, 66, 0.15)');
    aura.addColorStop(1, 'rgba(245, 195, 66, 0)');
    offCtx.fillStyle = aura;
    offCtx.beginPath();
    offCtx.arc(cx, cy, 22, 0, Math.PI * 2);
    offCtx.fill();

    // Emblem Torch / Flame Symbol
    offCtx.fillStyle = '#f5c342';
    offCtx.beginPath();
    // Stylized Flame
    offCtx.moveTo(cx, cy - 14);
    offCtx.bezierCurveTo(cx + 6, cy - 8, cx + 7, cy - 2, cx + 4, cy + 4);
    offCtx.bezierCurveTo(cx + 2, cy + 8, cx - 2, cy + 8, cx - 4, cy + 4);
    offCtx.bezierCurveTo(cx - 7, cy - 2, cx - 6, cy - 8, cx, cy - 14);
    offCtx.fill();

    // Inner Flame
    offCtx.fillStyle = '#fff4a3';
    offCtx.beginPath();
    offCtx.moveTo(cx, cy - 9);
    offCtx.bezierCurveTo(cx + 3, cy - 5, cx + 3, cy - 1, cx + 2, cy + 3);
    offCtx.bezierCurveTo(cx + 1, cy + 5, cx - 1, cy + 5, cx - 2, cy + 3);
    offCtx.bezierCurveTo(cx - 3, cy - 1, cx - 3, cy - 5, cx, cy - 9);
    offCtx.fill();

    // Torch base / pedestal
    offCtx.fillStyle = '#f5c342';
    offCtx.fillRect(cx - 5, cy + 7, 10, 2.5);
    offCtx.fillRect(cx - 3, cy + 9.5, 6, 2);

    // 4. Malayalam Text: "ഇന്ദ്രയ"
    offCtx.fillStyle = '#ffffff';
    offCtx.font = 'bold 12px "Noto Sans Malayalam", "Manjari", sans-serif';
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';
    offCtx.shadowColor = 'rgba(0, 0, 0, 0.6)';
    offCtx.shadowBlur = 3;
    offCtx.fillText('ഇന്ദ്രയ', cx, cy + 18);
    offCtx.shadowBlur = 0;

    // Small English subtext: "NSSCE"
    offCtx.fillStyle = 'rgba(245, 195, 66, 0.9)';
    offCtx.font = 'bold 6.5px "Sora", sans-serif';
    offCtx.fillText('NSSCE UNION', cx, cy + 26);

    // Animation Loop
    let animId: number;
    let startTime = performance.now();

    const poleX = 14;
    const poleTopY = 10;
    const poleBottomY = height - 6;

    const render = (time: number) => {
      const elapsed = (time - startTime) * 0.001;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Flagpole
      // Golden ball finial on top
      const goldBall = ctx.createRadialGradient(poleX - 1.5, poleTopY - 1.5, 1, poleX, poleTopY, 6);
      goldBall.addColorStop(0, '#fff4a3');
      goldBall.addColorStop(0.5, '#f5c342');
      goldBall.addColorStop(1, '#b58315');
      ctx.fillStyle = goldBall;
      ctx.beginPath();
      ctx.arc(poleX, poleTopY, 5, 0, Math.PI * 2);
      ctx.fill();

      // Pole shaft
      const poleGrad = ctx.createLinearGradient(poleX - 2.5, 0, poleX + 2.5, 0);
      poleGrad.addColorStop(0, '#cbd5e1');
      poleGrad.addColorStop(0.35, '#f8fafc');
      poleGrad.addColorStop(0.7, '#94a3b8');
      poleGrad.addColorStop(1, '#475569');
      ctx.fillStyle = poleGrad;
      ctx.fillRect(poleX - 2.5, poleTopY + 4, 5, poleBottomY - poleTopY);

      // Mounting brackets / rings
      ctx.fillStyle = '#f5c342';
      ctx.fillRect(poleX - 3.5, poleTopY + 12, 7, 3);
      ctx.fillRect(poleX - 3.5, poleTopY + 12 + flagH - 3, 7, 3);

      // Halyard rope
      ctx.strokeStyle = 'rgba(241, 245, 249, 0.7)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(poleX + 2, poleTopY + 8);
      ctx.lineTo(poleX + 2, poleBottomY);
      ctx.stroke();

      // 2. Draw Wave Animated Cloth (Waving from poleX + 2 eastward)
      const slices = 44;
      const sliceW = flagW / slices;
      const startX = poleX + 2.5;
      const startY = poleTopY + 12;

      for (let i = 0; i < slices; i++) {
        const sx = i * sliceW;
        // Natural fluttering physics:
        // Amplitude is 0 at the hoist, expanding non-linearly towards the fly edge
        const normX = (i / slices);
        const ampFactor = Math.pow(normX, 1.18);

        // Combined harmonic wave frequencies for realistic wind turbulence
        const wave1 = Math.sin(normX * 9.5 - elapsed * 5.2) * 8.5 * ampFactor;
        const wave2 = Math.sin(normX * 16.0 - elapsed * 8.6 + 0.8) * 3.8 * ampFactor;
        const wave3 = Math.cos(normX * 5.0 - elapsed * 2.8) * 4.2 * ampFactor;
        const dispY = wave1 + wave2 + wave3;

        // Subtle horizontal compression from wave curvature
        const dx = Math.cos(normX * 9.5 - elapsed * 5.2) * 1.8 * ampFactor;

        // Draw image slice from offscreen buffer
        const destX = startX + sx + dx;
        const destY = startY + dispY;

        ctx.drawImage(
          offscreen,
          sx * dpr,
          0,
          sliceW * dpr,
          flagH * dpr,
          destX,
          destY,
          sliceW + 0.5,
          flagH
        );

        // Calculate slope for authentic 3D cloth lighting (specular highlights & shadows)
        const nextNormX = ((i + 1) / slices);
        const nextAmp = Math.pow(nextNormX, 1.18);
        const nextWave =
          Math.sin(nextNormX * 9.5 - elapsed * 5.2) * 8.5 * nextAmp +
          Math.sin(nextNormX * 16.0 - elapsed * 8.6 + 0.8) * 3.8 * nextAmp +
          Math.cos(nextNormX * 5.0 - elapsed * 2.8) * 4.2 * nextAmp;
        const slope = (nextWave - dispY) / sliceW;

        if (slope > 0.15) {
          // Highlight: Cloth facing light source
          const highlightAlpha = Math.min(0.24, (slope - 0.15) * 0.45);
          ctx.fillStyle = `rgba(255, 255, 255, ${highlightAlpha})`;
          ctx.fillRect(destX, destY, sliceW + 0.5, flagH);
        } else if (slope < -0.15) {
          // Shadow: Cloth falling into trough
          const shadowAlpha = Math.min(0.32, (-slope - 0.15) * 0.55);
          ctx.fillStyle = `rgba(0, 0, 0, ${shadowAlpha})`;
          ctx.fillRect(destX, destY, sliceW + 0.5, flagH);
        }
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -12, scale: 0.92 }}
      animate={{
        opacity: 1,
        y: [0, -7, 1, -5, 0],
        rotate: [-0.6, 0.8, -0.4, 0.6, -0.6],
        scale: 1,
      }}
      transition={{
        opacity: { duration: 1.2, ease: 'easeOut' },
        scale: { duration: 1.2, ease: 'easeOut' },
        y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
      }}
      className={`relative select-none pointer-events-none drop-shadow-[0_12px_28px_rgba(10,47,143,0.18)] ${className}`}
      title="Official NSSCE Indraya College Union Flag"
    >
      {/* Wind Ambience Streaks (Subtle breeze drifting past) */}
      <div className="absolute -top-3 -left-6 w-36 h-24 overflow-hidden pointer-events-none opacity-50">
        <motion.div
          animate={{ x: [-40, 160], opacity: [0, 0.8, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
        />
        <motion.div
          animate={{ x: [-30, 170], opacity: [0, 0.6, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
          className="mt-6 w-16 h-[1.5px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"
        />
        <motion.div
          animate={{ x: [-50, 150], opacity: [0, 0.7, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
          className="mt-8 w-10 h-[1px] bg-gradient-to-r from-transparent via-sky-300 to-transparent"
        />
      </div>

      <canvas ref={canvasRef} className="block" />
    </motion.div>
  );
};
