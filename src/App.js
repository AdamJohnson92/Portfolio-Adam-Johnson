import './App.css';
import React from 'react';
import PortfolioHeader from './components/Header'
import PortfolioFooter from './components/Footer';
import PortfolioBody from './components/BodyContainer';

function App() {
  return (
    <div className='portfolio-app'>
       <PortfolioHeader />
       <PortfolioBody />
       <PortfolioFooter />
    </div>

  );
}

export default App;
