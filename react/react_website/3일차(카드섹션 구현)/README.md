# React를 이용한 web site 만들기 튜토리얼(ver.2021/05/03)

<img src="public/images/react_website_20210503.gif" width="90%" height="80%" alt="react_website"></img>

* 오늘은 메인배너 아래에 카드영역을 추가 했습니다.
* 카드는 이미지와 간단한 설명으로 구성되어있습니다.
* 이미지에 커서를 대면 css로 scale효과를 주었습니다.
* 기존 영문에서 한글로 간단하게 커스터마이징을 했습니다.

[CardItem.js]
```javascript
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <li className="cards__item">
            <Link className="cards__item__link" to={props.path}> // 링크를 클릭하면 연결될 경로를 지정 합니다. props.path는 부모 컴포넌트(Cards.js)에서 값을 받아 옵니다.
                <figure className="cards__item__pic-wrap" data-category={props.label}>
                    <img src={props.src} alt="Travel" className="cards__item__img" />
                </figure>
            </Link>
            <div className="cards__item__info">
                <h5 className="cards__item__text">{props.text}</h5>
            </div>
        </li>
    )
}

export default CardItem;
```

[Cards.js]
```javascript
import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

// 모든 카드가 담길 부모 컴포넌트 입니다.
function Cards() {
    return (
        <div className="cards">
            <h1>환상적인 목적지를 확인해보세요!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        // 자식 컴포넌트에게 값을 전달할 props들을 만들어 줍니다.
                            src="images/img-9.jpg"
                            text="아마존 정글 깊숙히 숨겨진 폭포를 탐험 해보세요."
                            label="모험"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
```

[Home.js]
```javascript
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';

// pages의 컴포넌트를 담고있는 부모 컴포넌트로 연결 합니다.(최상위 컴포넌트 App.js에 home.js가 연결되어있기때문에 이곳에 섹션 컴포넌트를 추가하면 화면에 렌더링 됩니다.)
function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
        </>
    );
}

export default Home;
```