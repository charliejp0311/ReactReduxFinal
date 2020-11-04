import React, { Component } from "react";
import GardenPlant from "./GardenPlant";
import HarvestPlant from "./HarvestPlant";

class PlantList extends Component{
    testHarvest(){
        if (this.props.garden) {
            let plants = this.props.garden.map(plant=><GardenPlant key={plant.id} plant={plant}/>)
        }else{
            let plants = this.props.harvest.map(plant=><HarvestPlant key={plant.id} plant={plant}/>)
        }
        return plants;
    }

    render(){
            
        return(
            <div>{this.testHarvest()}</div>
        );
    };
};

export default PlantList;