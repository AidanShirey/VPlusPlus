import React from 'react'
import './MapSitePage.css'
import SiteCard from './SiteCard'
import CharacterSelect from './CharacterSelect'


export default function MapSitePage(props) {
    return (
        <div>
            <CharacterSelect/>
            <div id="a-site" className="header">
                <em><strong>{props.name} A Site // {props.side}</strong></em>
            </div>
            <hr></hr>
            <br/>
            <SiteCard name="Heaven to Site"/>
            <br/>
            <div id="b-site" className="header">
                <em><strong>{props.name} B Site // {props.side}</strong></em>
            </div>
            <hr></hr>
            <br/>
            <SiteCard name="CT to Main Arch"/>
            <br/>
        </div>
    )
}
