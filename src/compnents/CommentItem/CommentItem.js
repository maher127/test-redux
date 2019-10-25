import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 500,
    maxWidth: 600,
    margin: "10px",
    textAlign: "left"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14,
    left: "0"
  },
  pos: {
    marginBottom: 12
  }
});

const CommentItem = ({ comment }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4" component="h2">
          <strong>Name : {comment.name}</strong>
        </Typography>
        <Typography variant="h5" component="h2">
          <strong>E-mail :</strong> {comment.email}
        </Typography>
        <Typography variant="h5" component="h2">
          <strong>Body :</strong> {comment.body}
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommentItem;
