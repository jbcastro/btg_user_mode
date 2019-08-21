import React from "react";
import "./styles/App.css";

const WineList = props => {
  const content = props.glasses.map(glass => (
    <div key={glass.winenum}>
      {/* <h3>wine name={glass.name}</h3>
      <h3>wine grape1={glass.grape1}</h3>
      <h3>wine grape2={glass.grape2}</h3>
      <h3>wine grape3={glass.grape3}</h3>
      <h3>wine grapes={glass.grapes}</h3>
      <h3>wine year={glass.year}</h3>
      <h3>wine place={glass.place}</h3>
      <h3>wine area={glass.area}</h3>
      <h3>wine country={glass.country}</h3>
      <h3>wine appellation={glass.appellation}</h3>
      <h3>wine description1={glass.description1}</h3>
      <h3>wine description2={glass.description2}</h3>
      <h3>wine description3={glass.description3}</h3>
      <h3>wine description4={glass.description4}</h3>
      <h3>wine description5={glass.description5}</h3>
      <h3>wine description6={glass.description6}</h3>
      <h3>wine funfact={glass.funfact}</h3> */}
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
          <th>wine description1</th>
          <th>wine description2</th>
          <th>wine description3</th>
          <th>wine description4</th>
          <th>wine description5</th>
          <th>wine description6</th>
          <th>wine funfact</th>
        </tr>
        <tr>
          <td>{glass.name}</td>
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
          <td>{glass.description1}</td>
          <td>{glass.description2}</td>
          <td>{glass.description3}</td>
          <td>{glass.description4}</td>
          <td>{glass.description5}</td>
          <td>{glass.description6}</td>
          <td>{glass.funfact}</td>
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
