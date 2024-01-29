import React from "react";

function ProjectGallery(props) {
    
    return (
        <div className="row">
            <div className="col">
            <div className="card" style={{width: "18rem"}}>
                <img src={props.mockup} className="card-img-top" alt={props.name} />
                <div className="card-body">
                <p className="card-text">{ props.name }</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">HTML, Inquirer, Prompt</li>
                <li className="list-group-item">CSS</li>
                <li className="list-group-item">JavaScript</li>
                    </ul>
                    <a href="#project" className="btn btn-primary" onClick={() => props.handlePageChange('Project')}>more info</a>
                </div>
                </div>
            </div>
           
    )
}


export default ProjectGallery;