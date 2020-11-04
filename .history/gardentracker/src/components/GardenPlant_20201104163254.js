import React, { Component } from "react";

class GardenPlant extends Component{

    render(){
        const {plant} = this.props;
            
        return(
            <div>
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                
            </div>
        );
    };
};

export default GardenPlant;