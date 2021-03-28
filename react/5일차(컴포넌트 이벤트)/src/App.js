import React, { Component } from "react";
import Header from "./conponents/Header";
import Nav from "./conponents/Nav";
import Article from "./conponents/Article";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_content_id: 1,
      mode: "read",
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
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Header
          title={this.state.header.title}
          desc={this.state.header.desc}
          MyEvent={function () {
            this.setState({
              mode: "welcome"
            });
          }.bind(this)}
        ></Header>
        <Nav
          data={this.state.contents}
          MyEvent={function (id) {
            this.setState({
              mode: "read",
              selected_content_id: parseInt(id)
            });
          }.bind(this)}
        ></Nav>
        <Article title={_title} desc={_desc}></Article>
      </div>
    );
  }
}

export default App;
