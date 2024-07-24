import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-[#001835] border-1 border-[#FFD700] rounded-1xl">
        <div className="container flex justify-between items-center mx-auto py-2 px-4 md:px-6">
          <div className="flex items-center">
            <a href="#">
              <img src="/logo.png" className="w-8 md:w-12 lg:w-16" alt="Logo" />
            </a>
            <div className="ml-2 font-bold text-2xl font-custom bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              BlueStone
            </div>
          </div>
          <div className="relative flex-grow hidden md:flex items-center px-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute inset-y-0 right-4 flex items-center space-x-3">
              <img src="/voice.svg" alt="Voice Icon" className="w-5 h-5" />
              <img src="/search2.svg" alt="Search Icon 2" className="w-5 h-5" />
              <img src="/search.svg" alt="Search Icon" className="w-5 h-5" />
            </div>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            {["Diamond", "Wish", "Store", "Jewellery", "Recent"].map(
              (item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={`/${item.toLowerCase().replace(" ", "")}.svg`}
                    alt={`${item} Logo`}
                    className="w-6 h-6 mb-1"
                  />
                  <a
                    href="#"
                    className="text-[#FFD700] hover:text-[#aca6ab] font-custom"
                  >
                    {item}
                  </a>
                </div>
              )
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none opacity-35"
            >
            <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6"
  fill="#FFD700"
  viewBox="0 0 24 24"
  stroke="#FFD700"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M4 6h16M4 12h16M4 18h16"
  />
</svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            {["Home", "About", "Services", "Contact"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
      <div className="hidden md:flex bg-[#edafbc] justify-center">
        <div className="container flex flex-wrap items-center py-1 space-x-4 justify-center">
          {[
            "10+1 Jewellery Plans",
            "Watch Jewellery",
            "Rings",
            "Earings",
            "Pendants",
            "Solitaires",
            "All Jewellery",
            "Gifts",
            "Gold Coins",
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <a
                href="#"
                className="text-[#13103c] hover:text-[#aca6ab] font-custom text-center text-[1.25rem]"
              >
                {item}
              </a>
              <img src="/dropdown.svg" alt="Dropdown Icon" className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
