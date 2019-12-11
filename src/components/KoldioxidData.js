import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Co2Data from '../json/Dataset1_CO2'

export default class Co2Emissions extends PureComponent {

constructor() {
    super()
    this.state = {
    co2: Co2Data
    }
    console.log(this.state.co2);
}

  render() {

    const BarChartData = [
      {
        name: 'Cement', uv: 4000, pv: 2400,
      },
      {
        name: 'Gas Flaring', uv: 3000, pv: 1398,
      },
      {
        name: 'Gas Fuel', uv: 2000, pv: 9800,
      },
      {
        name: 'Liquid Fuel', uv: 2780, pv: 3908,
      },
      {
        name: 'Solid Fuel', uv: 1890, pv: 4800,
      },
      ];
    return (
      <BarChart
        width={500}
        height={300}
        data={BarChartData}
        margin={{
          top: 5, right: 20, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    );
  }
}