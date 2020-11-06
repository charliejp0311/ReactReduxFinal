import React, { Component } from "react";
import GardenPlant from "./GardenPlant";
import HarvestPlant from "./HarvestPlant";

class PlantList extends Component{
    testHarvest(){
        let plants = []
        if (this.props.garden) {
            plants = this.props.garden.map(plant=><GardenPlant key={plant.id} plant={plant}/>)
        }else{
            plants = this.props.harvest.map(plant=><HarvestPlant key={plant.id} plant={plant}/>)
        }
        return plants;
    }

    render(){
            console.log(this)
        return(
            <div>{this.testHarvest()}</div>
        );
    };
};

export default PlantList;