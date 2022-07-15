
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
    {
        month: 'Jan',
        customers: 100,
    },
    {
        month: 'Feb',
        customers: 75,
    },
    {
        month: 'Mar',
        customers: 80,
    },
    {
        month: 'Apr',
        customers: 40,
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
        customers: 10,
    },
    {
        month: 'Aug',
        customers: 70,
    },
    {
        month: 'Sep',
        customers: 40,
    },
    {
        month: 'Oct',
        customers: 20,
    },
    {
        month: 'Nov',
        customers: 25,
    },
    {
        month: 'Dec',
        customers: 70,
    },
];

export default function MonthlyActiveUsers() {

  return (
    <div style={{ width: '100%', height: 300}}>
      <ResponsiveContainer width="100%" height="100%">
    <ComposedChart
      layout="vertical"
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 10,
        bottom: 20,
        left: 0
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" domain={[0, 100]} tickCount={10} tickFormatter={(tick) => {
                    return `${tick}%`;
                }} />
      <YAxis dataKey="month" type="category" />
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="customers" barSize={20} fill="#01058A" />
    </ComposedChart>
    </ResponsiveContainer>
      </div>
  );
}
