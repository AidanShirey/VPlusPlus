import React from 'react';
import {Link} from 'react-router-dom';
export default function MobileMaptab() {
    return (
    <div className="topnavtab">
        <div className="dropdown">
          <button className="dropbtn">
              <div className='hamburgermenucontainer'>
                <div className='hamburgerlinecontainer'><div className='hamburgerlineender'></div><div className='hamburgerline1'></div></div>
                <div className='hamburgerlinecontainer'><div className='hamburgerlineender'></div><div className='hamburgerline2'></div></div>
                <div className='hamburgerlinecontainer'><div className='hamburgerlineender'></div><div className='hamburgerline3'></div></div>
              </div>
          </button>
            <div className="dropdown-content">
              <Link to={"Ascent"}><div>Ascent</div></Link>
              <Link to={"Bind"}><div>Bind</div></Link>
              <Link to={"Breeze"}><div>Breeze</div></Link>
              <Link to={"Fracture"}><div>Fracture</div></Link>
              <Link to={"Haven"}><div>Haven</div></Link>
              <Link to={"Icebox"}><div>Icebox</div></Link>
              <Link to={"Split"}><div>Split</div></Link>
            </div>
        </div>
      </div>
    )
}