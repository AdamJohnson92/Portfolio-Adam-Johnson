import React from "react";
import dolly from "../../assets/dolly.png"
import maki from "../../assets/maki.png"
import rpg from "../../assets/rpg.PNG"
import tech from "../../assets/tech-blog.png"
import rainy from "../../assets/rainy.png"
import readme from "../../assets/readme-generator.png"
import hireMe from "../../assets/hireMe.png"
import workScheduler from "../../assets/scheduler.PNG"
import PortItem from "../Project.js";


const portfolioRoster = [
  {
    itemName: 'Dolly',
    image: dolly,
    description: "A clone of the Social Media Platform Formerly Known As Twitter. Users can 'bleet' and comment on each other's bleets.",
    gitLink: 'https://github.com/Tmollerhoj/Dolly',
    deployedLink: "https://drive.google.com/file/d/1BCYjfl61L8OlwWnbXwRum9hWHovmhxvt/view"
  },
  {
    itemName: 'Maki the Menace',
    image: maki,
    description: "This is a simple website that I made for my cat, complete with a haiku and a collection of trading cards.",
    gitLink: 'https://github.com/AdamJohnson92/Maki-the-Menace',
    deployedLink: "https://adamjohnson92.github.io/Maki-the-Menace/"
  }, {
    itemName: "Heroes of D'ev",
    image: rpg,
    description: 'A turn-based fantasy RPG game where you play as a hero and slay monsters. Made entirely with vanilla javascript.',
    gitLink: 'https://github.com/AdamJohnson92/RPG',
    deployedLink: 'https://adamjohnson92.github.io/RPG/'
  }, {
    itemName: 'Rainy Day Parkz',
    image: rainy,
    description: "A weather app that allows users to search for a National Park and pull up the current and forecasted weather for that park.",
    gitLink: 'https://github.com/AdamJohnson92/Rainy-Day-Flightz',
    deployedLink: 'https://adamjohnson92.github.io/Rainy-Day-Flightz/'
  }, {
    itemName: 'MVC Tech Blog',
    image: tech,
    description: "A tech blog app built using MVC framework with Handlebars. Users can share thoughts on current technologies in web development.",
    gitLink: 'https://github.com/AdamJohnson92/MVC-Tech-Blog'
  }, {
    itemName: 'Command Line README Generator',
    image: readme,
    description: "A very useful app that allows users to answer Inquirer prompts in a command-line application that will generate a README.md file.",
    gitLink: 'https://github.com/AdamJohnson92/README_Generator'
  }, {
    itemName: 'HireMe',
    image: hireMe,
    description: "An App that allows potential employers to view candidate profiles for tech positions.",
    gitLink: 'https://github.com/AdamJohnson92/HireMe',
    deployedLink: 'https://obscure-dusk-41418-6f9c2367f998.herokuapp.com/'
  } , {
    itemName: 'Work Day Scheduler',
    image: workScheduler,
    description: "An hourly scheduler that changes colors dynamically according to the current time.",
    gitLink: 'https://github.com/AdamJohnson92/Work-Day-Scheduler',
    deployedLink: 'https://adamjohnson92.github.io/Work-Day-Scheduler/'
  }
]


export default function Portfolio() {

  return (
    <div className='body-content'>
      <h3>Portfolio</h3>
      <p>Click the text box to visit the GitHub Repository. Click the image to visit the deployed application if it is still actively deployed.</p>
      <p>(Note: Some applications are used entirely in the command line interface and have no deployments. Other applications that were deployed with Heroku may no longer have live deployments)</p>
      <div className="portfolio-container">
        <PortItem portfolioRoster={portfolioRoster} />
      </div>

    </div>

  );
}