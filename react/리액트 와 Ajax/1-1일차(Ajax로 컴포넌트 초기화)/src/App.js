import { Component } from "react";

class Nav extends Component {
  state = {
    list: []
  };
  // 컴포넌트가 초기화 될 때 네트워크와 통신을하기에 최적의 메소드(clss 타입)
  componentDidMount() {
    fetch("list.json") // list.json 파일 가져오기(fetch)
      .then(function (result) {
        // 첫 번째 then에서는 어떠한 데이터 타입을 호출할지 결정
        return result.json();
      })
      .then(
        // 두 번째 then에서는 호출받은 데이터 타입 함수 생성
        function (json) {
          console.log(json);
          this.setState({
            list: json
          });
        }.bind(this)
      );
  }
  render() {
    var navList = [];
    for (i = 0; i < this.state.list.length; i++) {
      var li = this.state.list[i];
      navList.push(
        <li key={li.id}>
          <a href={li.id}>{li.title}</a>
        </li>
      );
    }
    return (
      <nav>
        <ul>{navList}</ul>
      </nav>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <h1>WEB</h1>
      <Nav></Nav>
      <article>
        <h2>Welcome</h2>
        Hello, React & Ajax
      </article>
    </div>
  );
}
