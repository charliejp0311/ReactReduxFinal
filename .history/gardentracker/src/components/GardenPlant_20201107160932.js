import React, { Component } from "react";
import { Link } from 'react-router-dom';
class GardenPlant extends Component{

    handleHarvest=e=>{
        debugger
    }

    handleDelete=e=>{
        debugger
    }

    render(){
        // const {plant} = this.props
        return(
            <div>
                <h3>{this.props.plant.name}</h3>
                <p>{this.props.plant.description}</p>
                <Link to={`/plants/${this.props.plant.id}`} >Update</Link><br />
                <button onClick={this.handleHarvest}>Hravest</button>
                <button onClick={this.handleDelete}>Delete</button>
                {/* <Link to={`/plants/${this.props.plant.id}`} >Delete</Link> */}
                {/* <Link to={`/plants/${this.props.plant.id}`} >Harvest</Link> */}
            </div>
        );
    };
};



export default GardenPlant;