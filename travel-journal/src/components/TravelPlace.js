export default function TravelPlace(props) {
    let lastContent = (props.id === props.dataCount);
    return (
        <div className="place--container">
            <div className="place">
                <img className="place--image" src={`./images/${props.coverImg}`} alt="travel place" />
                <div className="place--info">
                    <div className="place--location-info">
                        <img className="place--location" src="./images/location.png" alt="location"/>
                        <span className="place--country">{props.country}</span>
                        <a className="place--google-map" href={props.googleMap}>View on Google Maps</a>
                    </div>
                    <p className="place--title">{props.title}</p>
                    <p className="place--period">{props.startDate} - {props.endDate}</p>
                    <p className="place--content">{props.content}</p>
                </div>
            </div>
            { !lastContent && <hr /> }
        </div>
    )
}