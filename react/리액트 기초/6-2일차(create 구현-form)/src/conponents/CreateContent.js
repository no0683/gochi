import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h1>Create</h1>
        <form
          action=""
          method="post"
          onSubmit={function (e) {
            e.preventDefault();

            alert("안녕!");
          }.bind(this)}
        >
          <p>
            <input type="text" placeholder="title" name="title"></input>
          </p>
          <p>
            <textarea name="desc" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;
