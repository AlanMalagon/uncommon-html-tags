import { FC, ReactNode } from "react";
import Navigation from "@/components/Navigation/Navigation";

const ExamplesLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <article className="overflow-y-auto flex flex-col gap-4 px-4 pb-4 md:flex-row md:full-height md:w-1/2">
      <Navigation />
      <main className="md:w-2/3 xl:text-xl">{children}</main>
    </article>
  );
};

export default ExamplesLayout;
