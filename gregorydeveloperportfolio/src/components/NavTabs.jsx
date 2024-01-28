import React from 'react';

function NavTabs(props) {
    return (
        <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#home">
             <img src="src/images/MyPics.jpeg" alt="My Picture" width="80" height="100" className="d-inline-block align-text-bottom" />
                    Gregory Oghenah
            </a>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                            <a
                                href="#home"
                                onClick={() => props.handlePageChange('Home')}
                                className="nav-link">
                                Home</a>
                </li>
                <li className="nav-item">
                            <a
                                href="#project gallery"
                                onClick={() => props.handlePageChange('Project Gallery')}
                                className="nav-link">
                                Project Gallery</a>
                </li>
                <li className="nav-item">
                            <a
                                href="#project"
                                onClick={() => props.handlePageChange('Project')}
                                className="nav-link">
                                Project</a>
                </li>
                <li className="nav-item">
                            <a
                                href="#contact"
                                onClick={() => props.handlePageChange('Contact')}
                                className="nav-link">
                                Contact</a>
                </li>
            </ul>
        </div>
        </div>
            </nav>
            </header>
        );
}
    
export default NavTabs;
