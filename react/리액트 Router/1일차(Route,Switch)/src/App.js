import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>React Router Dom Example</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Topics">Topics</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
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

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      Topics...
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
