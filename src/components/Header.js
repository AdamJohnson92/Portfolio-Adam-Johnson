import React from "react";
import PortfolioNav from "./Navigation";

function PortfolioHeader({currentPage, handlePageChange}){
    
    return(
        <div className="header">
            <h1>Adam Johnson</h1>
            <h2>A Web Development Portfolio</h2>
            <PortfolioNav currentPage={currentPage} handlePageChange={handlePageChange}/>
        </div>
    )
}

export default PortfolioHeader;