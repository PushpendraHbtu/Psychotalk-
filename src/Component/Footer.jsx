import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons'; // Phone and Email Icons
// import img11 from './images/img11.png';
// import img2 from './images/img2.png';
// import img3 from './images/img3.png';
// import ps_img from './images/ps_img.png';
// import apple_img from './images/apple_img.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-block">
                <div className="footer-top">
                    <div className='containers'>
                        <div className='foot-about '>
                            <h2 className='heading'>About Psychotalk</h2>
                            <p>
                                Psychotalk is the best astrology website for online Astrology predictions.
                                Talk to Astrologer on call and get answers to all your worries by seeing the
                                future life through Astrology Kundli Predictions from the best Astrologers from
                                India. Get best future predictions related to Marriage, love life, Career or Health
                                over call, chat, query or report.
                            </p>
                        </div>
                        <div className='container-links row'> {/* Added 'row' class for Bootstrap grid */}
                            <div className='footer-links col-lg-3  col-6'>
                                <h2 className='heading'>Horoscope</h2>
                                <a className='discript_link' href="#horoscope2024">Horoscope 2024</a>
                                <a className='discript_link' href="#horoscope2024">Today's Horoscope</a>
                                <a className='discript_link' href="#horoscope2024">Today's Love Horoscope</a>
                                <a className='discript_link' href="#horoscope2024">Yesterday's Horoscope</a>
                                <a className='discript_link' href="#horoscope2024">Tomorrow's Horoscope</a>
                                <a className='discript_link' href="#horoscope2024">Weekly Horoscope</a>
                                <a className='discript_link' href="#horoscope2024">Monthly Horoscope</a>
                                <a className='discript_link' href="#horoscope2024">Yearly Horoscope</a>

                                <a className='router-link heading' href="#horoscope2024">Shubh Muhurat 2024</a>
                                <a className='discript_link' href="#horoscope2024">Annanprashan Muhurat 2024</a>
                                <a className='discript_link' href="#horoscope2024">Naamkaran Muhurat 2024</a>
                                <a className='discript_link' href="#horoscope2024">Car/Bike Muhurat 2024</a>
                                <a className='discript_link' href="#horoscope2024">Marriage Muhurat 2024</a>
                                <a className='discript_link' href="#horoscope2024">Gold Buying Muhurat 2024</a>
                                <a className='discript_link' href="#horoscope2024">Bhoomi Pujan Muhurat 2024</a>
                                <a className='discript_link' href="#horoscope2024">Griha Pravesh Muhurat 2024</a>
                                <a className='discript_link' href="#horoscope2024">Mundan Muhurat 2024</a>
                            </div>
                            <div className='footer-links col-lg-3  col-6'>
                                <h2 className='heading'>Important links</h2>
                                <a className='discript_link' href="#horoscope2024">Astromall</a>
                                <a className='discript_link' href="#horoscope2024">Psychotalk Store</a>
                                <a className='discript_link' href="#horoscope2024">Today Panchang</a>
                                <a className='discript_link' href="#horoscope2024">Live Astrologers</a>
                                <a className='discript_link' href="#horoscope2024">How to read Kundali</a>
                                <a className='discript_link' href="#horoscope2024">Free Kundali</a>
                                <a className='discript_link' href="#horoscope2024">Kundali Matching</a>
                                <a className='discript_link' href="#horoscope2024">Chat with Astrologer</a>
                                <a className='discript_link' href="#horoscope2024">Talk to Astrologer</a>
                                <a className='discript_link' href="#horoscope2024">Psychotalk Reviews</a>
                                <a className='discript_link' href="#horoscope2024">Astrology Yoga</a>
                                <a className='discript_link' href="#horoscope2024">Kaalsarp Doshas</a>
                                <a className='discript_link' href="#horoscope2024">Child Astrology</a>
                                <a className='discript_link' href="#horoscope2024">Ascendant Sign Gemstone</a>
                                <a className='discript_link' href="#horoscope2024">Nakshatras Constellations</a>
                                <a className='discript_link' href="#horoscope2024">Numerolgy</a>
                                <a className='discript_link' href="#horoscope2024">Mantras</a>
                                <a className='discript_link' href="#horoscope2024">Astrological remedies for job promotion</a>
                            </div>
                            <div className='footer-links col-lg-3  col-6'>
                                <h2 className='heading'>Important links</h2>
                                <a className='discript_link' href="#horoscope2024">Blog</a>
                                <a className='discript_link' href="#horoscope2024">Planetary Transit 2024</a>
                                <a className='discript_link' href="#horoscope2024">Collabaration</a>
                                <a className='discript_link' href="#horoscope2024">Tarot</a>
                                <a className='discript_link' href="#horoscope2024">Zodiac Signs</a>
                                <a className='discript_link' href="#horoscope2024">Vastu Shastra</a>
                                <a className='discript_link' href="#horoscope2024">Solar Eclipse 2024</a>
                                <a className='discript_link' href="#horoscope2024">Lunar Eclipse 2024</a>
                                <a className='discript_link' href="#horoscope2024">Festiva Calendar 2024</a>
                                <a className='discript_link' href="#horoscope2024">Vrat Calendar</a>
                                <a className='discript_link' href="#horoscope2024">Mole Astrology</a>
                                <a className='discript_link' href="#horoscope2024">Love Calculator</a>
                                <a className='discript_link' href="#horoscope2024">Psychotalk Sitemap</a>
                                <h2 className='heading'>Astrologer</h2>
                                <a className='discript_link' href="#horoscope2024">Astrologer Login</a>
                                <a className='discript_link' href="#horoscope2024">Astrologer Registration</a>
                                <h2 className='heading'>Corporate Info</h2>
                                <a className='discript_link' href="#horoscope2024">Refund & Cancellation Policy</a>
                            </div>
                            <div className='footer-links col-lg-3 col-6'>
                                <div className='contact-links row'>
                                    <div className='col-lg-12 col-sm-12 col-12'>
                                        <h2 className='heading'>Corporate info</h2>
                                        <a className='discript_link' href="#horoscope2024">Terms & Conditions</a>
                                        <a className='discript_link' href="#horoscope2024">Privacy Policy</a>
                                        <a className='discript_link' href="#horoscope2024">Disclaimer</a>
                                        <a className='discript_link' href="#horoscope2024">About Us</a>
                                    </div>
                                    <div className='col-lg-12 col-sm-12 col-12'>
                                        <a className='router-link heading' href="#horoscope2024">Contact Us</a>
                                        <div className='discript_link text'>
                                            <FontAwesomeIcon icon={faPhone} />
                                            &nbsp; We are available 24x7 on chat support,
                                            <span className='text text-link'>click to start chat</span>
                                        </div>
                                        <a className='discript_link text' href="mailto:contact@astrotalk.com">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            &nbsp; Email :
                                            <span className='text'>contact@Psychotalk.com</span>
                                        </a>
                                        <div className='social-media' >
                                            <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/psychotalk'>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
                                            </a>
                                            <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/psychotalk'>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
                                            </a>
                                            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/psychotalk'>
                                                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Linkedin" />
                                            </a>
                                            <a target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/psychotalk'>
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className='col-lg-12  col-sm-12 col-12'>
                                        <h2 className='heading'>Secure</h2>
                                        <div className='security-links'>
                                            <div className='security'>
                                                <img alt="Private & Confidential" loading='lazy'
                                                    // src={img11}

                                                ></img>
                                                <p className='discript_link'>Private & Confidential</p>
                                            </div>
                                            <div className='security'>
                                                <img alt="Verified Astrologers"
                                                    loading='lazy'

                                                    // src={img2}
                                                    >
                                                        
                                                    </img>
                                                <p className='discript_link'>Verified Astrologers</p>
                                            </div>
                                            <div className='security'>
                                                <img alt="Secure Payments"
                                                    loading='lazy'
                                                    // src={img3}
                                                    ></img>
                                                <p className='discript_link'>Secure Payments</p>
                                            </div>
                                            <div className='app-links'>
                                                <a href='https://play.google.com/apps/details?id=com.psychotak' className='playstore-url'>
                                                    <img className='app-img' alt="android_app"
                                                        loading='lazy'
                                                        // src={ps_img} 
                                                        />
                                                </a>
                                                <a href='https://apps.apple.com/app/idXXXXXXXX' className='playstore-url'>
                                                    <img className='app-img'
                                                        alt="ios_app"
                                                        loading='lazy'
                                                        // src={apple_img} 
                                                         />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className='container text-center'>
                    <p>
                        Copyright
                        <FontAwesomeIcon icon={faCopyright} />
                        2024 Psychotalk Services Private Limited. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
