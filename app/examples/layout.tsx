import { FC, ReactNode } from "react";

const ExamplesLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row md:full-height gap-4 px-4 pb-4">
      <nav className="bg-white bg-opacity-20 md:w-1/3">
        <h1 className="text-white p-2">Examples</h1>
      </nav>
      <section className="bg-white bg-opacity-20 md:w-2/3">
        {children}
      </section>
    </div>
  );
};

export default ExamplesLayout;
