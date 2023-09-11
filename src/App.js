import './App.css';
import React from 'react';
import PortfolioFooter from './components/Footer';
import Body from './components/BodyContainer';
import { Tooltip } from 'react-tooltip';

function App() {
  return (
    <div className='portfolio-app'>
       <Body />
       <PortfolioFooter />
    </div>

  );
}

export default App;
