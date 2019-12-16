import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalDetail.css'

class AnimalDetail extends Component {

    state = {
        name: "",
        breed: "",
        loadingStatus: true,
    }

    componentDidMount(){
        console.log("AnimalDetail: ComponentDidMount");
        //get(id) from AnimalManager and hang on to that data; put it into state
        AnimalManager.getOne(this.props.animalId)
        .then((animal) => {
            this.setState({
                name: animal.name,
                breed: animal.breed,
                loadingStatus: false
            });
        });
    }
    render() {
      return (
        <div className="card">
          <div className="card-content">
            <picture>
              <img src={require('./chichi.jpg')} alt="My Dog" />
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Breed: {this.state.breed}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Kill?</button>
          </div>
        </div>
      );
    }
    handleDelete = () => {
      //invoke the delete function in AnimalManger and re-direct to the animal list.
      this.setState({loadingStatus: true})
      AnimalManager.delete(this.props.animalId)
      .then(() => this.props.history.push("/animals"))
  }
}

export default AnimalDetail;