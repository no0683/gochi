import React, { Component } from "react";

class Control extends Component {
  render() {
    console.log("control render");
    return (
      <ul>
        <li>
          <a
            href="#"
            onClick={function (e) {
              e.preventDefault();
              this.props.MyEvent("create");
            }.bind(this)}
          >
            create
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={function (e) {
              e.preventDefault();
              this.props.MyEvent("update");
            }.bind(this)}
          >
            update
          </a>
        </li>
        <li>
          <input
            type="button"
            value="delete"
            onClick={function (e) {
              e.preventDefault();
              this.props.MyEvent("delete");
            }.bind(this)}
          ></input>
        </li>
      </ul>
    );
  }
}

export default Control;
