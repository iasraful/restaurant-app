import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link className="flex gap-4 items-center" href="/cart">
      <div className="relative w-8 h-8 md:h-5 md:w-5">
        <Image src="/cart.png" alt="Cart" fill />
      </div>
      <span>Cart(3)</span>
    </Link>
  );
};

export default CartIcon;
