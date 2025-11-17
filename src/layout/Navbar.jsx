import React, { useState } from "react";
import navLogo from "@/assets/logo.png";
import menuLogo from "@/assets/menu-logo.svg";
import menuClose from "@/assets/menu-close.svg";
import Button from "@/components/Button";
import Navlinks from "@/components/Navlinks";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="w-full sticky z-10 top-0 bg-[#FEFEFE]">
      <div className="wrapper flex flex-wrap justify-between items-center transition-all duration-500">
        <Link to='/'>
        
        <img src={navLogo} alt="nav logo" className="w-[173px] lg:w-[211px]" />
        </Link>

        {/* Desktop Links */}
        <Navlinks />

        <div className="flex items-center gap-4">
          <Button
            variant="success"
            className="text-[16px] hidden lg:block font-semibold"
          >
            Apply now
          </Button>

          {/* Mobile Menu Button */}
          <img
            src={isOpen ? menuClose : menuLogo}
            alt="menu logo"
            className="lg:hidden cursor-pointer w-7 h-7"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-[#006834] px-[25px] fixed top-0 right-0 w-2/3 h-full shadow-lg z-50 transition-all duration-300 ease-in-out">
          <div className="flex justify-end pt-4">
            <img
              src={menuClose}
              alt="close"
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          </div>

          <img src={navLogo} alt="nav logo" className="w-[155px] pt-8" />

          <div className="pt-8">
            {/* Mobile Links */}
            <Navlinks isMobile={true} onLinkClick={() => setIsOpen(false)} />
          </div>

          <div className="mt-8">
            <Button
              variant="success"
              className="w-full text-[16px] font-semibold"
            >
              Apply now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
