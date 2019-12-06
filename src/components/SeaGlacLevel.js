import React, { Component } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, ResponsiveContainer } from "recharts";
import SeaLevel from '../json/Dataset4_SeaLevel'
import GlaciarData from '../json/Dataset3_GlaciersSize'

export default class SeaGlacLevel extends Component {

constructor() {
  super()
  this.state = {
    glaciar: GlaciarData,
    sea: SeaLevel
  }
}

  render() {

    let glaciercont = this.state.glaciar.filter(
      x => x.Year > 1945 && x.Year <= 2010
    );
    let sealevelcont = this.state.sea.filter(
      x => parseInt(x.Time) > 1945 && parseInt(x.Time) <= 2010
    );

    let series = [
      {
        name: "Glaciärstorlek",
        data: [],
        color: "blue"
      },
      {
        name: "Havsnivå",
        data: [],
        color: "orange"
      }
    ];

    glaciercont.map(data =>
      series[0].data.push({
        Year: parseInt(data.Year),
        value: data["Mean cumulative mass balance"]
      })
    );

    sealevelcont.map(data =>
      series[1].data.push({
        Year: parseInt(data.Time),
        value: data.GMSL
      })
    );

    console.log(series);

    return (
      <React.Fragment>
        <h2>
          Glaciärstorlek i jämförelse med havsnivå
        </h2>
        {/* <ResponsiveContainer width="80vw" height="40vh"> */}
        <LineChart
          width={1100}
          height={400}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="Year"
            category="Year"
            allowDuplicatedCategory={false}
          />
          <YAxis dataKey="value" />
          <Tooltip cursor={{ stroke: "green", strokeWidth: 3 }} />
          <Legend />
          {series.map(s => (
            <Line
              dataKey="value"
              data={s.data}
              name={s.name}
              key={s.name}
              stroke={s.color}
            />
          ))}
        </LineChart>
        {/* </ResponsiveContainer> */}
      </React.Fragment>
    )
  }
}
