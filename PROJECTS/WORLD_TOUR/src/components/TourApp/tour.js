import React from "react";
import TailSpin from "react-loader-spinner";
import Navbar from "../Navbar/navbar";
import "./tour.css";
import PostItem from "../PostItem/postitem";

class TourApp extends React.Component {
  state = {
    isLoading: true,
    allPosts: [],
  };

  componentDidMount() {
    this.getNewsPosts();
  }

  getNewsPosts = async () => {
    const url = "https://restcountries.com/v3.1/all";

    const response = await fetch(url);
    console.log(response);

    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
      this.setState({ allPosts: data, isLoading: false });
    } else {
      console.warn("API failed");
    }
  };

  renderSuccessView() {
    const { allPosts } = this.state;
    return (
      <ul className="blogs-list">
        {allPosts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </ul>
    );
  }

  renderLoadingView() {
    return (
      <div className="loader">
        <TailSpin color="#00BFFF" height={50} width={50} />
      </div>
    );
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>
        <Navbar />
        {isLoading ? this.renderLoadingView() : this.renderSuccessView()}
      </div>
    );
  }
}

export default TourApp;
