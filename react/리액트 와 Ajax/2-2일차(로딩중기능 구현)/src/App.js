import { Component } from "react";

// 프레젠테이션 컴포넌트: 시각적인 표현과 다른 앱에 부품으로서 재사용성이있다.
class Nav extends Component {
  render() {
    var navList = [];
    for (i = 0; i < this.props.list.length; i++) {
      var li = this.props.list[i];
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

class IsLoading extends Component {
  render() {
    return <div>Loading...</div>;
  }
}

// 컨테이너 컴포넌트: 프레젠테이션 컴포넌트를 사용해서 앱에맞게 제어하는 역할.
class App extends Component {
  state = {
    article: {
      items: {
        title: "Welcome",
        desc: "Hello, React & Ajax"
      },
      isLoading: false
    },
    list: {
      items: [],
      isLoading: false
    }
  };
  // 컴포넌트가 초기화 될 때 네트워크와 통신을하기에 최적의 메소드(class 타입)
  componentDidMount() {
    var newList = Object.assign({}, this.state.list, { isLoading: true });
    this.setState({
      list: newList
    });
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
            list: {
              items: json,
              isLoading: false
            }
          });
        }.bind(this)
      );
  }
  render() {
    var navTag = null;
    if (this.state.list.isLoading === true) {
      navTag = <IsLoading></IsLoading>;
    } else {
      navTag = (
        <Nav
          onClick={function (id) {
            var newArticle = Object.assign({}, this.state.article, {
              isLoading: true
            });
            this.setState({
              article: newArticle
            });
            fetch(id + ".json")
              .then(function (result) {
                return result.json();
              })
              .then(
                function (json) {
                  this.setState({
                    article: {
                      items: json,
                      isLoading: false
                    }
                  });
                }.bind(this)
              );
          }.bind(this)}
          list={this.state.list.items}
        ></Nav>
      );
    }
    var articleTag = null;
    if (this.state.article.isLoading === true) {
      articleTag = <IsLoading></IsLoading>;
    } else {
      articleTag = (
        <Article
          title={this.state.article.items.title}
          desc={this.state.article.items.desc}
        ></Article>
      );
    }
    return (
      <div className="App">
        <h1>WEB</h1>
        {navTag}
        {articleTag}
      </div>
    );
  }
}

export default App;
