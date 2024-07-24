import Navbar from "./components/navbar";
import Section0 from "./components/section0";
import Preloader from "./components/preloader";
// import Section1 from "./components/section1";
import Section2 from "./components/section2";
// import Section3 from "./components/section3";
// import Showcase from "./components/showcase";
import { useEffect, useState } from "react";
import ReactLenis from "lenis/react";
import Slider from "./components/videoCarousel";
import Section4 from "./components/section4";
import ImageCarousel from "./components/section3";
// import Showcase1 from "./components/showcase1";
import Showcase from "./components/showcase";
import Section5 from "./components/section5";

function App() {
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetIsLoading(false);
    }, 2000);
  });
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <ReactLenis root>
          <Navbar />
          <Section0 />
          {/* <Section1 /> */}
          <Slider />
          <Section2 />
          <Showcase />
          <ImageCarousel />
          <Section4 />
          <Section5 />
        </ReactLenis>
      )}
    </>
  );
}

export default App;
