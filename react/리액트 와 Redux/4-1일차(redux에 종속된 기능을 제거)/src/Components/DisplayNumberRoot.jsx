import { Component } from "react";
import DisplayNumber from "./DisplayNumber";

export default class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>AddNumberRoot</h1>
        <DisplayNumber></DisplayNumber>
      </div>
    );
  }
}