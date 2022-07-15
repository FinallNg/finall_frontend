import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export const ageData = [
  { name: '50-59', value: 250, fill: '#0B1F8E' },
  { name: '40-49', value: 100, fill: '#010632' },
  { name: '30-39', value: 200, fill: '#6787E4' },
  { name: '60-69', value: 300, fill: '#CFE6FC' },
  { name: '18-29', value: 300, fill: '#0D1D77' },
];

export class AgePieChart extends PureComponent {

  render() {
    return (
        <div style={{ width: '100%', height: 160 }}>
      <ResponsiveContainer>
        <PieChart width={160} height={160}>
          <Pie data={ageData} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" stroke=""/>
        </PieChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
