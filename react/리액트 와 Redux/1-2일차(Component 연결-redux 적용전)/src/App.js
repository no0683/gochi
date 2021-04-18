import { Component } from "react";
import "./styles.css";
import AddNumberRoot from "./Components/AddNumberRoot";
import DisplayNumberRoot from "./Components/DisplayNumberRoot";

// 상위 컴포넌트에서 하위 컴포넌트로 값을 보낼때는 props로 연결
// 하위 컴포넌트에서 상위 컴포넌트로 값을 보낼때는 function으로 연결
// Redux도입하지않고 만약 부모,자식간의 컴포넌트 depth가 많다면.. 컴포넌트간의 연결관계가 복잡해진다

export default class App extends Component {
  state = {
    number: 0
  };
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot
          onClick={function (size) {
            this.setState({
              number: this.state.number + size
            });
          }.bind(this)}
        ></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
      </div>
    );
  }
}
