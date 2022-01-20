import React, {useState} from 'react'
import './MapSitePage.css'
import MapSitePageRow from './MapSitePageRow'
import CharacterSelect from './CharacterSelect'
import sova from './sovaportrait.jpg'
import cypher from './cypherportrait.jpg'


export default class MapSitePage extends React.Component{
    constructor(props){
        super(props);
        this.name = this.props.name;
        this.side = this.props.side;
        this.state = {lineupSort: "DefaultSpread"};
        this.setState = this.setState.bind(this); 
    }
    
    componentDidUpdate(prevState){
        if (this.state.lineupSort !== prevState.lineupSort){
            this.setState({lineupSort: prevState.lineupSort});
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
                            <div className="headercontainer"><div className="mapsitehead"><strong>{this.name} A Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{this.side}</strong></div></div>
                            <CharacterSelect handler={this.setState}/>
                        </div>
                        <MapSitePageRow name={this.name} side={this.side} site="A-Site" sort={this.state.lineupSort}/>
                    </div>
                    <br/>
                    <div className="mapsitepagecard">
                        <div className="mapsitepagecardstripe1"></div>
                        <div className="mapsitepagecardstripe2"></div>
                        <div id="b-site" className="mapsiteheader">
                        <div className="headercontainer"><div className="mapsitehead"><strong>{this.name} B Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{this.side}</strong></div></div>
                            <CharacterSelect handler={this.setState}/>
                        </div>
                        <MapSitePageRow name={this.name} side={this.side} site="B-Site" sort={this.state.lineupSort}/>
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
                        <div className="headercontainer"><div className="mapsitehead"><strong>{this.name} A Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{this.side}</strong></div></div>
                        <CharacterSelect handler={this.setState}/>
                    </div>
                    <MapSitePageRow name={this.name} side={this.side} site="A-Site" sort={this.state.lineupSort}/>
                </div>
                <br/>
                <div className="mapsitepagecard">
                    <div className="mapsitepagecardstripe1"></div>
                    <div className="mapsitepagecardstripe2"></div>
                    <div id="b-site" className="mapsiteheader">
                    <div className="headercontainer"><div className="mapsitehead"><strong>{this.name} B Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{this.side}</strong></div></div>
                        <CharacterSelect handler={this.setState}/>
                    </div>
                    <MapSitePageRow name={this.name} side={this.side} site="C-Site" sort={this.state.lineupSort}/>
                </div>
                <br/>
                <div className="mapsitepagecard">
                    <div className="mapsitepagecardstripe1"></div>
                    <div className="mapsitepagecardstripe2"></div>
                    <div id="c-site" className="mapsiteheader">
                    <div className="headercontainer"><div className="mapsitehead"><strong>{this.name} C Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{this.side}</strong></div></div>
                        <CharacterSelect handler={this.setState}/>
                    </div>
                    <MapSitePageRow name={this.name} side={this.side} site="C-Site" sort={this.state.lineupSort}/>
                </div>
                <br/>
            </div>
        )
    }
}




/*export default function MapSitePage(props) {
    const [lineupSort, setlineupSort] = useState('DefaultSpread');
    
    if (props.name !== "Haven"){
        return (
            <div className="mapsitepage">
                <div className="mapsitepagecard">
                    <div className="mapsitepagecardstripe1"></div>
                    <div className="mapsitepagecardstripe2"></div>
                    <div id="a-site" className="mapsiteheader">
                        <div className="headercontainer"><div className="mapsitehead"><strong>{props.name} A Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{props.side}</strong></div></div>
                        <CharacterSelect stateChanger={setlineupSort}/>
                    </div>
                    <MapSitePageRow name={props.name} side={props.side} site="A-Site" sort={lineupSort}/>
                </div>
                <br/>
                <div className="mapsitepagecard">
                    <div className="mapsitepagecardstripe1"></div>
                    <div className="mapsitepagecardstripe2"></div>
                    <div id="b-site" className="mapsiteheader">
                    <div className="headercontainer"><div className="mapsitehead"><strong>{props.name} B Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{props.side}</strong></div></div>
                    <CharacterSelect stateChanger={setlineupSort}/>
                    </div>
                    <MapSitePageRow name={props.name} side={props.side} site="B-Site" sort={lineupSort}/>
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
                    <CharacterSelect stateChanger={setlineupSort}/>
                </div>
                <MapSitePageRow name={props.name} side={props.side} site="A-Site" sort={lineupSort}/>
            </div>
            <br/>
            <div className="mapsitepagecard">
                <div className="mapsitepagecardstripe1"></div>
                <div className="mapsitepagecardstripe2"></div>
                <div id="b-site" className="mapsiteheader">
                <div className="headercontainer"><div className="mapsitehead"><strong>{props.name} B Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{props.side}</strong></div></div>
                    <CharacterSelect stateChanger={setlineupSort}/>
                </div>
                <MapSitePageRow name={props.name} side={props.side} site="C-Site" sort={lineupSort}/>
            </div>
            <br/>
            <div className="mapsitepagecard">
                <div className="mapsitepagecardstripe1"></div>
                <div className="mapsitepagecardstripe2"></div>
                <div id="c-site" className="mapsiteheader">
                <div className="headercontainer"><div className="mapsitehead"><strong>{props.name} C Site</strong></div><div className="mapsitedivider">//</div><div className="mapsitetext"><strong>{props.side}</strong></div></div>
                    <CharacterSelect stateChanger={setlineupSort}/>
                </div>
                <MapSitePageRow name={props.name} side={props.side} site="C-Site" sort={lineupSort}/>
            </div>
            <br/>
        </div>
    )
    
}

function CharacterSelect(props){
    return(
    <div className="charselect">
    <div className="portraits">
        <img onClick={() => this.props.stateChanger('Sova')} className="imageportraitcontainer" src={sova} alt="Sova"></img>
        <img onClick={() => this.props.stateChanger('Cypher')} className="imageportraitcontainer" src={cypher} alt="Cypher"></img>
    </div>
</div>
)  
}

*/
