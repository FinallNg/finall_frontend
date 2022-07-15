import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        month: 'Jan',
        customers: 100,
        newCustomers: 35
    },
    {
        month: 'Feb',
        customers: 350,
        newCustomers: 150
    },
    {
        month: 'Mar',
        customers: 800,
        newCustomers: 500
    },
    {
        month: 'Apr',
        customers: 450,
        newCustomers: 120
    },
    {
        month: 'May',
        customers: 800,
        newCustomers: 250
    },
    {
        month: 'Jun',
        customers: 900,
        newCustomers: 350
    },
    {
        month: 'Jul',
        customers: 850,
        newCustomers: 150
    },
    {
        month: 'Aug',
        customers: 700,
        newCustomers: 100
    },
    // {
    //     month: 'Sep',
    //     customers: 400,
    //     newCustomers: 70
    // },
    // {
    //     month: 'Oct',
    //     customers: 20,
    //     newCustomers: 35
    // },
    // {
    //     month: 'Nov',
    //     customers: 25,
    //     newCustomers: 35
    // },
    // {
    //     month: 'Dec',
    //     customers: 70,
    //     newCustomers: 35
    // },
];

export default class ViralCoeff extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

  render() {
    return (
        <div style={{ width: '100%', height: 250}}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="customers" fill="#01058A" />
          <Bar dataKey="newCustomers" fill="#6787E4" />
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
