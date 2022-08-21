import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      UserId: "",
      Title: "",
      Body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <form>
          <div>
            <input
              type="text"
              name="UserId"
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="Title"
              onChange={this.changeHandler}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="Body"
              onChange={this.changeHandler}
            ></input>
          </div>

          <button type="submit" onClick={this.submitHandler}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
