import React from 'react'
import './CharacterSelect.css'
import sova from './sovaportrait.jpg'
import cypher from './cypherportrait.jpg'

export default function CharacterSelect() {
    return (
        <div className="charselect">
            <div className="spacing"><img className="imageportraitcontainer" src={sova} alt="Sova"></img></div>
            <div className="spacing"><img className="imageportraitcontainer" src={cypher} alt="Cypher"></img></div>
            <div className="dropdown">
                <button className="dropbtn">Character Select</button>
                <div className="dropdown-content">
                    <div>Sova</div>
                    <div>Cypher</div>
                </div>
            </div>
        </div>
    )
}
