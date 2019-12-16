import React, { Component } from 'react';
import '../Kennel.css'
import { Link } from "react-router-dom";

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
        <h3>Name: <span className="card-EmployeeName">{this.props.EmployeeProp.name}</span></h3>
         <p>Type:{this.props.EmployeeProp.type}</p>
         <Link to={`/employee/${this.props.EmployeeProp.id}`}><button>Details</button></Link>
         <button type="button"
        onClick={() => {this.props.history.push(`/employee/${this.props.EmployeeProp.id}/edit`)}}>Edit</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;