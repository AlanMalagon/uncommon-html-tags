import { metadata } from "@/app/layout";
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

const Header = () => {
  return (
    <header className="sticky w-full h-14 top-0 flex place-items-center px-4">
      <Link
        href="/"
        className="text-sm project-name text-shadow-pink-500/75 md:pr-8  md:text-lg md:border-r md:border-slate-800"
      >
        <p className="hidden md:block">{metadata.title}</p>
        {/* Menu icon */}
        <p className="block text-4xl md:hidden">&#9776;</p>
      </Link>

      <div className="hidden md:flex flex-1 gap-8 pl-8">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-white shadow-sm hover:text-pink-300 transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
