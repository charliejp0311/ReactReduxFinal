import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import PlantContainer from "../containers/PlantContainer";
class GardenPlant extends Component{

    render(){
        const {plant} = this.props
        return(
            <div>
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <Route exact path='/plants/:id' component={PlantContainer}>
                    <Link to={`/plants/${plant.id}`} >Update</Link>
                </Route>{/* link to garden/plants/:id */}
                <button type='delete'>Delete</button>{/* link to garden/plants/:id/delete */}
                <button type='harvest'>Harvest</button>{/* link to garden/plants/:id/update  toggles the true false of :growing property */}
            </div>
        );
    };
};



export default GardenPlant;