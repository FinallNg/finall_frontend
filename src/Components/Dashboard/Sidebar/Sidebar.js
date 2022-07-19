import React from 'react'
import {NavLink} from 'react-router-dom';
import './Sidebar.css';

import SidebarLogo from '../../../assets-svg/sidebarlogo.svg'
import OverviewIcon from '../../../assets-svg/overviewicon.svg'
import goalsicon from '../../../assets-svg/goalsicon.svg'
import cardicon from '../../../assets-svg/cardicon.svg'
import helpicon from '../../../assets-svg/helpicon.svg'
import invoiceicon from '../../../assets-svg/invoiceicon.svg'
import logouticon from '../../../assets-svg/logouticon.svg'
import settingsicon from '../../../assets-svg/settingsicon.svg'
import transactionicon from '../../../assets-svg/transactionicon.svg'
import metricsicon from '../../../assets-svg/metricsicon.svg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>
            
        <div className='heading'>
            <img src={SidebarLogo} alt='Finall Logo' />
            Finall
        </div>

        <div>
            
            
            <ul className='menu'>


                <li>
                    <NavLink exact activeClassName="active" to ='/overview'><img src={OverviewIcon} /> Overview </NavLink>
                </li>
                <li><NavLink exact activeClassName="active" to ='/transactions'><img src={transactionicon} /> Transactions</NavLink></li>
                <li><NavLink exact activeClassName="active" to ='/cards'><img src={cardicon} /> Cards</NavLink></li>
                <li><NavLink exact activeClassName="active" to ='/invoices'><img src={invoiceicon} /> Invoices</NavLink></li>
                <li><NavLink exact activeClassName="active" to ='/goals'><img src={goalsicon} /> Goals</NavLink></li>
                <li><NavLink exact activeClassName="active" to ='/metrics'><img src={metricsicon} /> Metrics</NavLink></li>
                <li><NavLink exact activeClassName="active" to ='/settings'><img src={settingsicon} /> Settings</NavLink></li> 
              </ul>
  
        </div>

        <div className='sidebar-last'>
            <ul className='menu'>
                <li><NavLink exact activeClassName="active" to ='/help'><img src={helpicon} /> Help &amp; Started</NavLink></li>
                <li><NavLink exact activeClassName="active" to ='/logout'><img src={logouticon} /> Log Out</NavLink></li>
            </ul>
        </div>

        {/* <div>
              <ul>
                <li>
                    <NavLink exact activeClassName="active" to ='/overview'>Overview</NavLink>
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
        </div> */}

        
    </div>
  )
}

export default Sidebar