import React from 'react'
import './MapSitePage.css'
import MapSitePageRow from './MapSitePageRow'
import CharacterSelect from './CharacterSelect'
import SiteSwitcher from './SiteSwitcher';
import LineupMap from './LineupMap';

export default class MapSitePage extends React.Component{
    constructor(props){
        super(props);
        this.name = this.props.name;
        this.side = this.props.side;
        this.sort = this.props.sort;
        this.site = this.props.site;
        this.role = this.props.role;
        this.count = this.props.count;
    }

    render(){ 
        return (
            <div className="mapsitepage">
                    <div className="mapsitepagecard">
                        <div id="a-site" className="mapsiteheader">
                            <div className="headercontainer">
                                <div className='mapnamecontainer'>
                                    <div className="mapsitehead"><strong>{this.name}</strong></div>
                                    <div className='mapsitedeskdividercontainer'>
                                        <div className='mapsitedeskdivider1'></div>
                                        <div className='mapsitedeskdivider2'></div>
                                    </div>
                                    <SiteSwitcher map={this.name} handler={this.props.handler} site={this.site} sort={this.sort}/>
                                    <div className='activefiltercontainer'>
                                        <strong>Active Filter: {this.props.sort}</strong>
                                    </div>
                                </div>
                                <CharacterSelect handler={this.props.handler} site={this.site} sort={this.sort} role={this.role}/>
                                <div className='mapsitecutandbody'>
                                    <div className='mapsitecut'></div>
                                    <div className='mapsitecutbody'></div>
                                </div>
                            </div>
                        </div>
                        <LineupMap name={this.name} side={this.side} site={this.site} sort={this.sort} handler={this.props.handler} count={this.props.count}/>
                        <MapSitePageRow name={this.name} side={this.side} site={this.site} sort={this.sort}/>
                    </div>
                </div>
        )
    }

    
}
