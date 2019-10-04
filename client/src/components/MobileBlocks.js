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

const MobileBlocks = ({ data, butt }) => {
  // butt = data;
  console.log(butt);

  function onSelect(event, butt) {
    let value = event.target.value;
    const id1 = event.target.id;
    let id = id1.toUpperCase();

    return (butt = butt.filter(result => {
      if (value === "grapes") {
        return result.grapes.toUpperCase() === id;
      } else if (value === "grape") {
        return (
          result.grape1.toUpperCase() === id ||
          result.grape2.toUpperCase() === id ||
          result.grape3.toUpperCase() === id
        );

        //safgasfg
      } else if (value === "year") {
        return result.year === id;
      } else if (value === "vinyard") {
        return result.vinyard === id;
      } else if (value === "vinyard") {
        return result.vinyard.toUpperCase() === id;
      } else if (value === "place") {
        return result.place.toUpperCase() === id;
      } else if (value === "area") {
        return result.area.toUpperCase() === id;
      } else if (value === "country") {
        return result.country.toUpperCase() === id;
      } else if (value === "appellation") {
        return result.appellation.toUpperCase() === id;
      } else if (value === "place") {
        return result.place.toUpperCase() === id;
      } else if (value === "mise") {
        return result.mise === id;
      } else if (value === "description") {
        return (
          result.description1.toUpperCase() === id ||
          result.description2.toUpperCase() === id ||
          result.description3.toUpperCase() === id ||
          result.description4.toUpperCase() === id ||
          result.description5.toUpperCase() === id ||
          result.description6.toUpperCase() === id ||
          result.description7.toUpperCase() === id ||
          result.description8.toUpperCase() === id ||
          result.description9.toUpperCase() === id ||
          result.description10.toUpperCase() === id
        );
      }
      console.log(butt);
    }));
  }

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
  let vinny = vinyard1 => (
    <ButtonBase
      className={classes.ButtonBase}
      id={vinyard1}
      value={vinyard}
      onClick={event => onSelect(event)}
    >
      {vinyard1}
    </ButtonBase>
  );

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
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

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            A{" "}
            <ButtonBase
              className={classes.ButtonBase}
              id={data.year}
              value={year}
              onClick={event => onSelect(event)}
            >
              {data.year}
            </ButtonBase>{" "}
            <ButtonBase
              className={classes.ButtonBase}
              component="button"
              id={data.grapes}
              value={grapes}
              onClick={event => onSelect(event)}
            >
              {data.grapes}
            </ButtonBase>{" "}
            from{" "}
            <ButtonBase
              className={classes.ButtonBase}
              id={data.place}
              value={place}
              onClick={event => onSelect(event)}
            >
              {upperCaseFirstLetter(data.place)}
            </ButtonBase>{" "}
            <ButtonBase
              className={classes.ButtonBase}
              id={data.area}
              value={area}
              onClick={event => onSelect(event)}
            >
              {data.area}
            </ButtonBase>{" "}
            in {""}
            <ButtonBase
              className={classes.ButtonBase}
              id={data.country}
              value={country}
              onClick={event => onSelect(event)}
            >
              {data.country}
            </ButtonBase>{" "}
            served in a{" "}
            <ButtonBase
              className={classes.ButtonBase}
              id={data.mise}
              value={mise}
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
              grapes:{" "}
              <ButtonBase
                className={classes.ButtonBase}
                id={data.grape1}
                value={grape}
                onClick={event => onSelect(event)}
              >
                {data.grape1}
              </ButtonBase>
              <ButtonBase
                className={classes.ButtonBase}
                id={data.grape2}
                value={grape}
                onClick={event => onSelect(event)}
              >
                {data.grape2}
              </ButtonBase>
              <ButtonBase
                className={classes.ButtonBase}
                id={data.grape3}
                value={grape}
                onClick={event => onSelect(event)}
              >
                {data.grape3}
              </ButtonBase>
            </Typography>
            <Typography paragraph>
              description:{" "}
              <ButtonBase
                className={classes.ButtonBase}
                id={data.description1}
                value={description}
                onClick={event => onSelect(event)}
              >
                {data.description1}
              </ButtonBase>
              <ButtonBase
                className={classes.ButtonBase}
                id={data.description2}
                value={description}
                onClick={event => onSelect(event)}
              >
                {data.description2}
              </ButtonBase>
              <ButtonBase
                className={classes.ButtonBase}
                id={data.description3}
                value={description}
                onClick={event => onSelect(event)}
              >
                {data.description3}
              </ButtonBase>
              <ButtonBase
                className={classes.ButtonBase}
                id={data.description4}
                value={description}
                onClick={event => onSelect(event)}
              >
                {data.description4}
              </ButtonBase>
              <ButtonBase
                className={classes.ButtonBase}
                id={data.description5}
                value={description}
                onClick={event => onSelect(event)}
              >
                {data.description5}
              </ButtonBase>
              <ButtonBase
                className={classes.ButtonBase}
                id={data.description6}
                value={description}
                onClick={event => onSelect(event)}
              >
                {data.description6}
              </ButtonBase>
            </Typography>
            <Typography paragraph>
              Appellation:{" "}
              <ButtonBase
                className={classes.ButtonBase}
                id={data.appellation}
                value={appellation}
                onClick={event => onSelect(event)}
              >
                {data.appellation}
              </ButtonBase>
            </Typography>
            <Typography paragraph>fun fact: {data.funfact}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default MobileBlocks;
