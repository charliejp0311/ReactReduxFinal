import React, { Component } from "react";

class HarvestPlant extends Component{

    render(){
        console.log(this.props)
            
        return(
            <div>
                <h3>{this.props.plant.name}</h3>
                <p>{this.props.plant.description}</p>
            </div>
        );
    };
};

export default HarvestPlant;