import React from "react";

const FormTest = props => {
  const handleSubmit = props.handleSubmit;
  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label>
        Name:
        <input type="text" name="name"></input>
      </label>
      <label>
        grape:
        <input type="text" name="grape[0]"></input>
      </label>
      <label>
        desc:
        <input type="text" name="desc[0]"></input>
      </label>
      <label>
        Name:
        <input type="text" name="vinyard"></input>
      </label>
      <label>
        Name:
        <input type="text" name="grapes"></input>
      </label>
      <label>
        Name:
        <input type="number" name="year"></input>
      </label>
      <label>
        Name:
        <input type="text" name="place"></input>
      </label>
      <label>
        Name:
        <input type="text" name="area"></input>
      </label>
      <label>
        Name:
        <input type="text" name="country"></input>
      </label>
      <label>
        Name:
        <input type="text" name="appellation"></input>
      </label>
      <label>
        Name:
        <input type="number" name="price"></input>
      </label>
      <label>
        Name:
        <input type="text" name="mise"></input>
      </label>
      <label>
        Name:
        <input type="text" name="color"></input>
      </label>
      <label>
        Name:
        <input type="text" name="status"></input>
      </label>
      <label>
        Name:
        <input type="text" name="funfact"></input>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
export default FormTest;
