import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        this.setState({
          posts: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { posts } = this.state;
    return (
      <div> List of Posts 
        {posts.map((posts) => 
          <h1 key={posts.id}>
            {posts.title} 
          </h1>
        )}
      </div>
    );
  }
}

export default PostList;
