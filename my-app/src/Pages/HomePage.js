// Styling
import "./HomePage.css";

// Services
import { send } from "emailjs-com";

// Hooks
import React, { useState } from 'react';

// Components
import ImageSlider from "../Components/imageslider";

// Assets
import { FaPaperPlane, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ImPhone } from "react-icons/im";

export default function HomePage() {

    // Slides example
    const slides = [
        {type: 'image', url: 'http://localhost:3000/image-1.jpg', title: 'Test1'},
        {type: 'image', url: 'http://localhost:3000/image-2.jpg', title: 'Test2'},
        {type: 'video', url: 'https://www.youtube.com/watch?v=mcQqo48Ymro', title: 'Test3'}
    ]

    // Content of message
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    // Send behavior
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_01bnghk',
            'template_hkfut9z',
            toSend,
            'Z0tSftjM8zMs8Yv_V'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
    };

    // Send function
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div className="page">
            <h1>Limitations are rules meant to be broken</h1>
            <div className="introductory">
                <ImageSlider slides={slides}></ImageSlider>
            </div>

            <img src={require("../Images/background.jpg")} className="background-image"></img>

            <div className="about">
                <img src={require("../Images/portrait.PNG")} alt="Portrait"></img>
                <div class="about-col">
                    <h1>About Me</h1>
                    <p>My name is Trent Maffeo, and I am currently attending
                    Rensselaer Polytechnic Institute for a dual in Computer Science
                    and Computer Systems Engineering. I really love to work on various
                    CS projects pertaining to circuitry and deep-learning.</p>

                    <div class="tab-titles">
                        <p class="tab-links active-link" onclick="opentab('skills')">Skills</p>
                        <p class="tab-links" onclick="opentab('experience')">Experience</p>
                        <p class="tab-links" onclick="opentab('education')">Education</p>
                    </div>
                    {/* <div class="tab-contents active-tab" id="skills">
                        <ul>
                            <li><span>UI/UX</span><br/>Designing web/app interfaces</li>
                            <li><span>Robotics</span><br/>Circuitry & component programming</li>
                            <li><span>Deep learning</span><br/>Applying deep learning models</li>
                        </ul>
                    </div> */}
                </div>
            </div>


            <div className="services">
                <div className="container"></div>
            </div>


            <div className="contact">
                <div className="container">
                    <div className="row">
                        <div className="contact-left">
                            <h1>Contact Me</h1>
                            <p><i><FaPaperPlane /></i>testingllamas@gmail.com</p>
                            <p><i><ImPhone /></i>978-223-7494</p>
                            <div className="social">
                                <a href="https://www.instagram.com/trent.maffeo/?next=%2F" className="insta"><FaInstagram /></a>
                                <a href="https://www.youtube.com/channel/UCZmEW-klHYOcHQWprsOgCOw" className="yt"><FaYoutube /></a>
                                <a href="https://www.linkedin.com/in/trent-maffeo-270747228/" className="linkedin"><FaLinkedinIn /></a>
                            </div>
                            <a href="../Images/resume.pdf" download className="btn">Download CV</a>
                        </div>
                        <div className="contact-right">
                            <form onSubmit={onSubmit}>
                                
                                {/* <textarea name="Email" rows="1" placeholder="email (i.e. johnsmith@gmail.com)"></textarea>
                                <hr></hr>
                                <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                                <button type="submit" className="btn">Submit</button> */}
                                
                                <textarea
                                    type='text'
                                    name='from_name'
                                    rows='1'
                                    placeholder='Your name'
                                    value={toSend.from_name}
                                    onChange={handleChange}
                                />
                                <textarea
                                    type='text'
                                    name='reply_to'
                                    rows='1'
                                    placeholder='Your email'
                                    value={toSend.reply_to}
                                    onChange={handleChange}
                                />
                                <hr></hr>
                                <textarea
                                    type='text'
                                    name='message'
                                    rows='6'
                                    placeholder='Tell me all about it!'
                                    value={toSend.message}
                                    onChange={handleChange}
                                />
                                <button type="submit" className="btn">Submit</button>
                            </form>
                            {/* <span id="msg"></span> */}
                        </div>
                    </div>
                </div>
                {/* <div class="copyright">
                    <p>Copyright © Trent. Crafted with <i class="fa fa-heart fa-beat"></i> by Trent Maffeo</p>
                </div> */}
            </div>
        </div>
    )
}