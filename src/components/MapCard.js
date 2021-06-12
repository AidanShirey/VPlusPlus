import React from 'react'
import './MapCard.css'

export default function MapCard(props) {
    var map = "mapcard " + props.name;
    return (
        <div className={map}>
            <div className="mapcardspacing mapbuttoncontainer">
                <button className="mapbutton"><strong>{props.name}</strong></button>
                <div className="buttondivider"><strong>//</strong></div>
                <button className="mapbutton"><strong>Defending</strong></button>
                <div className="buttondivider"><strong>//</strong></div>
                <button className="mapbutton"><strong>Attacking</strong></button>
            </div>
        </div>
    )
}
