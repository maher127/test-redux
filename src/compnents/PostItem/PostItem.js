import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

function PostItem({ post, userName }) {
  const classes = useStyles();
  const user = userName[0];
  console.log(user);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h4" component="h2">
          <strong>User name : {user.name}</strong>
        </Typography>
        <Typography variant="h5" component="h2">
          <strong>Title :</strong> {post.title}
        </Typography>
        <Typography variant="h5" component="h2">
          <strong>Description :</strong> {post.body}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/comments/${post.id}/${post.userId}`}>See Comments</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default PostItem;
