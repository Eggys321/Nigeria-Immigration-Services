import React from "react";
import { NavLink } from "react-router-dom";

const Navlinks = ({ isMobile = false, onLinkClick }) => {
  const links = [
    { path: "/", label: "Home" },
    { path: "/about-us", label: "About us" },
    { path: "/services", label: "Services" },
    { path: "/information-center", label: "Information center" },
    { path: "/contact-us", label: "Contact us" },
  ];

  return (
    <ul
      className={`${
        isMobile
          ? "flex flex-col gap-6 text-[16px] md:text-[18px] font-semibold"
          : "hidden lg:flex gap-[45px] text-[18px] font-semibold"
      }`}
      onClick={onLinkClick}
    >
      {links.map(({ path, label }) => (
        <li key={path}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              isActive
                ? "text-[#00AA55]"
                : "text-[#FEFEFE] md:text-[#212121] hover:text-[#00AA55] transition-colors"
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navlinks;
