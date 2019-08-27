import React from "react";
import "./styles/App.css";

const WineList = props => {
  const handleSelect = props.handleSelect;

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
          <button id={glass._id} onClick={event => handleSelect(event)}>
            {glass.name}
          </button>

          <td>
            <button>{glass.grapes}</button>
          </td>
          <td>
            <button>{glass.grape1}</button> <button>{glass.grape2}</button>
            <button>{glass.grape3}</button>
          </td>

          <td>
            <button>{glass.year}</button>
          </td>
          <td>
            <button>{glass.place}</button>
          </td>
          <td>
            <button>{glass.area}</button>
          </td>
          <td>
            <button>{glass.country}</button>
          </td>
          <td>
            <button>{glass.appellation}</button>
          </td>
          <td>
            <button>{glass.description1}</button>
            <button>{glass.description2}</button>
            <button>{glass.description3}</button>
            <button>{glass.description4}</button>
            <button>{glass.description5}</button>
            <button>{glass.description6}</button>
          </td>
          <td>
            <button>{glass.funfact}</button>
          </td>
        </tr>
        <tr>
          <td />
        </tr>
      </table>
    </div>
  ));

  return <ul>{content}</ul>;
};
export default WineList;
