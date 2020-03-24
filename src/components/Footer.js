import React from 'react';
import './Footer.scss';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-icons">
                <a href="#"><img alt="icono facebook" src={facebook}/></a>
                <a href="#"><img alt="icono twitter" src={twitter}/></a>
            </div>
            <p>© 2020 | All Rights Reserved</p>
        </div>
    )
}

export default Footer;