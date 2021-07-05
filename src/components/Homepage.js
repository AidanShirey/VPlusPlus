import React from 'react'
import './Homepage.css'
import MapCard from './MapCard'

export default function Homepage() {
    return (
        <div className="homepagecard">  
          <div className="homepagecardstripe1"></div>
          <div className="homepagecardstripe2"></div>     
          <div className="row">
            <div className="item"><MapCard name="Ascent"/></div>
            <div className="item"><MapCard name="Bind"/></div>
            <div className="item"><MapCard name="Breeze"/></div>
          </div>
          <div className="row">
            <div className="item"><MapCard name="Haven"/></div>
            <div className="item"><MapCard name="Icebox"/></div>
            <div className="item"><MapCard name="Split"/></div>
          </div>
        </div>
    )
}
