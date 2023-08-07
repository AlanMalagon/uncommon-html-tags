import CodeViewer from "@/components/CodeViewer/CodeViewer";
import React from "react";
import Demo from "./demo";
import Title from "@/components/Title";

const Fieldset = () => {
  return (
    <main className="p-2">
      <section className="text-white [&>ul]:px-12 [&>p]:px-4 [&>p]:py-1">
        <Title>Fieldset</Title>
        <p>
          Good to group related inputs as well as to give them a title.
        </p>
        <p>Pros of this tag:</p>
        <ul className="list-disc">
          <li>
            Shows by default a nice visuals of border and title (if
            accompanied by a <code>{`<legend>`}</code> tag)
          </li>
          <li>
            Can be nested inside the <code>{`<form>`}</code> tag
          </li>
          <li>The disable attribute applies to all its content</li>
        </ul>
        <p>Downsides of this tag:</p>
        <ul className="list-disc">
          <li>
            Can lose the default visuals if used with CSS library, like in
            this project, since I am using Tailwind, the border was not
            there initially and I had to put it manually
          </li>
        </ul>
      </section>
      <section>
        <Title variant="h2">Example</Title>
        <div className="flex flex-col gap-2 p-4 md:flex-row">
          <Demo />
        </div>
        <CodeViewer ariaLabel="fieldset-example" className="break-words">
          <Demo />
        </CodeViewer>
      </section>
    </main>
  );
};

export default Fieldset;
