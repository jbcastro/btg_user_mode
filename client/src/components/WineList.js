import React from "react";
const WineList = props => {
  const content = props.glasses.map(glass => (
    <div key={glass.winenum}>
      <h3>wine name={glass.name}</h3>
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
      <h3>wine funfact={glass.funfact}</h3>
    </div>
  ));

  return <div>{content}</div>;
};
export default WineList;
