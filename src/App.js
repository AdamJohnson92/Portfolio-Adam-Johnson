import './App.css';
import React from 'react';
import PortfolioHeader from './components/Header'
import PortfolioFooter from './components/Footer';

function App() {
  return (
    <div className='portfolio-app'>
       <PortfolioHeader />
       <PortfolioFooter />
    </div>

  );
}

export default App;
