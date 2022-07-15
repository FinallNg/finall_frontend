import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export const sexData = [
  { name: 'Male', value: 400, fill: '#0B1F8E' },
  { name: 'Female', value: 300, fill: '#93B5EC' },
];

export class SexPieChart extends PureComponent {

  render() {
    return (
        <div style={{ width: '100%', height: 160 }}>
      <ResponsiveContainer>
        <PieChart width={160} height={160}>
          <Pie data={sexData} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" stroke="" />
        </PieChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
