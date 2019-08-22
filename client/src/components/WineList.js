import React from "react";
import "./styles/App.css";

const WineList = props => {
  const handleSelect = props.handleSelect;
  const handleOnClick = props.handleOnClick;
  // const beach = props.glasses;
  // console.log(beach);
  // const boys = beach.map(wilson => wilson._id);
  // console.log(boys);

  const content = props.glasses.map(glass => (
    <div key={glass._id}>
      <table>
        <tr>
          <th>name</th>
          <th>wine grapes</th>
          <th>individual grape</th>

          <th>wine year</th>
          <th>wine place</th>
          <th>wine area</th>
          <th>wine country</th>
          <th>wine appellation</th>
          <th>wine description</th>

          <th>wine funfact</th>
        </tr>
        <tr>
          <td>
            <button id={glass._id} onClick={event => handleSelect(event)}>
              {glass.name}
            </button>
          </td>
          <td>{glass.grapes}</td>
          <td>
            {glass.grape1} <p>{glass.grape2}</p>
            <p>{glass.grape3}</p>
          </td>

          <td>{glass.year}</td>
          <td>{glass.place}</td>
          <td>{glass.area}</td>
          <td>{glass.country}</td>
          <td>{glass.appellation}</td>
          <td>
            {glass.description1}
            {glass.description2}
            {glass.description3}
            {glass.description4}
            {glass.description5}
            {glass.description6}
          </td>
          <td>{glass.funfact}</td>
        </tr>
        <tr>
          <td />
        </tr>
      </table>
      <button onClick={() => handleOnClick()}>delete brah?</button>
    </div>
  ));

  return <ul>{content}</ul>;
};
export default WineList;
