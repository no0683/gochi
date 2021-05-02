# React를 이용한 web site 만들기 튜토리얼(ver.2021/05/02)

<img src="public/images/react_website_20210502.gif" width="90%" height="70%" alt="react_website"></img>

* 오늘은 nav영역아래에 video영상을 배경으로한 섹션을 구현해보았습니다.
* 영상배경과 제목,내용,버튼으로 구성되어있습니다.
* max-width값을 960,760기준으로 미디어쿼리효과(반응형)를 넣어주었습니다.
* sign-up버튼이 960px이 되었을때 리로드를하면 다시 렌더링되는 오류를 useEffect hook을 사용하여 1번만 렌더링 되도록 수정했습니다.

[App.js]
``` javascript
import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
// 비디오영상컴포넌트를 감싸는 부모컴포넌트를 최상위컴포넌트로 import 해줍니다.
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} /> // 경로를 지정하고 어떠한 컴포넌트를 나타낼지 지정 해줍니다.
      </Switch>
    </Router>
  );
}

export default App;
```

[NavBar.js]
``` javascript
import React, { useState, useEffect } from 'react'; // useEffect hook을 사용하기위해 import 해줍니다.
import { Link } from 'react-router-dom';
import Button from './Button';
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    // 기존에는 sign-up버튼이 화면이 960px에서 리로드를 하게되면 다시 렌더링되어 화면에 표시되는 오류가있었는데 useEffect로 처음 1번만 렌더링 되도록 설정 했습니다.
    useEffect(
        () => {
            showButton();
            return () => {
                showButton();
            }
        }, []
    );

    window.addEventListener('resize', showButton);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    JS <i className="fab fa-typo3" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Services" className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Products" className="nav-links" onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
            </div>
        </nav>
    )
}

export default NavBar;
```

[HeroSection.js]
// 영상배경을한 영역을 그려줄 컴포넌트
```javascript
import React from 'react'
import Button from './Button'
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video src="../videos/video-1.mp4" autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">WATCH TRAILER<i className="far fa-play-circle" /></Button>
            </div>
        </div>
    )
}

export default HeroSection
```

[Home.js]
// HeroSection.js를 감싸줄 부모 컴포넌트
```javascript
import '../../App.css';
import HeroSection from '../HeroSection';

function Home() {
    return (
        <HeroSection />
    );
}

export default Home;
```
