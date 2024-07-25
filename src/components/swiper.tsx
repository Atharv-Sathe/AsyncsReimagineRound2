// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import './styles.css';//

// import required modules
import { Autoplay, EffectCube, Pagination } from "swiper/modules";
import { cn } from "../cn";
export default function Swiper1({
  className,
  images,
}: {
  className?: string;
  images: string[];
}) {
  return (
    <div>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[Autoplay,EffectCube, Pagination]}
        className={cn("w-[300px] h-[300px] custom-swiper overflow-hidden", className)}
      >
        {images.map((image) => (
          <SwiperSlide>
            <img src={image} alt="Image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
