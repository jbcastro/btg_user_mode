import React from "react";
import "./styles/App.css";

const RenderTableData = props => {
  return props.glasses.map((glasses, index) => {
    const {
      _id,
      name,
      grape1,
      grape2,
      grape3,
      grapes,
      year,
      place,
      area,
      country,
      appellation,
      description1,
      description2,
      description3,
      description4,
      description5,
      description6,
      funfact
    } = glasses;
    return (
      <tr key={_id}>
        <td>{name}</td>
        <td>{grape1}</td>
        <td>{grape2}</td>
        <td>{grape3}</td>
        <td>{grapes}</td>
        <td>{year}</td>
        <td>{place}</td>
        <td>{area}</td>
        <td>{country}</td>
        <td>{appellation}</td>
        <td>{description1}</td>
        <td>{description2}</td>
        <td>{description3}</td>
        <td>{description4}</td>
        <td>{description5}</td>
        <td>{description6}</td>
        <td>{funfact}</td>
      </tr>
    );
  });
};

export default RenderTableData;
