import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Uncommon HTML Tags",
  description:
    "Website to highlight the power of vanilla HTML for modern web development.",
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-gradient-to-r from-slate-950  to-pink-950">
        <header className="sticky w-full h-14 top-0 flex place-items-center px-4">
          <Link
            href="/"
            className="pr-8 text-lg project-name text-shadow-pink-500/75 border-r border-slate-800"
          >
            {metadata.title}
          </Link>
          <div className="flex flex-1 gap-8 pl-8">
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
        {children}
      </body>
    </html>
  );
}
