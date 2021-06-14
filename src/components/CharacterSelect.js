import React from 'react'
import './CharacterSelect.css'
import sova from './sovaportrait.jpg'
import cypher from './cypherportrait.jpg'

export default function CharacterSelect() {
    return (
        <div className="charselect">
            <div className="description">Click a Character Portrait to select Lineup Options.</div>
            <div className="portraits"><div className="spacing"><img className="imageportraitcontainer" src={sova} alt="Sova"></img></div>
            <div className="spacing"><img className="imageportraitcontainer" src={cypher} alt="Cypher"></img></div></div>
            
        </div>
    )
}
