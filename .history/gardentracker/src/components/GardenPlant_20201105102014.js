import React, { Component } from "react";

class GardenPlant extends Component{

    constructor(props){
        super(props)
        let d = ''
        if (props.plant.description) {
            d=props.plant.description
        };
        this.state = {
            name: props.plant.name,
            description: d
        }
    }

    handleChange=e=>{
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }

    handleSubmit=e=>{
        e.preventDefault();
        console.log(this.state)
        console.log(this.props)
    }

    render(){
        const {plant} = this.props;
            
        return(
            <div>
                <h3>{plant.name}</h3>
                {plant.description ? <p>{plant.description}</p> : <form onSubmit={this.handleSubmit}><textarea name="description" value={this.state.description} onChange={this.handleChange}/><br/><input type="submit" value='Update'/><button type='delete'>Delete</button></form>}
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