import React from 'react'
import './SiteSwitcher.css'

export default class SiteSwitcher extends React.Component{
    render(){
        return (
            <div className="siteswitcher">
                <div className='a-site-starter'></div>
                <div className='a-site'>
                    <div>
                        <em><strong>A - Site</strong></em>
                    </div>
                </div>
                <div className='a-site-ender'></div>
                <div className='b-site-starter'></div>
                <div className='b-site'>
                    <div>
                    <em><strong>B - Site</strong></em>
                    </div>
                </div>
                <div className='b-site-ender'></div>
            </div>
        )
    }
}