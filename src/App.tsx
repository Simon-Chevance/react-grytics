import React from "react";
import Header from "./Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "./Contact";

function App(){
    return(
        <div>
            <Header/>
            <About/>
            <Services/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}

export default App;