import React, { Component, useState } from "react";
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
  // useState를 이용한 state기능 첫번째 방법
  var numberState = useState(props.InitNumber);
  var number = numberState[0]; // 첫번째 인자는 현재의 상태
  var setNumber = numberState[1]; // 두번째 인자는 상태를 변경하는 함수

  // var dateState = useState(new Date().toString());
  // var date = dateState[0];
  // var setDate = dateState[1];

  // useState를 이용한 state기능 두번째 방법
  var [date, setDate] = useState(new Date().toString());
  return (
    <div className="container">
      <h2>Function Style Component</h2>
      <p>Number: {number}</p>
      <p>Date: {date}</p>
      <input
        type="button"
        value="Random"
        onClick={function () {
          setNumber(Math.random());
        }}
      ></input>
      <input
        type="button"
        value="Date"
        onClick={function () {
          setDate(new Date().toString());
        }}
      ></input>
    </div>
  );
}

class ClassComp extends Component {
  state = {
    Number: this.props.InitNumber,
    date: new Date().toString()
  };
  render() {
    return (
      <div className="container">
        <h2>Class Style Component</h2>
        <p>Number: {this.state.Number}</p>
        <p>Date: {this.state.date}</p>
        <input
          type="button"
          value="Random"
          onClick={function () {
            this.setState({
              Number: Math.random()
            });
          }.bind(this)}
        ></input>
        <input
          type="button"
          value="Date"
          onClick={function () {
            this.setState({
              date: new Date().toString()
            });
          }.bind(this)}
        ></input>
      </div>
    );
  }
}

export default App;
