import React from 'react'
import './SiteCard.css'

export default function SiteCard(props) {
    return (
        <div className="sitecard">
            <video className="sitelineup" src={props.video} controls>
            </video>
            <div className="sitedesc">
                <div className="header">
                    <strong>{props.name}</strong>
                </div>
                <p>
                    <strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis justo quis ex pellentesque, sit amet sodales libero tincidunt. Etiam tortor felis, mollis nec eros at, tempor tempus nunc. Cras luctus, nisi sollicitudin dignissim vestibulum, sapien felis consectetur dolor, nec luctus ex enim eu arcu.</strong>
                </p>
            </div>
        </div>
    )
}
