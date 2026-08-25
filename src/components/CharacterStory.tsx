import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";

type CharacterStoryProps = {
  variant?: "hero" | "story";
};

const heroFrames = [
  {
    label: "hello",
    title: "waving hello",
    image: "/akhila-wave-strip.webp",
    position: "0% 50%",
    size: "auto 100%",
    aspectRatio: "1 / 2",
    animated: true
  }
];

const storyFrames = [
  {
    label: "readiness",
    title: "reviewing readiness",
    image: "/akhila-case-scenes.webp",
    position: "0% 50%",
    size: "auto 100%",
    aspectRatio: "2 / 3",
    animated: false
  },
  {
    label: "rollout",
    title: "closing the laptop after rollout",
    image: "/akhila-case-scenes.webp",
    position: "50% 50%",
    size: "auto 100%",
    aspectRatio: "2 / 3",
    animated: false
  },
  {
    label: "rca",
    title: "walking through RCAgpt",
    image: "/akhila-case-scenes.webp",
    position: "100% 50%",
    size: "auto 100%",
    aspectRatio: "2 / 3",
    animated: false
  }
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

export default function CharacterStory({ variant = "story" }: CharacterStoryProps) {
  const reduced = useReducedMotion();
  const frames = variant === "hero" ? heroFrames : storyFrames;
  const [frame, setFrame] = useState(0);
  const active = frames[frame];
  const style = useMemo(
    () => ({
      backgroundImage: `url('${active.image}')`,
      backgroundPosition: active.position,
      backgroundSize: active.size,
      aspectRatio: active.aspectRatio
    }) satisfies CSSProperties,
    [active.aspectRatio, active.image, active.position, active.size]
  );

  useEffect(() => {
    if (reduced || variant !== "story") return;

    const update = () => {
      const markers = [...document.querySelectorAll<HTMLElement>("[data-story-frame]")];
      const center = window.innerHeight * 0.46;
      let bestIndex = frame;
      let bestDistance = Number.POSITIVE_INFINITY;

      markers.forEach((marker) => {
        const rect = marker.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height * 0.28 - center);
        if (distance < bestDistance && rect.bottom > 0 && rect.top < window.innerHeight) {
          bestDistance = distance;
          bestIndex = Number(marker.dataset.storyFrame ?? 0);
        }
      });

      setFrame(Math.max(0, Math.min(frames.length - 1, bestIndex)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [frame, reduced, variant]);

  return (
    <figure className={`character-story character-story--${variant}`} aria-label={`Illustrated Akhila ${active.title}`}>
      <div className={`character-frame${active.animated && !reduced ? " is-waving" : ""}`} style={style} />
    </figure>
  );
}
