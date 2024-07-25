import { useState } from "react";
import Swiper1 from "./swiper";

export default function Section2() {
  const [videoSrc, setVideoSrc] = useState("/ringbg.mp4");

  const handleCategoryClick = (src: string) => {
    setVideoSrc(src);
  };

  return (
    <div className="flex flex-col relative justify-center items-center py-10 gap-20 h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-80"
        loop
        muted
        autoPlay
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <h1 className="flex flex-row text-4xl font-bold font-custom">Top Categories</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-20 items-center">
        <div className="flex flex-col items-center gap-2" onClick={() => handleCategoryClick("/ringbg.mp4")}>
          <h2 className="text-2xl font-custom">Solitaires</h2>
          <Swiper1 images={["/images/ring.webp", "/images/solitaire2.webp", "/images/solitaire3.webp", "/images/solitaire4.webp"]} />
        </div>
        
        <div className="flex flex-col items-center gap-2" onClick={() => handleCategoryClick("/videos/mangalsutras.mp4")}>
          <h2 className="text-2xl font-custom">MangalSutras</h2>
          <Swiper1 images={["/images/mangalsutras1.webp", "/images/mangalsutras2.webp", "/images/mangalsutras3.webp", "/images/mangalsutrsas4.webp"]} />
        </div>
        
        <div className="flex flex-col items-center gap-2" onClick={() => handleCategoryClick("/videos/mensjewellery.mp4")}>
          <h2 className="text-2xl font-custom">Mens Jewellery</h2>
          <Swiper1 images={["/images/ring.webp", "/images/solitaire2.webp", "/images/ring.webp", "/images/solitaire2.webp"]} />
        </div>

        {/* Add additional categories as needed */}
        <div className="flex flex-col items-center gap-2" onClick={() => handleCategoryClick("/videos/anothercategory.mp4")}>
          <h2 className="text-2xl font-custom">Gold Coins</h2>
          <Swiper1 images={["/images/ring.webp", "/images/solitaire2.webp", "/images/ring.webp", "/images/solitaire2.webp"]} />
        </div>
      </div>
    </div>
  );
}
