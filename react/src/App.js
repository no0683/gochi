import { Component } from "react";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Gochi
          title="Hello CodeSandbox"
          desc="Start editing to see some magic happen!"
        ></Gochi>
      </div>
    );
  }
}

class Gochi extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.desc}</h2>
      </div>
    );
  }
}

export default App;
