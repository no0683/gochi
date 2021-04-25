# TODO 앱 만들기 (VER.2021/04/26)

<img src="/img/todo_app_20210426.png" width="40%" height="30%" alt="todo_app"></img>

* 각 컴포넌트를 별도의 폴더로 분리하고 최상위컴포넌트에 연결
* state,props,반복문을 사용하여 CRUD중 Read기능을 구현

[App.js]
```javascript
import { Component } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected_content_id: 1, // 선택된 컨텐츠의 id와 if문과 연계하기위해 만들어줌
      mode: "welcome", // 모드에따라서 Article에 어떤내용을 보여줄지 결정
      welcome: { title: "welcome", desc: "오늘의 할일을 관리해보세요!" }, // 앱을 실행시켰을때 최초 Article에 나타나는 내용
      contents: [ // Nav의 데이터를 배열로 저장(반복문,state,props를 통해 똑같은 화면 구현)
        { id: 1, title: "공부하기", desc: "리액트 공부하기" },
        { id: 2, title: "청소하기", desc: "설거지,쓰레기 버리기" },
        { id: 3, title: "게임하기", desc: "로스트아크 하기" }
      ]
    }
  }
  // 선택된 컨텐츠의 id값과 state의 selected_content_id값이 같다면 선택된 컨텐츠의 id값을 리턴하는 함수 생성
  // (하위 컴포넌트에서 이벤트 함수를 통해서 선택된 컨텐츠의 id값을 props(MyEvent)로 부모 컴포넌트에 전달하고 setState로 selected~id 값은 전달받은 id값과 같다고해주면 결국 두 값은 같게됨 )
  getReadContent(){
    for(var i = 0; i < this.state.contents.length; i++){
      var data = this.state.contents[i];
      if(data.id === this.state.selected_content_id){
        return data
      }
    }
  }

  // 모드값에따라서 article에 어떠한 데이터를 출력하는 기능의 함수생성
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
        {this.getContent()} // 기존 <Article>로 선언했던 부분을 mode값에따라서 유연하게 바뀔수있게 만들어뒀던 함수로 대체
      </div>
    );
  }
}
```

[Nav.jsx]
```javascript
import { Component } from 'react';

export default class Nav extends Component {
    render(){
        // 기존의 항목들을 반복문을 사용하여 구현
      var lists = [];
      var data = this.props.data;
      for(var i = 0; i < data.length; i++){
        lists.push(
          <li key={data[i].id}>
            <input type="checkbox"></input>
            <a>{data[i].title}</a>
            <span id="nav_del"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.538l-4.592-4.548 4.546-4.587-1.416-1.403-4.545 4.589-4.588-4.543-1.405 1.405 4.593 4.552-4.547 4.592 1.405 1.405 4.555-4.596 4.591 4.55 1.403-1.416z"/></svg></span>
            <span id="nav_upd"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M1.439 16.873l-1.439 7.127 7.128-1.437 16.873-16.872-5.69-5.69-16.872 16.872zm4.702 3.848l-3.582.724.721-3.584 2.861 2.86zm15.031-15.032l-13.617 13.618-2.86-2.861 10.825-10.826 2.846 2.846 1.414-1.414-2.846-2.846 1.377-1.377 2.861 2.86z"/></svg></span>
            <span id="nav_rd">
              <svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                data-id={data[i].id}
                onClick={function(e){
                  e.preventDefault();
                  this.props.MyEvent(e.target.dataset.id);
                }.bind(this)}
                >
                <path 
                  d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"
                  data-id={data[i].id}
                  onClick={function(e){
                    e.preventDefault();
                    this.props.MyEvent(e.target.dataset.id);
                  }.bind(this)}
                  />
              </svg>
            </span>
          </li>
        );
      }
      return (
        <div id="nav_wrap">
          <ul>
            {lists}
            <li>
              <span id="nav_pl"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg></span>
            </li>
          </ul>
        </div>
      );
    }
  }
```

* 에러사항: Read기능을 svg 코드에 적용했는데 이미지의 svg영역부분을 클릭하면 onClick이 잘 실행되는반면 path부분을 클릭하게되면 오류가발생..
이것을 감싸주는 span에 적용해봤지만 같은오류 발생, path코드에 똑같은 onClick 이벤트를 넣어주니 svg이미지의 어느부분을 클릭하더라도 실행이 잘됨,
하지만 불필요한 코드가 반복되어 효율성이 떨어짐

```javascript
[Nav.jsx의 Read기능을 담당하는 부분]
<span id="nav_rd">
    <svg
    xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
    data-id={data[i].id}
    onClick={function(e){
        e.preventDefault();
        this.props.MyEvent(e.target.dataset.id);
    }.bind(this)}
    >
    <path 
        d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"
        data-id={data[i].id}
        onClick={function(e){
        e.preventDefault();
        this.props.MyEvent(e.target.dataset.id);
        }.bind(this)}
        />
    </svg>
</span>
```