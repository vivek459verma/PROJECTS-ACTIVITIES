import React from "react";
import { FaBookmark, FaShareAlt } from "react-icons/fa";
import "./postitem.css";

class PostItem extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <li className="post-item">
        <div className="info-container">
          <div>
            <h2 className="title">{post.name.common}</h2>
            <p className="tags">Official name: {post.name.official}</p>
            <p className="tags">Captial: {post.capital}</p>
            <p className="tags">Region: {post.region}</p>
          </div>
          <img className="flag" src={post.flags.png} alt="flag" />
        </div>
        <div className="icons">
          <FaBookmark />
          <FaShareAlt />
        </div>
      </li>
    );
  }
}

export default PostItem;
