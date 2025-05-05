import './Footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareInstagram, faYoutube, faSpotify, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <div className='footer-info-center'>
                    <div className='footer-name'>
                        <h2>Konuşma Terapisti</h2>
                    </div>
                    <div className='footer-social-media'>
                        <a href="https://instagram.com" target='_blank' rel="noopener noreferrer" className='icon-social-media'>
                            <FontAwesomeIcon icon={faSquareInstagram} size="2x" />
                        </a>
                        <a href="https://youtube.com" target='_blank' rel="noopener noreferrer" className='icon-social-media'>
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a href="https://spotify.com" target='_blank' rel="noopener noreferrer" className='icon-social-media'>
                            <FontAwesomeIcon icon={faSpotify} size="2x" />
                        </a>
                        <a href="https://facebook.com" target='_blank' rel="noopener noreferrer" className='icon-social-media'>
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://linkedin.com" target='_blank' rel="noopener noreferrer" className='icon-social-media'>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <br />
                        <br />
                    </div>
                </div>
                <div className='footer-links'>
                    <Container>
                        <Row>
                            <Col xs={12} sm={12} md={3} lg={3}>
                                <a href='/About' rel="noopener noreferrer" className='textPad'>Hakkımızda</a>
                            </Col>
                            <Col xs={12} sm={12} md={3} lg={3}>
                                <a href='/Exercise' rel="noopener noreferrer" className='textPad'>Egzersiz</a>
                            </Col>
                            <Col xs={12} sm={12} md={3} lg={3}>
                                <a href='/Game' className='textPad'>Oyun</a>
                            </Col>
                            <Col xs={12} sm={12} md={3} lg={3}>
                                <a href='/Login' className='textPad'>Kayıt Ol / Giriş</a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <p className='footer-last'>© Sitenin Tüm Hakları Saklıdır.</p>
            <div>
                <a href='/Şartlar' className='footer-last-link'>Şartlar</a>
                <a href='/Güvenlik' className='footer-last-link'>Güvenlik</a>
                <a href='/Durum' className='footer-last-link'>Durum</a>
                <a href='/Belgeler' className='footer-last-link'>Belgeler</a>
                <a href='/Çerezler' className='footer-last-link'>Çerezler</a>
            </div>
        </footer>
    );
}

export default Footer;
