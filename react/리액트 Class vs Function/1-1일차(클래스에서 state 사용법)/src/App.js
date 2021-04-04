import React, { Component } from "react";
import "./styles.css";

function App() {
  return (
    <div className="App container">
      <h1>hello world</h1>
      <FuncComp InitNumber={2}></FuncComp>
      <ClassComp InitNumber={2}></ClassComp>
    </div>
  );
}

function FuncComp(props) {
  return (
    <div className="container">
      <h2>Function Style Component</h2>
      <p>Number: {props.InitNumber}</p>
    </div>
  );
}

class ClassComp extends Component {
  state = {
    Number: this.props.InitNumber
  };
  render() {
    return (
      <div className="container">
        <h2>Class Style Component</h2>
        <p>Number: {this.state.Number}</p>
        <input
          type="button"
          value="Random"
          onClick={function () {
            this.setState({
              Number: Math.random()
            });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

export default App;
