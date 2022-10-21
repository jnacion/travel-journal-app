const TravelLocation = (props) => {
    return (
        <div className="travel-location">
            <img className="travel-image" src={props.imgSource} alt={props.country} />
            <div className="location-details">
                <div className="location-country">
                    <img className="location-pin-icon" src="/images/location-pin-icon.svg" alt="location" />{props.country}
                    <a href={props.locationLink}>View on Google Maps</a>
                </div>
                <div className="location-title">{props.title}</div>
                <div className="location-date">{props.dates}</div>
                <div className="location-text">{props.text}</div>
            </div>
        </div>
    );
}
export default TravelLocation;