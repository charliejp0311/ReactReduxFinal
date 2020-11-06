import React, { Component } from "react";
import {connect} from 'react-redux';
import GardenPlant from "./GardenPlant";
import HarvestPlant from "./HarvestPlant";

class PlantList extends Component{
    testHarvest(){
        let plants = []
        debugger
        if (this.props.garden) {
            plants = this.props.garden.map(plant=><GardenPlant plant={plant} />)
        }else{
            plants = this.props.harvest.map(plant=><HarvestPlant plant={plant} />)
        }
        return plants;
    }

    render(){
        return(
            <div>{this.testHarvest()}</div>
        );
    };
};

export default connect(null)(PlantList);