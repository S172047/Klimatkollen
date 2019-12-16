import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Co2Data from '../json/Dataset1_CO2'

export default class Co2Emissions extends PureComponent {

constructor() {
    super()
    this.state = {
    co2: Co2Data,
    year1state: 1970,
    year2state: 2010,
    indexYear1: 0,
    indexYear2: 0,
    indexYear1handled: 219,
    indexYear2handled: 259,
    yearInputValue1: 1970,
    yearInputValue2: 2010
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
  if (parseInt(this.state.yearInputValue1) <= 1750 || parseInt(this.state.yearInputValue2) >= 2011) {
      alert("Oj nu blev det fel. Fyll i ett årtal från 1751 till 2010")
      return;
  }
  if (isNaN(this.state.yearInputValue1) || isNaN(this.state.yearInputValue2)) {
    alert("Oj nu blev det fel. Fyll i ett korrekt årtal från 1751 till 2010")
    return;
  }
  if (parseInt(this.state.yearInputValue1) > parseInt(this.state.yearInputValue2)){
    alert("Oj. Årtalet i första fältet måste vara lägre än årtalet i andra fältet")
    return;
  }
  if (parseInt(this.state.yearInputValue1) == parseInt(this.state.yearInputValue2)){
    alert("Oj. Varför skriver du samma årtal i båda fälten? Försök igen")
    return;
  }
  else {
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
console.log(this.state.yearInputValue1);
console.log(this.state.yearInputValue2);
}

  render() {

    let emission1 = this.state.co2[this.state.indexYear1handled];
    let emission2 = this.state.co2[this.state.indexYear2handled];

    const BarChartData = [
      {
        name: 'Energigaser', E1: emission1["Gas Fuel"], E2: emission2["Gas Fuel"],
      },
      {
        name: 'Flytande bränsle', E1: emission1["Liquid Fuel"], E2: emission2["Liquid Fuel"],
      },
      {
        name: 'Cement', E1: emission1["Cement"], E2: emission2["Cement"],
      },
      {
        name: 'Gasfackling', E1: emission1["Gas Flaring"], E2: emission2["Gas Flaring"],
      },
      {
        name: 'Fast bränsle', E1: emission1["Solid Fuel"], E2: emission2["Solid Fuel"],
      },
      ];

    return (
      <React.Fragment>
        <div className="outside div" style={{width:"100%"}}>
          <div className="ui input"
            style={{ marginBottom: "20px", marginRight: "10px", marginLeft: "80px" }}>
            <input type="text" placeholder="Från år..." onChange={this.handleYearInput1} />
          </div>
          <div className="ui input"
            style={{ marginTop: "20px", marginRight: "10px" }}>
            <input className="input" type="text" placeholder="Till år..." onChange={this.handleYearInput2} />
          </div>
          <button className="ui primary button" onClick={() => this.handleYearFilter(
          )}>Visa år</button>
        </div>

        <BarChart
          width={600}
          height={300}
          data={BarChartData}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name={this.state.year1state} dataKey="E1" fill="#89BE4A" />
          <Bar name={this.state.year2state} dataKey="E2" fill="#FABF4F" />
        </BarChart>
      </React.Fragment>
    );
  }
}