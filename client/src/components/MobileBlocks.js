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
    maxWidth: 345,
    backgroundColor: "yellow"
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

  lister: {
    listStyleType: "none"
  }
}));

const MobileBlocks = ({ data, onSelect }) => {
  // butt = data;
  // const onSelect = props.onSelect;

  const grapes = "grapes";
  const year = "year";
  const place = "place";
  const area = "area";
  const country = "country";
  const appellation = "appellation";
  const grape = "grape";
  const description = "description";
  const vinyard = "vinyard";

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
        value={vinyard2}
        onClick={event => onSelect(event)}
      >
        {vinyard1}
      </ButtonBase>
    );
  }

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={checkStatus(data.status)} key={data._id} raised>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={colorz(data.color)}>
            {upperCaseFirstLetterForColor(data.color)}
          </Avatar>
        }
        title={data.name}
        subheader={vinny(data.vinyard)}
      />

      {/* for images */}
      {/* <CardMedia
        className={classes.media}
        image={`https://josephbeckcastro.com/site4/images/${data.picture}.jpg`}
        title={data.name}
      /> */}

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          A{" "}
          <ButtonBase
            className={classes.ButtonBase}
            value={data.year}
            id={year}
            onClick={event => onSelect(event)}
          >
            {data.year}
          </ButtonBase>{" "}
          <ButtonBase
            className={classes.ButtonBase}
            component="button"
            value={data.grapes}
            id={grapes}
            onClick={event => onSelect(event)}
          >
            {data.grapes}
          </ButtonBase>{" "}
          from{" "}
          <ButtonBase
            className={classes.ButtonBase}
            value={data.place}
            id={place}
            onClick={event => onSelect(event)}
          >
            {upperCaseFirstLetter(data.place)}
          </ButtonBase>{" "}
          <ButtonBase
            className={classes.ButtonBase}
            value={data.area}
            id={area}
            onClick={event => onSelect(event)}
          >
            {data.area}
          </ButtonBase>{" "}
          in {""}
          <ButtonBase
            className={classes.ButtonBase}
            value={data.country}
            id={country}
            onClick={event => onSelect(event)}
          >
            {data.country}
          </ButtonBase>{" "}
          served in a{" "}
          <ButtonBase
            className={classes.ButtonBase}
            value={data.mise}
            id={mise}
            onClick={event => onSelect(event)}
          >
            {data.mise}
          </ButtonBase>{" "}
          for ${data.price}
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
            Grapes:{" "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.grape1}
              id={grape}
              onClick={event => onSelect(event)}
            >
              {data.grape1}
            </ButtonBase>
            {"  "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.grape2}
              id={grape}
              onClick={event => onSelect(event)}
            >
              {data.grape2}
            </ButtonBase>
            {"  "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.grape3}
              id={grape}
              onClick={event => onSelect(event)}
            >
              {data.grape3}
            </ButtonBase>
            {"  "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.grape4}
              id={grape}
              onClick={event => onSelect(event)}
            >
              {data.grape4}
            </ButtonBase>
          </Typography>
          <Typography paragraph>
            description:{" "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.description1}
              id={description}
              onClick={event => onSelect(event)}
            >
              {data.description1}
            </ButtonBase>{" "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.description2}
              id={description}
              onClick={event => onSelect(event)}
            >
              {data.description2}
            </ButtonBase>{" "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.description3}
              id={description}
              onClick={event => onSelect(event)}
            >
              {data.description3}
            </ButtonBase>{" "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.description4}
              id={description}
              onClick={event => onSelect(event)}
            >
              {data.description4}
            </ButtonBase>{" "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.description5}
              id={description}
              onClick={event => onSelect(event)}
            >
              {data.description5}
            </ButtonBase>{" "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.description6}
              id={description}
              onClick={event => onSelect(event)}
            >
              {data.description6}
            </ButtonBase>{" "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.description7}
              id={description}
              onClick={event => onSelect(event)}
            >
              {data.description7}
            </ButtonBase>{" "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.description8}
              id={description}
              onClick={event => onSelect(event)}
            >
              {data.description8}
            </ButtonBase>{" "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.description9}
              id={description}
              onClick={event => onSelect(event)}
            >
              {data.description9}
            </ButtonBase>{" "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.description10}
              id={description}
              onClick={event => onSelect(event)}
            >
              {data.description10}
            </ButtonBase>{" "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.description11}
              id={description}
              onClick={event => onSelect(event)}
            >
              {data.description11}
            </ButtonBase>{" "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.description12}
              id={description}
              onClick={event => onSelect(event)}
            >
              {data.description12}
            </ButtonBase>{" "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.description13}
              id={description}
              onClick={event => onSelect(event)}
            >
              {data.description13}
            </ButtonBase>{" "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.description14}
              id={description}
              onClick={event => onSelect(event)}
            >
              {data.description14}
            </ButtonBase>
          </Typography>
          <Typography paragraph>
            Appellation:{" "}
            <ButtonBase
              className={classes.ButtonBase}
              value={data.appellation}
              id={appellation}
              onClick={event => onSelect(event)}
            >
              {data.appellation}
            </ButtonBase>
          </Typography>
          <Typography paragraph>fun fact: {data.funfact}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default MobileBlocks;
