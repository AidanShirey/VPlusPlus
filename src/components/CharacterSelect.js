import React from 'react'
import './CharacterSelect.css'
import controller from './controllerportrait.png'
import duelist from './duelistportrait.png'
import initiator from './initiatorportrait.png'
import sentinel from './sentinelportrait.png'
import brimstone from './brimstoneportrait.jpg'
import omen from './omenportrait.jpg'
import viper from './viperportrait.jpg'
import jett from './jettportrait.jpg'
import phoenix from './phoenixportrait.jpg'
import raze from './razeportrait.jpg'
import reyna from './reynaportrait.jpg'
import yoru from './yoruportrait.jpg'
import breach from './breachportrait.jpg'
import skye from './skyeportrait.jpg'
import sova from './sovaportrait.jpg'
import cypher from './cypherportrait.jpg'
import killjoy from './killjoyportrait.jpg'
import sage from './sageportrait.jpg'

export default class CharacterSelect extends React.Component{
    render (){
        return(
            <div className="charselect">
                <div className="portraits">
                    <div className='portraitcontainer'>
                    <div className='charselectrow'>
                        <img className="imageportraitcontainer" src={controller} alt="Controller"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Brimstone'})} className="imageportraitcontainer" src={brimstone} alt="Brimstone"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Omen'})} className="imageportraitcontainer" src={omen} alt="Omen"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Viper'})} className="imageportraitcontainer" src={viper} alt="Viper"></img>
                    </div>
                    <div className='charselectrow'>
                        <img className="imageportraitcontainer" src={duelist} alt="Duelist"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Jett'})} className="imageportraitcontainer" src={jett} alt="Jett"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Phoenix'})} className="imageportraitcontainer" src={phoenix} alt="Phoenix"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Raze'})} className="imageportraitcontainer" src={raze} alt="Raze"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Reyna'})} className="imageportraitcontainer" src={reyna} alt="Reyna"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Yoru'})} className="imageportraitcontainer" src={yoru} alt="Yoru"></img>
                    </div>
                    <div className='charselectrow'>
                        <img className="imageportraitcontainer" src={initiator} alt="Initiator"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Breach'})} className="imageportraitcontainer" src={breach} alt="Breach"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Skye'})} className="imageportraitcontainer" src={skye} alt="Skye"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Sova'})} className="imageportraitcontainer" src={sova} alt="Sova"></img>
                    </div>
                    <div className='charselectrow'>
                        <img className="imageportraitcontainer" src={sentinel} alt="Sentinel"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Cypher'})} className="imageportraitcontainer" src={cypher} alt="Cypher"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Killjoy'})} className="imageportraitcontainer" src={killjoy} alt="Killjoy"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Sage'})} className="imageportraitcontainer" src={sage} alt="Sage"></img>
                    </div>
                    </div>                    
                </div>
            </div>
            )  
    }
}
