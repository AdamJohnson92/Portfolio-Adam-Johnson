import React from "react";
import dolly from "./dolly.png"
import PortItem from "../PortItem.js";


const portfolioRoster = [{
  itemName: 'Dolly',
  image: dolly,
  description: "A clone of the Social Media Platform Formerly Known As Twitter. Users can 'bleet' and comment on each other's bleets.",
  gitLink: 'https://github.com/Tmollerhoj/Dolly',
  deployedLink: "https://dolly-bleeter-6a4dd49c0ee0.herokuapp.com/"
}]


export default function Portfolio() {

  return (
    <div>
      <h3>Portfolio</h3>
      <p>Click the text box to visit the GitHub Repository. Click the image to visit the deployed application.</p>
      <div className="portfolio-container">
        <PortItem portfolioRoster={portfolioRoster} />
      </div>

    </div>

  );
}