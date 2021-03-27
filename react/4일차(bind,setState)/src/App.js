import React, { Component } from "react";
import Header from "./conponents/Header";
import Nav from "./conponents/Nav";
import Article from "./conponents/Article";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      welcome: { title: "welcome", desc: "Hello, React!!" },
      header: { title: "WEB", desc: "world wide web!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JAVASCRIPT", desc: "JAVASCRIPT is for interactive" }
      ]
    };
  }
  render() {
    var _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Header
          title={this.state.header.title}
          desc={this.state.header.desc}
        ></Header> */}
        <header>
          <h1>
            <a
              href="#"
              onClick={function (e) {
                e.preventDefault();
                // this.state.mode = "welcome";
                this.setState({
                  mode: "welcome"
                });
              }.bind(this)}
            >
              {this.state.header.title}
            </a>
          </h1>
          <p>{this.state.header.desc}</p>
        </header>
        <Nav data={this.state.contents}></Nav>
        <Article title={_title} desc={_desc}></Article>
      </div>
    );
  }
}

export default App;
