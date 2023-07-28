const Demo = () => (
  <>
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
  </>
);

export default Demo;
