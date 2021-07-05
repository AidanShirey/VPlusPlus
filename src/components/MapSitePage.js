import React from 'react'
import './MapSitePage.css'
import SiteCard from './SiteCard'
import CharacterSelect from './CharacterSelect'


export default function MapSitePage(props) {
    return (
        <div>
            <div className="mapsitepagecard">
                <div className="mapsitepagecardstripe1"></div>
                <div className="mapsitepagecardstripe2"></div>
                <div id="a-site" className="mapsiteheader">
                    <div className="headercontainer"><div className="mapsitehead"><strong>{props.name} A Site&nbsp;</strong></div><div className="mapsitedivider"><strong>//</strong></div><div className="mapsitetext"><strong>&nbsp;{props.side}</strong></div></div>
                    <CharacterSelect/>
                </div>
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
            </div>
            <br/>
            <div className="mapsitepagecard">
                <div className="mapsitepagecardstripe1"></div>
                <div className="mapsitepagecardstripe2"></div>
                <div id="a-site" className="mapsiteheader">
                <div className="headercontainer"><div className="mapsitehead"><strong>{props.name} B Site&nbsp;</strong></div><div className="mapsitedivider"><strong> // </strong></div><div className="mapsitetext"><strong>&nbsp;{props.side}</strong></div></div>
                    <CharacterSelect/>
                </div>
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
            </div>
            <br/>
        </div>
    )
}
