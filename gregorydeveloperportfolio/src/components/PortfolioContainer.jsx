import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './pages/Home';
import projectData from '../data/projectData.json';
import ProjectGallery from './pages/ProjectGallery';

/*import Project from './pages/Project';
import Contact from './pages/Contact';*/

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const handlePageChange = (page) => {
    setCurrentPage(page);
    };

    return (
        <div className="container-fluid">
            <Router>
                <Header currentPage={currentPage} handlePageChange={handlePageChange} />
                
            <Routes>
                    <Route path="/" element={<Home handlePageChange={handlePageChange} />} />
                </Routes>
                {projectData.map((data, i) => (<ProjectGallery name={data.name} key={i} mockup={data.mockup} handlePageChange={handlePageChange}/> )) } 
            </Router>
        </div>
      );
    }

    export default PortfolioContainer