import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h1>Kassidy White</h1>
                <h3>Software Development</h3>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
            </div>
        </header>
    )
}

export default Header