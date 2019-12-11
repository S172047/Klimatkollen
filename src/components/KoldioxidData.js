import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

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

    const data = [
        {
          name: 'Cement', uv: 4000, pv: 2400,
        },
        {
          name: 'Gasfackling', uv: 4000, pv: 2400,
        },
        {
          name: 'Energigas', uv: 3000, pv: 1398,
        },
        {
          name: 'Flytande bränsle', uv: 2000, pv: 9800,
        },
        {
          name: 'Fast bränsle', uv: 2780, pv: 3908,
        },
      ];
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
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