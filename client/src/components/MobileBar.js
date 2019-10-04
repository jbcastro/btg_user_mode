import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import pascalCase from "pascalcase";
import ReactSearchBox from "react-search-box";
import { all } from "q";
import { array } from "prop-types";
import { render } from "react-dom";

const MobileBar = props => {
  const unFilteredWines = props.unFilteredWines;
  const onClear = props.onClear;
  const onSelect = props.onSelect;
  const mise = "mise";
  const description = "description";
  let allInfo = props.allInfo;
  // console.log(allInfo);

  return (
    <div>
      <ButtonBase onClick={event => onClear(event)}>Clear Filters</ButtonBase>

      <ReactSearchBox
        placeholder="Search"
        value="len"
        data={allInfo}
        callback={record => console.log(record)}
      />
    </div>
  );
};
export default MobileBar;

// // const sheep = Array.from(new Set(miseArray));
// // console.log(sheep);

// // function miseLoop(miseArray) {
// //   miseArray.forEach();
// // }

// const miseArray = [props.unFilteredWines.map(result => result.mise)];
// // console.log(miseArray);
// // let uniqueSet = [...new Set(miseArray)];
// // console.log(uniqueSet);
// const miseLoop = miseArray.forEach(result => {
//   return result;
// });

// function removeDups(miseLoop) {
//   let unique = {};
//   miseLoop.forEach(function(i) {
//     if (!unique[i]) {
//       unique[i] = true;
//     }
//   });

//   return Object.keys(unique);
// }
// const run = removeDups(miseLoop);
// // console.log(run);
// // // const backToArray = [...uniqueSet];
// // // console.log(backToArray);

// const glasses = props.glasses;
