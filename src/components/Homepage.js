import React from 'react'
import Greeting from './Greeting'
import MapCard from './MapCard'

export default function Homepage() {
    return (
        <div>
        <Greeting />
          <br/>
          <MapCard name="Ascent"/>
          <br/>
          <MapCard name="Bind"/>
          <br/>
          <MapCard name="Breeze"/>
          <br/>
          <MapCard name="Haven"/>
          <br/>
          <MapCard name="Icebox"/>
          <br/>
          <MapCard name="Split"/>
        </div>
    )
}
