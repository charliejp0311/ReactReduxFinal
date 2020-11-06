import React, { Component } from "react";
import {connect} from 'react-redux';
import GardenPlant from "./GardenPlant";
import HarvestPlant from "./HarvestPlant";

class PlantList extends Component{
    testHarvest(){
        let plants = []
        // debugger
        if (this.props.garden) {
            // plants = this.props.garden.map(plant=>this.props.GardenPlant(plant))
        }else{
            plants = this.props.harvest.map(plant=>this.props.HarvestPlant(plant))
        }
        return plants;
    }

    render(){
        return(
            <div>{this.testHarvest()}</div>
        );
    };
};

export default connect(null , {HarvestPlant}, {GardenPlant})(PlantList);