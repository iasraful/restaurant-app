import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const NavBar = () => {
  const user = false;
  return (
    <div className="flex justify-between items-center h-12 md:h-24 text-red-500 p-4 border-b-2 border-b-red-500 uppercase lg:px-20 xl:px-40">
      {/* Left Linkd */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* Logo */}

      <div className="text-xl md:font-bold flex-1 items-center md:text-center">
        <Link href="/">Massimo</Link>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right links */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-5 right-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 rounded-md px-1">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>0123-456-789</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/order">Order</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default NavBar;
