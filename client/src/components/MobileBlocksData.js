import React, { useState, useEffect } from "react";
import MobileBlocks from "./MobileBlocks";
//sends info to each block so they can function independently
const MobileBlocksData = ({
  onSelect,
  glasses,
  hideRemoved,
  onCoravinSearch,
  unHideHiddenClick,
  unHideHidden,
  priceCheck,
  checkedStates,
}) => {
  const data = glasses;
  // useEffect(() => {
  //   priceCheck(checkedStates);
  // }, [glasses]);
  const cells = data.map((data) => {
    return (
      <MobileBlocks
        data={data}
        key={data._id}
        onSelect={onSelect}
        hideRemoved={hideRemoved}
        onCoravinSearch={onCoravinSearch}
        unHideHiddenClick={unHideHiddenClick}
        unHideHidden={unHideHidden}
        priceCheck={priceCheck}
      />
    );
  });

  return <div className="MobileBlock">{cells}</div>;
};
export default MobileBlocksData;
