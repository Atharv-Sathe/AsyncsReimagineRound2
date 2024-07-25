import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Card from "./card";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Section5() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=300% bottom",
        scrub: true,
        pin: true,
      
      },
    });

    tl.fromTo(
      sectionRef.current,
      {
        translateX: "70vw",
      },
      {
        translateX: "-85vw",
        ease: "none",
        duration: 1,
      }
    );

    tl.fromTo(
      triggerRef.current,
      {
        backgroundColor: "#C0C0C0",
      },
      {
        backgroundColor: "#FFD700",
        duration: 0.5,
      },
      "<"
    );

    tl.to(
      triggerRef.current,
      {
        backgroundColor: "#B87333",
        duration: 0.5,
      },
      0.5
    );

    const cards = gsap.utils.toArray(".card");
    // cards.forEach((card, index) => {
    gsap.from(cards, {
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      x: (index) => (index % 2 === 0 ? -200 : 200),
      opacity: 0,
      duration: 1,
    });
    // });
  }, []);
  const cardData = [
    {
      title: "Akanksha Khanna, 27 ",
      description:
        "Delighted with my engagement ring from BlueStone! It's my dream ring, fits perfectly and is stunning to look at. Thanks, BlueStone, for elping us find the perfect symbol of love!",
      backgroundImage: "/images/bm1.webp",
    },
    {
      title: "Diksha Singh,",
      description:
        " I was worried about finding good quality fine jewellery pieces online, but BlueStone's customer service gave me full assurance and the delivery was super quick. Their jewellery is certified. and there is no compromise on quality.",
      backgroundImage: "/images/bm2.webp",
    },
    {
      title: "Nutan Mishra 33",
      description:
        "I got a Nazariya for my baby boy i'BlueStone. It's so cute seeing it on my little one's wrist, and it gives me a sense of security knowing it's there. Thanks, BlueStone, for making such lovely pieces for our little ones!",
      backgroundImage: "/images/bm3.webp",
    },
    {
      title: "Divya Mishra, 26",
      description:
        " On Valentine's Day. my husband gifted me a necklace from BlueStone, and I haven't taken it off even once. Everyone asks me where it's from, and I just LOVE how nice it looks on me.",
      backgroundImage: "/images/bm4.webp",
    },
  ];

  return (
    <div>
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="relative flex flex-row h-screen w-screen md:hidden"
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card absolute top-[20vh] transform"
              style={{
                left: `${index * 40 - 15}vw`,
                transform: `rotate(${index % 2 === 0 ? "12deg" : "-12deg"})`,
                zIndex: -1,
                width: "300px",
              }}
            >
              <Card {...card} />
            </div>
          ))}
          <div className="flex flex-row h-[100vh] w-[100vw] justify-center items-center">
            <h2 className="text-[20vw] text-[#e8ec17] font-custom text-nowrap mix-blend-overlay opacity-75">
              Customer Testimonials
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
