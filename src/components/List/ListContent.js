import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Chip from "@material-ui/core/Chip";
import Star from "@material-ui/icons/StarRate";
import Avatar from "@material-ui/core/Avatar";

const ListContent = props => {
  return (
    <ListItemContents alignItems="flex-start" key={props.id}>
      <ListItemAvatar>
        <Avatar alt="Test" />
      </ListItemAvatar>
      <ListItemText
        primary=<Link to={`question/${props.id}`}>
          <Typography component={"span"} color="textPrimary">
            <ContentTypography>{props.questions_title}</ContentTypography>
          </Typography>
        </Link>
        secondary={
          <React.Fragment>
            <Typography component={"span"} color="textPrimary">
              <ContentTypography> {props.author ? props.author : "guest"}</ContentTypography>
            </Typography>
            <Chip label={<ContentTypography>{props.tag}</ContentTypography>} />
            <Tag label={<ContentTypography>{props.level}</ContentTypography>} icon=<Star /> />
          </React.Fragment>
        }
      />
    </ListItemContents>
  );
};

const ListItemContents = withStyles({
  root: {
    borderBottom: "solid 1px #ADADAD"
  }
})(ListItem);

const Tag = withStyles({
  root: {
    marginLeft: "5px"
  }
})(Chip);

const ContentTypography = withStyles({
  root: {
    fontWeight: 800
  }
})(Typography);
export default ListContent;
