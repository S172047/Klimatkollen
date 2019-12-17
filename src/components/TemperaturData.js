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
import TempData from "../json/Dataset2_GlobalTemperature";

export default class TempDiagram extends Component {
  constructor() {
    super();
    this.state = {
      temp: TempData
    };
  }

  render() {
    let tempCont = this.state.temp
      .filter(x => x.Year >= 1880 && x.Year <= 2016)
      .filter(p => p.Source === "GISTEMP");

    const series = [
      {
        name: "Temperatur (GISTEMP)",
        data: []
      }
    ];

    tempCont.reverse().map(data =>
      series[0].data.push({
        Year: parseInt(data.Year),
        value: [-0.5, data.Mean]
      })
    );

    return (
      <React.Fragment>
        <h2>
          Den globala temperaturens utveckling från år 1880 till 2016
        </h2>

        <AreaChart width={1100} height={400}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Year" allowDuplicatedCategory={false} />
          <YAxis />
          <Tooltip
            cursor={{ stroke: "black", strokeWidth: 3 }}
            formatter={function(value, name) {
              return value[1];
            }}
            labelFormatter={function(value) {
              return "Year: " + value;
            }}
          />
          <Legend />

          {series.map(s => (
            <Area
              type="monotone"
              dataKey="value"
              name="Temperatur"
              data={s.data}
              stroke="red"
              fill="orange"
            />
          ))}
        </AreaChart>
      </React.Fragment>
    );
  }
}