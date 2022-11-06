import React from "react";

function Contact() {
    return(
            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="contact-left">
                            <h1 className="sub-title">Contact Me</h1>
                            <p><a href="mailto:contact@schevance.fr"><i className="fas fa-paper-plane"/>contact@schevance.fr</a></p>
                        <p><i className="fas fa-phone-square-alt"/>0781877656</p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/simon-chevance-545031197/"><i className="fa-brands fa-linkedin"/></a>
                            <a href="https://twitter.com/SimonChevance"><i className="fa-brands fa-twitter"/></a>
                            <a href="https://github.com/Simon-Chevance"><i className="fa-brands fa-github"/></a>
                        </div>
                        <a href="../../pdf/CV.pdf" download className="btn btn2">Download CV</a>
                    </div>
                    <div className="contact-right">
                        <form name="submit-to-google-sheet">
                            <input type="text" name="Name" placeholder="Your Name" disabled/>
                            <input type="email" name="Email" placeholder="Your Email" disabled/>
                            <textarea name="Message" rows={6} placeholder="Your Message" disabled/>
                            <button type="submit" className="btn btn2" disabled>Submit</button>
                        </form>
                        <span id="msg"/>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>2022 Copyright ©schevance</p>
            </div>
        </div>
    )
}

export default Contact;
