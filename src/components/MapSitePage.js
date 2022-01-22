import React from 'react'
import './MapSitePage.css'
import MapSitePageRow from './MapSitePageRow'
import CharacterSelect from './CharacterSelect'
import SiteSwitcher from './SiteSwitcher';

export default class MapSitePage extends React.Component{
    constructor(props){
        super(props);
        this.name = this.props.name;
        this.side = this.props.side;
        this.state = {lineupSort: "DefaultSpread",
        site: "A-Site"};
        this.setState = this.setState.bind(this); 
    }
    
    componentDidUpdate(prevState){
        if (prevState.lineupSort !== undefined){
            if (this.state.lineupSort !== prevState.lineupSort)
                this.setState({lineupSort: prevState.lineupSort});
        }
        if (prevState.site !== undefined){
            if (this.state.site !== prevState.site)
                this.setState({site: prevState.site});
        }
    }

    render(){
        if (this.name !== "Haven"){
            return (
                <div className="mapsitepage">
                    <div className="mapsitepagecard">
                        <div className="mapsitepagecardstripe1"></div>
                        <div className="mapsitepagecardstripe2"></div>
                        <div id="a-site" className="mapsiteheader">
                            <div className="headercontainer">
                                <div className='mapnamecontainer'>
                                    <div className="mapsitehead"><strong>{this.name}</strong></div>
                                    <div className="mapsitetext"><strong>{this.side}</strong></div>
                                    <div className='mapsitedivider'>////////////</div>
                                    <SiteSwitcher handler={this.setState} site={this.state.site} sort={this.state.lineupSort}/>
                                </div>
                                <CharacterSelect handler={this.setState} site={this.state.site} sort={this.state.lineupSort}/>
                            </div>
                        </div>
                        <MapSitePageRow name={this.name} side={this.side} site={this.state.site} sort={this.state.lineupSort}/>
                    </div>
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
                        <div className="headercontainer">
                        <div className='mapnamecontainer'>
                            <div className="mapsitehead"><strong>{this.name}</strong></div>
                            <div className="mapsitetext"><strong>{this.side}</strong></div>
                        </div>
                        <CharacterSelect handler={this.setState}/>
                        </div>
                    </div>
                    <MapSitePageRow name={this.name} side={this.side} site={this.state.site} sort={this.state.lineupSort}/>
                </div>
            </div>
        )
    }
}