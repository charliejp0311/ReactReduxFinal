import React, { Component } from "react";

class HarvestPlant extends Component{
    handleShow=e=>{
        debugger
    }
    render(){
        const {plant} = this.props
        return(
            <div>
                <h3>{plant.name}</h3>
                <p>{plant.description}
                <button id={plant.id} onClick={this.handleShow}>Show</button>
                </p>
            </div>
        );
    };
};

export default HarvestPlant;