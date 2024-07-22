import Footer from "./components/footer";
import Navbar from "./components/navbar";
// import Preloader from "./components/preloader";
import Section1 from "./components/section1";

function App() {
  return (
    <>
      <Navbar />
      <Section1 />
      <div className="h-screen bg-red-300"></div>
      {/* <Preloader /> */}
      <Footer />
    </>
  );
}

export default App;
