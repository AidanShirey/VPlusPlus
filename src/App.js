import './style.css'
import {NavBar} from './components/NavBar'
import Homepage from './components/Homepage'
import MapSitePage from './components/MapSitePage'
import ScrollToTop from './components/ScrollToTop'
import {HashRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div id='scroll' className="fullscreen">
        <NavBar />

        <div className="contentarea">
          <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/defending-Ascent" component={() => <MapSitePage name="Ascent" side="Defending" sort="DefaultSpread" site="A-Site"/>}/>
            <Route path="/attacking-Ascent" component={() => <MapSitePage name="Ascent" side="Attacking" sort="DefaultSpread" site="A-Site"/>}/>
            <Route path="/defending-Bind" component={() => <MapSitePage name="Bind" side="Defending" sort="DefaultSpread" site="A-Site"/>}/>
            <Route path="/attacking-Bind" component={() => <MapSitePage name="Bind" side="Attacking" sort="DefaultSpread" site="A-Site"/>}/>
            <Route path="/defending-Breeze" component={() => <MapSitePage name="Breeze" side="Defending" sort="DefaultSpread" site="A-Site"/>}/>
            <Route path="/attacking-Breeze" component={() => <MapSitePage name="Breeze" side="Attacking" sort="DefaultSpread" site="A-Site"/>}/>
            <Route path="/defending-Fracture" component={() => <MapSitePage name="Fracture" side="Defending" sort="DefaultSpread" site="A-Site"/>}/>
            <Route path="/attacking-Fracture" component={() => <MapSitePage name="Fracture" side="Attacking" sort="DefaultSpread" site="A-Site"/>}/>
            <Route path="/defending-Haven" component={() => <MapSitePage name="Haven" side="Defending" sort="DefaultSpread" site="A-Site"/>}/>
            <Route path="/attacking-Haven" component={() => <MapSitePage name="Haven" side="Attacking" sort="DefaultSpread" site="A-Site"/>}/>
            <Route path="/defending-Icebox" component={() => <MapSitePage name="Icebox" side="Defending" sort="DefaultSpread" site="A-Site"/>}/>
            <Route path="/attacking-Icebox" component={() => <MapSitePage name="Icebox" side="Attacking" sort="DefaultSpread" site="A-Site"/>}/>
            <Route path="/defending-Split" component={() => <MapSitePage name="Split" side="Defending" sort="DefaultSpread" site="A-Site"/>}/>
            <Route path="/attacking-Split" component={() => <MapSitePage name="Split" side="Attacking" sort="DefaultSpread" site="A-Site"/>}/>
          </Switch>
          </ScrollToTop>
        </div>
      </div>
    </Router>
  );
}

export default App;
