import React, { Component } from "react";

class GardenPlant extends Component{

    render(){
        const {plant} = this.props;
            
        return(
            <div>
                <h3>{plant.name}</h3>
                {plant.description ? <p>{plant.description}</p> : <form><textarea value={plant.description}/><br/><input type="submit"/></form>}
                

            </div>
        );
    };
};

export default GardenPlant;