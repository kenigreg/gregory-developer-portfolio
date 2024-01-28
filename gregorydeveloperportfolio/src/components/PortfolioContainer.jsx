import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Header from './Header';
/*import Home from './pages/Home';
import About from './pages/About';
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
          <Header />
        </div>
      );
    }

    export default PortfolioContainer