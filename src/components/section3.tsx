import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import "./index.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ImageCarousel() {
  const dragRef = useRef<HTMLDivElement>(null);
  const spinRef = useRef<HTMLDivElement>(null);
  const groundRef = useRef<HTMLDivElement>(null);

  const radius = 240; // how big of the radius
  const autoRotate = true; // auto rotate or not
  const rotateSpeed = -60; // unit: seconds/360 degrees

  useGSAP(() => {
    const images = gsap.utils.toArray("img"); // image elements
    // useEffect(() => {
    gsap.set(images, {
      transform: (image) =>
        "rotateY(" +
        image * (360 / images.length) +
        "deg) translateZ(" +
        radius +
        "px)",
      transition: "transform 1s",
      transitionDelay: (i) => `${(images.length - i) / 4}s`,
      // immediateRender: true,
    });
    gsap.set(spinRef.current, {
      animation: "spin " + Math.abs(rotateSpeed) + "s linear infinite",
      animationPlayState: autoRotate ? "running" : "paused",
    });
  }, [radius, autoRotate, rotateSpeed]);

  return (
    <div className="relative top-28 left-56">
      <div ref={dragRef} id="drag-container">
        <div ref={spinRef} className="h-[170px] w-[120px]" id="spin-container">
          <img
            src="https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <img
            src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <p>3D Tiktok Carousel</p>
        </div>
        <div ref={groundRef} className="h-[720px] w-[720px]" id="ground"></div>
      </div>
    </div>
  );
}
