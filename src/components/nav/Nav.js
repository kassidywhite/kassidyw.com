import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GiBookmark} from 'react-icons/gi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'

const Nav = () => {
    return (
        <nav>
            <a href="#"><AiOutlineHome/></a>
            <a href="#about"><AiOutlineUser/></a>
            <a href="#experience"><GiBookmark/></a>
            <a href="#services"><RiServiceLine/></a>
            <a href="#contact"><AiOutlinePhone/></a>
        </nav>
    )
}

export default Nav 