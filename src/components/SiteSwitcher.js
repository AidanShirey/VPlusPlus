import React from 'react'
import './SiteSwitcher.css'

export default class SiteSwitcher extends React.Component{
    constructor(props){
        super(props);
        this.name = this.props.map;
        this.sort = this.props.sort;
        this.site = this.props.site;
    }

    render(){
        return (
            <div className="siteswitcher">
                <div className='haven-a-site-button' onClick={() => this.props.handler({lineupSort:  this.sort, site: 'Lineups'})}>
                    <div className='a-site-starter'></div>
                    <div className='a-site'>
                        <div>
                            <em className='haven-desktop'><strong>Lineups</strong></em>
                            <em className='haven-mobile'><strong>L</strong></em>
                        </div>
                    </div>
                    <div className='a-site-ender'></div>
                </div>
                
                <div className='haven-b-site-button' onClick={() => this.props.handler({lineupSort:  this.sort, site: 'Postplants'})}>
                    <div className='b-site-starter'></div>
                    <div className='b-site'>
                        <div>
                            <em className='haven-desktop'><strong>Postplants</strong></em>
                            <em className='haven-mobile'><strong>P</strong></em>
                        </div>
                    </div>
                    <div className='b-site-ender'></div>
                </div>

                <div className='c-site-button' onClick={() => this.props.handler({lineupSort:  this.sort, site: 'Setups'})}>
                    <div className='c-site-starter'></div>
                    <div className='c-site'>
                        <div>
                            <em className='haven-desktop'><strong>Setups</strong></em>
                            <em className='haven-mobile'><strong>S</strong></em>
                        </div>
                    </div>
                    <div className='c-site-ender'></div>
                </div>
                
            </div>
        )
    }
}