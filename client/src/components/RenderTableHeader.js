import React from "react";
import "./styles/App.css";
const RenderTableHeader = props => {
  let header = Object.keys(props.glasses);

  const stuff = header.map((key, index) => {
    <th key={index}>{key}</th>;
    return (
      <div>
        <h1 id="title">React Dynamic Table</h1>
        <table id="glasses">
          <tbody>
            <tr>hey</tr>
          </tbody>
        </table>
      </div>
    );
  });

  return <section>{stuff}</section>;
};

export default RenderTableHeader;

// return (
//   <table id="glasses">
//     <tbody>
//       <tr>name</tr>
//       <tr>name</tr>
//       <tr>name</tr>
//       <tr>name</tr>

//       <tr>name</tr>

//       <tr>name</tr>
//       <tr>name</tr>
//       <tr>name</tr>
//       <tr>name</tr>
//     </tbody>
//   </table>
// );

// let header = Object.keys(props.glasses[0]);
// return header.map((key, index) => {
//   return <th key={index}>{key}</th>;
// });

// const al = header.map((result, index) => {
//   return <th key={index}>{result}</th>;
// });
// return (
//   <div>
//     <table id="glasses">
//       <tbody>
//         <tr>{al}</tr>
//       </tbody>
//     </table>
//   </div>
// );
