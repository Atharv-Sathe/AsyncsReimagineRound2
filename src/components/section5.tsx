import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Section5() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
        // duration: 2,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true,
      },
    });
    tl.fromTo(
      sectionRef.current,
      {
        translateX: "50vw",
        // backgroundColor: "#f00",
      },
      {
        translateX: "-135vw",
        // backgroundColor: "#00f",
        ease: "none",
        duration: 1,
      }
    );
    tl.fromTo(
      triggerRef.current,
      {
        backgroundColor: "#f00",
      },
      {
        backgroundColor: "#00f",
        duration: 0.5,
      },
      "<"
    );
    tl.to(
      triggerRef.current,
      {
        backgroundColor: "#0ff",
        duration: 0.5,
      },
      0.5
    );
  }, []);

  return (
    <div>
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="relative flex flex-row h-screen w-screen"
        >
          <div className="flex flex-row h-[100vh] w-[100vw] justify-center items-center">
            <h2 className="text-[15vw] text-nowrap">Customer Testimonials</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
