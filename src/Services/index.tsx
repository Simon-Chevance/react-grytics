import React from 'react';

function Services() {
    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                    <div>
                        <i className="fa-solid fa-code"/>
                        <h2>Web Design</h2>
                        <p>During my schooling at Supinfo, I was able to follow courses in web design, mock-up, we were
                            asked to make mock-ups for applications,
                            websites by putting ourselves in the shoes of the user, so that the user experience is the
                            best possible based on certain criteria.
                            I also designed the websites and web applications for most of the projects we were asked to
                            do.</p>
                    </div>
                    <div>
                        <i className="fa-sharp fa-solid fa-person"/>
                        <h2>Leadership</h2>
                        <p>During most of the projects I participated in during my studies,
                            in order to prepare the latter, we had to set up a management system to see the progress
                            of the latter by implementing an agile work method, I was the one in charge of managing the
                            meetings,
                            as well as all the features and user needs. We worked by iterations in order to organize our
                            work in
                            the most structured way. So I have good notions in team management.</p>
                    </div>
                    <div>
                        <i className="fa-brands fa-chrome"/>
                        <h2>Web Integrator</h2>
                        <p>During one of my internship, I realized the web integration of a tool now used by them, it
                            was a site allowing the control of the versions of their various web applications.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;