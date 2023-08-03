const Demo = () => (
  <>
    <label
      htmlFor="favorite-anime-input"
      className="text-2xl text-pink-300"
    >
      Favorite anime:
    </label>
    <input
      list="favorite-anime-list"
      id="favorite-anime-input"
      name="favorite-anime-input"
      className="text-xl px-0.5 rounded outline-pink-400"
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
