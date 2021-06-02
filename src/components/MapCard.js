import React from 'react'
import './MapCard.css'

export default function MapCard(props) {
    var map = "mapcard " + props.name;
    return (
        <div className={map}>
            <div className="mapcardspacing mapbuttoncontainer">
                <button className="mapbutton">Overview</button>
                <button className="mapbutton">Defending</button>
                <button className="mapbutton">Attacking</button>
            </div>
        </div>
    )
}
