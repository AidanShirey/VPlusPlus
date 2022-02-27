import React from 'react'
import './CharacterSelect.css'
import controller from './controllerportrait.png'
// import duelist from './duelistportrait.png'
import initiator from './initiatorportrait.png'
import sentinel from './sentinelportrait.png'
import brimstone from './brimstoneportrait.jpg'
import omen from './omenportrait.jpg'
import viper from './viperportrait.jpg'
// import jett from './jettportrait.jpg'
// import phoenix from './phoenixportrait.jpg'
// import raze from './razeportrait.jpg'
// import reyna from './reynaportrait.jpg'
// import yoru from './yoruportrait.jpg'
// import breach from './breachportrait.jpg'
// import skye from './skyeportrait.jpg'
import sova from './sovaportrait.jpg'
import cypher from './cypherportrait.jpg'
import killjoy from './killjoyportrait.jpg'
// import sage from './sageportrait.jpg'

export default class CharacterSelect extends React.Component{
    constructor(props){
        super(props);
        this.state = {role: this.props.role, sort: this.props.sort};
        this.setState = this.setState.bind(this); 
    }

    componentDidUpdate(prevState){
        /*if (prevState.role !== undefined){
            if (this.state.role !== prevState.role)
                this.setState({role: prevState.role});
        }*/
    }

    render (){
        switch (this.state.role){
            case 'row1':
                switch (this.state.sort){
                    case 'Brimstone':
                        return(
                            <div className="charselect">
                                <div className="portraits">
                                    <div className='portraitcontainer'>
                                    <div className='charselectgroup1'>
                                    <div className='charselectrow1 displayrow'>
                                        <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={controller} alt="Controller"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Initiator"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Brimstone', site: this.props.site, role: "row1"})} className="imageportraitcontainer active" src={brimstone} alt="Brimstone"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Omen', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={omen} alt="Omen"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Viper', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={viper} alt="Viper"></img>
                                    </div>
                                    <div className='charselectrow2'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={initiator} alt="Initiator"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img>
                                            </div>
                                        </div>
                                        
                                        
                                        <img onClick={() => this.props.handler({lineupSort: 'Sova', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={sova} alt="Sova"></img>
                                    </div>
                                    </div>
                                    <div className='charselectgroup2'>
                                    <div className='charselectrow3'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Cypher', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={cypher} alt="Cypher"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Killjoy', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={killjoy} alt="Killjoy"></img>
                                    </div>
                                    </div>
                                    
                                    
                                    </div>                    
                                </div>
                            </div>
                            );
                        case 'Omen':
                            return(
                                <div className="charselect">
                                <div className="portraits">
                                    <div className='portraitcontainer'>
                                    <div className='charselectgroup1'>
                                    <div className='charselectrow1 displayrow'>
                                        <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={controller} alt="Controller"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Initiator"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Brimstone', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={brimstone} alt="Brimstone"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Omen', site: this.props.site, role: "row1"})} className="imageportraitcontainer active" src={omen} alt="Omen"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Viper', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={viper} alt="Viper"></img>
                                    </div>
                                    <div className='charselectrow2'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={initiator} alt="Initiator"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img>
                                            </div>
                                        </div>
                                        
                                        
                                        <img onClick={() => this.props.handler({lineupSort: 'Sova', site: this.props.site, role: "row2"})} className="imageportraitcontainer" src={sova} alt="Sova"></img>
                                    </div>
                                    </div>
                                    <div className='charselectgroup2'>
                                    <div className='charselectrow3'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Cypher', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={cypher} alt="Cypher"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Killjoy', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={killjoy} alt="Killjoy"></img>
                                    </div>
                                    </div>
                                    
                                    
                                    </div>                    
                                </div>
                            </div>
                                );
                            case 'Viper':
                                return(
                                    <div className="charselect">
                                <div className="portraits">
                                    <div className='portraitcontainer'>
                                    <div className='charselectgroup1'>
                                    <div className='charselectrow1 displayrow'>
                                        <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={controller} alt="Controller"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Initiator"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Brimstone', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={brimstone} alt="Brimstone"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Omen', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={omen} alt="Omen"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Viper', site: this.props.site, role: "row1"})} className="imageportraitcontainer active" src={viper} alt="Viper"></img>
                                    </div>
                                    <div className='charselectrow2'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={initiator} alt="Initiator"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img>
                                            </div>
                                        </div>
                                        
                                        
                                        <img onClick={() => this.props.handler({lineupSort: 'Sova', site: this.props.site, role: "row2"})} className="imageportraitcontainer" src={sova} alt="Sova"></img>
                                    </div>
                                    </div>
                                    <div className='charselectgroup2'>
                                    <div className='charselectrow3'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Cypher', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={cypher} alt="Cypher"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Killjoy', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={killjoy} alt="Killjoy"></img>
                                    </div>
                                    </div>
                                    
                                    
                                    </div>                    
                                </div>
                            </div>
                                    );
                                default:
                                    return(
                                        <div className="charselect">
                                <div className="portraits">
                                    <div className='portraitcontainer'>
                                    <div className='charselectgroup1'>
                                    <div className='charselectrow1 displayrow'>
                                        <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={controller} alt="Controller"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Initiator"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Brimstone', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={brimstone} alt="Brimstone"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Omen', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={omen} alt="Omen"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Viper', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={viper} alt="Viper"></img>
                                    </div>
                                    <div className='charselectrow2'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={initiator} alt="Initiator"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img>
                                            </div>
                                        </div>
                                        
                                        
                                        <img onClick={() => this.props.handler({lineupSort: 'Sova', site: this.props.site, role: "row2"})} className="imageportraitcontainer" src={sova} alt="Sova"></img>
                                    </div>
                                    </div>
                                    <div className='charselectgroup2'>
                                    <div className='charselectrow3'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Cypher', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={cypher} alt="Cypher"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Killjoy', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={killjoy} alt="Killjoy"></img>
                                    </div>
                                    </div>
                                    
                                    
                                    </div>                    
                                </div>
                            </div>
                                        );
                }
                
                case 'row2':
                    switch (this.state.sort) {
                        case 'Sova':
                                    return(
                                        <div className="charselect">
                                <div className="portraits">
                                    <div className='portraitcontainer'>
                                    <div className='charselectgroup1'>
                                    <div className='charselectrow1'>
                                        <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={controller} alt="Controller"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Initiator"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Brimstone', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={brimstone} alt="Brimstone"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Omen', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={omen} alt="Omen"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Viper', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={viper} alt="Viper"></img>
                                    </div>
                                    <div className='charselectrow2 displayrow'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={initiator} alt="Initiator"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img>
                                            </div>
                                        </div>
                                        
                                        
                                        <img onClick={() => this.props.handler({lineupSort: 'Sova', site: this.props.site, role: "row2"})} className="imageportraitcontainer active" src={sova} alt="Sova"></img>
                                    </div>
                                    </div>
                                    <div className='charselectgroup2'>
                                    <div className='charselectrow3'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Cypher', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={cypher} alt="Cypher"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Killjoy', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={killjoy} alt="Killjoy"></img>
                                    </div>
                                    </div>
                                    
                                    
                                    </div>                    
                                </div>
                            </div>
                                        );
                                    default:
                                        return(
                                            <div className="charselect">
                                <div className="portraits">
                                    <div className='portraitcontainer'>
                                    <div className='charselectgroup1'>
                                    <div className='charselectrow1'>
                                        <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={controller} alt="Controller"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Initiator"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Brimstone', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={brimstone} alt="Brimstone"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Omen', site: this.props.site, role: "row1"})} className="imageportraitcontainer active" src={omen} alt="Omen"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Viper', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={viper} alt="Viper"></img>
                                    </div>
                                    <div className='charselectrow2 displayrow'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={initiator} alt="Initiator"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img>
                                            </div>
                                        </div>
                                        
                                        
                                        <img onClick={() => this.props.handler({lineupSort: 'Sova', site: this.props.site, role: "row2"})} className="imageportraitcontainer" src={sova} alt="Sova"></img>
                                    </div>
                                    </div>
                                    <div className='charselectgroup2'>
                                    <div className='charselectrow3'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Cypher', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={cypher} alt="Cypher"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Killjoy', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={killjoy} alt="Killjoy"></img>
                                    </div>
                                    </div>
                                    
                                    
                                    </div>                    
                                </div>
                            </div>
                                            );
                    }

                        
                    case 'row3':
                            switch (this.state.sort){
                                case 'Cypher':
                                    return(
                                        <div className="charselect">
                                <div className="portraits">
                                    <div className='portraitcontainer'>
                                    <div className='charselectgroup1'>
                                    <div className='charselectrow1'>
                                        <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={controller} alt="Controller"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Initiator"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Brimstone', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={brimstone} alt="Brimstone"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Omen', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={omen} alt="Omen"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Viper', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={viper} alt="Viper"></img>
                                    </div>
                                    <div className='charselectrow2'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={initiator} alt="Initiator"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img>
                                            </div>
                                        </div>
                                        
                                        
                                        <img onClick={() => this.props.handler({lineupSort: 'Sova', site: this.props.site, role: "row2"})} className="imageportraitcontainer" src={sova} alt="Sova"></img>
                                    </div>
                                    </div>
                                    <div className='charselectgroup2'>
                                    <div className='charselectrow3 displayrow'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Cypher', site: this.props.site, role: "row3"})} className="imageportraitcontainer active" src={cypher} alt="Cypher"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Killjoy', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={killjoy} alt="Killjoy"></img>
                                    </div>
                                    </div>
                                    
                                    
                                    </div>                    
                                </div>
                            </div>
                                        );
                                    case 'Killjoy':
                                        return(
                                            <div className="charselect">
                                <div className="portraits">
                                    <div className='portraitcontainer'>
                                    <div className='charselectgroup1'>
                                    <div className='charselectrow1'>
                                        <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={controller} alt="Controller"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Initiator"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Brimstone', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={brimstone} alt="Brimstone"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Omen', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={omen} alt="Omen"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Viper', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={viper} alt="Viper"></img>
                                    </div>
                                    <div className='charselectrow2'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={initiator} alt="Initiator"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img>
                                            </div>
                                        </div>
                                        
                                        
                                        <img onClick={() => this.props.handler({lineupSort: 'Sova', site: this.props.site, role: "row2"})} className="imageportraitcontainer" src={sova} alt="Sova"></img>
                                    </div>
                                    </div>
                                    <div className='charselectgroup2'>
                                    <div className='charselectrow3 displayrow'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Cypher', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={cypher} alt="Cypher"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Killjoy', site: this.props.site, role: "row3"})} className="imageportraitcontainer active" src={killjoy} alt="Killjoy"></img>
                                    </div>
                                    </div>
                                    
                                    
                                    </div>                    
                                </div>
                            </div>
                                            );
                                        
                                        default:
                                            return(
                                                <div className="charselect">
                                <div className="portraits">
                                    <div className='portraitcontainer'>
                                    <div className='charselectgroup1'>
                                    <div className='charselectrow1'>
                                        <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={controller} alt="Controller"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Initiator"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Brimstone', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={brimstone} alt="Brimstone"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Omen', site: this.props.site, role: "row1"})} className="imageportraitcontainer active" src={omen} alt="Omen"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Viper', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={viper} alt="Viper"></img>
                                    </div>
                                    <div className='charselectrow2'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={initiator} alt="Initiator"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img>
                                            </div>
                                        </div>
                                        
                                        
                                        <img onClick={() => this.props.handler({lineupSort: 'Sova', site: this.props.site, role: "row2"})} className="imageportraitcontainer" src={sova} alt="Sova"></img>
                                    </div>
                                    </div>
                                    <div className='charselectgroup2'>
                                    <div className='charselectrow3 displayrow'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Cypher', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={cypher} alt="Cypher"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Killjoy', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={killjoy} alt="Killjoy"></img>
                                    </div>
                                    </div>
                                    
                                    
                                    </div>                    
                                </div>
                            </div>
                                                );
                            }
                            
                            default:
                                return(
                                    <div className="charselect">
                                <div className="portraits">
                                    <div className='portraitcontainer'>
                                    <div className='charselectgroup1'>
                                    <div className='charselectrow1 displayrow'>
                                        <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={controller} alt="Controller"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Initiator"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Brimstone', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={brimstone} alt="Brimstone"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Omen', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={omen} alt="Omen"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Viper', site: this.props.site, role: "row1"})} className="imageportraitcontainer" src={viper} alt="Viper"></img>
                                    </div>
                                    <div className='charselectrow2'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={initiator} alt="Initiator"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row3'})} className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img>
                                            </div>
                                        </div>
                                        
                                        
                                        <img onClick={() => this.props.handler({lineupSort: 'Sova', site: this.props.site, role: "row2"})} className="imageportraitcontainer" src={sova} alt="Sova"></img>
                                    </div>
                                    </div>
                                    <div className='charselectgroup2'>
                                    <div className='charselectrow3'>
                                    <div className="dropdown">
                                            <button className="dropbtn"><img className="roleportraitcontainer" src={sentinel} alt="Sentinel"></img></button>
                                            <div className="role-dropdown-content">
                                                <img onClick={() => this.setState({role : 'row1'})} className="roleportraitcontainer" src={controller} alt="Controller"></img>
                                                <img onClick={() => this.setState({role : 'row2'})} className="roleportraitcontainer" src={initiator} alt="Duelist"></img>
                                            </div>
                                        </div>
                                        <img onClick={() => this.props.handler({lineupSort: 'Cypher', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={cypher} alt="Cypher"></img>
                                        <img onClick={() => this.props.handler({lineupSort: 'Killjoy', site: this.props.site, role: "row3"})} className="imageportraitcontainer" src={killjoy} alt="Killjoy"></img>
                                    </div>
                                    </div>
                                    
                                    
                                    </div>                    
                                </div>
                            </div>
                                    );

        }
    }
}
