"use client";
import React, { FC, ReactNode, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";

interface NavItem {
  id: number;
  text?: string;
  icon?:ReactNode;
}

const Navbar: FC = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems: NavItem[] = [
    { id: 1, text: "Portfolio" },
    { id: 2, text: "Skills" },
    { id: 3, text: "About" },
    { id: 4, text: "Testimonials" },
    { id: 5, icon: <FaPhone /> },
  ];

  return (
    <div className="bg-[#E3EDF7] fixed z-50 flex justify-between items-center h-24 w-full mx-auto px-4 text-black font-bold">
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:bg-[#CE2A52] rounded-md m-4 cursor-pointer duration-300 hover:text-white "
          >
            {item.icon ? item.icon : item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#E3EDF7] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-white cursor-pointer border-gray-600"
          >
            {item.icon ? item.icon : item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
