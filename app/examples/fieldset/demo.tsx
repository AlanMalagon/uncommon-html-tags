const Demo = () => (
  <fieldset className="border p-5 rounded-md flex flex-col flex-grow">
    <legend className="text-3xl text-pink-300 px-2">
      Milshake Flavor
    </legend>

    <label className="text-white flex gap-1">
      <input type="radio" name="flavor" value="chocolate" />
      Chocolate
    </label>
    <label className="text-white flex gap-1">
      <input type="radio" name="flavor" value="strawberry" />
      Strawberry
    </label>
    <label className="text-white flex gap-1">
      <input type="radio" name="flavor" value="vanilla" />
      Vanilla
    </label>
  </fieldset>
);

export default Demo;
