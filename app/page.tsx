import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-5/6 px-8 flex flex-col justify-center items-center">
      <h1 className="py-1 text-5xl break-words md:text-7xl project-name text-center">Uncommon HTML Tags</h1>
      <p className="mt-4 text-justify md:text-center text-white">
        Did you know that you can have a dropdown with an autocomplete
        functionality without having to create convoluted custom components
        or use a component library? I did not, that is why I decided to
        create this site, to expose with simple examples how vanilla HTML
        has developed and how powerful it has become over the years for
        modern web develompent.
      </p>
      <Link
        href="/examples/datalist"
        className="mt-6 p-2 rounded bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg shadow-pink-500/40 hover:shadow-pink-500/50 hover:scale-105 transition-transform hover:bg-gradient-to-l"
      >
        Take a look 🔍
      </Link>
    </main>
  );
}
