"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  {
    href: "/examples/datalist",
    label: "Examples",
  },
  {
    href: "/about",
    label: "About",
  },
];

const PageName = "Uncommon HTML Tags";

// TODO: Make header have a background when scrolled down
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky w-full h-14 top-0 flex place-items-center px-4 3xl:h-20">
      {/* Desktop Home Link */}
      <Link
        href="/"
        className="hidden text-sm project-name text-shadow-pink-500/75 md:pr-8  md:text-lg md:border-r md:border-slate-800 
        3xl:text-3xl 3xl:ml-4 md:block"
      >
        {PageName}
      </Link>

      {/* Menu Icon only on mobile*/}
      <label
        className="block text-4xl project-name hover:text-shadow-pink-500/75 md:hidden cursor-pointer"
        onClick={() => setMenuOpen((current) => !current)}
      >
        &#9776;
      </label>

      {/* Menu Container for both Desktop and Mobile */}
      <div className={`menu ${menuOpen ? " opacity-100" : ""}`}>
        {/* Mobile Home Link */}
        <Link
          href="/"
          className={`project-name text-shadow-pink-500/75 md:hidden ${
            menuOpen ? "visible" : "invisible"
          }`}
          onClick={handleMenuClose}
        >
          {PageName}
        </Link>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-white hover:text-pink-300 transition-colors md:visible ${
              menuOpen ? "visible" : "invisible"
            }`}
            onClick={handleMenuClose}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
