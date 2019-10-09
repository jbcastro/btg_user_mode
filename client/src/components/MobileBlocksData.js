import React from "react";
import MobileBlocks from "./MobileBlocks";

const MobileBlocksData = ({ onSelect, glasses }) => {
  const data = glasses;

  const cells = data.map(data => {
    return <MobileBlocks data={data} key={data._id} onSelect={onSelect} />;
  });

  return <div className="MobileBlock">{cells}</div>;
};
export default MobileBlocksData;
