import React from 'react'
import { CounterWidget, ExpenseWidget, SavingsWidget } from './widgets';
import "../Overview/Overview.css";
import MiniCalendar from './Minicalendar';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';
import { data } from './data';
import Tabledata from './components/Tabledata';
import Doughnut from './doughnut';


export default function Overview(){
  return (
    <div className='OverviewBox'>
      <div className='first-box'>
        <CounterWidget 
        category ='Balance'
        title = '$27632'
        percentage = {+2.5}
        />
        <ExpenseWidget 
          category ='Expenses'
          title = '$20199'
          percentage ={0.5}
        />
        <SavingsWidget
          category = "Savings"
          title = "$110"
          percentage = {1.5}
        />
      </div>
      <div className='second-box'>
          <BarChart className='bar'
           width={649} height={275} data={data}>
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="name" />
           <YAxis />
           <Legend />
           <Bar dataKey="arrival" fill="#01058A" />
           <Bar dataKey="spending" fill="#1AA8E9" />
          </BarChart>
          <MiniCalendar
           selectRange={false}
          />
      </div>
      <div className='last-box'>
        <Tabledata />
        <Doughnut />
      </div>
      </div>
  )}