import React from "react";
import { FaBars } from "react-icons/fa";
const Navbar = ({ onClick }) => {
  return (
    <nav className="flex items-center justify-between p-4 text-white bg-red-500 shadow-xl">
      <button onClick={onClick}>
        <FaBars />
      </button>
      <span>User</span>
    </nav>
  );
};

export default Navbar;
