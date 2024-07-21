export default function Section0() {
  return (
    <div className="relative h-[85vh] items-center justify-center">
      {/* Text overlay */}
      <div className="absolute left-0 right-0 mt-[15%]  font-custom flex flex-col items-center  z-10 ">
        <div>
        <div className="tracking-wider text-6xl font-extrabold text-[#001835] opacity-80">This</div>
        <div className="tracking-wider text-6xl font-extrabold ml-16 opacity-80 text-[#001835]">Summer,</div>
        <div className="tracking-wider text-6xl font-extrabold ml-40 mix-blend-overlay text-[#001835] opacity-80 ">Sparkle!</div>
        </div>
      </div>

      {/* Background image */}
      <img
        src="./images/art-collection.webp"
        alt="pinkdi"
        className="absolute object-cover left-0 right-0 ml-auto mr-auto w-[100vw] -z-10 opacity-80"
      />
    </div>
  );
}
