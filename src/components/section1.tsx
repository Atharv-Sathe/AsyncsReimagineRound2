import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Section1() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: containerRef.current!,
        pin: true,
        markers: true,
        anticipatePin: 1,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    tl.to(videoRef.current!, {
      width: "100%",
      ease: "power2.out",
      onStart: () => {
        videoRef.current!.play();
      },
      onReverseComplete: () => {
        videoRef.current!.pause();
      },
    });
  });

  return (
    <div
      ref={containerRef}
      className="flex p-2 relative h-screen justify-center items-center"
    >
      <video
        ref={videoRef}
        className="h-auto border-2px w-[80vh] object-cover rounded-2xl"
        muted
        loop
      >
        <source src="/bluestone.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
