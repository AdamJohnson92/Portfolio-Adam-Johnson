import React from "react";

function PortfolioNav({currentPage, handlePageChange}){
    return(
        <div className="nav">
            <ui>
                <li>About Me</li>
                <li><a onClick={()=>handlePageChange('Portfolio')}>Portfolio</a></li>
                <li>Contact</li>
                <li>Resume</li>
            </ui>
        </div>
    )
}

export default PortfolioNav;