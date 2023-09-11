import React from "react";
import dolly from "../../assets/dolly.png"
import maki from "../../assets/maki.png"
import rpg from "../../assets/rpg.PNG"
import PortItem from "../PortItem.js";


const portfolioRoster = [
  {
  itemName: 'Dolly',
  image: dolly,
  description: "A clone of the Social Media Platform Formerly Known As Twitter. Users can 'bleet' and comment on each other's bleets.",
  gitLink: 'https://github.com/Tmollerhoj/Dolly',
  deployedLink: "https://dolly-bleeter-6a4dd49c0ee0.herokuapp.com/"
},
{
  itemName: 'Maki the Menace',
  image: maki,
  description: "This is a simple website that I made for my cat, complete with a haiku and a collection of trading cards.",
  gitLink: 'https://github.com/AdamJohnson92/Maki-the-Menace',
  deployedLink: "https://dolly-bleeter-6a4dd49c0ee0.herokuapp.com/"
},
{
  itemName: "Heroes of D'ev",
  image: rpg,
  description: 'A turn-based fantasy RPG game where you play as a hero and slay monsters. Made entirely with vanilla javascript.',
  gitLink: 'https://github.com/AdamJohnson92/RPG',
  deployedLink: 'https://adamjohnson92.github.io/RPG/'
}
]


export default function Portfolio() {

  return (
    <div className='body-content'>
      <h3>Portfolio</h3>
      <p>Click the text box to visit the GitHub Repository. Click the image to visit the deployed application.</p>
      <div className="portfolio-container">
        <PortItem portfolioRoster={portfolioRoster} />
      </div>

    </div>

  );
}