import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import pascalCase from "pascalcase";

const MobileBar = props => {
  const unFilteredWines = props.unFilteredWines;
  const onClear = props.onClear;
  const onSelect = props.onSelect;
  const mise = "mise";
  const description = "description";

  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));
  const classes = useStyles();
  //turn mise to own array to do drop down thingy (brain losing it)
  function myFunction(item) {
    const homer = [item];
    return homer;
  }
  const descs1 = unFilteredWines.map(result => {
    const marge = myFunction(result.description1);
    const lisa = myFunction(result.description2);
    myFunction(result.description3);
    myFunction(result.description4);
    myFunction(result.description5);
    myFunction(result.description6);
    myFunction(result.description7);
    myFunction(result.description8);
    myFunction(result.description9);
    myFunction(result.description10);

    return marge + lisa;
  });

  console.log(descs1);
  // const des1 = result.description1;

  //   const des2 = result.description2;
  //   const des3 = result.description3;
  //   const des4 = result.description4;
  //   const des5 = result.description5;
  //   const des6 = result.description6;
  //   const des7 = result.description7;
  //   const des8 = result.description8;
  //   const des9 = result.description9;
  //   const des10 = result.description10;

  // const des1 = [des11];
  // console.log(des1);
  // console.log(des11);
  // const des2 = [des21];
  // const des3 = [des31];
  // const des4 = [des41];
  // const des5 = [des51];
  // const des6 = [des61];
  // const des7 = [des71];
  // const des8 = [des81];
  // const des9 = [des91];
  // const des10 = [des101];
  // const oy = des1.concat(
  //   des2,
  //   des3,
  //   des4,
  //   des5,
  //   des6,
  //   des7,
  //   des8,
  //   des9,
  //   des10
  // );
  // return [oy];

  const descArray = descs1.map(result => {
    if (result === !null) {
      return result.toUpperCase();
    }
  });
  console.log(descArray);

  const uniqueSet = new Set(descArray);
  const backToArray = [...uniqueSet];

  return (
    <div>
      <ButtonBase onClick={event => onClear(event)}>Clear Filters</ButtonBase>

      {/* s
    p
    a
    c
    e */}

      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Desription</InputLabel>
          <Select
          // value={values.age}
          // onChange={handleChange}

          // inputProps={{
          //   name: "age",
          //   id: "age-simple"
          // }}
          >
            {backToArray.map((result, index) => (
              <MenuItem
                key={index}
                id={result}
                component={result}
                value={description}
                onClick={event => onSelect(event)}
              >
                {result}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
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
