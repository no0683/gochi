import { Component } from "react";

export default class AddNumber extends Component {
  render() {
    return (
      <div>
        <h1>AddNumber</h1>
        <input type="button" value="+"></input>
        <input type="text" value="0"></input>
      </div>
    );
  }
}
