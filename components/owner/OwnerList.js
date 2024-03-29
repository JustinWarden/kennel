import React, { Component } from 'react'
    //import the components we will need
    import OwnerCard from './OwnerCard'
    import OwnerManager from '../../modules/OwnerManager'

    class OwnerList extends Component {
        //define what this component needs to render
        state = {
            owners: [],
        }

    componentDidMount(){
        console.log("OWNER LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        OwnerManager.getAll()
        .then((owners) => {
            this.setState({
                owners: owners
            })
        })
    }
    deleteOwner = id => {
        OwnerManager.delete(id)
        .then(() => {
          OwnerManager.getAll()
          .then((newOwners) => {
            this.setState({
                owners: newOwners
            })
          })
        })
      }

    render(){
        console.log("OWNERS LIST: Render");

        return(
            <div className="container-cards">
                {this.state.owners.map(singleOwner => <OwnerCard key={singleOwner.id} OwnerProp={singleOwner} deleteOwner={this.deleteOwner}/>)}
            </div>
        )
    }
}

export default OwnerList