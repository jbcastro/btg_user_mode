import React from "react";
import ReactSearchBox from "react-search-box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TemporaryDrawer from "./Drawer";
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  TemporaryDrawer: {},
  input: {
    display: "none"
  },
  searchBox: {}
}));
const MobileBar = props => {
  const classes = useStyles();
  const onClear = props.onClear;
  const onSearchSelect = props.onSearchSelect;
  const onSort = props.onSort;
  const hideRemovedClick = props.hideRemovedClick;

  return (
    <div className="MobileBar">
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={onClear}
        >
          Clear Filters
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={onSort}
        >
          Sort By Color
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={hideRemovedClick}
        >
          Hide Removed
        </Button>
      </ButtonGroup>

      <ReactSearchBox
        className={classes.searchBox}
        placeholder="Search"
        data={props.allInfo}
        onSelect={event => onSearchSelect(event)}
      />
      {props.filterTerms}
    </div>
  );
};
export default MobileBar;
