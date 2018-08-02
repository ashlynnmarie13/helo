import React, { Component } from "react";
import axios from "axios";

export default class Post extends Component {
  state = {
    title: "",
    image: "",
    content: "",
    username: "",
    profilepic: ""
  };

  componentDidMount() {
    axios.get(`/api/posts/${this.props.match.params.postid}`).then(post => {
      const { description, image, profile_img, title, username } = post.data[0];

      this.setState({
        content: description,
        image,
        profilepic: profile_img,
        title,
        username
      });
    });
  }
  render() {
    const { title, image, content, username, profilepic } = this.state;

    return (
      <div>
        <p>{title}</p>
        <img src={image} alt="image" />
        <p>{content}</p>
        <p>{username}</p>
        <img src={profilepic} alt="profileImg" />
      </div>
    );
  }
}
