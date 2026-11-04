import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

export interface DockItemData {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

interface DockProps {
  items: DockItemData[];
  className?: string;
  panelHeight?: number;
  baseItemSize?: number;
  magnification?: number;
  distance?: number;
}

export const Dock: React.FC<DockProps> = ({
  items = [],
  className = '',
  panelHeight = 68,
  baseItemSize = 50,
  magnification = 70,
  distance = 140,
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      style={{ height: panelHeight }}
      className={`mx-auto flex items-end gap-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 px-4 pb-3 ${className}`}
    >
      {items.map((item, index) => (
        <DockIcon
          key={index}
          mouseX={mouseX}
          item={item}
          baseItemSize={baseItemSize}
          magnification={magnification}
          distance={distance}
        />
      ))}
    </motion.div>
  );
};

const DockIcon: React.FC<{
  mouseX: any;
  item: DockItemData;
  baseItemSize: number;
  magnification: number;
  distance: number;
}> = ({ mouseX, item, baseItemSize, magnification, distance }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize]
  );
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <div className="relative">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -10, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -2, x: '-50%' }}
            className="absolute top-full mt-4 left-1/2 whitespace-nowrap rounded-md bg-zinc-900 border border-white/10 px-2 py-1 text-xs font-medium text-white shadow-xl pointer-events-none z-50"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        ref={ref}
        style={{ width, height: width }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={item.onClick}
        aria-label={item.label}
        className="aspect-square flex items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95 cursor-pointer"
      >
        <span className="flex items-center justify-center pointer-events-none">
          {item.icon}
        </span>
      </motion.button>
    </div>
  );
};

