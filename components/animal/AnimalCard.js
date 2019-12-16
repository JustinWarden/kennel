import React, { Component } from 'react'
import '../Kennel.css'
import { Link } from "react-router-dom";

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./chichi.jpg')} alt="My Dog" />
          </picture>
          <h3>Name: <b>{this.props.animal.name}</b></h3>
          <p>Breed: {this.props.animal.breed}</p>
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
          <button type="button"
        onClick={() => {this.props.history.push(`/animals/${this.props.animal.id}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;