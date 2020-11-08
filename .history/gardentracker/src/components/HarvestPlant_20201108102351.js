import React, { Component } from "react";
import {Link} from 'react-router-dom';

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
                <Link to={`/harvested_plant/${plant.id}`}>Show</Link>
                </p>
            </div>
        );
    };
};

export default HarvestPlant;