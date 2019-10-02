import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ButtonBase from "@material-ui/core/ButtonBase";
// import MobileBar from "./MobileBar";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  },
  card: {
    maxWidth: 345
  },
  cardAdded: {
    maxWidth: 345,
    backgroundColor: "#E6E6FA"
  },
  cardRemoved: {
    maxWidth: 345,
    backgroundColor: "#FFA07A"
  },
  cardHidden: {
    maxWidth: 345
  },
  ButtonBase: {
    color: "blue"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatarRed: {
    backgroundColor: red[500]
  },
  avatarWhite: {
    backgroundColor: "black"
  },
  avatarDessert: {
    backgroundColor: "yellow",
    color: "black"
  },
  avatarCorovan: {
    backgroundColor: "green"
  },
  avatarSparkling: {
    backgroundColor: "blue"
  },
  clearButton: {
    position: "fixed",
    backgroundColor: "white"
  },
  isAdded: {
    backgroundColor: "purple"
  },
  isRemoved: {
    backgroundColor: "green"
  },
  isHidden: {
    backgroundColor: "blue"
  },
  lister: {
    listStyleType: "none"
  }
}));

const MobileBlocks = props => {
  const onSelect = props.onSelect;

  const grapes = "grapes";
  const year = "year";
  const place = "place";
  const area = "area";
  const country = "country";
  const appellation = "appellation";
  const grape = "grape";
  const description = "description";

  const mise = "mise";

  const upperCaseFirstLetter = str =>
    str.replace(/\b[a-z]/g, char => char.toUpperCase());

  const upperCaseFirstLetterForColor = color => {
    var str = color.charAt(0);
    return str.toUpperCase();
    //check to see if needed in admin mode
  };

  const checkStatus = status => {
    if (status === "added") {
      return classes.cardAdded;
    } else if (status === "removed") {
      return classes.cardRemoved;
    } else if (status === "hidden") {
      return classes.cardHidden;
    } else {
      return classes.card;
    }
  };
  const colorz = color => {
    if (color === "red") {
      return classes.avatarRed;
    } else if (color === "white") {
      return classes.avatarWhite;
    } else if (color === "dessert") {
      return classes.avatarDessert;
    } else if (color === "corovan") {
      return classes.avatarCorovan;
    } else {
      return classes.avatarSparkling;
    }
  };

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }
  // const ifNull = id=>{
  //   if(id===!null){
  //     return id.toLowerCase()
  //   }
  // }

  return (
    <div>
      {props.glasses.map(glass => (
        <Card className={checkStatus(glass.status)} key={glass._id} raised>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={colorz(glass.color)}>
                {upperCaseFirstLetterForColor(glass.color)}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={glass.name}
            subheader={glass.grapes}
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              A{" "}
              <ButtonBase
                className={classes.ButtonBase}
                id={glass.year}
                value={year}
                onClick={event => onSelect(event)}
              >
                {glass.year}
              </ButtonBase>{" "}
              <ButtonBase
                className={classes.ButtonBase}
                component="button"
                id={glass.grapes}
                value={grapes}
                onClick={event => onSelect(event)}
              >
                {glass.grapes}
              </ButtonBase>{" "}
              from{" "}
              <ButtonBase
                className={classes.ButtonBase}
                id={glass.place}
                value={place}
                onClick={event => onSelect(event)}
              >
                {upperCaseFirstLetter(glass.place)}
              </ButtonBase>{" "}
              <ButtonBase
                className={classes.ButtonBase}
                id={glass.area}
                value={area}
                onClick={event => onSelect(event)}
              >
                {glass.area}
              </ButtonBase>{" "}
              in {""}
              <ButtonBase
                className={classes.ButtonBase}
                id={glass.country}
                value={country}
                onClick={event => onSelect(event)}
              >
                {glass.country}
              </ButtonBase>{" "}
              served in a{" "}
              <ButtonBase
                className={classes.ButtonBase}
                id={glass.mise}
                value={mise}
                onClick={event => onSelect(event)}
              >
                {glass.mise}
              </ButtonBase>{" "}
              for ${glass.price}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>
                grapes:{" "}
                <ButtonBase
                  className={classes.ButtonBase}
                  id={glass.grape1}
                  value={grape}
                  onClick={event => onSelect(event)}
                >
                  {glass.grape1}
                </ButtonBase>
                <ButtonBase
                  className={classes.ButtonBase}
                  id={glass.grape2}
                  value={grape}
                  onClick={event => onSelect(event)}
                >
                  {glass.grape2}
                </ButtonBase>
                <ButtonBase
                  className={classes.ButtonBase}
                  id={glass.grape3}
                  value={grape}
                  onClick={event => onSelect(event)}
                >
                  {glass.grape3}
                </ButtonBase>
              </Typography>
              <Typography paragraph>
                description:{" "}
                <ButtonBase
                  className={classes.ButtonBase}
                  id={glass.description1}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description1}
                </ButtonBase>
                <ButtonBase
                  className={classes.ButtonBase}
                  id={glass.description2}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description2}
                </ButtonBase>
                <ButtonBase
                  className={classes.ButtonBase}
                  id={glass.description3}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description3}
                </ButtonBase>
                <ButtonBase
                  className={classes.ButtonBase}
                  id={glass.description4}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description4}
                </ButtonBase>
                <ButtonBase
                  className={classes.ButtonBase}
                  id={glass.description5}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description5}
                </ButtonBase>
                <ButtonBase
                  className={classes.ButtonBase}
                  id={glass.description6}
                  value={description}
                  onClick={event => onSelect(event)}
                >
                  {glass.description6}
                </ButtonBase>
              </Typography>
              <Typography paragraph>
                Appellation:{" "}
                <ButtonBase
                  className={classes.ButtonBase}
                  id={glass.appellation}
                  value={appellation}
                  onClick={event => onSelect(event)}
                >
                  {glass.appellation}
                </ButtonBase>
              </Typography>
              <Typography paragraph>fun fact: {glass.funfact}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
};

export default MobileBlocks;
