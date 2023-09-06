export default function Portfolio() {
  return (
    <div>
      <h3>Portfolio</h3>
      <div className="portfolio-container">
        <div className="portfolio-item">
          <a href="https://dolly-bleeter-6a4dd49c0ee0.herokuapp.com/"><img className="portfolio-item-img" src={require('../../assets/dolly.png')}></img></a>
          <a className='portfolio-item-text-area'href='https://github.com/Tmollerhoj/Dolly'>
            <h4>Dolly Extra Words</h4>
            <p className='portfolio-item-desc'>A clone of the Social Media Platform Formerly Known As Twitter. Users can 'bleet' and comment on each other's bleets. </p></a>

        </div>

      </div>
    </div>
  );
}