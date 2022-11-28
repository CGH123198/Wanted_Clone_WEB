import styled from 'styled-components';
import './footer.scss';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { sizes } from '../../../lib/styles/mediaQuery';
import LanguageSelect from '../languageSelect/languageSelect';

const FooterWrap = styled.footer`
    padding: 18px 0 65px;
    background-color: #fff;
    border-top: 1px solid #ececec;
`;

const Footer = () => {
    return (
        <FooterWrap>
            <div className="footer-row-class">
                <div className="footer-nav-link">
                    <div className="footer-nav-link-logo">
                        <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" alt="" />
                    </div>
                    <div className="footer-nav-link-link">
                        <Link to="#">기업소개</Link>
                        <Link to="#">이용약관</Link>
                        <Link to="#">개인정보 처리방침</Link>
                        <Link to="#">고객센터</Link>
                    </div>
                </div>
                <MediaQuery maxWidth={sizes.narrowest}>
                    <LanguageSelect />
                </MediaQuery>
                <MediaQuery minWidth={sizes.narrowest}>
                    <div className="footer-social-nav-link">
                        <Link to="#">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&amp;w=20&amp;q=100" alt="instagram" />
                        </Link>
                        <Link to="#">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&amp;w=25&amp;q=100" alt="youtube" />
                        </Link>
                        <Link to="#">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&amp;w=20&amp;q=100" alt="facebook" />
                        </Link>
                        <Link to="#">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&amp;w=20&amp;q=100" alt="blog" />
                        </Link>
                        <Link to="#">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&amp;w=19&amp;q=100" alt="kakao" />
                        </Link>
                        <Link to="#">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&amp;w=20&amp;q=100" alt="post" />
                        </Link>
                        <Link to="#">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&amp;w=17&amp;q=100" alt="apple" />
                        </Link>
                        <Link to="#">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&amp;w=17&amp;q=100" alt="google" />
                        </Link>
                    </div>    
                </MediaQuery>
            </div>
            <div className="footer-row-class-border footer-row-class">
                <p className="footer-text">
                    (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300 롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
                    <br />
                    유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | 사업자등록번호 : 299-86-00021 | 02-539-7118<br />
                    © Wantedlab, Inc.
                </p>
                <MediaQuery minWidth={sizes.narrowest}>
                    <LanguageSelect />
                </MediaQuery>
                <MediaQuery maxWidth={sizes.narrowest}>
                    <div className="footer-social-nav-link">
                        <Link to="#">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_instagram.png&amp;w=20&amp;q=100" alt="instagram" />
                        </Link>
                        <Link to="#">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_youtube.png&amp;w=25&amp;q=100" alt="youtube" />
                        </Link>
                        <Link to="#">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_facebook.png&amp;w=20&amp;q=100" alt="facebook" />
                        </Link>
                        <Link to="#">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_blog.png&amp;w=20&amp;q=100" alt="blog" />
                        </Link>
                        <Link to="#">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_kakao.png&amp;w=19&amp;q=100" alt="kakao" />
                        </Link>
                        <Link to="#">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_post.png&amp;w=20&amp;q=100" alt="post" />
                        </Link>
                        <Link to="#">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_apple.png&amp;w=17&amp;q=100" alt="apple" />
                        </Link>
                        <Link to="#">
                            <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Fsocial_google.png&amp;w=17&amp;q=100" alt="google" />
                        </Link>
                    </div>    
                </MediaQuery>
            </div>
        </FooterWrap>
    )
}

export default Footer;