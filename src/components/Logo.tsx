import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h2
        className={twMerge(
          "text-2x1 text-accent hover:text-darkOrange font-bold uppercase hoverEffect relative group overflow-hidden"
        )}
      >
        Shoppers
        <span className="absolute left-0 bottom-0 w-full h-px bg-darkOrange -translate-x-[105%] group-hover:translate-x-0 hoverEffect"></span>
      </h2>
    </Link>
  );
};

export default Logo;
