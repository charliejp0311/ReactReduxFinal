import React, { Component } from "react";

class PlantList extends Component{

    render(){
        if (this.props.garden) {
            this.props.garden.map(plant=><GardenPlant key={plant.id} plant={plant}/>)
        }
            
        return(
            <div>list of plants to come</div>
        );
    };
};

export default PlantList;