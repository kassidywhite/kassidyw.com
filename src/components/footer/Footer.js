import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">KWHITE</a>
            
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
            <div className="footer__socials">
                <a href="https://github.com/kassidywhite/kassidyw.com"><BsGithub /></a>
                <a href="https://www.instagram.com/kassidy.withheight/"><FiInstagram /></a>
            </div>
        </footer>
    )
}

export default Footer