import React, { Component } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import SeaLevelData from "../json/Dataset4_SeaLevel";
import GlaciarData from "../json/Dataset3_GlaciersSize";
 
export default class GlaciarSeaData extends Component {
  constructor() {
    super();
    this.state = {
      glaciar: GlaciarData,
      sea: SeaLevelData
    };
  }
 
  render() {
    let glaciercont = this.state.glaciar.filter(
      x => x.Year > 1944 && x.Year <= 2010
    );
    let sealevelcont = this.state.sea.filter(
      x => parseInt(x.Time) > 1944 && parseInt(x.Time) <= 2010
    );
 
    let series = [
      {
        name: "Glaciärstorlek (km3)",
        data: [],
        color: "gray",
        fillcolor: "#bec9d1",
        opacity: 0.2
      },
      {
        name: "Havsnivå (mm)",
        data: [],
        color: "#88D1FF",
        fillcolor: "#88D1FF",
        opacity: 0.35
      }
    ];
 
    glaciercont.map(data =>
      series[0].data.push({
        Year: parseInt(data.Year),
        value: [-90, data[("Mean cumulative mass balance")]]
      })
    );
 
    sealevelcont.map(data =>
      series[1].data.push({
        Year: parseInt(data.Time),
        value: [-90, data.GMSL]
      })
    );
 
    return (
      <React.Fragment>
        <h2>Glaciärernas minskning och ökningen av havsnivån från år 1945 till 2010 </h2>
        <AreaChart width={1100} height={400}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="Year"
            category="Year"
            allowDuplicatedCategory={false}
          />
          <YAxis dataKey="value" />
          <Tooltip 
          cursor={{ stroke: "black", strokeWidth: 3 }} 
          formatter={function(value){
            return value[1];
          }} 
          labelFormatter={function(value){
            return "År: " + value;
          }}
          />
          <Legend />
          {series.map(s => (
            <Area
              type="monotone"
              dataKey="value"
              data={s.data}
              name={s.name}
              key={s.name}
              stroke={s.color}
              fill={s.fillcolor}
              fillOpacity={s.opacity}
            />
          ))}
        </AreaChart>
      </React.Fragment>
    );
  }
}