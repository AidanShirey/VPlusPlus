import React from 'react'
import './MapSitePage.css'
import SiteCard from './SiteCard'
import CharacterSelect from './CharacterSelect'


export default function MapSitePage(props) {
    return (
        <div>
            <div id="a-site" className="header row item">
                <strong>{props.name} A Site // {props.side}</strong>
                <CharacterSelect/>
            </div>
            <br/>
            <div className="row">
                <div className="item">
                <SiteCard name="Heaven to Site"/>
                </div>
                <div className="item">
                <SiteCard name="Heaven to Generator"/>
                </div>
                <div className="item">
                <SiteCard name="Heaven to Mid"/>
                </div>
            </div>
            <br/>
            <div id="b-site" className="header row item">
                <strong>{props.name} B Site // {props.side}</strong>
                <CharacterSelect/>
            </div>
            <br/>
            <div className="row">
                <div className="item">
                    <SiteCard name="CT to Main Arch"/>
                </div>
                <div className="item">
                    <SiteCard name="CT to Site"/>
                </div>
                <div className="item">
                    <SiteCard name="CT to Market"/>
                </div>
            </div>
            
            <br/>
        </div>
    )
}
