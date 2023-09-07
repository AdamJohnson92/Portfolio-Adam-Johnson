function PortItem() {
//NEED TO BUILD STATE 

  <div className="portfolio-item">
    <a href={deployedLink}><img className="portfolio-item-img" src={require(image)}></img></a>
    <a className='portfolio-item-text-area' href={gitLink}>
      <h4>{name}</h4>
      <p className='portfolio-item-desc'> {desc} </p></a>

  </div>
}

export default function Portfolio() {
  // class PortItem {
  //   constructor(name, image, description, gitLink, deployedLink) {
  //      this.name = name;
  //      this.image = image;
  //      this.description = description;
  //      this.gitLink = gitLink;
  //      this.deployedLink = deployedLink
  //   }
  // }

  const dolly = new PortItem('Dolly', '../../assets/dolly.png', "A clone of the Social Media Platform Formerly Known As Twitter. Users can 'bleet' and comment on each other's bleets.", 'https://github.com/Tmollerhoj/Dolly', "https://dolly-bleeter-6a4dd49c0ee0.herokuapp.com/")

  const portfolioRoster = [dolly]
  return (
    <div>
      <h3>Portfolio</h3>
      <p>Click the text box to visit the GitHub Repository. Click the image to visit the deployed application.</p>
      <div className="portfolio-container">
        <div className="portfolio-item">
          <a href="https://dolly-bleeter-6a4dd49c0ee0.herokuapp.com/"><img className="portfolio-item-img" src={require('../../assets/dolly.png')}></img></a>
          <a className='portfolio-item-text-area' href='https://github.com/Tmollerhoj/Dolly'>
            <h4>Dolly Extra Words</h4>
            <p className='portfolio-item-desc'>A clone of the Social Media Platform Formerly Known As Twitter. Users can 'bleet' and comment on each other's bleets. </p></a>

        </div>

      </div>
    </div>
  );
}