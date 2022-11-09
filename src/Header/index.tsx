import React from 'react';

function Header(){

    return(
        <div id="header">
            <div className="container">
                <nav>
                    <a href="/"><img className="logo"src={require('../img/schevance.png')} alt="logo" /></a>
                    <ul>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#articles">Articles</a></li>
                    </ul>
                </nav>
                <div className="header-text">
                    <p>Web designer | Front Developer | Project Leader</p>
                    <h1>Hi, I'm <span>Simon</span><br/> Chevance from France</h1>
                </div>
            </div>
        </div>
    )
}

export default Header;
