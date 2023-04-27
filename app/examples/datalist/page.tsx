import React from "react";

// console.log(
//   `Justification for Sesame Street being an anime: https://twitter.com/RiseFallNickBck/status/1482563258510946308`
// );

const DataList = () => {
  return (
    <section className="p-2">
      <h1 className="project-name text-2xl">{`<datalist>`}</h1>
      <p className="text-white"></p>
      <div className="flex flex-col gap-2 md:flex-row">
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
    </section>
  );
};

export default DataList;
