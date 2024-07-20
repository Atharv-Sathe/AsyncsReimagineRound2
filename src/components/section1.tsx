import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, Observer);

export default function Section1() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: containerRef.current!,
        pin: true,
        markers: false,
        anticipatePin: 1,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    tl.from(videoRef.current!, {
      width: "80%",
      ease: "power2.in",
      onStart: () => {
        videoRef.current!.play();
      },
      onComplete: () => {
        videoRef.current!.pause();
      },
      onReverseComplete: () => {
        videoRef.current!.play();
      }
    });
  });

  return (
    <div
      ref={containerRef}
      className="flex p-2 relative h-screen justify-center items-center bg-[url('/bluebg.svg')] bg-center "
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
