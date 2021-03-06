import React, { Component } from "react";

class GardenPlant extends Component{

//     constructor(props){
//         super(props)
//         let d = ''
//         if (props.plant.description !== null) {
//             d=props.plant.description
//         };
//         this.state = {
//             name: props.plant.name,
//             description: d
//         }
//     }

    render(){
    // export default function GardenPlant(plant){
        const {plant} = this.props
        return(
            <div>
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <button type='update'>Update</button>{/* link to garden/plants/:id */}
                <button type='delete'>Delete</button>{/* link to garden/plants/:id/delete */}
                <button type='harvest'>Harvest</button>{/* link to garden/plants/:id/update  toggles the true false of :growing property */}
                {/* <WaterAction action_id='1' />
                <FeedAction action_id='2'/>
                <GerminateAction action_id='3'/>
                <PollinateAction action_id='4'/>
                <NotateAction action_id='5'/> */}

            </div>
        );
    };
};



export default GardenPlant;