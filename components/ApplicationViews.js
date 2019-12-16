import Login from './Auth/Login'
import { Route, withRouter, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerList from './owner/OwnerList'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import LocationForm from './location/LocationForm'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import LocationEditForm from './location/LocationEditForm'
import EmployeeEditForm from './employee/EmployeeEditForm'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'
  class ApplicationViews extends Component {

    // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => localStorage.getItem("credentials") !== null
  render() {
    return (

      <React.Fragment>
        <Route path="/login" component={Login} />
        <Route exact path="/" render={(props) => {
           if (this.isAuthenticated()) {
            return <Home {...props} />
        } else {
            return <Redirect to="/login" />
        }

        }} />
        <Route exact path="/animals" render={(props) => {
           if (this.isAuthenticated()) {
            return <AnimalList {...props} />
        } else {
            return <Redirect to="/login" />
        }
        }} />
        <Route path="/animals/new" render={(props) => {
           if (this.isAuthenticated()) {
            return <AnimalForm {...props} />
        } else {
            return <Redirect to="/login" />
        }
}} />
         <Route exact path="/location" render={(props) => {
          return <LocationList {...props}/>
        }} />
        <Route path="/location/new" render={(props) => {
          return <LocationForm {...props} />
}} />
<Route
  path="/location/:locationId(\d+)/edit" render={props => {
    return <LocationEditForm {...props} />
  }}
/>
         <Route path="/owner" render={(props) => {
          return <OwnerList />
        }} />
         <Route exact path="/employee" render={(props) => {
          return <EmployeeList {...props}/>
        }} />

        <Route
  path="/employee/:employeeId(\d+)/edit" render={props => {
    return <EmployeeEditForm {...props} />
  }}
/>
<Route path="/employee/:employeeId(\d+)" render={(props) => {
    return <EmployeeWithAnimals {...props} />
}} />
        <Route
  path="/animals/:animalId(\d+)/edit" render={props => {
    return <AnimalEditForm {...props} />
  }}
/>

<Route exact path="/employee/:employeeId(\d+)" render={(props) => {
    // Pass the animalId to the AnimalDetailComponent
    return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} {...props}/>
}} />
 /><Route path="/location/:locationId(\d+)" render={(props) => {
  // Pass the locationId to the AnimalDetailComponent
  return <LocationDetail locationId={parseInt(props.match.params.locationId)}/>
}} />
<Route exact path="/location/:locationId(\d+)" render={(props) => {
    // Pass the animalId to the AnimalDetailComponent
    return <locationDetail locationId={parseInt(props.match.params.locationId)} {...props}/>
}} />

<Route exact path="/animals/:animalId(\d+)" render={(props) => {
    // Pass the animalId to the AnimalDetailComponent
    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props}/>
}} />
      </React.Fragment>
    )
  }

}

export default ApplicationViews