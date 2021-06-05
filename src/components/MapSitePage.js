import React from 'react'
import './MapSitePage.css'
import SiteCard from './SiteCard'
import video from './Sova-A-Ascent-Defense/Heaven-Site.mp4'
import video2 from './Sova-B-Ascent-Defense/CT-MainArch.mp4'


export default function MapSitePage(props) {
    return (
        <div>
            <div id="a-site" className="header">
                <em><strong>{props.name} A Site // {props.side}</strong></em>
            </div>
            <hr></hr>
            <br/>
            <SiteCard name="Heaven to Site" video={video}/>
            <br/>
            <div id="b-site" className="header">
                <em><strong>{props.name} B Site // {props.side}</strong></em>
            </div>
            <hr></hr>
            <br/>
            <SiteCard name="CT to Main Arch" video={video2}/>
            <br/>
        </div>
    )
}
