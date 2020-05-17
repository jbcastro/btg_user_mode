import React, { useState } from "react";
import ReactSearchBox from "react-search-box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TemporaryDrawer from "./Drawer";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  TemporaryDrawer: {},
  input: {
    display: "none",
  },
  searchBox: {},
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));
const MobileBar = (props) => {
  const classes = useStyles();
  const onClear = props.onClear;
  const onSearchSelect = props.onSearchSelect;
  const onSort = props.onSort;
  const hideRemovedClick = props.hideRemovedClick;
  const unHideHiddenClick = props.unHideHiddenClick;
  const onRemoveFilterTerms = props.onRemoveFilterTerms;
  let filterTerms = props.filterTerms;
  const color = "color";
  const status = "status";
  const [hideUnhideRemoved, setHideUnhideRemoved] = React.useState(false);
  const handleDelete = (result) => {
    onRemoveFilterTerms(result);
  };
  const changeHideRemoved = (event) => {
    hideRemovedClick();
    setHideUnhideRemoved(!hideUnhideRemoved);
  };

  const displayHideRemoved = () => {
    if (hideUnhideRemoved == false) {
      return "hide removed";
    } else {
      return "show removed";
    }
  };
  const [hideUnhideHidden, setHideUnhideHidden] = React.useState(true);
  const changeHideHidden = (event) => {
    unHideHiddenClick();
    setHideUnhideHidden(!hideUnhideHidden);
  };
  const displayHideHidden = () => {
    if (hideUnhideHidden == false) {
      return "show Hidden";
    } else {
      return "hide Hidden";
    }
  };

  const checkIfCoravinName = (result) => {
    if (result == "TRUE") {
      return "coravin";
    } else if (result == "FALSE") {
      return "non-coravin";
    } else {
      return result;
    }
  };

  return (
    <div className="MobileBar">
      <button
        variant="contained"
        color="secondary"
        id={color}
        onClick={(event) => onSort(event)}
      >
        Sort By Color
      </button>
      <button
        variant="contained"
        color="secondary"
        id={status}
        onClick={(event) => onSort(event)}
      >
        Sort By status
      </button>
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
          onClick={changeHideRemoved}
        >
          {displayHideRemoved()}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={changeHideHidden}
        >
          {displayHideHidden()}
        </Button>
      </ButtonGroup>

      <ReactSearchBox
        className={classes.searchBox}
        placeholder="Search"
        data={props.allInfo}
        onSelect={(event) => onSearchSelect(event)}
      />

      {filterTerms.map((result, index) => (
        <li key={index}>
          <Chip
            label={checkIfCoravinName(result)}
            onDelete={() => handleDelete(result)}
            variant="outlined"
            value={result}
          />
        </li>
      ))}
    </div>
  );
};
export default MobileBar;
