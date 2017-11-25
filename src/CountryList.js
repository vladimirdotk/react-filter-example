import React, {Component} from 'react';
import './CountryList.css'; 

class CountryList extends Component {

  renderCountries() {
    let countries = [];
    this.props.countries.forEach((country, index) => {
      countries.push(
        <div key={index} className="country">{country}</div>
      );
    });
    return countries;
  }

  render() {
    return (
      <div className="CountryList">
        {this.renderCountries()}
      </div>
    )
  }

}

CountryList.defaultProps = {
  countries: []
}

export default CountryList