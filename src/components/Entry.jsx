import mountFujiImg from "../assets/mount-fuji.jpg"; // Ensure this image exists

function Entry(props) {
    
  return (
    <section className="entry">
      <img src={props.img.src} alt={props.img.alt} className="entry-img" />
      <div className="entry-info">
        <span className="entry-location">{props.country}</span>
        <a
          href={props.googleMapLink}
          className="entry-maps"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Maps
        </a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="entry-date">{props.dates}</p>
        <p className="entry-desc">{props.text} </p>
      </div>
    </section>
  );
}

export default Entry;