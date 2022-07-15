import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const crcData = [
    {
        month: 'Jan',
        customers: 100,
    },
    {
        month: 'Feb',
        customers: 155,
    },
    {
        month: 'Mar',
        customers: 180,
    },
    {
        month: 'Apr',
        customers: 140,
    },
    {
        month: 'May',
        customers: 80,
    },
    {
        month: 'Jun',
        customers: 90,
    },
    {
        month: 'Jul',
        customers: 110,
    },
    {
        month: 'Aug',
        customers: 70,
    },
    {
        month: 'Sep',
        customers: 140,
    },
    {
        month: 'Oct',
        customers: 120,
    },
    {
        month: 'Nov',
        customers: 200,
    },
    {
        month: 'Dec',
        customers: 170,
    },
];

const brData = [
    {
        month: 'Jan',
        customers: 150,
    },
    {
        month: 'Feb',
        customers: 125,
    },
    {
        month: 'Mar',
        customers: 180,
    },
    {
        month: 'Apr',
        customers: 140,
    },
    {
        month: 'May',
        customers: 80,
    },
    {
        month: 'Jun',
        customers: 90,
    },
    {
        month: 'Jul',
        customers: 110,
    },
    {
        month: 'Aug',
        customers: 70,
    },
    {
        month: 'Sep',
        customers: 140,
    },
    {
        month: 'Oct',
        customers: 120,
    },
    {
        month: 'Nov',
        customers: 200,
    },
    {
        month: 'Dec',
        customers: 170,
    },
];

const crData = [
    {
        month: 'Jan',
        customers: 90,
    },
    {
        month: 'Feb',
        customers: 125,
    },
    {
        month: 'Mar',
        customers: 180,
    },
    {
        month: 'Apr',
        customers: 140,
    },
    {
        month: 'May',
        customers: 80,
    },
    {
        month: 'Jun',
        customers: 90,
    },
    {
        month: 'Jul',
        customers: 110,
    },
    {
        month: 'Aug',
        customers: 70,
    },
    {
        month: 'Sep',
        customers: 140,
    },
    {
        month: 'Oct',
        customers: 120,
    },
    {
        month: 'Nov',
        customers: 200,
    },
    {
        month: 'Dec',
        customers: 170,
    },
];




export default class MetricsTemplate extends PureComponent {
    

  render() {
    return (
        <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={250}
          data={
            this.props.type === 'cr' ? crData : this.props.type === 'br' ? brData : crcData
          }
          margin={{
            top: 0,
            right: 10,
            bottom: 0,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0B1F8E" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
          <XAxis dataKey="month"  />
          {/* <YAxis 
                tickFormatter={(tick) => {
                    return `${tick}%`;
                }}
            /> */}

            <YAxis 
                // tickFormatter={(tick) => {
                //     return `${tick}%`;
                // }}
            />
          
          <Tooltip />
          {/* <Legend /> */}
          {/* <Bar dataKey="uv" barSize={20} fill="#413ea0" /> */}
          <Area type="monotone" dataKey="customers" fill="url(#colorUv)" stroke="#0B1F8E" />
          
          
          <Line type="monotone" dataKey="customers" stroke="#6787E4" />
        </ComposedChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
