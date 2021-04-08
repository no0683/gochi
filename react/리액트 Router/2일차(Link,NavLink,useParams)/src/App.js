import { Route, Switch, Link, NavLink, useParams } from "react-router-dom";
import "./styles.css";

// Route: 컴포넌트의 루트(경로)를 지정 할 수 있다.
// Switch: 여러개가 렌더링 되지않고 정확히 일치하는 하나만 렌더링.
// Link: a태그 대신 사용하며 불필요한 네트워크 용량이 발생하지않음.
// NavLink: 선택된 링크에 클래스가 부여되며 css적용 가능.
// useParams: Route path에서 쓰고싶은 파라미터 변수명을 지정하여 참조 할 수 있다.

function App() {
  return (
    <div>
      <h1>React Router Dom Example</h1>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/Topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/Topics">
          <Topics></Topics>
        </Route>
        <Route path="/Contact">
          <Contact></Contact>
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

var contents = [
  { id: 1, title: "Html", desc: "Html is ..." },
  { id: 2, title: "Js", desc: "Js is ..." },
  { id: 3, title: "React", desc: "React is ..." }
];

function Topic() {
  var params = useParams(); // 3. 지정한 파라미터를 받기위해 useParams 선언후 변수로 저장.
  var topic_id = params.topic_id; // 4. params 변수 뒤에 지정한 파라미터를 추가하여 사용
  var selected_topic = {
    title: "Sorry",
    desc: "Not Found"
  };
  for (i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.desc}
    </div>
  );
}

function Topics() {
  var list = [];
  for (i = 0; i < contents.length; i++) {
    list.push(
      <li key={contents[i].id}>
        <NavLink to={"/Topics/" + contents[i].id}>{contents[i].title}</NavLink>
      </li>
    );
  }
  return (
    <div>
      <h2>Topics</h2>
      <ul>{list}</ul>

      <Route path="/Topics/:topic_id">
        {" "}
        {/* 1. topic_id라는 파라미터(매개변수) 지정 */}
        <Topic></Topic> {/* 2. 지정한 파라미터를 받을 컴포넌트 */}
      </Route>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

export default App;
