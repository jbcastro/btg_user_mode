import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";
import ReactSearchBox from "react-search-box";
import Chip from "@material-ui/core/Chip";
import "./styles/App.css";
// import { green } from "@material-ui/core/colors";
// import FormGroup from "@material-ui/core/FormGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
// import CheckBoxIcon from "@material-ui/icons/CheckBox";
// import Favorite from "@material-ui/icons/Favorite";
// import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
// import CheckBoxes from "./CheckBoxes";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});
//this pulls down a drawer that will allow one to sort by certain
//params such as color, hide removed/hidden items, clear all filters,
//and give a "how-to"
export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    howto: false,
  });

  const onClear = props.onClear;
  const onSearchSelect = props.onSearchSelect;
  const onSort = props.onSort;
  const hideRemovedClick = props.hideRemovedClick;
  const unHideHiddenClick = props.unHideHiddenClick;
  const onRemoveFilterTerms = props.onRemoveFilterTerms;
  const filterTerms = props.filterTerms;

  const onSelect = props.onSelect;
  const color = "color";
  const status = "status";
  const [hideUnhideRemoved, setHideUnhideRemoved] = React.useState(false);
  //remove filter items
  const handleDelete = (result) => {
    onRemoveFilterTerms(result);
  };

  // const [upOrDown, setUpOrDown] = React.useState(false);
  // const upOrDownClick = (event) => {
  //   setUpOrDown(!upOrDown);
  //   onSort(event);
  // };

  //show/hide removed
  const changeHideRemoved = (event) => {
    hideRemovedClick();
    setHideUnhideRemoved(!hideUnhideRemoved);
  };

  const displayHideRemoved = () => {
    if (hideUnhideRemoved == false) {
      return "Hide Removed";
    } else {
      return "Show Removed";
    }
  };
  //show/hide hidden aka retired wines
  const [hideUnhideHidden, setHideUnhideHidden] = React.useState(true);
  const changeHideHidden = (event) => {
    unHideHiddenClick();
    setHideUnhideHidden(!hideUnhideHidden);
  };
  const displayHideHidden = () => {
    if (hideUnhideHidden == false) {
      return "Show Retired";
    } else {
      return "Hide Retired";
    }
  };
  //since coravin is a boolean it would show up as "true" or "false"
  //for filtered items. This changes it to "coravin" or "non-coravin"
  const checkIfCoravinName = (result) => {
    if (result == "TRUE") {
      return "CORAVIN";
    } else if (result == "FALSE") {
      return "NON-CORAVIN";
    } else {
      return result;
    }
  };

  //hide/show how to instructions
  const [howToColor, setHowToColor] = React.useState(false);
  const handleHowToClickColor = () => {
    setHowToColor(!howToColor);
  };
  const [howToButtons, setHowToButtons] = React.useState(false);
  const handleHowToClickButtons = () => {
    setHowToButtons(!howToButtons);
  };
  const [howToAvatar, setHowToAvatar] = React.useState(false);
  const handleHowToClickAvatar = () => {
    setHowToAvatar(!howToAvatar);
  };
  //hide/show the drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        Sort By:
        <ListItem button onClick={(event) => onSort(event)} id={color}>
          Color
        </ListItem>
        <ListItem button onClick={(event) => onSort(event)} id={status}>
          Status
        </ListItem>
        <ListItem button onClick={(event) => onSort(event)} id="year">
          Year
        </ListItem>
        <ListItem button onClick={(event) => onSort(event)} id="price">
          Price
        </ListItem>
      </List>
      <Divider />
      <Divider />
      <Divider />
      <List>
        Hide Items:
        <ListItem button onClick={changeHideRemoved}>
          {displayHideRemoved()}
        </ListItem>
        <ListItem button onClick={changeHideHidden}>
          {displayHideHidden()}
        </ListItem>
      </List>
      <Divider />
      <Divider />
      <Divider />
      <List>
        Clear:
        <ListItem button onClick={onClear}>
          Clear Filters
        </ListItem>
      </List>
    </div>
  );

  const list2 = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        How To:
        <ListItem button onClick={handleHowToClickColor}>
          {howToColor ? (
            <span>
              {" "}
              <h3>Colors</h3>
              <h5>Click here to close</h5>
              <p>Red means the wine was recently removed</p>{" "}
              <p>Blue means the wine was recently added</p>
              <p>
                Yellow means the wine has been "retired" aka it was previously
                on the list but has been removed before the latest update{" "}
              </p>
            </span>
          ) : (
            "Color of the Cards"
          )}
        </ListItem>
        <ListItem button onClick={handleHowToClickButtons}>
          {howToButtons ? (
            <span>
              {" "}
              <h3>Buttons</h3>
              <h5>Click here to close</h5>
              <p>
                Each descriptor is a filtering button. For instance if you
                wanted to see all wines from France you would click on the
                France button.
              </p>{" "}
            </span>
          ) : (
            "Descriptor Buttons"
          )}
        </ListItem>
        <ListItem button onClick={handleHowToClickAvatar}>
          {howToAvatar ? (
            <span>
              {" "}
              <h3>Avatar</h3>
              <h5>Click here to close</h5>
              <p>
                The avatars (or Aangs) at the top left shows what type of wine
                it is. R = Red, W = White, D = Dessert, and S = Sparkling.
              </p>{" "}
            </span>
          ) : (
            "Avatar"
          )}
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="TempDrawer">
      {/* <CheckBoxes
        priceCheck={props.priceCheck}
        onSelect={props.onSelect}
        glasses={props.glasses}
      /> */}
      {["menu"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
            {list2(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      {/* {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list2(anchor)}
          </Drawer>
        </React.Fragment>
      ))} */}

      <ReactSearchBox
        className={classes.searchBox}
        placeholder="Search"
        data={props.allInfo}
        onSelect={(e) => onSearchSelect(e)}
      />

      {filterTerms.map((result) => (
        <ul className="list">
          <li key={result.index}>
            <Chip
              label={checkIfCoravinName(result)}
              onDelete={() => handleDelete(result)}
              variant="outlined"
              value={result.value}
              size="small"
              key={result.index}
            />
          </li>
        </ul>
      ))}
    </div>
  );
}
