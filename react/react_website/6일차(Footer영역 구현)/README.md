# React를 이용한 web site 만들기 튜토리얼(ver.2021/05/06)

<img src="public/images/react_website_20210506.gif" width="90%" height="80%" alt="react_website"></img>

* 오늘은 Footer영역을 구현 해보았습니다.
* 마크업 후 css flex를 통해 각각 방향과 영역을 설정 해주었습니다.
* css Hover효과로 간단한 transition 효과를 넣어주었습니다.
* 반응형은 960px이 될때 몇가지요소들이 column형태로 변환 되도록 했습니다.

[Footer.js]
```javascript
import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    최고의 휴가를 위해 다양한 여행소식을 받아보세요
                </p>
                <p className="footer-subscription-text">
                    언제든지 구독을 취소 할 수 있어요
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="이메일 주소" className="footer-input" />
                        <Button buttonStyle="btn--outline">구독하기</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">운영방침</Link>
                        <Link to="/">여행후기</Link>
                        <Link to="/">경력</Link>
                        <Link to="/">투자정보</Link>
                        <Link to="/">연혁</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">연락처</Link>
                        <Link to="/">지원</Link>
                        <Link to="/">여행지</Link>
                        <Link to="/">스폰서</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Videos</h2>
                        <Link to="/">영상정보</Link>
                        <Link to="/">마케팅</Link>
                        <Link to="/">대리점</Link>
                        <Link to="/">인플루언서</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to="/">인스타그램</Link>
                        <Link to="/">페이스북</Link>
                        <Link to="/">유튜브</Link>
                        <Link to="/">트위터</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link
                            className="social-icon-link"
                            to="/"
                        >
                            JS tour <i className="fas fa-plane" />
                        </Link>
                    </div>
                    <small className="website-rights">JS tour ⓒ 2021</small>
                    <div className="social-icons">
                        <Link 
                            className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f" />
                        </Link>
                        <Link 
                            className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram" />
                        </Link>
                        <Link 
                            className="social-icon-link youtube"
                            to="/"
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i className="fab fa-youtube" />
                        </Link>
                        <Link 
                            className="social-icon-link twitter"
                            to="/"
                            target="_blank"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter" />
                        </Link>
                        <Link 
                            className="social-icon-link linkedin"
                            to="/"
                            target="_blank"
                            aria-label="Linkedin"
                        >
                            <i className="fab fa-linkedin" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;
```

[Home.js]]
```javascript
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;
```

[Footer.css]
```css
.footer-container {
    background-color: #242424;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.footer-subscription {
    margin-bottom: 50px;
    color: #fff;
    text-align: center;
}

.footer-subscription > p {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}

.footer-subscription-heading {
    font-size: 24px;
    margin-bottom: 24px;
}

.footer-subscription-text {
    color: #9e9a9a;
    font-size: 20px;
    margin-bottom: 24px;
}

.input-areas > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.footer-input {
    width: 300px;
    margin-bottom: 16px;
    padding: 8px 20px;
    font-size: 18px;
    border: 1px solid #fff;
    border-radius: 2px;
}
.footer-input::placeholder {
    color: #b1b1b1;
}

.input-areas > form .btn {
    width: 300px;
    font-size: 18px;
}

.footer-links {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}

.footer-link-wrapper {
    display: flex;
}

.footer-link-items {
    display: flex;
    flex-direction: column;
    margin: 0 50px;
}

.footer-link-items > h2 {
    color: #fff;
    margin-bottom: 16px;
}

.footer-link-items > a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 5px;
}

.footer-link-items a:hover {
    color: #9e9a9a;
    transition: 0.3s ease-out;
}

/* Social Icons */

.social-icon-link {
    color: #fff;
    font-size: 24px;
}

.social-media-wrap {
    display: flex;
    width: 750px;
    justify-content: space-between;
}

.footer-logo > a {
    text-decoration: none;
}

.website-rights {
    color: #fff;
    font-size: 20px;
}

.social-icons {
    display: flex;
    width: 200px;
    justify-content: space-between;
}

.social-icons a:hover {
    color: #9e9a9a;
    transition: 0.3s ease-out;
}

@media (max-width: 960px) {
    .footer-links {
        flex-direction: column;
    }
    .footer-link-wrapper {
        margin-bottom: 20px;
    }
    .social-media-wrap {
        flex-direction: column;
        align-items: center;
    }
    .footer-logo {
        margin-bottom: 15px;
    }
    .website-rights {
        margin-bottom: 15px;
    }
}
```
