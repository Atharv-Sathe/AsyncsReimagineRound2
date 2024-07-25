import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { cn } from "../cn";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Slider({ className }: { className?: string }) {
  const swiperRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current!,
        pin: true,
        anticipatePin: 1,
        start: "top top",
        end: "bottom+=500 top",
        scrub: true,
      },
    });

    tl.fromTo(
      swiperRef.current!,
      {
        padding: 250,
      },
      { padding: 500 }
    );
  });

  return (
    <div
      ref={containerRef}
      className="md:hidden flex items-center justify-center h-screen w-screen gradient-background"
    >
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className={cn("rounded-lg p-[100px]", className)}
      >
        <SwiperSlide className="swiper-slide flex justify-center items-center">
          <video className="w-full h-full object-cover " autoPlay muted loop>
            <source src="/bluestone.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide flex justify-center items-center">
          <video className="w-full h-full object-cover " autoPlay muted loop>
            <source src="/bluestone.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide flex justify-center items-center">
          <video className="w-full h-full object-cover " autoPlay muted loop>
            <source src="/bluestone.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide flex justify-center items-center">
          <video className="w-full h-full object-cover " autoPlay muted loop>
            <source src="/bluestone.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide flex justify-center items-center">
          <video className="w-full h-full object-cover " muted loop>
            <source src="/bluestone.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
