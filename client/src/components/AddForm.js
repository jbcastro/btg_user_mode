import React from "react";
import "./styles/App.css";

const AddForm = props => {
  const sid = props.curItem;
  const mo = sid.express;
  const bud = mo.winenum;
  console.log(mo);
  //   const sid = bud.map(result => console.log(result));
  //for adding wines
  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="name"
        // onChange={props.change}
        // value={props.curItem.name || ""}
      />
      <p />

      <input
        type="text"
        name="winenum"
        placeholder="winenum"
        // onChange={props.change}
        // value={props.curItem.winenum || ""}
      />
      <p />
      <input
        type="text"
        name="grape1"
        placeholder="grape 1"
        // onChange={props.change}
        // value={props.curItem.grape1 || ""}
      />
      <p />
    </form>
  );
};

export default AddForm;
