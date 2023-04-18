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
    <header className="sticky w-full h-14 top-0 flex place-items-center px-4 3xl:h-20">
      <Link
        href="/"
        className="hidden text-sm project-name text-shadow-pink-500/75 md:pr-8  md:text-lg md:border-r md:border-slate-800 
        3xl:text-3xl 3xl:ml-4 md:block"
      >
        <p className="">{metadata.title}</p>
      </Link>

      {/* Menu icon */}
      {/* 
        Tailwind CSS allows using the 'peer' class to enable a kind of listener 
        on a sibling element (at the same nested level).
        
        After that, the 'peer-checked' selector can be applied applied in another element
        so it can listen to its 'peer', here the 'menu' class (defined in global.css) includes it,
        therefore, when the checkbox is checked, it will show the menu by applying opacity-100.

        Important to use the htmlFor attribute on the label so it checks the hidden input
        whenever it is clicked.
      */}
      <input type="checkbox" className="peer hidden" id="menu-toggle" />
      <label
        htmlFor="menu-toggle"
        className="block text-4xl project-name text-shadow-pink-500/75 md:hidden"
      >
        &#9776;
      </label>

      <div className="menu">
        <Link
          href="/"
          className="project-name text-shadow-pink-500/75 md:hidden"
        >
          <p className="">{metadata.title}</p>
        </Link>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-white hover:text-pink-300 transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
