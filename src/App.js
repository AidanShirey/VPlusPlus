import './style.css'
import {NavBar} from './components/NavBar'
import Homepage from './components/Homepage'
import MapSitePage from './components/MapSitePage'
function App() {
  return (
      <div className="fullscreen">
        <NavBar />
        <br/>
        <div className="contentarea">
          <MapSitePage name="Defending"/>
        </div>
      </div>
  );
}

export default App;
