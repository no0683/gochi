import React, { Component } from "react";
import Header from "./conponents/Header";
import Nav from "./conponents/Nav";
import ReadContent from "./conponents/ReadContent";
import CreateContent from "./conponents/CreateContent";
import Control from "./conponents/Control";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_contents_id = 3;
    this.state = {
      selected_content_id: 1,
      mode: "create",
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
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
          break;
        }
        i = i + 1;
      }
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_contents_id = this.max_contents_id + 1;
            var _contents = this.state.contents.concat({
              id: this.max_contents_id,
              title: _title,
              desc: _desc
            });
            this.setState({
              contents: _contents
            });
          }.bind(this)}
        ></CreateContent>
      );
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
        <Control
          MyEvent={function (_mode) {
            this.setState({
              mode: _mode
            });
          }.bind(this)}
        ></Control>
        {_article}
      </div>
    );
  }
}

export default App;
