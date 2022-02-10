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
      site: "A-Site",
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
            <Route path="/defending-Ascent" component={() => <MapSitePage name="Ascent" side="Defending" handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count}/>}/>
            <Route path="/attacking-Ascent" component={() => <MapSitePage name="Ascent" side="Attacking" handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count}/>}/>
            <Route path="/defending-Bind" component={() => <MapSitePage name="Bind" side="Defending" handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count}/>}/>
            <Route path="/attacking-Bind" component={() => <MapSitePage name="Bind" side="Attacking" handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count}/>}/>
            <Route path="/defending-Breeze" component={() => <MapSitePage name="Breeze" side="Defending" handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count}/>}/>
            <Route path="/attacking-Breeze" component={() => <MapSitePage name="Breeze" side="Attacking" handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count}/>}/>
            <Route path="/defending-Fracture" component={() => <MapSitePage name="Fracture" side="Defending" handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count}/>}/>
            <Route path="/attacking-Fracture" component={() => <MapSitePage name="Fracture" side="Attacking" handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count}/>}/>
            <Route path="/defending-Haven" component={() => <MapSitePage name="Haven" side="Defending" handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count}/>}/>
            <Route path="/attacking-Haven" component={() => <MapSitePage name="Haven" side="Attacking" handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count}/>}/>
            <Route path="/defending-Icebox" component={() => <MapSitePage name="Icebox" side="Defending" handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count}/>}/>
            <Route path="/attacking-Icebox" component={() => <MapSitePage name="Icebox" side="Attacking" handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count}/>}/>
            <Route path="/defending-Split" component={() => <MapSitePage name="Split" side="Defending" handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count}/>}/>
            <Route path="/attacking-Split" component={() => <MapSitePage name="Split" side="Attacking" handler={this.setState} sort={this.state.lineupSort} site={this.state.site} count={this.state.count}/>}/>
          </Switch>
          </ScrollToTop>
        </div>
      </div>
    </Router>);
  };
}
