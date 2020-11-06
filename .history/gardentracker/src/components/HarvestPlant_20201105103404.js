import React, { Component } from "react";

class HarvestPlant extends Component{

    render(){
        console.log(this.props)
            
        return(
            <div>
                {this.props.plant.name}
                {this.props.plant.description}
            </div>
        );
    };
};

export default HarvestPlant;