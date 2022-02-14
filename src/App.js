import './style.css'
import {NavBar} from './components/NavBar'
import Homepage from './components/Homepage'
import MapSitePage from './components/MapSitePage'
import ScrollToTop from './components/ScrollToTop'
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import React from 'react'


export default class App extends React.Component{
  constructor(){
    super();
    this.state = {lineupSort: "DefaultSpread",
      site: "Lineups",
      side: "Defending",
      role: "row1",
      count: 1};
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

  render() {
    return(
    <Router basename={process.env.PUBLIC_URL}>
      <div id='scroll' className="fullscreen">
        <NavBar />

        <div className="contentarea">
          <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/Ascent" component={() => <MapSitePage name="Ascent" side={this.state.side} handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count} role={this.state.role}/>}/>
            <Route path="/Bind" component={() => <MapSitePage name="Bind" side={this.state.side} handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count} role={this.state.role}/>}/>
            <Route path="/Breeze" component={() => <MapSitePage name="Breeze" side={this.state.side} handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count} role={this.state.role}/>}/>
            <Route path="/Fracture" component={() => <MapSitePage name="Fracture" side={this.state.side} handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count} role={this.state.role}/>}/>
            <Route path="/Haven" component={() => <MapSitePage name="Haven" side={this.state.side} handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count} role={this.state.role}/>}/>
            <Route path="/Icebox" component={() => <MapSitePage name="Icebox" side={this.state.side} handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count} role={this.state.role}/>}/>
            <Route path="/Split" component={() => <MapSitePage name="Split" side={this.state.side} handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count} role={this.state.role}/>}/>
          </Switch>
          </ScrollToTop>
        </div>
      </div>
    </Router>);
  };
}
