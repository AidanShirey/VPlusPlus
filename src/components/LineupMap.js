import React from 'react';
import './LineupMap.css';



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
                <div className={`plotcontainer ${this.name}map`}>
                    <div className='plot'>
                        <div className='point'></div>
                    </div>
                </div>
            </div>
        )
    }
}