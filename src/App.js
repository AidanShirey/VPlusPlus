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
          <Homepage />
        </div>
      </div>
  );
}

export default App;
