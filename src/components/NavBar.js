import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Maptab from './Maptab';
import MobileMaptab from './MobileMaptab';

export class NavBar extends Component {
  render() {
    return (
        <div className="topnavbar">
            <Link className="logo" style={{textDecoration: "none"}} to="/">
              <strong>V++</strong>
            </Link>
            <div className="dividerline"> <div className='dividerline1'></div> <div className='dividerline2'></div> </div>
            <div className="desktopnav">
              <Maptab name="Ascent"/>
              <Maptab name="Bind"/>
              <Maptab name="Breeze"/>
              <Maptab name="Fracture"/>
              <Maptab name="Haven"/>
              <Maptab name="Icebox"/>
              <Maptab name="Split"/>
            </div>
            <div className="mobilenav">
              <MobileMaptab/>
            </div>
        </div>
    );
  }
}


