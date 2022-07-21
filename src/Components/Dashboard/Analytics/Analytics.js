import React, { useState } from 'react'
import Acquisition from './Acquisition'
import {AgePieChart, ageData} from './AgePieChart'
import './Analytics.css'
import DataKeys from './DataKeys'
import MetricsTemplate from './MetricsTemplate'
import MonthlyActiveUsers from './MonthlyActiveUsers'
import {RegionPieChart, regionData} from './RegionPieChart'
import {SexPieChart, sexData} from './SexPieChart'
import ViralCoeff from './ViralCoeff'

const Analytics = () => {
    const [currentMetric, setCurrentMetric] = useState('ccr')
    
  
  const changeMetric = (newMetric) => {
    setCurrentMetric(newMetric)
  }

//   console.log(currentMetric)
  return (
    <div className="analytics">
        <div className="first">
            {/* <h2>Analytics</h2> */}
            <div className='lost-rate'>
                <div>
                    <h3>Conversion Rate</h3>
                    <p>2.01%</p>
                </div>
                <div>
                    <h3>Customers Lost</h3>
                    <p>33</p>
                </div>
                <div>
                    <h3>Revenue Lost</h3>
                    <p>$25345</p>
                </div>

            </div>

            <div className='unique-visitors'>
                <h3>Monthly Unique Visitors</h3>
                <p>10457</p>
            </div>

             <div className="acquisition-cost">
                <h3>Customer Acquisition Cost</h3>
                <Acquisition />
            </div>

            <div className='pie-data'>
                <div>
                    <h3>Sex</h3>
                    <SexPieChart />
                </div>

                <div>
                    <h3>Region</h3>
                    <RegionPieChart />
                </div>

                <div>
                    <h3>Age</h3>
                    <AgePieChart />
                </div>

                <div className='pie-data-keys'>
                    <DataKeys 
                        title="Sex"
                        data={sexData}
                    />

                    <DataKeys 
                        title="Age"
                        data={ageData}
                    />

                    <DataKeys 
                        title="Region"
                        data={regionData}
                    />
                </div>
            </div> 
        </div>

        <div className="second">
            <div className='multiple-metrics'>
                <select 
                    onChange={(event) => changeMetric(event.target.value)}
                    value={currentMetric}
                >
                    <option value="ccr">Customer Conversion Rate</option>
                    <option value="br">Bounce Rate</option>
                    <option value="cr">Chun Rate</option>
                </select>

                <MetricsTemplate 
                    type={currentMetric}
                />

            </div>

            <div className='monthly-active-users'>
                <h3>Monthly Active Users</h3>
                <MonthlyActiveUsers />
            </div>

            <div className='viral-coeff'>
                <h3>Viral Coefficient</h3>
                <ViralCoeff />
            </div>
        </div> 
    </div>
  )
}

export default Analytics