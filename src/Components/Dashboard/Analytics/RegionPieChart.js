import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

export const regionData = [
  { name: 'South', value: 250, fill: '#0B1F8E' },
  { name: 'East', value: 100, fill: '#010632' },
  { name: 'West', value: 200, fill: '#6787E4' },
  { name: 'Central', value: 300, fill: '#CFE6FC' },
];

export class RegionPieChart extends PureComponent {

  render() {
    return (
        <div style={{ width: '100%', height: 160 }}>
      <ResponsiveContainer>
        <PieChart width={160} height={160}>
          <Pie data={regionData} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" stroke=""/>
        </PieChart>
      </ResponsiveContainer>
      </div>
    );
  }
}
