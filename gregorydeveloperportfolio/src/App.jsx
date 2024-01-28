import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PortfolioContainer from './components/PortfolioContainer';


function App() {

  return (
    <Router>
      <PortfolioContainer />
      <Routes>

        <Route>

        </Route>
      </Routes>
      
      
    </Router>
  )
}

export default App
