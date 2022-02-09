import React from 'react';
import {Link} from 'react-router-dom';
import './SideSwitcher.css';

function SideSwitcher(props) {
var linkclassdefending = "defending-" + props.name;
var linkclassattacking = "attacking-" + props.name;
  return <div className='sideswitcher'>
       <Link to={linkclassattacking} className='sidebutton1' sort={props.sort} site={props.site}>
            <strong>Attacking</strong>
       </Link>
       <Link to={linkclassdefending} className='sidebutton2' sort={props.sort} site={props.site}>
            <strong>Defending</strong>
       </Link>
  </div>;
}

export default SideSwitcher;
