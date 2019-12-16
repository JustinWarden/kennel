import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h2>
          Name: <span className="card-location-name">{this.props.locationProp.name}</span>
          <p>{this.props.locationProp.address}</p>
          <Link to={`/location/${this.props.locationProp.id}`}><button>Details</button></Link>
          <button type="button"
        onClick={() => {this.props.history.push(`/location/${this.props.locationProp.id}/edit`)}}>Edit</button>
          </h2>
        </div>
      </div>
    );
  }
}


export default LocationCard;