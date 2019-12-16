import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h2>
          Name: <span className="card-OwnerName">{this.props.OwnerProp.name}</span>
          <p>Pet Doggie:{this.props.OwnerProp.dog}</p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.OwnerProp.id)}>Remove Owner</button>
          </h2>
        </div>
      </div>
    );
  }
}


export default OwnerCard;