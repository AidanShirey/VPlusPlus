import React from 'react'
import './MapCard.css'
import { Link } from 'react-router-dom';

export default function MapCard(props) {
    var map = "mapcard " + props.name;
    var linkclassdefending = "defending-" + props.name;
    var linkclassattacking = "attacking-" + props.name;
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
                <Link className="mapbutton" style={{textDecoration: "none"}} to={linkclassattacking}><strong>Attacking</strong></Link>
                <div className='mdividerline1'></div>
                <div className='mdividerline2'></div>
                <Link className="mapbutton" style={{textDecoration: "none"}} to={linkclassdefending}><strong>Defending</strong></Link>
            </div>
            </div>
        </div>
    )
}
