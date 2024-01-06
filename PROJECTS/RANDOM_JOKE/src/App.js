import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    randomJoke: "",
    isLoading: false,
  };

  componentDidMount() {
    this.getRandomJoke();
  }

  getRandomJoke = async () => {
    this.setState({ isLoading: true });

    const url =
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";

    try {
      const response = await fetch(url);
      const jsonData = await response.json();

      const joke = jsonData.joke;

      this.setState({ isLoading: false, randomJoke: joke });
    } catch (error) {
      console.error("Error fetching joke:", error);
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { randomJoke, isLoading } = this.state;

    return (
      <div className="bg-container">
        <h1>Random Jokes Page</h1>
        <img
          src="https://res.cloudinary.com/saiuttej/image/upload/v1685211242/Insta%20Share%20Project%20Assets/Smiley_face-bro_umpb2p.png"
          alt="joke"
        />

        {isLoading ? (
          <div className="loader" id="spinner"></div>
        ) : (
          <p className="joke-text">{randomJoke}</p>
        )}

        <button type="button" id="randomJokeBtn" onClick={this.getRandomJoke}>
          New Joke
        </button>
      </div>
    );
  }
}

export default App;
