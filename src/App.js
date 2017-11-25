import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input'
import CountryList from './CountryList';

const DEFAULT_COUNTRIES = [
  'Australia',
  'Unknown',
  'Russia',
  'USA'
];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    }
  }

  handleInputChange(event) {
    this.setState({
      inputText: event.target.value
    });
  }

  getCountryList() {
    if (this.state.inputText) {
      return DEFAULT_COUNTRIES.filter((country) => {
        return country.includes(this.state.inputText)
      })
    }
    return DEFAULT_COUNTRIES;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Input handleChange={this.handleInputChange.bind(this)} />
        <CountryList countries={this.getCountryList()} />
      </div>
    );
  }
}

export default App;
