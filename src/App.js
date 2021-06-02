import './style.css';
import {NavBar} from './components/NavBar';
import Greeting from './components/Greeting';
import MapCard from './components/MapCard';
function App() {
  return (
      <div className="fullscreen">
        <NavBar />
        <br/>
        <div className="contentarea">
          <Greeting />
          <br/>
          <MapCard name="ascent"/>
          <br/>
          <MapCard name="bind"/>
          <br/>
          <MapCard name="breeze"/>
          <br/>
          <MapCard name="haven"/>
          <br/>
          <MapCard name="icebox"/>
          <br/>
          <MapCard name="split"/>
        </div>
      </div>
  );
}

export default App;
