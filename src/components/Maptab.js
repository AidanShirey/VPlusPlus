import React,{Component} from 'react';

export class Maptab extends Component {
  render() {
    return (
      <div className="topnavtab">
        <div className="dropdown">
          <button className="dropbtn">{this.props.name}</button>
            <div className="dropdown-content">
              <a>Overview</a>
              <a>Defense</a>
              <a>Offense</a>
              <a>Lineups</a>
            </div>
        </div>
      </div>
    );
  }
}




