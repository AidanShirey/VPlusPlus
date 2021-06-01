import React,{Component} from 'react';
import {Maptab} from './Maptab';

export class NavBar extends Component {
  render() {
    return (
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
    );
  }
}


