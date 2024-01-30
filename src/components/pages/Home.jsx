import React from 'react';
import "./home.css";

function Home(props) {

    return (
        <div className="row home">
            <div className="jumbotron text-center col-7 hello">
            <h1 className="display-4">Hello, I'm Gregory Oghenah</h1>
            <p className="lead">A versatile Frontend Web Developer <br/> Specializing in developing React Applications. Click below to see my body of work</p> 
            <a className="btn btn-primary btn-lg" href="#project" role="button" onClick={() => props.handlePageChange('Project')}>Projects</a>
            </div>
            
            <div className="col-2 myPics">
                <img src="./src/images/gregory_oghenah.jpg" alt="My Picture" width="300" height="240" />
                
            </div>
    </div>
    )
}


    
    

export default Home;