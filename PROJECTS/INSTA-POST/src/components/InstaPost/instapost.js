import { Component } from "react";
import PostItem from "../Postitem/postitem";
import { FaSearch } from "react-icons/fa";
import Loader from "react-loader-spinner";
import "./instapost.css";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "INPROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

class InstaPosts extends Component {
  state = {
    allPosts: [],
    postResults: [],
    searchInput: "",
    apiStatus: apiStatusConstants.initial,
  };

  onSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  onSearchButtonClicked = () => {
    const { allPosts, searchInput } = this.state;

    let filteredPosts = allPosts.filter((eachPost) => {
      let eachUser = eachPost.user.toLowerCase();
      let searchUser = searchInput.toLowerCase();
      if (eachUser.includes(searchUser)) {
        return true;
      }
      return false;
    });

    // console.log(filteredPosts);

    this.setState({ postResults: filteredPosts });
  };

  shouldComponentUpdate(nextProps, nextState) {
    const searchInputChanged = this.state.searchInput !== nextState.searchInput;
    const allPostsChanged =
      this.state.postResults.length !== nextState.postResults.length;

    console.log(searchInputChanged, allPostsChanged);
    return searchInputChanged || allPostsChanged;
  }

  componentDidMount() {
    this.getInstaPosts();
  }

  getInstaPosts = async () => {
    this.setState({ allPostsApiStatus: apiStatusConstants.inProgress });

    const url =
      "https://pixabay.com/api/?key=37174385-5b3a05820e1a9a74a0ee55daa&image_type=photo&pretty=true";

    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    if (response.ok === true) {
      const data = await response.json();

      this.setState({
        allPosts: data.hits,
        postResults: data.hits,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstants.failure });
    }
  };

  renderInstaPostsSuccessView = () => {
    const { postResults } = this.state;
    // console.log(postResults);
    // console.log("rendered");
    return (
      <ul>
        {postResults.map((eachPost) => (
          <PostItem postDetails={eachPost} key={eachPost.id} />
        ))}
      </ul>
    );
  };

  renderInstaPostsLoaderView = () => (
    <div className="loader-container">
      <Loader type="TailSpin" height="50" width="50" color="#4094EF" />
    </div>
  );

  onTryAgain = () => this.getInstaPosts();

  renderInstaPostsFailureView = () => (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/saiuttej/image/upload/v1686398773/Insta%20Share%20Project%20Assets/failure_view_w1rby9.png"
        alt="failure view"
        className="failure-alert-icon"
      />
      <p className="failure-desc">Something went wrong. Please try again</p>
      <button
        type="button"
        className="failure-retry-button"
        onClick={this.onTryAgain}
      >
        Try again
      </button>
    </div>
  );

  renderInstaPostsSwitch = () => {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderInstaPostsSuccessView();
      case apiStatusConstants.inProgress:
        return this.renderInstaPostsLoaderView();
      case apiStatusConstants.failure:
        return this.renderInstaPostsFailureView();
      default:
        return null;
    }
  };

  render() {
    const { searchInput } = this.state;

    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="search-container">
            <input
              type="search"
              placeholder="Search User"
              className="search-input-field"
              onChange={this.onSearchInput}
              value={searchInput}
            />

            <div className="search-icon-container">
              <button
                type="button"
                className="search-icon-button"
                onClick={this.onSearchButtonClicked}
              >
                <FaSearch className="search-icon" />
              </button>
            </div>
          </div>
          {this.renderInstaPostsSwitch()}
        </div>
      </div>
    );
  }
}

export default InstaPosts;
