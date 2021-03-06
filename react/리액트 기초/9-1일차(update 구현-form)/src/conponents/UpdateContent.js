import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.data.title,
      desc: this.props.data.desc
    };
    this.InputFormHandler = this.InputFormHandler.bind(this);
  }
  InputFormHandler(e) {
    this.setState({
      [e.target.name]: e.target.value //[e~] 자바스크립트 최신문법
    });
  }
  render() {
    console.log(this.props.data);
    console.log("UpdateContent render");
    return (
      <article>
        <h1>Update</h1>
        <form
          action=""
          method="post"
          onSubmit={function (e) {
            e.preventDefault();

            this.props.onSubmit(e.target.title.value, e.target.desc.value);
          }.bind(this)}
        >
          <p>
            <input
              type="text"
              placeholder="title"
              name="title"
              value={this.state.title}
              onChange={this.InputFormHandler}
            ></input>
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="description"
              value={this.state.desc}
              onChange={this.InputFormHandler}
            ></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
