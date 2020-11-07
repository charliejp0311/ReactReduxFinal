import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startUpdatePlant } from '../redux/actions'

class GardenPlant extends Component{

    handleHarvest=e=>{
        const harvestedplant = {
            ...this.props.plant,
            growing: false,
        }
        console.log(harvestedplant)

        // this.props.reapPlant();
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
                <button onClick={this.handleHarvest}>Harvest</button>
                <button onClick={this.handleDelete}>Delete</button>
                {/* <Link to={`/plants/${this.props.plant.id}`} >Delete</Link> */}
                {/* <Link to={`/plants/${this.props.plant.id}`} >Harvest</Link> */}
            </div>
        );
    };
};



export default connect(null,{ startUpdatePlant })(GardenPlant);