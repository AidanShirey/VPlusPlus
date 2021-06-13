import React from 'react'
import './MapCard.css'
import { Link } from 'react-router-dom';

export default function MapCard(props) {
    var map = "mapcard " + props.name;
    var linkclassdefending = "defending-" + props.name;
    var linkclassattacking = "attacking-" + props.name;
    return (
        <div className={map}>
            <div className="mapcardspacing mapbuttoncontainer">
                <button className="mapbutton"><strong>{props.name}</strong></button>
                <div className="buttondivider"><strong>//</strong></div>
                <Link className="mapbutton" to={linkclassdefending} style={{textDecoration: "none"}}><strong>Defending</strong></Link>
                <div className="buttondivider"><strong>//</strong></div>
                <Link className="mapbutton" to={linkclassattacking} style={{textDecoration: "none"}}><strong>Attacking</strong></Link>
            </div>
        </div>
    )
}
