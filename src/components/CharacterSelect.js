import React from 'react'
import './CharacterSelect.css'
import sova from './sovaportrait.jpg'
import cypher from './cypherportrait.jpg'

export default function CharacterSelect() {
    /*
    function characterSwitch(){
        const element = (<div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>)
    }
    */
    return (
        <div className="charselect">
            <div className="portraits">
                <img className="imageportraitcontainer" src={sova} alt="Sova"></img>
                <img className="imageportraitcontainer" src={cypher} alt="Cypher"></img>
            </div>
        </div>
    )
}
