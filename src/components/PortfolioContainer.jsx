import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Wrapper from './Wrapper';
import Title from './Title';
import Header from './Header';
import Home from './pages/Home';
import projectData from '../data/projectData.json';
import ProjectGallery from './pages/ProjectGallery';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

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
                <Wrapper>
                <Title>Project Gallery</Title>
                {projectData.map((data, index) => (<ProjectGallery name={data.name} key={index} mockup={data.mockup} handlePageChange={handlePageChange} />))} 
                </Wrapper>
                <Wrapper>
                <Title>Projects</Title>
                    {projectData.map((data, index) => (<Project name={data.name} key={index} mockup={data.mockup} webpage={data.webpage} github={data.github} />))} 
                </Wrapper>
                <Contact />
                <Footer />
            </Router>
        </div>
      );
    }

    export default PortfolioContainer