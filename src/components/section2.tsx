import Swiper1 from "./swiper";

export default function Section2() {
    return (
      <div className="flex flex-col justify-center items-center py-10 gap-20">
        <div>
          <h1 className="flex flex-row text-4xl font-bold font-custom">Top Categories</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-20 items-center">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-custom">Solitaires</h2>
            <Swiper1 images={["/images/ring.webp", "/images/solitaire2.webp", "/images/ring.webp", "/images/solitaire2.webp"]} />
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-custom">MangalSutras</h2>
            <Swiper1 images={["/images/ring.webp", "/images/solitaire2.webp", "/images/ring.webp", "/images/solitaire2.webp"]} />
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-custom">Mens Jewellery</h2>
            <Swiper1 images={["/images/ring.webp", "/images/solitaire2.webp", "/images/ring.webp", "/images/solitaire2.webp"]} />
          </div>
  
          {/* Add additional categories as needed */}
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-custom">Mens Jewellery</h2>
            <Swiper1 images={["/images/ring.webp", "/images/solitaire2.webp", "/images/ring.webp", "/images/solitaire2.webp"]} />
          </div>
  
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-custom">Mens Jewellery</h2>
            <Swiper1 images={["/images/ring.webp", "/images/solitaire2.webp", "/images/ring.webp", "/images/solitaire2.webp"]} />
          </div>
  
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-custom">Mens Jewellery</h2>
            <Swiper1 images={["/images/ring.webp", "/images/solitaire2.webp", "/images/ring.webp", "/images/solitaire2.webp"]} />
          </div>
  
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl font-custom">Mens Jewellery</h2>
            <Swiper1 images={["/images/ring.webp", "/images/solitaire2.webp", "/images/ring.webp", "/images/solitaire2.webp"]} />
          </div>
          
        </div>
      </div>
    );
  }