import logo from './logo.svg';
import './style.css';
import {Maptab} from './components/Maptab';

function App() {
  return (
      <div className="fullscreen">
      <div className="topnavbar">
        <div className="logo"><strong>V++</strong></div>
        <div className="dividerline">|</div>
          <Maptab name="Ascent"/>
          <Maptab name="Bind"/>
          <Maptab name="Breeze"/>
          <Maptab name="Haven"/>
          <Maptab name="Icebox"/>
          <Maptab name="Split"/>
      </div>
    </div>
  );
}

export default App;
