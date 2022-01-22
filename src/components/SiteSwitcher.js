import React from 'react'
import './SiteSwitcher.css'

export default class SiteSwitcher extends React.Component{
    constructor(props){
        super(props);
        this.sort = this.props.sort;
        this.site = this.props.site;
    }

    render(){
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
                
            </div>
        )
    }
}