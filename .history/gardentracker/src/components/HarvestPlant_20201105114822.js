import React, { Component } from "react";

class HarvestPlant extends Component{

    render(){
// export default function HarvestPlant(plant){
        const {plant} = this.props
        return(
            <div>
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
            </div>
        );
    };
};

export default HarvestPlant;