import React from 'react'
import './Homepage.css'
import MapCard from './MapCard'

export default function Homepage() {
    return (
        <div>       
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
