import { BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { Component } from "react";
import "./postitem.css";

class PostItem extends Component {
  state = { isLiked: false };

  onToggleLikes = () => {
    this.setState(
      (prevState) => ({ isLiked: !prevState.isLiked }),
      this.updateLikes
    );
  };

  render() {
    const { isLiked } = this.state;
    const { postDetails } = this.props;

    return (
      <li className="post-list-item">
        <div className="post-profile-container">
          <img
            src={postDetails.userImageURL}
            alt="post author profile"
            className="post-profile-image"
          />
          <p className="post-profile-username">{postDetails.user}</p>
        </div>

        <img
          src={postDetails.largeImageURL}
          alt="post"
          className="post-image"
        />

        <div className="post-details-container">
          <div className="actions-container">
            <button
              type="button"
              className="action-button"
              onClick={this.onToggleLikes}
            >
              {isLiked ? (
                <FcLike className="liked-icon" />
              ) : (
                <BsHeart className="action-icon like-icon" />
              )}
            </button>
            <button type="button" className="action-button">
              <FaRegComment className="action-icon" />
            </button>
            <button type="button" className="action-button">
              <BiShareAlt className="action-icon" />
            </button>
          </div>
          <p className="post-likes-count">
            {isLiked
              ? `${postDetails.likes + 1} likes`
              : `${postDetails.likes} likes`}
          </p>
        </div>
      </li>
    );
  }
}

export default PostItem;
