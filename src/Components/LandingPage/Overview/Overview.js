import React from 'react'
import Down from '../../../assets/down.png'
import Dollar from '../../../assets/dollar.png'
import Piggy from '../../../assets/piggy.png'
import Organize from '../../../assets/organize.png'
import Caution from '../../../assets/caution.png'
import Brief from '../../../assets/brief.png'
import Card from '../../Card/Card'
import './Overview.css'

const Overview = () => {
  return (
    <div className='over-features'>
    <div className='over-headers'>
      <span>Our features you would love for your</span>
      <span>  Personal Account </span>
    </div>


    {/* bottom side */}
    <div className="over-contents" >
      <div className='over-contents-div' style ={{left:'-20rem',top:'-4rem' }}>
      <Card 
      icon = {Organize}
      heading = {'Organize transactions'}
      detail = {"Sort your transactions the way you want to view them"}
       />
       </div>


      <div className='over-contents-div' style={{left: '-2rem',top:'-4rem'}}>
       <Card
       icon = {Down}
       heading ={'Import all your bank accounts'}
       detail ={'Visualize all your finances in one screen'}
       />
       </div>


      <div className='over-contents-div' style = {{left:'16rem', top:'-4rem'}}>
       <Card
       icon = {Brief}
       heading ={'View all spending history'}
       detail ={'Get your transaction history and frequently occuring transactions'}
       />
       </div>



      <div className='over-contents-div' style={{top:'12rem',left:'-20rem'}}>
       <Card
       icon = {Piggy}
       heading ={'Savings'}
       detail ={'Save from multiple accounts into one vault,also joint save with friends and family for a cause'}
       />
       </div>


      <div className='over-contents-div' style={{left:'-2rem',top:'12rem'}}>
       <Card
       icon = {Caution}
       heading ={'Balance warning'}
       detail = {'Get notified when your expenditure is more than income when bills still due'}
       />
       </div>


      <div className='over-contents-div' style={{left:'16rem',top:'12rem'}}>
       <Card
       icon = {Dollar}
       heading = {'Budgeting'}
       detail = {'Budget your income for recurring bills, and pay them automatically with Auto-Budgeting'}
       />
       </div>
    </div>
    </div>
  )
}

export default Overview
