import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Co2Data from '../json/Dataset1_CO2'

export default class Co2Emissions extends PureComponent {

constructor() {
    super()
    this.state = {
    co2: Co2Data,
    year1state: 1950,
    year2state: 2000,
    indexYear1: 0,
    indexYear2: 263,
    indexYear1handled: 200,
    indexYear2handled: 250,
    yearInputValue1: 1950,
    yearInputValue2: 2000
    }
}

handleYearInput1 = e => {
  this.inputYear1(e.target.value);
};

handleYearInput2 = e =>{
  this.inputYear2(e.target.value);
};

//Skapar ett index över innehållet i co2 för att kunna plocka ut ett specifkt år
inputYear1 = Year => {
  let index1 = this.state.co2.findIndex(
    co => co.Year === parseInt(Year) //parseInt gör en String till en Integer  
  );
//Sätter innehållet från index på indexYear1
this.setState({
  indexYear1: index1,
  yearInputValue1: Year
})

};

inputYear2 = Year => {
  let index2 = this.state.co2.findIndex(
    co => co.Year === parseInt(Year)
  );

this.setState({
  indexYear2: index2,
  yearInputValue2: Year
})
};

handleYearFilter = () => {
  if (this.state.indexYear1 !== -1 && this.state.indexYear2 !== -1) {
    {
      this.setState(
        {indexYear1handled: this.state.indexYear1}
      );
      this.setState(
        {indexYear2handled: this.state.indexYear2}
      );
      this.setState(
        {year1state: this.state.yearInputValue1}
      );
      this.setState(
        {year2state: this.state.yearInputValue2}
      );
    } 
}
}

  render() {

    let emission1 = this.state.co2[this.state.indexYear1handled];
    let emission2 = this.state.co2[this.state.indexYear2handled];

    const BarChartData = [
      {
        name: 'Cement', E1: emission1["Cement"], E2: emission2["Cement"],
      },
      {
        name: 'Gas Flaring', E1: emission1["Gas Flaring"], E2: emission2["Gas Flaring"],
      },
      {
        name: 'Gas Fuel', E1: emission1["Gas Fuel"], E2: emission2["Gas Fuel"],
      },
      {
        name: 'Liquid Fuel', E1: emission1["Liquid Fuel"], E2: emission2["Liquid Fuel"],
      },
      {
        name: 'Solid Fuel', E1: emission1["Solid Fuel"], E2: emission2["Solid Fuel"],
      },
      ];

    return (
      <React.Fragment>
        <div className="outside div" style={{width:"50%"}}>
          <div className="ui input" 
              style={{marginTop:"20px",marginBottom:"20px",marginRight:"20px",marginLeft:"70px"}}>
              <input type ="text" placeholder="Från år..." onChange={this.handleYearInput1} />
          </div>
          <div className="ui input" 
              style={{marginTop:"20px",marginRight:"20px"}}>
              <input type ="text" placeholder="Till år..." onChange={this.handleYearInput2} />
          </div>
          <button className= "ui primary button" onClick={() => this.handleYearFilter(
          )}>Visa år</button>
        </div>

        <BarChart
          width={500}
          height={300}
          data={BarChartData}
          margin={{
            top: 5, right: 20, left: 20, bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name={this.state.year1state} dataKey="coKey1" fill="#8884d8" />
          <Bar name={this.state.year2state} dataKey="coKey2" fill="#82ca9d" />
        </BarChart>
      </React.Fragment>
    );
  }
}