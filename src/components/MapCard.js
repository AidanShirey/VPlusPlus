import React from 'react'
import './MapCard.css'
import { Link } from 'react-router-dom';

export default function MapCard(props) {
    var map = "mapcard " + props.name;
    return (
        <div className={map}>
            <div className='mapoverlay'>
            <div className='namecontainer'>
                <div className="mapname">
                    <strong>{props.name}</strong>
                </div>
                <div className='mapnamecut'></div>
            </div>
            <div className='buttoncontainer'>
                <Link className="mapbutton" style={{textDecoration: "none"}} to={props.name}><strong>View Map Content</strong></Link>
            </div>
            </div>
        </div>
    )
}
