import React, { Component } from "react";
import { Link } from 'react-router-dom';
class GardenPlant extends Component{

    render(){
        const {plant} = this.props
        return(
            <div>
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <Link to={`/plants/${plant.id}`} >Update</Link>
                <Link to={`/plants/${plant.id}/delete`} >Delete</Link>
                <Link to={`/plants/${plant.id}`} >Harvest</Link>
            </div>
        );
    };
};



export default GardenPlant;