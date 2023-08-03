import { FC, ReactNode } from "react";
import Navigation from "@/components/Navigation/Navigation";

const ExamplesLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row md:full-height gap-4 px-4 pb-4">
      <Navigation />
      <section className="bg-white bg-opacity-20 md:w-2/3 xl:text-xl">
        {children}
      </section>
    </div>
  );
};

export default ExamplesLayout;
