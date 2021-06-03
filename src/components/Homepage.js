import React from 'react'
import Greeting from './Greeting'
import MapCard from './MapCard'

export default function Homepage() {
    return (
        <div>
        <Greeting />
          <br/>
          <MapCard name="ascent"/>
          <br/>
          <MapCard name="bind"/>
          <br/>
          <MapCard name="breeze"/>
          <br/>
          <MapCard name="haven"/>
          <br/>
          <MapCard name="icebox"/>
          <br/>
          <MapCard name="split"/>
        </div>
    )
}
