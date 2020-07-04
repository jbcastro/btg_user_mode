import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import "./styles/App.css";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const CheckBoxes = (props) => {
  const priceCheck = props.priceCheck;
  const glasses = props.glasses;
  const onSelect = props.onSelect;
  const [state, setState] = React.useState({
    zero: false,
    twentyone: false,
    thirtyone: false,
    fortyone: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    priceCheck(state);
  }, [state]);

  const doThing = () => {};
  // priceCheck(state);
  return (
    <div>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.zero}
              onChange={handleChange}
              // onBlur={() => priceCheck(state)}
              name="zero"
              value="zero"
              color="primary"
              id="0"
            />
          }
          label="$0-$20"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.twentyone}
              onChange={handleChange}
              // onBlur={() => priceCheck(state)}
              name="twentyone"
              color="primary"
              id="20"
            />
          }
          label="$21-$30"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.thirtyone}
              onChange={handleChange}
              // onBlur={() => priceCheck(state)}
              name="thirtyone"
              color="primary"
              id="30"
            />
          }
          label="$31-$40"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.fortyone}
              onChange={handleChange}
              // onBlur={() => priceCheck(state)}
              name="fortyone"
              color="primary"
              id="40"
            />
          }
          label="$41+"
        />
      </FormGroup>
    </div>
  );
};
export default CheckBoxes;
