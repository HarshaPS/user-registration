import React, { Component } from 'react';

import CitiesService from '../services/CitiesService';
import {
    CITIES_FIELDS
  } from '../Constants';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      stateName: '',
      cityData: []
    };
  }

  componentDidMount() {
      CitiesService().then(res => {
          let data = [res];
        if(data.length>0) {
            this.setState({
                cityData: [res]
            });
        }
      }).catch(err => {
        console.log('error in fetching cities', err);
        this.setState({
            cityName: 'No cities found',
            stateName: 'No states found',
        });
      });
  }

  render() {

    return (
      <div className="Cities">
        <h1> {CITIES_FIELDS.CITIES} </h1> 
            <div>
                <table>
                    <thead >
                        <tr >
                            <th>City ID          .</th>
                            <th >{CITIES_FIELDS.NAME}</th>
                            <th>{CITIES_FIELDS.STATE}</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.state.cityData.map((e) => 
                        e.map((city, i) => 
                            <tr key={i}>
                                <td>{city.id}</td>
                                <td>{city.name}</td>
                                <td>{city.state}</td>
                            </tr>)
                        )}
                    </tbody>
                </table>
            </div>
      </div>
    );
  }
}
