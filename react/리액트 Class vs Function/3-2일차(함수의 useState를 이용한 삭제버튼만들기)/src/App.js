import React, { Component, useState, useEffect } from "react";
import "./styles.css";

function App() {
  var [funcShow, setFuncShow] = useState(true);
  var [classShow, setClassShow] = useState(true);
  return (
    <div className="App container">
      <h1>hello world</h1>
      <input
        type="button"
        value="remove func"
        onClick={function () {
          setFuncShow(false);
        }}
      ></input>
      <input
        type="button"
        value="remove class"
        onClick={function () {
          setClassShow(false);
        }}
      ></input>
      {funcShow ? <FuncComp InitNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp InitNumber={2}></ClassComp> : null}
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
  useEffect(
    function () {
      console.log(
        "%cuseEffect : render (componentDidMount number & componentDidUpdate)",
        funcStyle
      );
      // useEffect내부의 return function은 클래스 라이프사이클 단계에서 componentWillUnmount와 동등한 역할을 한다.
      return function () {
        console.log(
          "%cuseEffect return : render (componentWillUnmount number)",
          funcStyle
        );
      };
    },
    [number]
    // useEffect함수 끝에 [조건]을 추가함으로서 추가한 조건의 값이 변할때만 렌더링
    // [] 빈 대괄호를 추가하면 컴포넌트가 실행될때 한번만 실행됨(컴포넌트가 소멸될때 return function 실행-클린업)
  );

  useEffect(
    function () {
      console.log(
        "%cuseEffect : render (componentDidMount date & componentDidUpdate)",
        funcStyle
      );
      return function () {
        console.log(
          "%cuseEffect return : render (componentWillUnmount date)",
          funcStyle
        );
      };
    },
    [date]
  );

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
    number: this.props.InitNumber,
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
  componentDidUpdate(prevProps, prevState) {
    // 이전의 값과 현재의 값을 비교함으로서 변경이있을경우에만 렌더링(클래스 스타일)
    if (prevState.number !== this.state.number) {
      console.log("%ccomponentDidUpdate number : render", classStyle);
    }
    if (prevState.date !== this.state.date) {
      console.log("%ccomponentDidUpdate date : render", classStyle);
    }
  }
  componentWillUnmount() {
    console.log("%ccomponentWillUnmount : render", classStyle);
  }

  render() {
    console.log("%cclass : render", classStyle);
    return (
      <div className="container">
        <h2>Class Style Component</h2>
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input
          type="button"
          value="Random"
          onClick={function () {
            this.setState({
              number: Math.random()
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
