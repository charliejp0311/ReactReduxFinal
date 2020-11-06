import React, { Component } from "react";
// import { NavLink } from 'react-router-dom';
class GardenPlant extends Component{

    render(){
        const {plant} = this.props
        return(
            <div>
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <Link><button type='update'>Update</button></Link>{/* link to garden/plants/:id */}
                <button type='delete'>Delete</button>{/* link to garden/plants/:id/delete */}
                <button type='harvest'>Harvest</button>{/* link to garden/plants/:id/update  toggles the true false of :growing property */}
            </div>
        );
    };
};



export default GardenPlant;