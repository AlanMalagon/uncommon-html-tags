import Button from "@/components/Button/Button";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="full-height px-8 flex flex-col justify-center items-center">
      <h1 className="py-1 text-5xl project-name text-center md:text-7xl 3xl:text-9xl">
        Uncommon HTML Tags
      </h1>
      <p className="mt-4 max-w-2xl text-justify text-white md:text-center 3xl:text-3xl 3xl:max-w-7xl">
        Did you know that you can have a dropdown with an autocomplete
        functionality without having to create convoluted custom components
        or use a component library? I did not, that is why I decided to
        create this site, to expose with simple examples how vanilla HTML
        has developed and how powerful it has become over the years for
        modern web develompent.
      </p>
      <Link href="/examples/datalist">
        <Button>Take a look 🔍</Button>
      </Link>
    </main>
  );
}
