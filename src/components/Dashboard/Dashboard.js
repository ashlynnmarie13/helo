import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  state = {
    search: "",
    checkbox: true,
    posts: []
  };

  //lifecycle hook
  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    axios
      .get(
        `/api/posts/${this.props.userid}/${this.state.checkbox}/?search=${
          this.state.search
        }`
      )
      .then(posts => this.setState({ posts: posts.data, search: "" }));
  }

  resetSearch = e => {
    this.setState({ search: e.target.value });
  };
  //GO OVER THIS
  render() {
    const posts = this.state.posts.map((posts, i) => {
      return (
        <Link to={`/post/${posts.postid}`} key={i}>
          <p>{posts.title}</p>
          <p>{posts.username}</p>
          <img src={posts.profile_img} alt="profileImg" />
        </Link>
      );
    });
    return (
      <div>
        <input
          value={this.state.search}
          onChange={event => this.inputHandler(event)}
          name="search"
          type="text"
        />
        <button>Search</button>
        <button>Reset</button>
        <input
          checked={this.state.checkbox}
          onChange={() =>
            this.setState({ checkbox: !this.state.checkbox }, () =>
              this.getPosts()
            )
          }
          id="checkbox"
          type="checkbox"
          checked={this.state.checkbox}
        />
        My Posts
        {posts}
      </div>
    );
  }
}

export default connect(state => state)(Dashboard);
