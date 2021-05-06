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