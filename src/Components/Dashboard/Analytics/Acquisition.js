import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
    {
        month: 'Jan',
        customers: 100,
        cac: 800,
    },
    {
        month: 'Feb',
        customers: 155,
        cac: 750,
    },
    {
        month: 'Mar',
        customers: 180,
        cac: 900,
    },
    {
        month: 'Apr',
        customers: 140,
        cac: 600,
    },
    {
        month: 'May',
        customers: 80,
        cac: 650,
    },
    {
        month: 'Jun',
        customers: 90,
        cac: 300,
    },
    {
        month: 'Jul',
        customers: 110,
        cac: 450,
    },
    {
        month: 'Aug',
        customers: 70,
        cac: 550,
    },
    {
        month: 'Sep',
        customers: 140,
        cac: 600,
    },
    {
        month: 'Oct',
        customers: 120,
        cac: 500,
    },
    {
        month: 'Nov',
        customers: 200,
        cac: 780,
    },
    {
        month: 'Dec',
        customers: 170,
        cac: 850,
    },
];

export default class Acquisition extends PureComponent {

  render() {
    return (
      <div style={{ width: '100%', height: 250 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 0,
              bottom: 20,
              left: 0,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="month" />
            <YAxis  dataKey="customers" yAxisId="left" />
            <YAxis dataKey="cac"  orientation="right" />
            <Tooltip />
            <Legend />
            
            <Bar dataKey="customers" yAxisId="left" barSize={20} fill="#01058A" />
            <Line type="monotone" dataKey="cac" stroke="#6787E4" />

          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
