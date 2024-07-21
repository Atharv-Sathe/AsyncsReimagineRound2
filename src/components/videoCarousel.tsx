import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { cn } from "../cn";

export default function Slider({ className }: { className?: string }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className={cn("Swiper rounded-lg", className)}
    >
      <SwiperSlide className="swiper-slide flex justify-center items-center">
        <video className="w-full h-full object-cover " muted loop>
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
      <SwiperSlide className="swiper-slide flex justify-center items-center">
        <video className="w-full h-full object-cover " muted loop>
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
      <SwiperSlide className="swiper-slide flex justify-center items-center">
        <video className="w-full h-full object-cover " muted loop>
          <source src="/bluestone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </SwiperSlide>
    </Swiper>
  );
}
