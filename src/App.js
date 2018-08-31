import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Grid, Image, Container, Header } from "semantic-ui-react";
import zupage from "zupage";

class App extends Component {
  state = { post: { body: "", images: [], page: {}, title: "" } };

  async componentDidMount() {
    // const post = await zupage.getPost('4122d340-7bdb-4996-8400-f3d582d84280');
    const post = await zupage.getCurrentPost();
    this.setState({ post });
    console.log("Response!", post);
  }

  returnImage = () => {};

  returnGrid = () => {
    const { images } = this.state.post;
    const numberOfRows = Math.ceil(images.length / 4);
    console.log(numberOfRows);

    return <Grid />;
  };

  render() {
    const { title, body, images } = this.state.post;
    return (
      <Container>
        <br />
        <Header textAlign="center" as="h1">
          {title}
        </Header>
        <Container textAlign="center"> {body} </Container>
        <br />
        <br />
        <Grid>
          <Grid.Row columns={4} style={{ margin: 0, padding: 0 }}>
            <Grid.Column width={4} className="GridImage wrapper">
              <Image
                src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/1/1b/Red-fox-06.jpg/revision/latest?cb=20170106034447"
                className="image"
              />
              <div className="overlay">
                <div className="text">Hello World</div>
              </div>
            </Grid.Column>
            <Grid.Column width={4} className="GridImage wrapper">
              <Image
                src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/1/1b/Red-fox-06.jpg/revision/latest?cb=20170106034447"
                className="image"
              />
              <div className="overlay">
                <div className="text">Hello World</div>
              </div>
            </Grid.Column>
            <Grid.Column width={4} className="GridImage wrapper">
              <Image
                src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/1/1b/Red-fox-06.jpg/revision/latest?cb=20170106034447"
                className="image"
              />
              <div className="overlay">
                <div className="text">Hello World</div>
              </div>
            </Grid.Column>
            <Grid.Column width={4} className="GridImage wrapper">
              <Image
                src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/1/1b/Red-fox-06.jpg/revision/latest?cb=20170106034447"
                className="image"
              />
              <div className="overlay">
                <div className="text">Hello World</div>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={4} centered style={{ margin: 0, padding: 0 }}>
            <Grid.Column width={4} className="GridImage wrapper">
              <Image
                src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/1/1b/Red-fox-06.jpg/revision/latest?cb=20170106034447"
                className="image"
              />
              <div className="overlay">
                <div className="text">Hello World</div>
              </div>
            </Grid.Column>
            <Grid.Column width={4} className="GridImage wrapper">
              <Image
                src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/1/1b/Red-fox-06.jpg/revision/latest?cb=20170106034447"
                className="image"
              />
              <div className="overlay">
                <div className="text">Hello World</div>
              </div>
            </Grid.Column>
            <Grid.Column width={4} className="GridImage wrapper">
              <Image
                src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/1/1b/Red-fox-06.jpg/revision/latest?cb=20170106034447"
                className="image"
              />
              <div className="overlay">
                <div className="text">Hello World</div>
              </div>
            </Grid.Column>
            <Grid.Column width={4} className="GridImage wrapper">
              <Image
                src="https://vignette.wikia.nocookie.net/animal-jam-clans-1/images/1/1b/Red-fox-06.jpg/revision/latest?cb=20170106034447"
                className="image"
              />
              <div className="overlay">
                <div className="text">Hello World</div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
