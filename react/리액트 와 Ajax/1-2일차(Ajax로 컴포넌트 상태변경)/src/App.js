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
          <a
            href={li.id}
            data-id={li.id}
            onClick={function (e) {
              e.preventDefault();
              this.props.onClick(e.target.dataset.id);
            }.bind(this)}
          >
            {li.title}
          </a>
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

class Article extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends Component {
  state = {
    article: {
      title: "Welcome",
      desc: "Hello, React & Ajax"
    }
  };
  render() {
    return (
      <div className="App">
        <h1>WEB</h1>
        <Nav
          onClick={function (id) {
            fetch(id + ".json")
              .then(function (result) {
                return result.json();
              })
              .then(
                function (json) {
                  this.setState({
                    article: json
                  });
                }.bind(this)
              );
          }.bind(this)}
        ></Nav>
        <Article
          title={this.state.article.title}
          desc={this.state.article.desc}
        ></Article>
      </div>
    );
  }
}

export default App;
