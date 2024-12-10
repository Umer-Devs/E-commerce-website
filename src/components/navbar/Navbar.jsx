import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
 console.log(isMobile);
 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <nav className=" mb-2 bg-gradient-to-r from-purple-600 to-blue-600 w-full sticky top-0 z-50 shadow-lg transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-white text-2xl md:text-4xl">
            <Link to="/" className="hover:text-[#F4A261] transition-colors duration-300">
              Local Loot
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-8 items-center font-semibold text-white">
              {['Home', 'About', 'Products', 'Help', 'Contact'].map((item) => (
                <li key={item} className="relative group">
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="hover:text-[#F4A261] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4A261] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6 text-white text-xl">
            <Link to="/search" className="hover:text-[#F4A261] transition-all duration-300 hover:scale-110">
              <IoSearch />
            </Link>
            <div className="relative group">
              <span className="absolute -top-2 -right-2 bg-[#E76F51] rounded-full text-sm h-[18px] w-[18px] flex items-center justify-center">
                0
              </span>
              <Link to="/cart" className="hover:text-[#F4A261] transition-all duration-300 hover:scale-110">
                <FiShoppingCart />
              </Link>
            </div>
            <Link to="/logout" className="hover:text-[#F4A261] transition-all duration-300 hover:scale-110">
              <LuLogOut />
            </Link>
            <Link to="/owner" className="hover:text-[#F4A261] transition-all duration-300 hover:scale-110">
              <FaRegUserCircle />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="text-white relative">
              <span className="absolute -top-2 -right-2 bg-[#E76F51] rounded-full text-sm h-[18px] w-[18px] flex items-center justify-center">
                0
              </span>
              <FiShoppingCart className="text-xl" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-2xl focus:outline-none hover:text-[#F4A261] transition-colors duration-300"
            >
              {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-600 to-purple-600 border-t border-[#2A9D8F] transition-all duration-500">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'About', 'Products', 'Help', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="block px-3 py-2 text-white hover:bg-[#2A9D8F] rounded-md transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              <Link to="/search" className="text-white hover:text-[#F4A261] transition-colors duration-300">
                <IoSearch />
              </Link>
              <Link to="/logout" className="text-white hover:text-[#F4A261] transition-colors duration-300">
                <LuLogOut />
              </Link>
              <Link to="/owner" className="text-white hover:text-[#F4A261] transition-colors duration-300">
                <FaRegUserCircle />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
