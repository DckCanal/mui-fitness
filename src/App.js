import React, { Component } from "react";
import { Typography, TextField, Paper, Button } from "@material-ui/core";
export default class App extends Component {
  state = {
    exercises: [],
    title: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  render() {
    const { title } = this.state;
    return (
      <Paper>
        <Typography variant="h4" align="center" gutterBottom>
          Exercises
        </Typography>
        <form>
          <TextField
            name="title"
            label="exercise"
            value={title}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button type="submit" color="primary" variant="raised">
            Create
          </Button>
          <Button type="submit" color="primary" variant="raised">
            Create
          </Button>
          <Button>Hello</Button>
        </form>
      </Paper>
    );
  }
}
