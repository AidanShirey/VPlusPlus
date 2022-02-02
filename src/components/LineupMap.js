import React from 'react';
import './LineupMap.css';
import LSiteCard from './LSiteCard';



export default class LineupMap extends React.Component{
    constructor(props){
        super(props);
        this.name = this.props.name;
        this.side = this.props.side;
    }

    // FOR RENDER: MAKE SITECARD APPEAR BESIDE LINE UP MAP FOR SPACE OPTIMIZATION.
    // TO DO: MAKE GRID ROW AFTER PLOT CONTAINER THAT MATCHES WITH CORRESPONDING SIZES AND FILLS PROPER AMOUNT OF SITECARDS.
    // AMOUNT OF SITECARDS = AMOUNT OF GRID ROWS - 1

    render(){
        return (
            <div className='lineupmap'>
                <LSiteCard name={this.props.name} side={this.props.side} site={this.props.site} sort={this.props.sort} count={1}/>
                <div className={`plotcontainer ${this.name}map`}>
                    <div className='plot'>
                        <div className='point'></div>
                    </div>
                </div>
            </div>
        )
    }
}