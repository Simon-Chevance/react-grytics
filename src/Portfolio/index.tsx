import React from 'react';

function Portfolio() {
    return (
        <div id="portfolio">
            <div className="container">
                <h1 className="sub-title">My Work</h1>
                <div className="work-list">
                    <div className="work">
                        <img alt="bandicoot" src="../../img/bandicoot.jpg"/>
                            <div className="layer">
                                <h3>Remake Crash Bandicoot</h3>
                                <p>At the end of my first year of study at Supinfo,
                                    we were asked to remake a world famous video game, Crash Bandicoot in group.
                                    For that, we had to use Unity, the C# language and we had to realize the graphics in
                                    pixel art.</p>
                                <a href="/"><i className="fas fa-external-link-alt"/></a>
                            </div>
                    </div>
                    <div className="work">
                        <img alt="doctolib" src="../../img/doctolib.jpg"/>
                            <div className="layer">
                                <h3>Platform for making appointments</h3>
                                <p>At the end of my 2nd year of study at Supinfo,
                                    we were asked in group to create an appointment scheduling platform,
                                    similar to doctolib.</p>
                                <a href="/"><i className="fas fa-external-link-alt"/></a>
                            </div>
                    </div>
                    <div className="work">
                        <img alt="drive" src="../../img/logo-drive.png"/>
                            <div className="layer">
                                <h3>iDrive</h3>
                                <p>At the end of my 3rd year of study at Supinfo,
                                    we were asked in group to create a cloud storage platform, similar to iCloud,
                                    Drive or any other cloud storage platform.</p>
                                <a href="/"><i className="fas fa-external-link-alt"/></a>
                            </div>
                    </div>
                </div>
                <a href="/" className="btn">See more</a>
            </div>
        </div>
    );
}

export default Portfolio;