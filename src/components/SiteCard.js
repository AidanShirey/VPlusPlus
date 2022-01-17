import React from 'react'
import './SiteCard.css'

export default function SiteCard(props) {
          return (
            <div className="sitecard">
                <video className="sitecardlineup" src={props.video} controls>
                </video>
                <div className="sitecarddesc">
                    <div className="sitecardheader">
                        <strong>{props.name}</strong>
                    </div>
                    <hr/>
                    <hr/>
                    <p>
                        <strong>{props.desc}</strong>
                    </p>
                </div>
            </div>
        )       
}
