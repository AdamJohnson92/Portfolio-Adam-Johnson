import React from "react";
import Body from "./BodyContainer";


function PortfolioNav({ currentPage, handlePageChange }) {
    return (
        <div className="nav">
            <ul>
                <li> <a onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'active-nav' : 'inactive-nav'}> About Me</a></li>
                <li><a onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'active-nav' : 'inactive-nav'}>Portfolio</a></li>
                <li><a onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'active-nav' : 'inactive-nav'}>Contact</a></li>
                <li><a onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'active-nav' : 'inactive-nav'}>Resume</a></li>
            </ul>
        </div>
    )
}

export default PortfolioNav;