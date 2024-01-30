import React from "react";

function Project(props) {
    //const mainProject = projectData.map()
    return (
        <div className="card mb-3" style={{maxWidth: "540px"}}>
        <div className="row g-0">
        <div className="col-md-4">
        <img src={props.mockup} className="img-fluid rounded-start" alt={props.name}/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <a href={props.github} className="card-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={props.webpage} className="card-link" target="_blank" rel="noopener noreferrer">WebPage</a>
      </div>
    </div>
            </div>
            </div>
                   
    )
}



export default Project;