import React from 'react'
import {NavLink} from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='heading'>
            <h2>Finall</h2>
        </div>

        <div>
              <ul>
                <li>
                    <NavLink exact activeClassName="active" to ='/'>Overview</NavLink>
                </li>
                <li><NavLink exact activeClassName="active" to ='/transactions'>Transactions</NavLink></li>
                <li><NavLink exact activeClassName="active" to ='/cards'>Cards</NavLink></li>
                <li><NavLink exact activeClassName="active" to ='/invoices'>Invoices</NavLink></li>
                <li><NavLink exact activeClassName="active" to ='/goals'>Goals</NavLink></li>
                <li><NavLink exact activeClassName="active" to ='/settings'>Settings</NavLink></li> 
              </ul>
  
        </div>

        <div>
            <ul>
                <li><NavLink exact activeClassName="active" to ='/help'>Help &amp; Started</NavLink></li>
                <li><NavLink exact activeClassName="active" to ='/logout'>Log Out</NavLink></li>
            </ul>
        </div>

        
    </div>
  )
}

export default Sidebar