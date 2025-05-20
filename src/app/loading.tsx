"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loading() {
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(loadingRef.current, {
      duration: 1,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      filter: "blur(10px)",
      ease: "power2.inOut",
    }).to(loadingRef.current, {
      duration: 1,
      opacity: 0,
      ease: "power2.inOut",
      onComplete: () => {
        if (loadingRef.current) {
          (loadingRef.current as HTMLDivElement).style.display = "none";
        }
      },
    });
  }, []);
  return (
    <div
      ref={loadingRef}
      className="flex flex-col items-center justify-center w-full h-screen"
      style={{
        transition: "all 0.5s ease-in-out",
      }}>
      <h1>Loading...</h1>
    </div>
  );
}
