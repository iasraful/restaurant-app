import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center h-12 text-red-500 p-4 border-b-2 border-b-red-500 uppercase">
      {/* Logo */}

      <div className="text-xl">
        <Link href="/">Massimo</Link>
      </div>
      {/* Mobile Menu */}
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default NavBar;
