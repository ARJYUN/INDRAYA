import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PortalHeroProps {
  onScrollTriggerReady?: (st: ScrollTrigger) => void;
}

export const PortalHero: React.FC<PortalHeroProps> = ({ onScrollTriggerReady }) => {
  const entranceRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const winImgRef = useRef<HTMLImageElement>(null);
  const leafLRef = useRef<HTMLDivElement>(null);
  const leafRRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const extraRef = useRef<HTMLDivElement>(null);

  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsReducedMotion(reduce);

    const stage = stageRef.current;
    const heroImg = heroImgRef.current;
    const world = worldRef.current;
    const winImg = winImgRef.current;
    const ent = entranceRef.current;

    if (!stage || !heroImg || !world || !winImg || !ent) return;

    // Geometric constants
    const HX = 0.5005;
    const HY = 0.6657;
    const HW = 0.4394;
    const HH = 0.3567; // gate opening fractions

    let WS = 2.2;
    let TY = 0;

    const layoutHero = () => {
      const vw = stage.clientWidth;
      const vh = stage.clientHeight;
      const ar = 1125 / 2000;
      const port = vw / vh <= 1;

      // Slightly move hero image upward
      const upwardShift = port ? Math.round(vh * 0.035) : Math.round(vh * 0.045);
      const minH = vh + (port ? upwardShift : upwardShift * 2);
      const w = port ? vw * 2.3 : Math.max(vw, minH / ar);
      const h = w * ar;
      const l = (vw - w) / 2;
      const t = (port ? vh - h : (vh - h) / 2) - upwardShift;

      heroImg.style.left = `${l}px`;
      heroImg.style.top = `${t}px`;
      heroImg.style.width = `${w}px`;
      heroImg.style.height = `${h}px`;

      return { w, h, l, t, vw, vh };
    };

    const layout = () => {
      const R = layoutHero();
      const ww = world.offsetWidth;
      const wh = world.offsetHeight;
      const wl = world.offsetLeft;
      const wt = world.offsetTop;
      const Ox = wl + HX * ww;
      const Oy = wt + HY * wh;

      WS = Math.min(3, Math.max(1.5, R.w / (1.04 * HW * ww)));
      TY = R.t + R.h / 2 - Oy;

      const wl0 = wl + 0.13 * ww;
      const wt0 = wt + 0.4873 * wh;
      const l0 = Ox + (R.l - Ox) / WS;
      const t0 = Oy + (R.t - Oy - TY) / WS;
      const w0 = R.w / WS;

      winImg.style.left = `${l0 - 0.35 * w0 - wl0}px`;
      winImg.style.top = `${t0 - wt0}px`;
      winImg.style.width = `${w0 * 1.7}px`;
      winImg.style.height = `${w0 * 0.5625 * 1.35}px`;
    };

    layout();

    if (reduce) {
      // Fallback for users preferring reduced motion
      heroBgRef.current?.style.setProperty('opacity', '1');
      if (worldRef.current) worldRef.current.style.display = 'none';
      if (brandRef.current) brandRef.current.style.transform = `translateY(${window.innerWidth < 900 ? 102 : 122}px)`;
      if (extraRef.current) extraRef.current.style.opacity = '1';
      return;
    }

    const ctx = gsap.context(() => {
      const rot = window.innerWidth < 700 ? 100 : 108;
      const T = {
        open: [10, 65],
        zoom: [25, 85],
        fadeWorld: [58, 85],
        hero: [55, 82],
        hint: [8, 30],
        brand: [65, 85],
        nav: [65, 80],
      };

      const d = (r: number[]) => r[1] - r[0];

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: ent,
          start: 'top top',
          end: '+=260%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onRefresh: (self) => {
            triggerRef.current = self;
            if (onScrollTriggerReady) {
              onScrollTriggerReady(self);
            }
          },
        },
      });

      triggerRef.current = tl.scrollTrigger ?? null;
      if (tl.scrollTrigger && onScrollTriggerReady) {
        onScrollTriggerReady(tl.scrollTrigger);
      }

      // 3D Door Swing Animation
      tl.fromTo(
        leafLRef.current,
        { rotationY: 0, xPercent: 0 },
        { rotationY: -rot, xPercent: -5, ease: 'power2.inOut', duration: d(T.open) },
        T.open[0]
      )
        .fromTo(
          leafRRef.current,
          { rotationY: 0, xPercent: 0 },
          { rotationY: rot, xPercent: 5, ease: 'power2.inOut', duration: d(T.open) },
          T.open[0]
        )
        // Darken door leaves as they swing open
        .fromTo(
          [leafLRef.current, leafRRef.current],
          { filter: 'brightness(1) drop-shadow(0 8px 10px rgba(6,26,100,0.28))' },
          { filter: 'brightness(0.78) drop-shadow(0 14px 20px rgba(6,26,100,0.4))', duration: d(T.open) },
          T.open[0]
        )
        // Zoom into world
        .fromTo(
          worldRef.current,
          { scale: 1, y: 0 },
          {
            scale: () => WS,
            y: () => TY,
            ease: 'power2.inOut',
            duration: d(T.zoom),
          },
          T.zoom[0]
        )
        // Fade world as gateway opens completely
        .fromTo(
          worldRef.current,
          { autoAlpha: 1 },
          { autoAlpha: 0, duration: d(T.fadeWorld) },
          T.fadeWorld[0]
        )
        // Reveal full high-resolution NSSCE administrative block
        .fromTo(
          heroBgRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: d(T.hero) },
          T.hero[0]
        )
        // Reveal tagline and institution subtitle
        .fromTo(
          extraRef.current,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: d(T.brand) },
          T.brand[0]
        )
        // Brand floats to hero banner position
        .fromTo(
          brandRef.current,
          { y: 0 },
          {
            y: () => (window.innerWidth < 900 ? 102 : 122),
            ease: 'power2.inOut',
            duration: d(T.brand),
          },
          T.brand[0]
        )
        // Slide in navbar
        .fromTo(
          '#navbar-header',
          { autoAlpha: 0, yPercent: -60 },
          { autoAlpha: 1, yPercent: 0, ease: 'power2.out', duration: d(T.nav) },
          T.nav[0]
        )
        .to({}, { duration: 1 }, 99); // pad to 100
    });

    const handleResize = () => {
      layout();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    ScrollTrigger.addEventListener('refreshInit', layout);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.removeEventListener('refreshInit', layout);
      ctx.revert();
    };
  }, [onScrollTriggerReady]);

  return (
    <section
      ref={entranceRef}
      id="top"
      className="relative h-screen h-[100svh] overflow-hidden bg-gradient-to-b from-white via-[#f8fbff] to-[#f4f8ff]"
    >
      <div ref={stageRef} className="absolute inset-0 overflow-hidden">
        {/* Full High-Res NSSCE Admin Block Campus Hero (fades in seamlessly) */}
        <div
          ref={heroBgRef}
          className="absolute inset-0 opacity-0 pointer-events-none bg-gradient-to-b from-[#d8e8fd] via-[#eef4fe] to-[#f6f9ff]"
        >
          <img
            ref={heroImgRef}
            src="/assets/hero.webp"
            alt="NSS College of Engineering administrative block"
            className="absolute max-w-none [mask-image:linear-gradient(transparent,#000_14%)] lg:[mask-image:none]"
          />
        </div>

        {/* 3D Portal World */}
        <div
          ref={worldRef}
          className="absolute bottom-0 left-1/2 w-[var(--sw)] -ml-[calc(var(--sw)/2)] aspect-[2000/1126] origin-[50.05%_66.57%] will-change-transform"
        >
          {/* View through the Gate Window */}
          <div className="absolute left-[13%] top-[48.73%] width-[74%] height-[51.27%] w-[74%] h-[51.27%] overflow-hidden">
            <img
              ref={winImgRef}
              src="/assets/window-view.webp"
              alt="View of NSSCE through the gate"
              className="absolute max-w-none pointer-events-none select-none"
            />
          </div>

          {/* Golden Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_62%,rgba(255,255,255,0.65),transparent_70%)] animate-pulse-subtle pointer-events-none" />

          {/* Temple Portal Arch Frame */}
          <img
            src="/assets/frame.webp"
            alt="Indraya Arch Gate"
            className="absolute inset-0 w-full h-full block pointer-events-none select-none"
          />

          {/* 3D Gate Leaves (Doors that swing open) */}
          <div className="absolute inset-0 leaf-3d-container">
            {/* Left Door */}
            <div
              ref={leafLRef}
              className="absolute top-[50.8%] left-[28.08%] w-[22.1%] h-[35.67%] origin-left leaf-door"
            >
              <img
                src="/assets/leaf-left.webp"
                alt="Left Gate Door"
                className="w-full h-full block select-none pointer-events-none"
              />
            </div>

            {/* Right Door */}
            <div
              ref={leafRRef}
              className="absolute top-[50.8%] left-[50.02%] w-[21.98%] h-[35.67%] origin-right leaf-door"
            >
              <img
                src="/assets/leaf-right.webp"
                alt="Right Gate Door"
                className="w-full h-full block select-none pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Floating Header Banner (Reveals as campus view opens) */}
        <div
          ref={brandRef}
          className="absolute top-[max(3.5vh,env(safe-area-inset-top))] left-0 right-0 text-center text-navy pointer-events-none px-4 z-10"
        >
          <div ref={extraRef} className="opacity-0 font-ml">
            <h1 className="m-0 font-black text-[clamp(5rem,min(22vw,14vh),10.5rem)] leading-[0.98] text-navy drop-shadow-lg tracking-tight">
              ഇന്ദ്രയ 2.O
            </h1>
            <p className="m-0 mt-1 font-extrabold text-[clamp(1.65rem,min(6.8vw,3.8vh),3rem)] tracking-normal text-navy/95 drop-shadow-md">
              കോളേജ് യൂണിയൻ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

