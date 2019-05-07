import React from "react";

class Post extends React.Component {
  render() {
    // let post = this.props.post;
    return (
      <div className="post">
        <h3>{this.props.post.user_id} </h3>
        <h3>{this.props.post.id} </h3>
        <h2>{this.props.post.title} </h2>
        <p> {this.props.post.description} </p>
      </div>
    );
  }
}
export default Post;