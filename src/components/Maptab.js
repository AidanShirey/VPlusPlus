import React from 'react';
import {Link} from 'react-router-dom';
export default function Maptab(props) {
    return (
      <div className="topnavtab">
        <Link className='tab' to={props.name}><strong>{props.name}</strong></Link>  
      </div>
    )
}





