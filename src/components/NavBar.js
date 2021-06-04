import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Maptab from './Maptab';

export class NavBar extends Component {
  render() {
    return (
        <div className="topnavbar">
            <Link className="logo" style={{textDecoration: "none"}} to="/">
              <strong>V++</strong>
            </Link>
            <div className="dividerline"> // </div>
            <Maptab name="Ascent"/>
            <Maptab name="Bind"/>
            <Maptab name="Breeze"/>
            <Maptab name="Haven"/>
            <Maptab name="Icebox"/>
            <Maptab name="Split"/>
        </div>
    );
  }
}


