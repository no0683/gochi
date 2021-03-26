import React, { Component } from "react";
import Header from "./conponents/Header";
import Nav from "./conponents/Nav";
import Article from "./conponents/Article";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: { title: "WEB", desc: "world wide web!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JAVASCRIPT", desc: "JAVASCRIPT is for interactive" }
      ],
      article: { title: "HTML", desc: "HTML is HyperText Markup Language." }
    };
  }
  render() {
    return (
      <div className="App">
        <Header
          title={this.state.header.title}
          desc={this.state.header.desc}
        ></Header>
        <Nav data={this.state.contents}></Nav>
        <Article
          title={this.state.article.title}
          desc={this.state.article.desc}
        ></Article>
      </div>
    );
  }
}

export default App;
