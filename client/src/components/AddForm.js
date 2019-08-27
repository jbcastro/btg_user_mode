import React from "react";
import "./styles/App.css";

const AddForm = props => {
  const handleSubmit = props.handleSubmit;

  const handleOnClick = props.handleOnClick;

  return (
    <div>
      <form>
        {/* <input
          type="text"
          name="winenum"
          placeholder="winenum"
          onChange={props.onChange}
          value={props.curItem.winenum || ""}
        /> */}

        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={props.onChange}
          value={props.curItem.name || ""}
        />

        <input
          type="text"
          name="grape1"
          placeholder="grape 1"
          onChange={props.onChange}
          value={props.curItem.grape1 || ""}
        />

        <input
          type="text"
          name="grape2"
          placeholder="grape 2"
          onChange={props.onChange}
          value={props.curItem.grape2 || ""}
        />

        <input
          type="text"
          name="grape3"
          placeholder="grape 3"
          onChange={props.onChange}
          value={props.curItem.grape3 || ""}
        />

        <input
          type="text"
          name="grapes"
          placeholder="grapes"
          onChange={props.onChange}
          value={props.curItem.grapes || ""}
        />

        <input
          type="text"
          name="year"
          placeholder="year"
          onChange={props.onChange}
          value={props.curItem.year || ""}
        />

        <input
          type="text"
          name="place"
          placeholder="place"
          onChange={props.onChange}
          value={props.curItem.place || ""}
        />

        <input
          type="text"
          name="area"
          placeholder="area"
          onChange={props.onChange}
          value={props.curItem.area || ""}
        />

        <input
          type="text"
          name="country"
          placeholder="country"
          onChange={props.onChange}
          value={props.curItem.country || ""}
        />

        <input
          type="text"
          name="appellation"
          placeholder="appellation"
          onChange={props.onChange}
          value={props.curItem.appellation || ""}
        />

        <input
          type="text"
          name="description1"
          placeholder="description1"
          onChange={props.onChange}
          value={props.curItem.description1 || ""}
        />

        <input
          type="text"
          name="description2"
          placeholder="description2"
          onChange={props.onChange}
          value={props.curItem.description2 || ""}
        />

        <input
          type="text"
          name="description3"
          placeholder="description3"
          onChange={props.onChange}
          value={props.curItem.description3 || ""}
        />

        <input
          type="text"
          name="description4"
          placeholder="description4"
          onChange={props.onChange}
          value={props.curItem.description4 || ""}
        />

        <input
          type="text"
          name="description5"
          placeholder="description5"
          onChange={props.onChange}
          value={props.curItem.description5 || ""}
        />

        <input
          type="text"
          name="description6"
          placeholder="description6"
          onChange={props.onChange}
          value={props.curItem.description6 || ""}
        />

        <input
          type="text"
          name="funfact"
          placeholder="funfact"
          onChange={props.onChange}
          value={props.curItem.funfact || ""}
        />
      </form>
      <button onClick={() => handleOnClick()}>delete brah?</button>
      <button onClick={() => handleSubmit()}>add</button>
    </div>
  );
};

export default AddForm;
