import CodeViewer from "@/components/CodeViewer/CodeViewer";
import React from "react";

// TODO: Think a better way to save this alongside its live example
const text = `<label htmlFor="favorite-anime-input" className="text-pink-300">
  Favorite anime:
</label>
<input
  list="favorite-anime-list"
  id="favorite-anime-input"
  name="favorite-anime-input"
  className="h-11 px-1 rounded md:w-64 md:h-auto"
/>

<datalist id="favorite-anime-list">
  <option value="Haikyuu" />
  <option value="My Hero Academia" />
  <option value="Full Metal Alchemist" />
  <option value="Attack On Titan" />
  <option value="Sesame Street" />
</datalist>

// Justification for Sesame Street being an anime: https://twitter.com/RiseFallNickBck/status/1482563258510946308
`;

const DataList = () => {
  return (
    <main className="p-2">
      <section>
        <h1 className="project-name text-2xl">{`<datalist>`}</h1>
        <p className="text-white p-4">
          The datalist element is really useful, you can create a
          dropdown-like interaction without having to use JS or any
          component library. Down below you can find an example of it in
          action:
        </p>
      </section>
      <section>
        <h1 className="project-name text-2xl w-full">Example</h1>
        <div className="flex flex-col gap-2 p-4 md:flex-row">
          <label htmlFor="favorite-anime-input" className="text-pink-300">
            Favorite anime:
          </label>
          <input
            list="favorite-anime-list"
            id="favorite-anime-input"
            name="favorite-anime-input"
            className="h-11 px-1 rounded md:w-64 md:h-auto"
          />

          <datalist id="favorite-anime-list">
            <option value="Haikyuu" />
            <option value="My Hero Academia" />
            <option value="Full Metal Alchemist" />
            <option value="Attack On Titan" />
            <option value="Sesame Street" />
          </datalist>
        </div>
        <CodeViewer ariaLabel="datalist-example">{text}</CodeViewer>
      </section>
    </main>
  );
};

export default DataList;
