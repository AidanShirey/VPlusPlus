import React from 'react'
import './MapSitePage.css'
import MapSitePageRow from './MapSitePageRow'
import CharacterSelect from './CharacterSelect'
import SiteSwitcher from './SiteSwitcher';
import LineupMap from './LineupMap';
import SideSwitcher from './SideSwitcher';

export default class MapSitePage extends React.Component{
    constructor(props){
        super(props);
        this.name = this.props.name;
        this.side = this.props.side;
        this.sort = this.props.sort;
        this.site = this.props.site;
        this.state = {lineupSort: this.sort,
        site: this.site};
        this.setState = this.setState.bind(this); 
    }
    
    componentDidUpdate(prevState){
        if (prevState.lineupSort !== undefined){
            if (this.state.lineupSort !== prevState.lineupSort)
                this.setState({lineupSort: prevState.lineupSort});
        }
        /*if (prevState.site !== undefined){
            if (this.state.site !== prevState.site)
                this.setState({site: prevState.site});
        }*/
    }

    render(){
        if (this.name !== "Haven"){
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
                                    <div className="mapsitetext"><strong>{this.side}</strong></div>
                                    <div className='mapsitedivider'>////////////</div>
                                    <SiteSwitcher map={this.name} handler={this.setState} site={this.state.site} sort={this.state.lineupSort}/>
                                    <SideSwitcher name={this.name} sort={this.state.lineupSort} site={this.state.site}/>
                                </div>
                                <CharacterSelect handler={this.setState} site={this.state.site} sort={this.state.lineupSort}/>
                                <div className='mapsitecutandbody'>
                                    <div className='mapsitecut'></div>
                                    <div className='mapsitecutbody'></div>
                                </div>
                                
                            </div>
                        </div>
                        <LineupMap name={this.name} side={this.side} site={this.state.site} sort={this.state.lineupSort}/>
                        <MapSitePageRow name={this.name} side={this.side} site={this.state.site} sort={this.state.lineupSort}/>
                    </div>
                </div>
            )
        }
        // If map name is equal to Haven, then return the proper site page. 
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
                                    <div className="mapsitetext"><strong>{this.side}</strong></div>
                                    <div className='mapsitedivider'>////////////</div>
                                    <SiteSwitcher map={this.name} handler={this.setState} site={this.state.site} sort={this.state.lineupSort}/>
                                    <SideSwitcher name={this.name} sort={this.state.lineupSort} site={this.state.site}/>
                                </div>
                                <CharacterSelect handler={this.setState} site={this.state.site} sort={this.state.lineupSort}/>
                                <div className='mapsitecutandbody'>
                                    <div className='mapsitecut'></div>
                                    <div className='mapsitecutbody'></div>
                                </div>
                            </div>
                        </div>
                        <LineupMap name={this.name} side={this.side} site={this.state.site} sort={this.state.lineupSort}/>
                        <MapSitePageRow name={this.name} side={this.side} site={this.state.site} sort={this.state.lineupSort}/>
                    </div>
                </div>
        )
    }

    
}
