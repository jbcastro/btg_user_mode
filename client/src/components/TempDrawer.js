import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ReactSearchBox from "react-search-box";
import Chip from "@material-ui/core/Chip";
import "./styles/App.css";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    menu: false,
    bottom: false,
    howto: false,
  });

  const onClear = props.onClear;
  const onSearchSelect = props.onSearchSelect;
  const onSort = props.onSort;
  const hideRemovedClick = props.hideRemovedClick;
  const unHideHiddenClick = props.unHideHiddenClick;
  const onRemoveFilterTerms = props.onRemoveFilterTerms;
  let filterTerms = props.filterTerms;
  const onSelect = props.onSelect;
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
      return "Hide Removed";
    } else {
      return "Show Removed";
    }
  };
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

  const checkIfCoravinName = (result) => {
    if (result == "TRUE") {
      return "coravin";
    } else if (result == "FALSE") {
      return "non-coravin";
    } else {
      return result;
    }
  };
  const [howTo, setHowTo] = React.useState(false);
  const handleHowToClick = () => {
    setHowTo(!howTo);
  };

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
      <Divider />
      <Divider />
      <Divider />
      <List>
        How To:
        <ListItem button onClick={handleHowToClick}>
          {howTo
            ? "Doggo ipsum what a nice floof doggorino ruff floofs heck you are doing me a frighten, mlem pats floofs. Such treat puggorino very jealous pupper bork, vvv very good spot. Ruff long bois yapper I am bekom fat, dat tungg tho. Boof noodle horse most angery pupper I have ever seen thicc, length boy clouds. wrinkler fluffer. Shooberino I am bekom fat wrinkler pupperino ur givin me a spook lotsa pats, porgo shibe wow very biscit most angery pupper I have ever seen."
            : "click hgere"}
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="TempDrawer">
      {["menu"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}

      <ReactSearchBox
        className={classes.searchBox}
        placeholder="Search"
        data={props.allInfo}
        onSelect={(e) => onSearchSelect(e)}
      />

      {filterTerms.map((result, index) => (
        <ul className="list">
          <li key={index}>
            <Chip
              label={checkIfCoravinName(result)}
              onDelete={() => handleDelete(result)}
              variant="outlined"
              value={result}
              size="small"
            />
          </li>
        </ul>
      ))}
    </div>
  );
}
