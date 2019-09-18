import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const images = [
  {
    url: "/static/images/grid-list/breakfast.jpg",
    title: "Breakfast",
    width: "40%"
  },
  {
    url: "/static/images/grid-list/burgers.jpg",
    title: "Burgers",
    width: "30%"
  },
  {
    url: "/static/images/grid-list/camera.jpg",
    title: "Camera",
    width: "30%"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%"
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15
      },
      "& $imageMarked": {
        opacity: 0
      },
      "& $imageTitle": {
        border: "4px solid currentColor"
      }
    }
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}

<div>
  <ButtonBase onClick={event => onClear(event)}>Clear Filters</ButtonBase>
  {props.glasses.map(glass => (
    <Card className={classes.card} key={glass._id}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            P
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
            id={glass.year}
            value={year}
            onClick={event => onSelect(event)}
          >
            {glass.year}
          </ButtonBase>{" "}
          <ButtonBase
            component="button"
            id={glass.grapes}
            value={grapes}
            onClick={event => onSelect(event)}
          >
            {glass.grapes}
          </ButtonBase>{" "}
          from{" "}
          <ButtonBase
            id={glass.place}
            value={place}
            onClick={event => onSelect(event)}
          >
            {glass.place}
          </ButtonBase>{" "}
          <ButtonBase
            id={glass.area}
            value={area}
            onClick={event => onSelect(event)}
          >
            {glass.area}
          </ButtonBase>{" "}
          in {""}
          <ButtonBase
            id={glass.country}
            value={country}
            onClick={event => onSelect(event)}
          >
            {glass.country}
          </ButtonBase>{" "}
          served in a{" "}
          <ButtonBase
            id={glass.mise}
            value={mise}
            onClick={event => onSelect(event)}
          >
            {glass.mise}
          </ButtonBase>{" "}
          for $
          <ButtonBase
            id={glass.price}
            value={price}
            onClick={event => onSelect(event)}
          >
            {glass.price}
          </ButtonBase>
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
              id={glass.grape1}
              value={grape}
              onClick={event => onSelect(event)}
            >
              {glass.grape1}
            </ButtonBase>
            <ButtonBase
              id={glass.grape2}
              value={grape}
              onClick={event => onSelect(event)}
            >
              {glass.grape2}
            </ButtonBase>
            <ButtonBase
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
              id={glass.description1}
              value={description}
              onClick={event => onSelect(event)}
            >
              {glass.description1}
            </ButtonBase>
            <ButtonBase
              id={glass.description2}
              value={description}
              onClick={event => onSelect(event)}
            >
              {glass.description2}
            </ButtonBase>
            <ButtonBase
              id={glass.description3}
              value={description}
              onClick={event => onSelect(event)}
            >
              {glass.description3}
            </ButtonBase>
            <ButtonBase
              id={glass.description4}
              value={description}
              onClick={event => onSelect(event)}
            >
              {glass.description4}
            </ButtonBase>
            <ButtonBase
              id={glass.description5}
              value={description}
              onClick={event => onSelect(event)}
            >
              {glass.description5}
            </ButtonBase>
            <ButtonBase
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
</div>;
