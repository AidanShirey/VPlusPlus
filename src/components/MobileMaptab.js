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
              <Link to={"defending-Ascent"}><div>Ascent Defending</div></Link>
              <Link to={"attacking-Ascent"}><div>Ascent Attacking</div></Link>
              <Link to={"defending-Bind"}><div>Bind Defending</div></Link>
              <Link to={"attacking-Bind"}><div>Bind Attacking</div></Link>
              <Link to={"defending-Breeze"}><div>Breeze Defending</div></Link>
              <Link to={"attacking-Breeze"}><div>Breeze Attacking</div></Link>
              <Link to={"defending-Haven"}><div>Haven Defending</div></Link>
              <Link to={"attacking-Haven"}><div>Haven Attacking</div></Link>
              <Link to={"defending-Icebox"}><div>Icebox Defending</div></Link>
              <Link to={"attacking-Icebox"}><div>Icebox Attacking</div></Link>
              <Link to={"defending-Split"}><div>Split Defending</div></Link>
              <Link to={"attacking-Split"}><div>Split Attacking</div></Link>
              <Link to={"defending-Fracture"}><div>Fracture Defending</div></Link>
              <Link to={"attacking-Fracture"}><div>Fracture Attacking</div></Link>
            </div>
        </div>
      </div>
    )
}