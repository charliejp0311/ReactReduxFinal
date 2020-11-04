import React, { Component } from "react";

class GardenPlant extends Component{

    handleSubmit=e=>{
        e.preventDefault();
        console.log(e.target.description.value)
        console.log(e.target)
    }

    render(){
        const {plant} = this.props;
            
        return(
            <div>
                <h3>{plant.name}</h3>
                {plant.description ? <p>{plant.description}</p> : <form onSubmit={this.handleSubmit}><textarea name="description"/><br/><input type="submit"/></form>}
                

            </div>
        );
    };
};

export default GardenPlant;