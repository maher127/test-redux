import React from "react";
import "./userItem.css";
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

const UserItem = ({ user }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Name : {user.name}
        </Typography>
        <Typography variant="h5" component="h2">
          Username : {user.username}
        </Typography>
        <Typography variant="h5" component="h2">
          Website : {user.website}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link to={`/posts/${user.id}`}>See Posts</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserItem;
