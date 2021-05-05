# React를 이용한 web site 만들기 튜토리얼(ver.2021/05/05)

<img src="public/images/react_website_20210505.gif" width="90%" height="80%" alt="react_website"></img>

* 오늘은 NavBar의 각각의 간단한 페이지를 만들었습니다.
* App.js 최상위 컴포넌트에서 Route로 경로를 지정해주었습니다.
* Link로 구성된 컨텐츠에 미리지정한 path내부의 경로를 to로 연결해주면 지정된 컴포넌트로 연결이되어 화면에 표시 됩니다.

[App.js]
```javascript
import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// NavBar의 page들을 import 해줍니다.
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
      {/* path로 경로를 입력해주고 연결될 컴포넌트도 지정해줍니다. */}
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/services" component={Services} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
```

[Products.js]
```javascript
import React from 'react';
import '../../App.css';

function Products() {
    return (
        <div className="products">
        {/* public폴더에 접근하기위해 process.env.PUBLIC_URL 문법을 사용 했습니다. */}
            <img src={process.env.PUBLIC_URL + "/images/img-8.jpg"} alt="Travel" />
            <h1>PRODUCTS</h1>
        </div>
    )
}

export default Products;
```

[Services.js]
```javascript
import React from 'react';
import '../../App.css';

function Services() {
    return (
        <div className="services">
            <img src={process.env.PUBLIC_URL + "/images/img-2.jpg"} alt="Travel" />
            <h1>SERVICES</h1>
        </div>
    )
}

export default Services;
```

[SignUp.js]
```javascript
import React from 'react';
import '../../App.css';

function SignUp() {
    return (
        <div className="sign-up">
            <img src={process.env.PUBLIC_URL + "/images/img-1.jpg"} alt="Travel" />
            <h1>Sign Up</h1>
        </div>
    )
}

export default SignUp;
```