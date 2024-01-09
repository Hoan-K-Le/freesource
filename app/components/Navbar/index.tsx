import React from "react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-700 px-6 py-2">
      <Image
        src="https://placekitten.com/200/300"
        alt="logo-placeholder"
        width={30}
        height={20}
        className="rounded-full"
      />
      <ul className="flex gap-8">
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>About</button>
        </li>
        <li>
          <button>Categories</button>
        </li>
      </ul>
      <button>Menu</button>
    </nav>
  );
};
