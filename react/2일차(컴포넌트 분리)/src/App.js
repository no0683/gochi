import React, { Component } from "react";
import Header from "./conponents/Header";
import Nav from "./conponents/Nav";
import Article from "./conponents/Article";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="WEB" desc="world wide web!"></Header>
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
