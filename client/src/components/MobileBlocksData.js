import React from "react";
import MobileBlocks from "./MobileBlocks";


const MobileBlocksData = ({onSelect, glasses}) => {
  
  
  const data = glasses
  
  const cells = data.map(data=>{
    return(
    <MobileBlocks data={data} key={data._id}
    onSelect={onSelect}/>
    )
  })

return <div>{cells}</div>
  
}
export default MobileBlocksData
//   const mappedGlasses1 = props.mappedGlasses;
//   const mappedGlasses = mappedGlasses1;
//   const onSelect = props.onSelect

//   return (
//     <div>
//       {data.map((data ) => (

//         <MobileBlocks data={data} 
//         key={data._id} 
//         />
//       ))}
//     </div>
//   );

//   // return(
//   //   <div>
//   //     <MobileBlocks data={data}/>
//   //   </div>
//   // )
// };