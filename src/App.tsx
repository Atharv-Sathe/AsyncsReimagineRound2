import Navbar from "./components/navbar";
import Section0 from "./components/section0";
import Preloader from "./components/preloader";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Showcase from "./components/showcase";
import { useEffect, useState } from "react";
import ReactLenis from "lenis/react";
import Carousel from "./components/carouseluse";

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
          <Section1 />
          <Section2 />
          <Showcase />
          <Section3 />
          <Carousel />
        </ReactLenis>
      )}
    </>
  );
}

export default App;
