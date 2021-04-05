import React, { Component, useState, useEffect } from "react";
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

  var funcStyle = "color : blue";

  // useEffect는 클래스 라이프사이클 단계에서 componentDidMount & componentDidUpdate와 동등한 역할을 한다.
  useEffect(function () {
    console.log(
      "%cuseEffect : render (componentDidMount & componentDidUpdate)",
      funcStyle
    );
    // useEffect내부의 return function은 클래스 라이프사이클 단계에서 componentWillUnmount와 동등한 역할을 한다.
    return function () {
      console.log(
        "%cuseEffect return : render (componentWillUnmount)",
        funcStyle
      );
    };
  });

  console.log("%cfunc : render", funcStyle);
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

var classStyle = "color : red";

class ClassComp extends Component {
  state = {
    Number: this.props.InitNumber,
    date: new Date().toString()
  };

  componentWillMount() {
    console.log("%ccomponentWillMount : render", classStyle);
  }
  componentDidMount() {
    console.log("%ccomponentDidMount : render", classStyle);
  }
  shouldComponentUpdate() {
    console.log("%cshouldComponentUpdate : render", classStyle);
    return true;
  }
  componentWillUpdate() {
    console.log("%ccomponentWillUpdate : render", classStyle);
  }
  componentDidUpdate() {
    console.log("%ccomponentDidUpdate : render", classStyle);
  }

  render() {
    console.log("%cclass : render", classStyle);
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
