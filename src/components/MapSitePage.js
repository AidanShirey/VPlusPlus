import React from 'react'
import './MapSitePage.css'
import SiteCard from './SiteCard'

export default function MapSitePage(props) {
    return (
        <div>
            <div id="a-site" className="header">
                <em><strong>{props.name} A Site // {props.side}</strong></em>
            </div>
            <hr></hr>
            <br/>
            <SiteCard name="Main"/>
            <br/>
            <div id="b-site" className="header">
                <em><strong>{props.name} B Site // {props.side}</strong></em>
            </div>
            <hr></hr>
            <br/>
            <SiteCard name="Heaven"/>
            <br/>
        </div>
    )
}
