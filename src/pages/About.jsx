import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';


class About extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Jumbotron title="About Page" subtitle="Put Something Here!" />
                <div className="container">
                    <h2>Welcome</h2>
                    <p> is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived 
                        not only five centuries,</p>
                    <p> but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with 
                        the release of Letraset sheets containing Lorem Ipsum passages, and more
                            recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum</p>
                            <p> but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with 
                        the release of Letraset sheets containing Lorem Ipsum passages, and more
                            recently with desktop publishing software like Aldus PageMaker including 
                            versions of Lorem Ipsum</p>
            </div>
            <Footer />
            </div>
        
        );
    }
}

export default About;