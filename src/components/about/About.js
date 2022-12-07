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
                    
                </div>
                
                <p>
                Hi there! My name is Kassidy White. I'm a freshman studying Computer Science at Brigham Young University. 
                I have a love and passion for coding. I discovered this early on in Elementary School, while teaching myself through Khan Academy.
                As I progressed to High School, I took as many Computer Science classes as possible. My senior year, 
                I was even able to participate in a web development internship for Summit County Utah. I can't wait to explore more and grow my 
                experience in Software Development.
                </p>
                
                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </div>
        </section> 
    )
}

export default About