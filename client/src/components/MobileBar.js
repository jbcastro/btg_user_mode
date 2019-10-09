import React from "react";
import ReactSearchBox from "react-search-box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));
const MobileBar = props => {
  const classes = useStyles();
  const onClear = props.onClear;
  const onSearchSelect = props.onSearchSelect;

  return (
    <div className="MobileBar">
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={onClear}
      >
        Clear Filters
      </Button>

      <ReactSearchBox
        placeholder="Search"
        value="Doe"
        data={props.allInfo}
        onSelect={event => onSearchSelect(event)}
      />
    </div>
  );
};
export default MobileBar;
