import React, { useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import PortfolioHeader from "./Header";


function Body() {

    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        } else if (currentPage === 'Portfolio') {
            return <Portfolio />
        } else if (currentPage === 'Contact') {
            return <Contact />
        } else if (currentPage ==='Resume') {
            return <Resume />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return(
        <> 
            <PortfolioHeader currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </>
    )
}
export default Body;