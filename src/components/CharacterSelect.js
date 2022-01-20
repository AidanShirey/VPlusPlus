import React from 'react'
import './CharacterSelect.css'
import sova from './sovaportrait.jpg'
import cypher from './cypherportrait.jpg'

export default class CharacterSelect extends React.Component{
    render (){
        return(
            <div className="charselect">
                <div className="portraits">
                    <img onClick={() => this.props.handler({lineupSort: 'Sova'})} className="imageportraitcontainer" src={sova} alt="Sova"></img>
                    <img onClick={() => this.props.handler({lineupSort: 'Cypher'})} className="imageportraitcontainer" src={cypher} alt="Cypher"></img>
                </div>
            </div>
            )  
    }
}
