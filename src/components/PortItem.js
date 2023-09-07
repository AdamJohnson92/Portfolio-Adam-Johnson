

export default function PortItem( props ) {

  return (
    <div>
      {props.portfolioRoster.map((item) => (
        <div className="portfolio-item">
          <a href={item.deployedLink}><img className="portfolio-item-img" src={item.image}></img></a>
          <a className='portfolio-item-text-area' href={item.gitLink}>
            <h4>{item.itemName}</h4>
            <p className='portfolio-item-desc'> {item.description} </p></a>
        </div>
      ))}
    </div>
  )
}