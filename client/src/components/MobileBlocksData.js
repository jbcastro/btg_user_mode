import React from "react";
import MobileBlocks from "./MobileBlocks";

const MobileBlocksData = props => {
  const glasses = props.glasses;
  const data = glasses;
  const butt = data;
  console.log(butt);

  //   const steve = data.map(item => <MobileBlocks data={item} />);
  //   function jimmy() {
  //     data.map(stuff => {
  //       return stuff;
  //     });
  //   }
  const steve = data.map(item => {
    return item;
  });

  return (
    <div>
      <MobileBlocks data={steve} />
    </div>
  );
};
export default MobileBlocksData;
