import { useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="bg-[#001835] border-1 border-[#FFD700] rounded-1xl ">
        <div className="container flex mx-auto items-center py-2  ">
          <div className="text-2xl flex items-center  font-bold  space-x-2">
            <a href="#">
              <img
                src="/logo.png"
                className="w-[1rem]  md:w-[2rem]  lg:w-[3rem] "
              />
            </a>
            <div className=" mr-1 font-custom bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text font-extrabold text-transparent text-center select-auto">
              BlueStone
            </div>
          </div>
          <div className="relative flex-grow px-6 items-center ">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 pr-12 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="absolute inset-y-0 right-8 flex items-center space-x-3">
              <img src="/voice.svg" alt="Voice Icon" className="w-5 h-5" />
              <img src="/search2.svg" alt="Search Icon 2" className="w-5 h-5" />
              <img src="/search.svg" alt="Search Icon" className="w-5 h-5" />
            </div>
          </div>
          <div className="hidden md:flex space-x-6 ml-5">
            <div className="flex flex-col items-center ">
              <img
                src="/diamond.svg"
                alt="Diamond Logo"
                className="w-6 h-6 mb-1"
              />
              <a
                href="#"
                className="text-[#Ffd700] hover:text-[#aca6ab]  font-custom"
              >
                Diamond
              </a>
            </div>
            <div className="flex flex-col items-center">
              <img src="/wish.svg" alt="Gold Logo" className="w-6 h-6 mb-1" />
              <a
                href="#"
                className="text-[#Ffd700] hover:text-[#aca6ab] font-custom text-[1rem]"
              >
                Wishlist
              </a>
            </div>
            <div className="flex flex-col items-center">
              <img src="/store.svg" alt="Women Logo" className="w-6 h-6 mb-1" />
              <a
                href="#"
                className="text-[#Ffd700] hover:text-[#aca6ab]  font-custom"
              >
                Stores
              </a>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/jewellery.svg"
                alt="Jewellery Logo"
                className="w-8 h-7  "
              />
              <a
                href="#"
                className="text-[#Ffd700] hover:text-[#aca6ab]  font-custom"
              >
                Jewellery
              </a>
            </div>
            <div className="flex flex-col items-center">
              <img src="/recent.svg" alt="Gold Logo" className="w-6 h-6 mb-1" />
              <a
                href="#"
                className="text-[#Ffd700] hover:text-[#aca6ab] font-custom text-[1rem]"
              >
                Recent Viewed
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
          <div className="md:hidden">
            <a
              href="#"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
            >
              Services
            </a>
            <a
              href="#"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
      <div className="bg-[#edafbc] flex justify-center w-screen overflow-hidden">
        <div className="container  items-center py-1 ">
          <div className="flex flex-row items-center justify-between ">
            <div className="flex items-center space-x-2">
              <a
                href="#"
                className="text-[#13103c] hover:text-[#aca6ab] font-custom flex-1 text-center text-[1.25rem]"
              >
                10+1 Jewellery Plans
              </a>
              <img
                src="/dropdown.svg"
                alt="Dropdown Icon"
                className="w-4 h-4"
              />
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="#"
                className="text-[#13103c] hover:text-[#aca6ab] font-custom flex-1 text-center text-[1.25rem]"
              >
                Watch Jewellery
              </a>
              <img
                src="/dropdown.svg"
                alt="Dropdown Icon"
                className="w-4 h-4"
              />
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="#"
                className="text-[#13103c] hover:text-[#aca6ab] font-custom flex-1 text-center text-[1.25rem]"
              >
                Rings
              </a>
              <img
                src="/dropdown.svg"
                alt="Dropdown Icon"
                className="w-4 h-4"
              />
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="#"
                className="text-[#13103c] hover:text-[#aca6ab] font-custom flex-1 text-center text-[1.25rem]"
              >
                Earings
              </a>
              <img
                src="/dropdown.svg"
                alt="Dropdown Icon"
                className="w-4 h-4"
              />
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="#"
                className="text-[#13103c] hover:text-[#aca6ab] font-custom flex-1 text-center text-[1.25rem]"
              >
                Pendants
              </a>
              <img
                src="/dropdown.svg"
                alt="Dropdown Icon"
                className="w-4 h-4"
              />
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="#"
                className="text-[#13103c] hover:text-[#aca6ab] font-custom flex-1 text-center text-[1.25rem]"
              >
                Solitairies
              </a>
              <img
                src="/dropdown.svg"
                alt="Dropdown Icon"
                className="w-4 h-4"
              />
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="#"
                className="text-[#13103c] hover:text-[#aca6ab] font-custom flex-1 text-center text-[1.25rem]"
              >
                All Jewellery
              </a>
              <img
                src="/dropdown.svg"
                alt="Dropdown Icon"
                className="w-4 h-4"
              />
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="#"
                className="text-[#13103c] hover:text-[#aca6ab] font-custom flex-1 text-center text-[1.25rem]"
              >
                Gifts
              </a>
              <img
                src="/dropdown.svg"
                alt="Dropdown Icon"
                className="w-4 h-4"
              />
            </div>
            <div className="flex items-center space-x-2">
              <a
                href="#"
                className="text-[#13103c] hover:text-[#aca6ab] font-custom flex-1 text-center text-[1.25rem]"
              >
                Gold Coins
              </a>
              <img
                src="/dropdown.svg"
                alt="Dropdown Icon"
                className="w-4 h-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
