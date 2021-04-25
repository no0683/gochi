import { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected_content_id: 1,
      mode: "welcome",
      welcome: { title: "welcome", desc: "오늘의 할일을 관리해보세요!" },
      contents: [
        { id: 1, title: "공부하기", desc: "리액트 공부하기" },
        { id: 2, title: "청소하기", desc: "설거지,쓰레기 버리기" },
        { id: 3, title: "게임하기", desc: "로스트아크 하기" }
      ]
    }
  }
  getReadContent(){
    for(var i = 0; i < this.state.contents.length; i++){
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id){
        return data
      }
    }
  }

  getContent(){
    var _title,
    _desc,
    _article = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <Article title={_title} desc={_desc}></Article>
    } else if(this.state.mode === "read"){
      var _content = this.getReadContent();
      _article = <Article title={_content.title} desc={_content.desc}></Article>
    }
    return _article;
  }
  render(){
    return (
      <div id="app">
        <Header></Header>
        <Nav data={this.state.contents} MyEvent={function(id){
          this.setState({
            mode: "read",
            selected_content_id: parseInt(id)
          });
        }.bind(this)}></Nav>
        {this.getContent()}
      </div>
    );
  }
}