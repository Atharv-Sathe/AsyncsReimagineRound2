import { useState } from "react";
import Swiper1 from "./swiper";

export default function Section2() {
  const [videoSrc, setVideoSrc] = useState("/ringbg.mp4");

  const handleCategoryClick = (src: string) => {
    setVideoSrc(src);
  };

  return (
    <div className="flex flex-col relative justify-center items-center py-10 gap-20 h-screen md:h-auto">
      <video
        src={videoSrc}
        className="absolute w-full h-full object-cover -z-10 opacity-80"
        loop
        muted
        autoPlay
      />
      <div>
        <h1 className="flex flex-row text-4xl font-bold font-custom">
          Top Categories
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-20 items-center">
        <div
          className="flex flex-col items-center gap-2"
          onMouseEnter={() => handleCategoryClick("/ringbg.mp4")}
        >
          <h2 className="text-2xl font-custom">Solitaires</h2>
          <Swiper1
            images={[
              "/images/ring.webp",
              "/images/solitaire2.webp",
              "/images/solitaire3.webp",
              "/images/solitaire4.webp",
            ]}
          />
        </div>

        <div
          className="flex flex-col items-center gap-2"
          onMouseEnter={() => handleCategoryClick("/mangalsutras.mp4")}
        >
          <h2 className="text-2xl font-custom">MangalSutras</h2>
          <Swiper1
            images={[
              "/images/mangalsutras1.webp",
              "/images/mangalsutras2.webp",
              "/images/mangalsutras3.webp",
              "/images/mangalsutrsas4.webp",
            ]}
          />
        </div>

        <div
          className="flex flex-col items-center gap-2"
          onMouseEnter={() => handleCategoryClick("https://kinvid0.bluestone.com/output/mp4/BISP0597R09-VIDEO-46264.mp4/BISP0597R09-VIDEO-46264.mp4")}
        >
          <h2 className="text-2xl font-custom">Mens Jewellery</h2>
          <Swiper1
            images={[
              "/images/ring.webp",
              "/images/solitaire2.webp",
              "/images/ring.webp",
              "/images/solitaire2.webp",
            ]}
          />
        </div>

        {/* Add additional categories as needed */}
        <div
          className="flex flex-col items-center gap-2"
          onMouseEnter={() =>
            handleCategoryClick("https://kinvid1.bluestone.com/output/mp4/BIPO0790V06-VIDEO-56866.mp4/BIPO0790V06-VIDEO-56866.mp4")
          }
        >
          <h2 className="text-2xl font-custom">Kids Jewellery</h2>
          <Swiper1
            images={[
              "/images/ring.webp",
              "/images/solitaire2.webp",
              "https://kinclimg5.bluestone.com/f_webp/static/hp/d/rings_v1.png",
              "https://kinclimg3.bluestone.com/f_webp,c_scale,w_744,b_rgb:ffffff/product/dynamic_banner/desktop/widget/valentine_static_desktopwidget.jpg",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
