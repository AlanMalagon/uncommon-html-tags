import CodeViewer from "@/components/CodeViewer/CodeViewer";
import React from "react";
import Demo from "./demo";
import Title from "@/components/Title";

const DataList = () => {
  return (
    <main className="p-2">
      <section className="text-white [&>ul]:px-12 [&>p]:px-4 [&>p]:py-1">
        <Title>Datalist</Title>
        <p className="">
          The datalist element is quite useful, you can create a
          dropdown-like interaction without having to use JS or any
          component library.
        </p>
        <p>Downsides of this tag:</p>
        <ul className="list-disc">
          <li>
            Not completely compatible with all browsers, it will work fine
            with most of the common ones like Chrome, Firefox, Safari, and
            Edge.
          </li>
          <li>It is not CSS-customizable.</li>
        </ul>
      </section>
      <section>
        <Title variant="h2">Example</Title>
        <div className="flex flex-col gap-2 p-4 md:flex-row">
          <Demo />
        </div>
        <CodeViewer ariaLabel="datalist-example" className="break-words">
          <Demo />
        </CodeViewer>
      </section>
    </main>
  );
};

export default DataList;
