"use client";
import StyledLink from "../StyledLink/StyledLink";
import { usePathname } from "next/navigation";
import { ExamplesLinks } from "./links";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="p-2 bg-white bg-opacity-20 flex flex-col md:w-1/3">
      <h1 className="text-white  font-bold">Examples</h1>
      {ExamplesLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <StyledLink isActive={isActive} href={link.href} key={link.name}>
            {link.name}
          </StyledLink>
        );
      })}
    </nav>
  );
};

export default Navigation;
