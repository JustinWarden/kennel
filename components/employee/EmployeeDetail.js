import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeDetail.css'

class EmployeeDetail extends Component {

  state = {
      name: "",
      type: "",
  }

  componentDidMount(){
    console.log("EmployeeDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    EmployeeManager.getOne(this.props.employeeId)
    .then((employee) => {
      this.setState({
        name: employee.name,
        type: employee.type
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Type: {this.state.type}</p>
            <button type="button" onClick={() => this.props.deleteEmployee(this.props.EmployeeProp.id)}>Fire Terrible Employee</button>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;