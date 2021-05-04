# React를 이용한 web site 만들기 튜토리얼(ver.2021/05/04)

<img src="public/images/react_website_20210504.gif" width="90%" height="80%" alt="react_website"></img>

* 오늘은 카드섹션에 좀더 컨텐츠를 담아 봤습니다.
* css flex를 이용하여 카드의 이미지부분과 텍스트부분의 방향을 column으로 주었습니다.
* 마찬가지로 화면 사이즈가 1024px이 될때 css flex를 이용하여 세로로 정렬되도록 효과를 주었습니다.
* 카드 섹션의 ul을 두개로 나뉘어 카드가 2개,3개로 각각 표현 할 수 있도록 했습니다.

[Cards.js]
```javascript
import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>환상적인 목적지를 확인해보세요!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="아마존 정글 깊숙히 숨겨진 폭포를 탐험 해보세요."
                            label="모험"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="프라이빗 크루즈에서 발리를 여행 해보세요."
                            label="럭셔리"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-3.jpg"
                            text="미지의 바다로 가서 대서양을 항해 해보세요."
                            label="미스터리"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-4.jpg"
                            text="히말라야 산맥 정상에서 축구를 즐겨보세요."
                            label="모험"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-8.jpg"
                            text="낙타를 타고 사하라 사막을 누벼 보세요."
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

[Cards.css]
```css
/* ul이 2개로 구성되어있고 이것들을 세로로 정렬하기위해 flex와 방향을 주었습니다. */
.cards__container {
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 90%;
    margin: 0 auto;
}
.
.
.
@media only screen and (min-width: 1024px) {
    /* 화면사이즈가1024px이상일때는 flex로 기본적으로 가로로 정렬되지만 1024px 밑으로 내려가게되면 flex가 해제됩니다. */
    /* 카드 컴포넌트는 li로 묶여있기때문에 blocl성질로 자연스럽게 세로로 정렬 됩니다. */
    .cards__items {
        display: flex;
    }
}
```