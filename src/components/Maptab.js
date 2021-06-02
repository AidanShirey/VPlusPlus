import React,{Component} from 'react';

export class Maptab extends Component {
  render() {
    return (
      <div className="topnavtab">
        <div className="dropdown">
          <button className="dropbtn">{this.props.name}</button>
            <div className="dropdown-content">
              <div>Overview</div>
              <div>Defending</div>
              <div>Attacking</div>
            </div>
        </div>
      </div>
    );
  }
}




