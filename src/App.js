import './style.css'
import {NavBar} from './components/NavBar'
import Homepage from './components/Homepage'
import MapSitePage from './components/MapSitePage'
import ScrollToTop from './components/ScrollToTop'
import {HashRouter as Router, Route, Switch, withRouter} from "react-router-dom"


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div id='scroll' className="fullscreen">
        <NavBar />

        <div className="contentarea">
          <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/defending-Ascent" component={() => <MapSitePage name="Ascent" side="Defending"/>}/>
            <Route path="/attacking-Ascent" component={() => <MapSitePage name="Ascent" side="Attacking"/>}/>
            <Route path="/defending-Bind" component={() => <MapSitePage name="Bind" side="Defending"/>}/>
            <Route path="/attacking-Bind" component={() => <MapSitePage name="Bind" side="Attacking"/>}/>
            <Route path="/defending-Breeze" component={() => <MapSitePage name="Breeze" side="Defending"/>}/>
            <Route path="/attacking-Breeze" component={() => <MapSitePage name="Breeze" side="Attacking"/>}/>
            <Route path="/defending-Fracture" component={() => <MapSitePage name="Fracture" side="Defending"/>}/>
            <Route path="/attacking-Fracture" component={() => <MapSitePage name="Fracture" side="Attacking"/>}/>
            <Route path="/defending-Haven" component={() => <MapSitePage name="Haven" side="Defending"/>}/>
            <Route path="/attacking-Haven" component={() => <MapSitePage name="Haven" side="Attacking"/>}/>
            <Route path="/defending-Icebox" component={() => <MapSitePage name="Icebox" side="Defending"/>}/>
            <Route path="/attacking-Icebox" component={() => <MapSitePage name="Icebox" side="Attacking"/>}/>
            <Route path="/defending-Split" component={() => <MapSitePage name="Split" side="Defending"/>}/>
            <Route path="/attacking-Split" component={() => <MapSitePage name="Split" side="Attacking"/>}/>
          </Switch>
          </ScrollToTop>
        </div>
      </div>
    </Router>
  );
}

export default App;
