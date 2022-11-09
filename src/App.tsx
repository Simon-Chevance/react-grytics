import React from "react";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "./Contact";
import Articles from "./Articles";
import Footer from "./Footer";


function App(){
    return(
        <div>
            <Header/>
            <About/>
            <Services/>
            <Portfolio/>
            <Contact/>
            <Articles/>
            <Footer/>
        </div>
    )
}

export default App;