import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ButtonBase from "@material-ui/core/ButtonBase";

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
  ButtonBase: {
    backgroundColor: red[500]
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
  avatar: {
    backgroundColor: red[500]
  },
  lister: {
    listStyleType: "none"
  }
}));

const MobileBlocks = props => {
  const handleSelect = props.handleSelect;
  const onSelect = props.onSelect;
  const onClick = props.onClick;

  const grapes = "grapes";
  const year = "year";
  const place = "place";
  const area = "area";
  const country = "country";
  const appellation = "appellation";
  const grape = "grape";
  const description = "description";
  const price = "price";
  const mise = "mise";
  let funfact;
  const onClear = props.onClear;

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
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
    </div>
  );
};

export default MobileBlocks;
