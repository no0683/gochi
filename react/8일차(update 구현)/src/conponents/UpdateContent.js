import React, { Component } from "react";

class UpdateContent extends Component {
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

export default UpdateContent;
