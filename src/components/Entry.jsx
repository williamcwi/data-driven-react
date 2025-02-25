export default function Entry(props) {
    return (
        <>
            <article className="card">
                <div className="card-image">
                    <img className="main-image" src={props.img.src} alt={props.img.alt} />
                </div>
                <div className="card-details">
                    <img className="marker" src="src/assets/marker.svg" alt="marker" />
                    <span className="country">{props.country}</span>
                    <a href={props.map}>View on Google Maps</a>
                    <h2 className="entry-title">{props.title}</h2>
                    <p className="dates">{props.dates}</p>
                    <p className="entry-texts">{props.text}</p>
                </div>
            </article>
        </>
    )
}