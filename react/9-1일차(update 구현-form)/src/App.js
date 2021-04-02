import React, { Component } from "react";
import Header from "./conponents/Header";
import Nav from "./conponents/Nav";
import ReadContent from "./conponents/ReadContent";
import CreateContent from "./conponents/CreateContent";
import UpdateContent from "./conponents/UpdateContent";
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
  getReadContent() {
    // 중복되는 반복문을 함수로 저장후 data값을 리턴
    var i = 0;
    while (i < this.state.contents.length) {
      var data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }
  getContent() {
    // 렌더 함수안의 내용을 밖으로 빼내어 함수로 저장후 _article값을 리턴
    var _title,
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    } else if (this.state.mode === "read") {
      var _content = this.getReadContent();
      _article = (
        <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      );
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function (_title, _desc) {
            this.max_contents_id = this.max_contents_id + 1;
            var _contents = this.state.contents.concat({
              // push는 원본을 바꾸고 concat은 원본을 바꾸지 아니함
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
    } else if (this.state.mode === "update") {
      _content = this.getReadContent();
      _article = (
        <UpdateContent
          data={_content}
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
        ></UpdateContent>
      );
    }
    return _article;
  }
  render() {
    console.log("app render");
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
        {this.getContent()}
      </div>
    );
  }
}

export default App;
