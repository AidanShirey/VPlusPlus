import React from 'react'
import './OverviewPage.css'

export default function OverviewPage(props) {
    return (
        <div className="overviewcard">
            <div className="overviewsplit image">
                <img src="./ascentbg.png" alt="ascent"></img>
            </div>
            <div className="overviewsplit description">
                <div className="header">
                    <strong>{props.name}</strong>
                </div>
            </div>
        </div>
    )
}
