import React from 'react'
import './about.css'
import ME from "../../assets/about-me.jpg"
import {MdComputer} from 'react-icons/md'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About Image"/>
                </div>
            </div>
            
            <div className="about__container">
                <div className="about__cards">
                    <article className="about__card">
                        <MdComputer className="about__icon"/>
                        <h5>Studying Computer Science</h5>
                        <small>At Brigham Young University</small>
                    </article>
                    
                     <article className="about__card">
                        <MdComputer className="about__icon"/>
                        <h5>Studying Computer Science</h5>
                        <small>At Brigham Young University</small>
                    </article>
                    
                     <article className="about__card">
                        <MdComputer className="about__icon"/>
                        <h5>Studying Computer Science</h5>
                        <small>At Brigham Young University</small>
                    </article>
                </div>
            </div>
        </div>
        </section> 
    )
}

export default About