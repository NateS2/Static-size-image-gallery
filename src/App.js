import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid, Image } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row columns={4} style={{ margin: 0, padding: 0 }}>
          <Grid.Column width={4} className="GridImage container">
            <Image
              src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/1/1b/Red-fox-06.jpg/revision/latest?cb=20170106034447"
              className="image"
            />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </Grid.Column>
          <Grid.Column width={4} className="GridImage container">
            <Image
              src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/1/1b/Red-fox-06.jpg/revision/latest?cb=20170106034447"
              className="image"
            />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </Grid.Column>
          <Grid.Column width={4} className="GridImage container">
            <Image
              src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/1/1b/Red-fox-06.jpg/revision/latest?cb=20170106034447"
              className="image"
            />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </Grid.Column>
          <Grid.Column width={4} className="GridImage container">
            <Image
              src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/1/1b/Red-fox-06.jpg/revision/latest?cb=20170106034447"
              className="image"
            />
            <div className="overlay">
              <div className="text">Hello World</div>
            </div>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3} centered style={{ margin: 0, padding: 0 }}>
          <Grid.Column width={4} className="GridImage">
            <Image src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/1/1b/Red-fox-06.jpg/revision/latest?cb=20170106034447" />
          </Grid.Column>
          <Grid.Column width={4} className="GridImage">
            <Image src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/1/1b/Red-fox-06.jpg/revision/latest?cb=20170106034447" />
          </Grid.Column>
          <Grid.Column width={4} className="GridImage">
            <Image src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/1/1b/Red-fox-06.jpg/revision/latest?cb=20170106034447" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
