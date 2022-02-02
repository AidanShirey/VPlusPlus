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
    constructor(props){
        super(props);
    }
    
    
    
    render (){
        return(
            <div className="charselect">
                <div className="portraits">
                    <div className='portraitcontainer'>
                    <div className='charselectgroup1'>
                    <div className='charselectrow1'>
                        <img className="roleportraitcontainer" src={controller} alt="Controller"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Brimstone', site: this.props.site})} className="imageportraitcontainer" src={brimstone} alt="Brimstone"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Omen', site: this.props.site})} className="imageportraitcontainer" src={omen} alt="Omen"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Viper', site: this.props.site})} className="imageportraitcontainer" src={viper} alt="Viper"></img>
                    </div>
                    <div className='charselectrow2'>
                        <img className="roleportraitcontainer" src={duelist} alt="Duelist"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Jett', site: this.props.site})} className="imageportraitcontainer" src={jett} alt="Jett"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Phoenix', site: this.props.site})} className="imageportraitcontainer" src={phoenix} alt="Phoenix"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Raze', site: this.props.site})} className="imageportraitcontainer" src={raze} alt="Raze"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Reyna', site: this.props.site})} className="imageportraitcontainer" src={reyna} alt="Reyna"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Yoru', site: this.props.site})} className="imageportraitcontainer" src={yoru} alt="Yoru"></img>
                    </div>
                    </div>
                    <div className='charselectgroup2'>
                    <div className='charselectrow1'>
                        <img className="roleportraitcontainer" src={initiator} alt="Initiator"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Breach', site: this.props.site})} className="imageportraitcontainer" src={breach} alt="Breach"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Skye', site: this.props.site})} className="imageportraitcontainer" src={skye} alt="Skye"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Sova', site: this.props.site})} className="imageportraitcontainer" src={sova} alt="Sova"></img>
                    </div>
                    <div className='charselectrow2'>
                        <img className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Cypher', site: this.props.site})} className="imageportraitcontainer" src={cypher} alt="Cypher"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Killjoy', site: this.props.site})} className="imageportraitcontainer" src={killjoy} alt="Killjoy"></img>
                        <img onClick={() => this.props.handler({lineupSort: 'Sage', site: this.props.site})} className="imageportraitcontainer" src={sage} alt="Sage"></img>
                    </div>
                    </div>
                    
                    
                    </div>                    
                </div>
            </div>
            )  
    }
}
