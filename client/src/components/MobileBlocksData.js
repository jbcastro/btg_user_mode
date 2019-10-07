import React from "react";
import MobileBlocks from "./MobileBlocks";

const MobileBlocksData = props => {
  const glasses = props.glasses;
  const data = glasses;
  const mappedGlasses1 = props.mappedGlasses;
  const mappedGlasses = mappedGlasses1;

  return (
    <div>
      {data.map(data => (
        <MobileBlocks data={data} />
      ))}
    </div>
  );
};
export default MobileBlocksData;
