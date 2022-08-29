import React, {useState, useEffect} from "react"
import { ExpenseWidget, SavingsWidget } from './widgets';
import "../Overview/Overview.css";
import MiniCalendar from './Minicalendar';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';
import { data } from './data';
import Tabledata from './components/Tabledata';
import Doughnut from './doughnut';
import axios from 'axios';
import { Card } from '@themesberg/react-bootstrap';
import { BiUpArrowAlt} from"react-icons/bi"
import { NavItem } from "react-bootstrap";

export default function Overview(){
  const [title, setTitle] = useState([]);
useEffect(() => {
  fetchbalance();
},[]);
  const fetchbalance = () => {
    axios
        .get('https://finall-app.herokuapp.com/api/v1/users/62b208fab5e09b628baa2429/accounts/totalBalance')
        .then((res) => {
      console.log(res);
      setTitle(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
};
  return (
    <div className='OverviewBox'>
      
      <div className='first-box'>
     <Card border="light" className="shadow-sm">
            <div className="category-text">

              <h5>Balance</h5>
              <h3 className="mb-1">${title.totalBalance}</h3>
            </div>
              
            <div className="small mt-2">
              <span>
                +%
                <BiUpArrowAlt className="up-arrow"/>
              </span>
            </div>
            <div className="lastly">
            <p>Compared to($21340 last year)</p>
            </div>
            
      </Card>
        
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
      <div style={{ width: '60%', height: 275 }}>
        <ResponsiveContainer>
          <BarChart className='bar'
           width={500} height={275} data={data}>
           <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="name" />
           <YAxis />
           <Legend />
           <Bar dataKey="arrival" fill="#01058A" />
           <Bar dataKey="spending" fill="#1AA8E9" />
          </BarChart>
         </ResponsiveContainer>
        </div> 
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