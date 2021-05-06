import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>환상적인 여행지를 만나 보세요!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={process.env.PUBLIC_URL + "/images/img-9.jpg"}
                            text="아마존 정글 깊숙히 숨겨진 폭포를 탐험 해보세요."
                            label="모험"
                            path="/services"
                        />
                        <CardItem
                            src={process.env.PUBLIC_URL + "/images/img-2.jpg"}
                            text="프라이빗 크루즈에서 발리를 여행 해보세요."
                            label="럭셔리"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={process.env.PUBLIC_URL + "/images/img-3.jpg"}
                            text="미지의 바다로 가서 대서양을 항해 해보세요."
                            label="미스터리"
                            path="/services"
                        />
                        <CardItem
                            src={process.env.PUBLIC_URL + "/images/img-4.jpg"}
                            text="히말라야 산맥 정상에서 축구를 즐겨보세요."
                            label="모험"
                            path="/services"
                        />
                        <CardItem
                            src={process.env.PUBLIC_URL + "/images/img-8.jpg"}
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