import React, {useState} from 'react'
import './MapSitePage.css'
import SiteCard from './SiteCard'
import CharacterSelect from './CharacterSelect'
var defaultcount = 1;



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
                    <div id="a-site-row" className="row">
                        <div className="item">
                            <SiteCard name={props.name} side={props.side} site="A-Site" defaultcount={1}/>
                        </div>
                        <div className="item">
                            <SiteCard name={props.name} side={props.side} site="A-Site" defaultcount={2}/>
                        </div>
                        <div className="item">
                            <SiteCard name={props.name} side={props.side} site="A-Site" defaultcount={3}/>
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
                    <div id="b-site-row" className="row">
                        <div className="item">
                            <SiteCard name={props.name} side={props.side} site="B-Site" defaultcount={1}/>
                        </div>
                        <div className="item">
                            <SiteCard name={props.name} side={props.side} site="B-Site" defaultcount={2}/>
                        </div>
                        <div className="item">
                            <SiteCard name={props.name} side={props.side} site="B-Site" defaultcount={3}/>
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
                <div id="a-site-row" className="row">
                    <div className="item">
                        <SiteCard name={props.name} side={props.side} site="A-Site" defaultcount={1}/>
                    </div>
                    <div className="item">
                        <SiteCard name={props.name} side={props.side} site="A-Site" defaultcount={2}/>
                    </div>
                    <div className="item">
                        <SiteCard name={props.name} side={props.side} site="A-Site" defaultcount={3}/>
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
                <div id="b-site-row" className="row">
                    <div className="item">
                        <SiteCard name={props.name} side={props.side} site="B-Site" defaultcount={1}/>
                    </div>
                    <div className="item">
                        <SiteCard name={props.name} side={props.side} site="B-Site" defaultcount={2}/>
                    </div>
                    <div className="item">
                        <SiteCard name={props.name} side={props.side} site="B-Site" defaultcount={3}/>
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
                <div id="c-site-row" className="row">
                    <div className="item">
                        <SiteCard name={props.name} side={props.side} site="C-Site" defaultcount={1}/>
                    </div>
                    <div className="item">
                        <SiteCard name={props.name} side={props.side} site="C-Site" defaultcount={2}/>
                    </div>
                    <div className="item">
                        <SiteCard name={props.name} side={props.side} site="C-Site" defaultcount={3}/>
                    </div>
                </div>
            </div>
            <br/>
        </div>
    )
    
}
