import React,{Component} from 'react';
import {Link} from 'react-router-dom';
export default function Maptab(props) {
    var linkclassdefending = "defending-" + props.name;
    var linkclassattacking = "attacking-" + props.name;
    return (
    <div className="topnavtab">
        <div className="dropdown">
          <button className="dropbtn"><strong>{props.name}</strong></button>
            <div className="dropdown-content">
              <Link to={linkclassdefending}><div>Defending</div></Link>
              <Link to={linkclassattacking}><div>Attacking</div></Link>
            </div>
        </div>
      </div>
    )
}





