import React, { Component } from "react";
import Header from "./conponents/Header";
import Nav from "./conponents/Nav";
import Article from "./conponents/Article";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: { title: "WEB", desc: "world wide web!" }
    };
  }
  render() {
    return (
      <div className="App">
        <Header
          title={this.state.header.title}
          desc={this.state.header.desc}
        ></Header>
        <Nav></Nav>
        <Article
          title="HTML"
          desc="HTML is HyperText Markup Language."
        ></Article>
      </div>
    );
  }
}

export default App;
