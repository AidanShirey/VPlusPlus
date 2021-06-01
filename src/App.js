import logo from './logo.svg';
import './style.css';
import {Maptab} from './components/Maptab';

function App() {
  return (
      <div className="fullscreen">
      <div className="topnavbar">
        <div className="logo"><strong>V++</strong></div>
        <div className="dividerline">|</div>
        <div className="topnavtab">
          <Maptab name="Ascent"/>
        </div>
        <div className="topnavtab">
          <Maptab name="Bind"/>
        </div>
        <div className="topnavtab">
          <Maptab name="Breeze"/>
        </div>
        <div className="topnavtab">
          <Maptab name="Haven"/>
        </div>
        <div className="topnavtab">
          <Maptab name="Icebox"/>
        </div>
        <div className="topnavtab">
          <Maptab name="Split"/>
        </div>
      </div>
    </div>
  );
}

export default App;
