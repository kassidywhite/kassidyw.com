import React from 'react'
import './about.css'
import ME from "../../assets/about-me.jpg"
import {MdComputer} from 'react-icons/md'

const About = () => {
    return (
        <section id='about'>
            <br />
            <h5>Get To Know</h5>
            <h2>About Me</h2>
        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About Image"/>
                </div>
            </div>
            
            <div className="about__content">
                
                <div className="about__cards">
                    <article className="about__card">
                        <MdComputer className="about__icon"/>
                        <h5>Studying</h5>
                        <small>Computer Science</small>
                    </article>
                    
                    <article className="about__card">
                        <MdComputer className="about__icon"/>
                        <h5>Worked in</h5>
                        <small>Web Programming</small>
                    </article>
                    
                    <article className="about__card">
                        <MdComputer className="about__icon"/>
                        <h5>Studying</h5>
                        <small>Computer Science </small>
                    </article>
                </div>
                
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste minima sunt vero 
                sint adipisci magni cum, eos, sapiente ad amet iusto porro totam numquam eius maiores 
                laboriosam quos sequi dolorem.
                </p>

            </div>
        </div>
        </section> 
    )
}

export default About