"use client";
import Link from "next/link";
import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { StoreState } from "../../type";

const SidebarCart = () => {
  const { cart } = useSelector((state: StoreState) => state?.shoppers);
  console.log(cart);
  return (
    <Link
      href={"/cart"}
      className="bg-accentWhite w-16- h-[70px] rounded-md flex flex-col gap-1 text-accent justify-center items-center shadow-sm shadow-lightGreen group overflow-hidden relative"
    >
      <div className="flex items-center justify-center">
        <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
        <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
      </div>
      <p className="text-xs font-semibold">Buy Now</p>
      <p className="absolute top-1 right-2 bg-darkOrange text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
        {cart.length}
      </p>
    </Link>
  );
};

export default SidebarCart;