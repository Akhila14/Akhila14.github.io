import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight, RotateCcw } from "lucide-react";
import { caseStudies } from "@data/profile";

const positions = [
  { x: 9, y: 40 },
  { x: 54, y: 15 },
  { x: 63, y: 62 }
];

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

function MagneticCard({
  study,
  index
}: {
  study: (typeof caseStudies)[number];
  index: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLAnchorElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 180, damping: 18, mass: 0.2 });
  const y = useSpring(my, { stiffness: 180, damping: 18, mass: 0.2 });

  function onMove(event: React.PointerEvent<HTMLAnchorElement>) {
    if (reduced || !ref.current || event.pointerType === "touch") return;
    const rect = ref.current.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    mx.set(dx * 0.08);
    my.set(dy * 0.08);
  }

  function reset() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.a
      ref={ref}
      className="map-card"
      href={`/case-studies/${study.slug}/`}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      whileHover={reduced ? undefined : { scale: 1.02 }}
      aria-label={`Open case study: ${study.title}`}
    >
      <span className="map-index">{String(index + 1).padStart(2, "0")}</span>
      <span className="map-kicker">{study.kicker}</span>
      <strong>{study.title}</strong>
      <small>{study.result}</small>
      <ArrowUpRight aria-hidden="true" size={18} />
    </motion.a>
  );
}

export default function SystemMap() {
  const reduced = useReducedMotion();
  const [resetKey, setResetKey] = useState(0);

  return (
    <div className="system-map-shell" data-reduced-motion={reduced ? "true" : "false"}>
      <div className="map-controls">
        <p>
          Drag the nodes to explore the system. The links stay conventional for
          keyboard, touch, and no-surprises scanning.
        </p>
        <button
          type="button"
          className="icon-button"
          onClick={() => setResetKey((value) => value + 1)}
          aria-label="Reset project node positions"
        >
          <RotateCcw size={17} aria-hidden="true" />
        </button>
      </div>

      <div className="map-field" key={resetKey}>
        <svg className="map-lines" viewBox="0 0 100 76" aria-hidden="true" preserveAspectRatio="none">
          <path d="M15 44 C 29 18, 42 18, 58 22 S 75 44, 73 66" />
          <path d="M15 44 C 30 61, 46 68, 73 66" />
        </svg>
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.slug}
            className="node-anchor"
            style={{
              left: `${positions[index].x}%`,
              top: `${positions[index].y}%`
            }}
            drag={!reduced}
            dragElastic={0.12}
            dragMomentum={false}
            whileDrag={{ scale: 1.03, zIndex: 5 }}
          >
            <MagneticCard study={study} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
