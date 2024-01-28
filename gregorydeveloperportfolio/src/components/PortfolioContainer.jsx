import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
/*import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';*/

function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const handlePageChange = (page) => {
    setCurrentPage(page);
     };

    return (
        <div className="container-fluid">
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          <Home handlePageChange={handlePageChange}/>
        </div>
      );
    }

    export default PortfolioContainer