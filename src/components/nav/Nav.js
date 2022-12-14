import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'

const Nav = () => {
    return (
        <nav>
            <a href="#"><AiOutlineHome/></a>
            <a href="#about"><AiOutlineUser/></a>
            <a href="#experience"><BiBookAlt/></a>
            <a href="#contact"><AiOutlinePhone/></a>
        </nav>
    )
}

export default Nav 