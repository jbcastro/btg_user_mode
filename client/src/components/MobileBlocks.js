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
import ButtonBase from "@material-ui/core/ButtonBase";
import CardMedia from "@material-ui/core/CardMedia";
import { string } from "prop-types";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

// import MobileBar from "./MobileBar";

//this component is the layout for the cards
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  margin: {
    margin: theme.spacing(1),
  },
  input: {
    display: "none",
  },
  card: {
    maxWidth: 345,
    display: "inline-block",
    minHeight: 300,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      minHeight: 1,
    },
  },
  cardAdded: {
    maxWidth: 345,
    backgroundColor: "#6FAEF7",
    [theme.breakpoints.down("sm")]: {
      minHeight: 1,
    },
    display: "inline-block",
    minHeight: 300,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      minHeight: 1,
    },
  },
  cardRemoved: {
    maxWidth: 345,
    backgroundColor: "#FFA07A",
    display: "inline-block",
    minHeight: 300,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      minHeight: 1,
    },
  },

  cardHidden: {
    maxWidth: 345,
    backgroundColor: "yellow",
    display: "inline-block",
    minHeight: 300,
    overflow: "hidden",
    display: "none",
    [theme.breakpoints.down("sm")]: {
      minHeight: 1,
    },
  },
  cardUnHidden: {
    maxWidth: 345,
    backgroundColor: "yellow",
    display: "inline-block",
    minHeight: 300,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      minHeight: 1,
    },
  },
  ButtonBase: {
    color: "blue",
    fontSize: "0.875rem",
    fontFamily: "Roboto",

    letterspacing: "0.01071em",
    fontWeight: "400",
    lineHeight: "1.43",
  },
  lists: {
    color: "blue",
    margin: theme.spacing(1),
  },
  AvatarButton: {
    fontSize: "1em",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",

    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatarRed: {
    backgroundColor: red[500],
  },
  avatarWhite: {
    backgroundColor: "black",
  },
  avatarDessert: {
    backgroundColor: "yellow",
    color: "black",
  },
  avatarCorovan: {
    backgroundColor: "green",
  },
  avatarSparkling: {
    backgroundColor: "blue",
  },

  lister: {
    listStyleType: "none",
  },
}));

const MobileBlocks = ({
  data,
  onSelect,
  hideRemoved,
  onCoravinSearch,
  unHideHiddenClick,
  unHideHidden,
}) => {
  const grapes = "grapes";
  const year = "year";
  const place = "place";
  const area = "area";
  const country = "country";
  const appellation = "appellation";
  const grape = "grape";
  const description = "description";
  const vinyard = "vinyard";
  const color = "color";
  const mise = "mise";
  const coravin = "coravin";

  const upperCaseFirstLetter = (str) =>
    str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

  const upperCaseFirstLetterForColor = (color) => {
    var str = color.charAt(0);
    return str.toUpperCase();
    //check to see if needed in admin mode
  };
  //set status of card to give it it's background color
  const checkStatus = (status) => {
    if (status === "added") {
      return classes.cardAdded;
    } else if (status === "removed" && !hideRemoved) {
      return classes.cardRemoved;
    } else if (status === "removed" && hideRemoved) {
      return classes.cardHidden;
    } else if (status === "hidden" && !unHideHidden) {
      return classes.cardHidden;
    } else if (status === "hidden" && unHideHidden) {
      return classes.cardUnHidden;
    } else {
      return classes.card;
    }
  };
  const colorz = (color) => {
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

  //to get the subheader as a button
  let vinyard2;
  function vinny(vinyard1) {
    if (vinyard1 === string) {
      vinyard2 = vinyard1.toUpperCase();
    }
    return (
      <ButtonBase
        className={classes.ButtonBase}
        id={vinyard}
        value={vinyard1}
        onClick={(event) => onSelect(event)}
      >
        {vinyard1}
      </ButtonBase>
    );
  }
  function coravinCheck(coravin) {
    if (coravin === true) {
      return "coravin";
    } else {
      return "non-coravin";
    }
  }

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const checkGlass = (glass) => {
    if (glass == "AP") {
      return "an";
    } else {
      return "a";
    }
  };

  return (
    <Card className={checkStatus(data.status)} key={data._id} raised>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={colorz(data.color)}>
            <ButtonBase
              value={data.color}
              id={color}
              onClick={(event) => onSelect(event)}
              className={classes.AvatarButton}
            >
              {upperCaseFirstLetterForColor(data.color)}
            </ButtonBase>
          </Avatar>
        }
        title={data.name}
        subheader={vinny(data.vinyard)}
      />
      {/* {images enabled but commented out until I can get images} */}
      {/* for images */}
      {/* <CardMedia
        className={classes.media}
        image={`https://josephbeckcastro.com/site4/images/${data.picture}.jpg`}
        title={data.name}
      /> */}

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          A {""}
          <ButtonBase
            className={classes.ButtonBase}
            id={coravin}
            onClick={(event) => onSelect(event)}
            value={data.coravin}
          >
            {coravinCheck(data.coravin)}
          </ButtonBase>{" "}
          <ButtonBase
            className={classes.ButtonBase}
            value={data.year}
            id={year}
            onClick={(event) => onSelect(event)}
          >
            {data.year}
          </ButtonBase>{" "}
          <ButtonBase
            className={classes.ButtonBase}
            component="button"
            value={data.grapes}
            id={grapes}
            onClick={(event) => onSelect(event)}
          >
            {data.grapes}
          </ButtonBase>{" "}
          from{" "}
          <ButtonBase
            className={classes.ButtonBase}
            value={data.place}
            id={place}
            onClick={(event) => onSelect(event)}
          >
            {data.place}
          </ButtonBase>{" "}
          <ButtonBase
            className={classes.ButtonBase}
            value={data.area}
            id={area}
            onClick={(event) => onSelect(event)}
          >
            {data.area}
          </ButtonBase>{" "}
          in {""}
          <ButtonBase
            className={classes.ButtonBase}
            value={data.country}
            id={country}
            onClick={(event) => onSelect(event)}
          >
            {data.country}
          </ButtonBase>{" "}
          served in {checkGlass(data.mise)}{" "}
          <ButtonBase
            className={classes.ButtonBase}
            value={data.mise}
            id={mise}
            onClick={(event) => onSelect(event)}
          >
            {data.mise}
          </ButtonBase>{" "}
          for ${data.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
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
            Grapes<br></br>
            {data.grape.map((result, index) => (
              <li key={index} className="list">
                <button
                  className="descAndGrape"
                  id={grape}
                  value={result}
                  onClick={(event) => onSelect(event)}
                >
                  {result}
                </button>
              </li>
            ))}
          </Typography>
          <Typography paragraph>
            Descriptions<br></br>
            {data.description.map((result, index) => (
              <li key={index} className="list">
                <button
                  className="descAndGrape"
                  id={description}
                  value={result}
                  onClick={(event) => onSelect(event)}
                >
                  {result}
                </button>
              </li>
            ))}
            {/* 
            {data.description.map((result, index) => (
              <ul className="list">
                <li key={index}>
                  <Chip
                    id={description}
                    value={result}
                    label={result}
                    onClick={(event) => chipClick(event)}
                    value={result}
                  ></Chip>
                </li>
              </ul>
            ))} */}
          </Typography>
          <p></p>
          <Typography paragraph>
            Appellation<br></br>
            <button
              className="descAndGrape"
              value={data.appellation}
              id={appellation}
              onClick={(event) => onSelect(event)}
            >
              {data.appellation}
            </button>
          </Typography>
          <Typography paragraph>Fun Fact: {data.funfact}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MobileBlocks;
