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
    deployedLink: "https://drive.google.com/file/d/1BCYjfl61L8OlwWnbXwRum9hWHovmhxvt/view",
    altTag: "A social media website with a black and blue color scheme and a sheep logo. There is a text box for posting, and several posts below it."
  },
  {
    itemName: 'Maki the Menace',
    image: maki,
    description: "This is a simple website that I made for my cat, complete with a haiku and a collection of trading cards.",
    gitLink: 'https://github.com/AdamJohnson92/Maki-the-Menace',
    deployedLink: "https://adamjohnson92.github.io/Maki-the-Menace/",
    altTag: "A display of several digital trading cards, showing Adam's cat, Maki, in various funny poses."
  }, {
    itemName: "Heroes of Craet",
    image: rpg,
    description: 'A turn-based fantasy RPG game where you play as a hero and slay monsters. Made with React.js.',
    gitLink: 'https://github.com/AdamJohnson92/Heroes-of-Craet',
    deployedLink: 'https://adamjohnson92.github.io/Heroes-of-Craet/',
    altTag: 'A display of a fantasy role playing game with pixel art graphics. On the left is a character stat sheet giving information about the character. On the right, you can see that character is standing ready to fight a goblin.'

  }, {
    itemName: 'Rainy Day Parkz',
    image: rainy,
    description: "A weather app that allows users to search for a National Park and pull up the current and forecasted weather for that park.",
    gitLink: 'https://github.com/AdamJohnson92/Rainy-Day-Flightz',
    deployedLink: 'https://adamjohnson92.github.io/Rainy-Day-Flightz/',
    altTag: 'A screenshot of a weather report for the Grand Canyon. It shows the current weather in a big box, and the 5 day forecast below it. The background is of a forested area at sunset.'
  }, {
    itemName: 'MVC Tech Blog',
    image: tech,
    description: "A tech blog app built using MVC framework with Handlebars. Users can share thoughts on current technologies in web development.",
    gitLink: 'https://github.com/AdamJohnson92/MVC-Tech-Blog',
    altTag: 'A lists of blog posts about various technology topics. Each posts displays the poster and the content.'
  }, {
    itemName: 'Command Line README Generator',
    image: readme,
    description: "A very useful app that allows users to answer Inquirer prompts in a command-line application that will generate a README.md file.",
    gitLink: 'https://github.com/AdamJohnson92/README_Generator',
    altTag: 'A series of prompts with the users response. These prompts ask questions about what should be generated for the README.md file.'
  }, {
    itemName: 'Work Day Scheduler',
    image: workScheduler,
    description: "An hourly scheduler that changes colors dynamically according to the current time.",
    gitLink: 'https://github.com/AdamJohnson92/Work-Day-Scheduler',
    deployedLink: 'https://adamjohnson92.github.io/Work-Day-Scheduler/',
    altTag: 'A block schedule for a single day with past hour block in gray, future hour blocks in green, and the current hour block in red. It gives the current time at the top, and there is a Clear Schedule button to delete all of the text in each block.'
  }
]


export default function Portfolio() {

  return (
    <div className='body-content text-green'>
      <h3>Portfolio</h3>
      <p>Click the text box to visit the GitHub Repository. Click the image to visit the deployed application if it is still actively deployed.</p>
      <p>(Note: Some applications are used entirely in the command line interface and have no deployments. Other applications that were deployed with Heroku may no longer have live deployments, and may have screen recording demonstrations.)</p>
      <div className="portfolio-container">
        <PortItem portfolioRoster={portfolioRoster} />
      </div>

    </div>

  );
}