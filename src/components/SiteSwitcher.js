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
        if (this.name !== "Haven"){
            return (
            <div className="siteswitcher">
            <div className='a-site-button' onClick={() => this.props.handler({lineupSort:  this.props.sort,
            site: 'A-Site'})}>
                <div className='a-site-starter'></div>
                <div className='a-site'>
                    <div>
                        <em><strong>A - Site</strong></em>
                    </div>
                </div>
                <div className='a-site-ender'></div>
            </div>
            
            <div className='b-site-button' onClick={() => this.props.handler({lineupSort:  this.props.sort, 
                site: 'B-Site'})}>
                <div className='b-site-starter'></div>
                <div className='b-site'>
                    <div>
                        <em><strong>B - Site</strong></em>
                    </div>
                </div>
                <div className='b-site-ender'></div>
            </div>
            
        </div>)
            
        }
        return (
            <div className="siteswitcher">
                <div className='haven-a-site-button' onClick={() => this.props.handler({lineupSort:  this.props.sort,
                site: 'A-Site'})}>
                    <div className='a-site-starter'></div>
                    <div className='a-site'>
                        <div>
                            <em className='haven-desktop'><strong>A - Site</strong></em>
                            <em className='haven-mobile'><strong>A</strong></em>
                        </div>
                    </div>
                    <div className='a-site-ender'></div>
                </div>
                
                <div className='haven-b-site-button' onClick={() => this.props.handler({lineupSort:  this.props.sort, 
                    site: 'B-Site'})}>
                    <div className='b-site-starter'></div>
                    <div className='b-site'>
                        <div>
                            <em className='haven-desktop'><strong>B - Site</strong></em>
                            <em className='haven-mobile'><strong>B</strong></em>
                        </div>
                    </div>
                    <div className='b-site-ender'></div>
                </div>

                <div className='c-site-button' onClick={() => this.props.handler({lineupSort:  this.props.sort, 
                    site: 'C-Site'})}>
                    <div className='c-site-starter'></div>
                    <div className='c-site'>
                        <div>
                            <em className='haven-desktop'><strong>C - Site</strong></em>
                            <em className='haven-mobile'><strong>C</strong></em>
                        </div>
                    </div>
                    <div className='c-site-ender'></div>
                </div>
                
            </div>
        )
    }
}