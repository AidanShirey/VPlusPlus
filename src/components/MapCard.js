import React from 'react'
import './MapCard.css'
import { Link } from 'react-router-dom';

export default function MapCard(props) {
    var map = "mapcard " + props.name;
    var linkclassdefending = "defending-" + props.name;
    var linkclassattacking = "attacking-" + props.name;
    return (
        <div className={map}>
            <div className="mapbutton">
                <strong>{props.name}</strong>
            </div>
            <Link className="mapbutton" style={{textDecoration: "none"}} to={linkclassattacking}><strong>Attacking</strong></Link>
            <Link className="mapbutton" style={{textDecoration: "none"}} to={linkclassdefending}><strong>Defending</strong></Link>
        </div>
    )
}
