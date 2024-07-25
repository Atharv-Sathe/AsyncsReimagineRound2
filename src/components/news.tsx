import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';
import { useEffect } from 'react'; 

const useGSAP = (selector: string, stagger = 0.1) => { // Add type annotation for the selector parameter
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
    const elements: Element[] = gsap.utils.toArray(selector);
  
      gsap.set(elements, { y: 100, opacity: 0 });
  
      ScrollTrigger.batch(elements, {
        onEnter: (batch) => gsap.to(batch, {
          y: 0,
          opacity: 1,
          stagger,
          overwrite: true,
          scrollTrigger: {
            trigger: batch[0],
            start: 'top center+=100',
            end: 'bottom center',
            scrub: true
          }
        })
      });
    }, [selector, stagger]);
  };


const magazines = [
    {
        id: "retail-jeweller",
        p: "BlueStone unveils new campaign for its 'Big Gold Upgrade'.",
        img: "/retail-jweller.webp",
        link: "https://retailjewellerindia.com/bluestone-unveils-new-campaign-for-its-big-gold-upgrade-scheme-to-exchange-old-gold-for-a-higher-caratage-value/"
    },
    {
        id: "entrepreneur",
        p: "The Jewellery Man",
        img: "/entrepreneur.webp",
        link: "https://www.entrepreneur.com/en-in/entrepreneurs/the-jewelry-man/452883"
    },
    {
        id: "vogue",
        p: "All the Indian jewellery trends you should know according to jewellery experts.",
        img: "/vogue.webp",
        link: "https://www.vogue.in/content/all-the-indian-jewellery-trends-you-should-know-according-to-jewellery-experts"
    },
    {
        id: "financial-express",
        p: "BlueStone relaunches its 'Love is in The Little Things' campaign for Valentine's day.",
        img: "/financial-express.webp",
        link: "https://www.financialexpress.com/business/brandwagon-bluestone-relaunches-its-love-is-in-the-little-things-campaign-for-valentines-day-2972746/"
    }
]


function Magazine({id, p, img, link} : {id: string, p: string, img: string, link: string}) {

    return (
        <div id="magazine" className="h-80 w-60 relative group">
            <div id={id} className="bg-white h-full w-full relative z-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 flex flex-col items-center justify-between">
                <img src={img} alt="mag-logo" className="mt-4 mx-4"/>
                <p className="text-center">{p}</p>
                <a className="border-2 p-3 w-2/3 rounded-sm text-center text-slate-500 mb-2 hover:border-black hover:text-black" target="_blank" href={link}>Read More</a>
            </div>
            <div id={`mag-inside-${id}`} className="absolute top-0 group-hover:rotate-12 group-hover:left-12 left-5 h-full w-full transition-transform duration-200 ease-out">
                <img src="/magzine-int.webp" alt="inner-mag" />
            </div>
        </div>        
    );
}

function News() {
    useGSAP("#magazine", 0.2);

    // useGSAP(() => {
    //     const tl1 = gsap.timeline();
    //     gsap.registerPlugin(ScrollTrigger);
    //     tl1.from("#retail-jeweller, #mag-inside-retail-jeweller", {
    //         // scrollTrigger: "#magzine-articles",
    //         duration: 1, x: 400
    //     })
    // });

    return (
        <section id="news" className="bg-rose-100 h-[70vh] flex flex-col gap-8 items-center">
            <h1 className="font-custom text-3xl mt-4">We are making news <img src="/fire.gif" alt="fire" 
            className="inline h-7 w-auto object-contain"
            /></h1>
            <div id="magzine-articles" className="flex flex-row justify-evenly w-full">
                {magazines.map((mag, index) => {
                    return <Magazine key={index} id={mag.id} p={mag.p} img={mag.img} link={mag.link}/>
                })}
            </div>
            <a className="border-2 rounded-md text-2xl mt-5 text-royal-gold border-royal-gold px-4 hover:bg-royal-gold hover:text-white transition-all duration-300 ease-out hover:scale-110" target="_blank" href="https://www.bluestone.com/">View All News</a>
        </section>
    );
}

export default News;