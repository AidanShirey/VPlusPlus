import React from 'react'
import './MapSitePage.css'
import SiteCard from './SiteCard'

export default function MapSitePage(props) {
    return (
        <div>
            <div id="a-site" className="header">
                <em><strong>A Site // {props.name}</strong></em>
            </div>
            <hr></hr>
            <br/>
            <SiteCard/>
            <br/>
            <div id="b-site" className="header">
                <em><strong>B Site // {props.name}</strong></em>
            </div>
            <hr></hr>
            <br/>
            <SiteCard/>
            <br/>
        </div>
    )
}
