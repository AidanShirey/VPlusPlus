import './style.css'
import {NavBar} from './components/NavBar'
import Homepage from './components/Homepage'
import MapSitePage from './components/MapSitePage'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="fullscreen">
        <NavBar />
        <br/>
        <div className="contentarea">
          <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/defending-ascent" component={() => <MapSitePage name="Ascent" side="Defending"/>}/>
            <Route path="/attacking-ascent" component={() => <MapSitePage name="Ascent" side="Attacking"/>}/>
            <Route path="/defending-bind" component={() => <MapSitePage name="Bind" side="Defending"/>}/>
            <Route path="/attacking-bind" component={() => <MapSitePage name="Bind" side="Attacking"/>}/>
            <Route path="/defending-breeze" component={() => <MapSitePage name="Breeze" side="Defending"/>}/>
            <Route path="/attacking-breeze" component={() => <MapSitePage name="Breeze" side="Attacking"/>}/>
            <Route path="/defending-haven" component={() => <MapSitePage name="Haven" side="Defending"/>}/>
            <Route path="/attacking-haven" component={() => <MapSitePage name="Haven" side="Attacking"/>}/>
            <Route path="/defending-icebox" component={() => <MapSitePage name="Icebox" side="Defending"/>}/>
            <Route path="/attacking-icebox" component={() => <MapSitePage name="Icebox" side="Attacking"/>}/>
            <Route path="/defending-split" component={() => <MapSitePage name="Split" side="Defending"/>}/>
            <Route path="/attacking-split" component={() => <MapSitePage name="Split" side="Attacking"/>}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
