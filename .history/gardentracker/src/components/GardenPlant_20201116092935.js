import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startUpdatePlant } from '../redux/actions'
import { startDeletePlant } from '../redux/actions'
import {startSetGardenbook} from '../redux/actions';
import { Redirect } from "react-router-dom";

class GardenPlant extends Component{

    handleHarvest=e=>{
        const harvestedplant = {
            ...this.props.plant,
            growing: false,
        };
        this.props.startUpdatePlant(harvestedplant);
        this.props.startSetGardenbook();
        // <Redirect to={`/garden/${this.props.plant.gardenbook_id}`} />;
        this.props.reapPlant();
    }

    handleDelete=e=>{
        // debugger
        this.props.startDeletePlant(this.props.plant)
        this.props.startSetGardenbook();
        <Redirect to={`/garden/${this.props.plant.gardenbook_id}`} />;
    }

    render(){
        // const {plant} = this.props
        return(
            <div className='plant' >
                <h3>{this.props.plant.name}</h3>
                <p>{this.props.plant.description}</p>
                <Link to={`/plants/${this.props.plant.id}`} >Update</Link><br />
                <button onClick={this.handleHarvest}>Harvest</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        );
    };
};



export default connect(null,{ startUpdatePlant, startSetGardenbook ,startDeletePlant })(GardenPlant);