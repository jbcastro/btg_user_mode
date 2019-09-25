import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const MobileBar = props => {
  const unFilteredWines = props.unFilteredWines;
  const onClear = props.onClear;
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
  const miseArray = props.unFilteredWines.map(result =>
    result.mise.toUpperCase()
  );

  const uniqueSet = new Set(miseArray);
  const backToArray = [...uniqueSet];
  const misez = (
    <ul>
      {backToArray.map(result => (
        <li key={result}>{result}</li>
      ))}
    </ul>
  );

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
          <InputLabel htmlFor="age-simple">Mise</InputLabel>
          <Select
            // value={values.age}
            // onChange={handleChange}

            inputProps={{
              name: "age",
              id: "age-simple"
            }}
          >
            <MenuItem value={10}>{misez}</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
