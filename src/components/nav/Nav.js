import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {GiOpenBook} from 'react-icons/gi'

const Nav = () => {
    return (
        <nav>
            <a href="#"><AiOutlineHome/></a>
            <a href="#about"><AiOutlineUser/></a>
            <a href="#experience"><GiOpenBook/></a>
            <a href="#contact"><AiOutlinePhone/></a>
        </nav>
    )
}

export default Nav 