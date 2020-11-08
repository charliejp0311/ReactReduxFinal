import React, { Component } from "react";
import {Link} from 'react-router-dom';

class HarvestPlant extends Component{

    render(){
        const {plant} = this.props
        return(
            <div>
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <Link to={`/harvested_plant/${plant.id}`}>Show</Link>
                
            </div>
        );
    };
};

export default HarvestPlant;