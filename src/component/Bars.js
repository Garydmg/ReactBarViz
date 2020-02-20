import React, { Component } from 'react';
import Bar from './Bar';

export default class Test1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      bars: [
        {name: "Jack", value: 10},
        {name: "Jag", value: 9.5},
        {name: "Jill", value: 5},
        {name: "John", value: 7},
        {name: "Kassem", value: 3},
        {name: "Gary", value: 9}
      ]
    };
  }

  // update input as we type
  handleChange = (e) => {
    // lowercase
    this.setState({
      input: e.target.value
    });
  }

  render() {
    // filter out values that does not include the input letters
    // make it case-insensitive
    const bars = this.state.bars
      .filter(data => {
        const people = data.name.toLowerCase();
        const inputLetter = this.state.input.toLowerCase();
        return people.includes(inputLetter);
      })
      .sort((a, b) => {
        return a.value > b.value ? -1 : 1;
      })
      .map((data, index) => {
        return (
          <div className="barList" key={index}>
            <Bar content={data}/>
          </div>
        )
      })
    
    return (
      <div>
        <form>
          <input 
            className="input"
            type="text"
            placeholder={"Filter"}
            value={this.state.input}
            onChange={this.handleChange}
          />
        </form>
        {bars}
      </div>
    )
  }
}