import React, { Component } from "react";
import { Link } from 'react-router-dom';
class GardenPlant extends Component{

    render(){
        // const {plant} = this.props
        return(
            <div>
                <h3>{this.props.plant.name}</h3>
                <p>{this.props.plant.description}</p>
                <Link to={`/plants/${this.props.plant.id}`} >Update</Link>
                <Link to={`/plants/${this.props.plant.id}`} >Delete</Link>
                <Link to={`/plants/${this.props.plant.id}`} >Harvest</Link>
            </div>
        );
    };
};



export default GardenPlant;