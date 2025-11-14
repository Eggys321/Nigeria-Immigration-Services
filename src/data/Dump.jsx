import React, { useState } from "react";
import navLogo from "@/assets/logo.png";
import { NavLink } from "react-router-dom";
import Button from "@/components/Button";
import menuLogo from "@/assets/menu-logo.svg";
import menuClose from "@/assets/menu-close.svg";
import Navlinks from "@/components/Navlinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <nav className="w-full sticky z-10 top-0 bg-[#FEFEFE]">
      <div className="container mx-auto px-[15px] py-7 md:px-[100px] md:py-[18px] flex justify-between items-center transition-all duration-500 ">
        <img src={navLogo} alt="nav logo" className="w-[173px] lg:w-[211px]" />

        <Navlinks />

        <div>
          <Button
            variant="success"
            className="text-[16px] hidden lg:block font-semibold"
          >
            Apply now
          </Button>

          <img
            src={menuLogo}
            alt="menu logo"
            className="lg:hidden"
            onClick={toggleMenu}
          />
        </div>
      </div>
      {/*  */}
      {isOpen && (
        <>
          <div className="bg-[#006834] px-[25px]   ml-auto  fixed top-0 right-0 w-2/3 h-full  shadow-lg z-50 ">
            <div className="flex justify-end pt-1.5">
              <img src={menuClose} alt="" onClick={toggleMenu} />
            </div>
            <img src={navLogo} alt="nav logo" className="w-[155px] pt-12 " />
            <ul
              className="lg:flex gap-[45px] pt-6 text-[18px]   font-semibold"
              onClick={toggleMenu}
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#00AA55]"
                      : "text-[#212121] hover:text-[#00AA55] transition-colors"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#00AA55]"
                      : "text-[#212121] hover:text-[#00AA55] transition-colors"
                  }
                >
                  About us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#00AA55]"
                      : "text-[#212121] hover:text-[#00AA55] transition-colors"
                  }
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/information-center"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#00AA55]"
                      : "text-[#212121] hover:text-[#00AA55] transition-colors"
                  }
                >
                  Information center
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#00AA55]"
                      : "text-[#212121] hover:text-[#00AA55] transition-colors"
                  }
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

// export default Navbar;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navLogo from "@/assets/logo.png";
import menuLogo from "@/assets/menu-logo.svg";
import menuClose from "@/assets/menu-close.svg";

const Navlinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
    
  }
  return (
    <>
      <ul className="lg:flex hidden gap-[45px]  text-[18px] font-semibold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#00AA55]"
                : "text-[#212121] hover:text-[#00AA55] transition-colors"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "text-[#00AA55]"
                : "text-[#212121] hover:text-[#00AA55] transition-colors"
            }
          >
            About us
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-[#00AA55]"
                : "text-[#212121] hover:text-[#00AA55] transition-colors"
            }
          >
            Services
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/information-center"
            className={({ isActive }) =>
              isActive
                ? "text-[#00AA55]"
                : "text-[#212121] hover:text-[#00AA55] transition-colors"
            }
          >
            Information center
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "text-[#00AA55]"
                : "text-[#212121] hover:text-[#00AA55] transition-colors"
            }
          >
            Contact us
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navlinks;

