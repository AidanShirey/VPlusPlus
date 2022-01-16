import React from 'react'
import './MapSitePage.css'
import SiteCard from './SiteCard'
import CharacterSelect from './CharacterSelect'


export default function MapSitePage(props) {
    if (props.name !== "Haven"){
        return (
            <div className="mapsitepage">
                <div className="mapsitepagecard">
                    <div className="mapsitepagecardstripe1"></div>
                    <div className="mapsitepagecardstripe2"></div>
                    <div id="a-site" className="mapsiteheader">
                        <div className="headercontainer"><div className="mapsitehead"><strong>{props.name} A Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{props.side}</strong></div></div>
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
                    <div id="b-site" className="mapsiteheader">
                    <div className="headercontainer"><div className="mapsitehead"><strong>{props.name} B Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{props.side}</strong></div></div>
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
    // If map name is equal to Haven, then return the proper site page. 
    return (
        <div className="mapsitepage">
            <div className="mapsitepagecard">
                <div className="mapsitepagecardstripe1"></div>
                <div className="mapsitepagecardstripe2"></div>
                <div id="a-site" className="mapsiteheader">
                    <div className="headercontainer"><div className="mapsitehead"><strong>{props.name} A Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{props.side}</strong></div></div>
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
                <div id="b-site" className="mapsiteheader">
                <div className="headercontainer"><div className="mapsitehead"><strong>{props.name} B Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{props.side}</strong></div></div>
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
            <div className="mapsitepagecard">
                <div className="mapsitepagecardstripe1"></div>
                <div className="mapsitepagecardstripe2"></div>
                <div id="c-site" className="mapsiteheader">
                <div className="headercontainer"><div className="mapsitehead"><strong>{props.name} C Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{props.side}</strong></div></div>
                    <CharacterSelect/>
                </div>
                <div className="row">
                    <div className="item">
                        <SiteCard name="Window to Default"/>
                    </div>
                    <div className="item">
                        <SiteCard name="Window to Back-site"/>
                    </div>
                    <div className="item">
                        <SiteCard name="Mid to A-side plant"/>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
    
}
