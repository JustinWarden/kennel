import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

class LocationDetail extends Component {

  state = {
      name: "",
      type: "",
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.getOne(this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        address: location.address
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Address: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p> {this.state.address}</p>
            <button type="button" onClick={() => this.props.deleteLocation(this.props.locationId)}>Remove Address</button>
        </div>
      </div>
    );
  }
  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    LocationManager.delete(this.props.locationId)
    .then(() => this.props.history.push("/locations"))
}
}

export default LocationDetail;