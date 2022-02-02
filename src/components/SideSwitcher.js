import React from 'react';
import './SideSwitcher.css';

function SideSwitcher() {
  return <div className='sideswitcher'>
       <div className='sidebutton1'>
            <strong>Attacking</strong>
       </div>
       <div className='sidebutton2'>
            <strong>Defending</strong>
       </div>
  </div>;
}

export default SideSwitcher;
