import React from 'react'
import Split from '../../../assets/split.png'
import Import from '../../../assets/import.png'
import History from '../../../assets/history.png'
import Chart from '../../../assets/chart.png'
import Saved from '../../../assets/saved.png'
import Save from '../../../assets/save.png'
import Card from '../../Card/Card'
import "./FeatureCover.css"

const FeatureCover = () => {
  return (
    <div className='feature-feature'>
    <div className='feature-header'>
      <span>We have your  </span>
      <span>  Business Account </span>
      <span>  covered too </span>
    </div>


    {/* bottom side */}
    <div className="feature-content" >
      <div style ={{left:'-18rem',top:'-4rem'}}>
      <Card
      icon = {Split}
      heading = {'Account Overview'}
      detail = {"Get your day to day transaction overview"}
       />
       </div>


      <div style={{left: '-2rem',top:'-4rem'}}>
       <Card
       icon = {Import}
       heading ={'Sync transactions'}
       detail ={'Sync your transactions from different branches into one account'}
       />
       </div>


      <div style = {{left:'16rem', top:'-4rem'}}>
       <Card
       icon = {History}
       heading ={'Transaction History'}
       detail ={'Get sorted transaction history and informative visuals'}
       />
       </div>



      <div style={{top:'12rem',left:'-18rem'}}>
       <Card
       icon = {Save}
       heading ={'Track debts'}
       detail ={'Track your business debts and incoming payments'}
       />
       </div>


      <div style={{left:'-2rem',top:'12rem'}}>
       <Card
       icon = {Saved}
       heading ={'Pay yourself'}
       detail = {'Have a salary budget for you out of your earnings'}
       />
       </div>


      <div style={{left:'16rem',top:'12rem'}}>
       <Card
       icon = {Chart}
       heading = {'Measure growth'}
       detail = {'Meaure the rate at which your business is growing'}
       />
       </div>
    </div>
    </div>
  )
}

export default FeatureCover