import React, { Component } from "react";
import {
  Typography,
  TextField,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import { Delete } from "@material-ui/icons";
import { orange } from "@material-ui/core/colors";
import { findByLabelText } from "@testing-library/dom";

const styles = {
  root: {
    padding: 20,
    margin: 20,
    maxWidth: 400,
  },
  form: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-evenly",
  },
};

export default withStyles(styles)(
  class App extends Component {
    state = {
      exercises: [
        {
          title: "squat",
          id: 1,
        },
        {
          title: "biceps",
          id: 2,
        },
      ],
      title: "",
    };
    handleChange = ({ target: { name, value } }) => {
      this.setState({ [name]: value });
    };
    handleCreate = (ev) => {
      ev.preventDefault();
      if (this.state.title) {
        this.setState(({ exercises, title }) => ({
          exercises: [...exercises, { title, id: Date.now() }],
          title: "",
        }));
      }
    };
    handleDelete = (id) => {
      this.setState(({ exercises }) => ({
        exercises: exercises.filter((ex) => ex.id !== id),
      }));
    };
    render() {
      const { exercises, title } = this.state;
      const { classes } = this.props;
      return (
        <Paper className={classes.root}>
          <Typography variant="h4" align="center" gutterBottom>
            Exercises
          </Typography>
          <form onSubmit={this.handleCreate} className={classes.form}>
            <TextField
              name="title"
              label="exercise"
              value={title}
              onChange={this.handleChange}
              margin="normal"
            />
            <Button type="submit" color="primary" variant="contained">
              Create
            </Button>
          </form>
          <List>
            {exercises.map(({ title, id }) => (
              <ListItem key={id}>
                <ListItemText primary={title} />
                <ListItemSecondaryAction>
                  <IconButton
                    color="primary"
                    onClick={() => this.handleDelete(id)}
                  >
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Paper>
      );
    }
  }
);
