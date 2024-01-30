import React from "react";
import './projectgallery.css';

function ProjectGallery(props) {
    
    return (
        <div className="row galleryRow">
            <div className="col">
            <div className="card" style={{width: "18rem"}}>
                <img src={props.mockup} className="card-img-top" alt={props.name} />
                <div className="card-body">
                <p className="card-text">{ props.name }</p>
            </div>
                </div>
                </div>
            </div>
    )
}


export default ProjectGallery;