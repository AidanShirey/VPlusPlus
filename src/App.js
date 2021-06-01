import logo from './logo.svg';
import './style.css';
import {NavBar} from './components/NavBar';
import Greeting from './components/Greeting';
function App() {
  return (
      <div className="fullscreen">
        <NavBar />
        <br/>
        <div className="contentarea">
          <Greeting />
        </div>
      </div>
  );
}

export default App;
