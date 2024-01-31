import { Tooltip } from "react-tooltip"

export default function PortItem(props) {

  return (
    <>
      {props.portfolioRoster.map((item) => (
        <div className="portfolio-item">
          <a
            className="image-link"
            href={item.deployedLink}
            data-tooltip-id="image-tooltip"
            data-tooltip-content={"Click here to see the deployed application!"}
            data-tooltip-place="top"
          >

            <img className="portfolio-item-img" src={item.image} alt={item.altTag}></img></a>
          <Tooltip anchorSelect=".image-link" place="top" />
          <a
            className='portfolio-item-text-area'
            href={item.gitLink}
            data-tooltip-id="image-tooltip"
            data-tooltip-content={"Click here to go to the GitHub repository!"}
            data-tooltip-place="bottom"
          >
            <h4>{item.itemName}</h4>
            <p className='portfolio-item-desc'> {item.description} </p></a>
            <Tooltip anchorSelect=".portfolio-item-text-area" place="bottom" />
        </div>
      ))}
    </>
  )
}