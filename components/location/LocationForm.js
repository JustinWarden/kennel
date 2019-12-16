import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationForm.css'

class LocationForm extends Component {
    state = {
        LocationName: "",
        address: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
    */
    constructNewLocation = evt => {
        evt.preventDefault();
        if (this.state.locationName === "" || this.state.address === "") {
            window.alert("Please input an animal name and breed");
        } else {
            this.setState({ loadingStatus: true });
            const location = {
                name: this.state.LocationName,
                address: this.state.address,
            };

            // Create the animal and redirect user to animal list
            LocationManager.post(location)
            .then(() => this.props.history.push("/location"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="LocationName"
                        placeholder="Location name"
                        />
                        <label htmlFor="LocationName">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="address"
                        placeholder="address"
                        />
                        <label htmlFor="breed">Address</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewLocation}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default LocationForm