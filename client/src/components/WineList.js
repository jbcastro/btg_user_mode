import React from "react";
const WineList = props => {
  const content = props.glasses.map(glass => (
    <div key={glass.winenum}>
      <h3>wine name={glass.name}</h3>
    </div>
  ));

  return <div>{content}</div>;
};
export default WineList;
