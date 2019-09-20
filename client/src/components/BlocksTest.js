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

const BlocksTest = props => {
  return (
    <div>
      <Card className="mdc-card demo-card demo-basic-with-header">
        <div className="demo-card__primary">
          <Headline6 className="demo-card__title">
            Our Changing Planet
          </Headline6>
          <Subtitle2 className="demo-card__subtitle">by Kurt Wagner</Subtitle2>
        </div>
        <CardPrimaryContent className="demo-card__primary-action">
          <CardMedia wide imageUrl={image} className="demo-card__media" />
          <Body2 className="demo-card__secondary">
            Visit ten places on our planet that are undergoing the biggest
            changes today.
          </Body2>
        </CardPrimaryContent>
        <CardActions>
          <CardActionButtons>
            <Button>Read</Button>
            <Button>Bookmark</Button>
          </CardActionButtons>
          <CardActionIcons>
            <IconButton>
              <MaterialIcon icon="favorite_border" />
            </IconButton>
            <IconButton>
              <MaterialIcon icon="share" />
            </IconButton>
            <IconButton>
              <MaterialIcon icon="more_vert" />
            </IconButton>
          </CardActionIcons>
        </CardActions>
      </Card>
    </div>
  );
};

export default BlocksTest;
