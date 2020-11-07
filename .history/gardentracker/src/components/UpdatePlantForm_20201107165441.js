import React,{Component} from "react";
import { connect } from "react-redux";
import { startUpdatePlant } from '../redux/actions'
import {startSetGardenbook} from '../redux/actions';

class UpdatePlantForm extends Component {
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {
            id: props.plant.id,
            name: props.plant.name,
            description: props.plant.description,
            gardenbook_id: props.gardenbook_id,
            growing: props.plant.growing,
        };
    }

    handleChange=e=>{
      switch (e.target.name) {
        case 'name':
            this.setState({
                ...this.state,
                name: e.target.value
            })
            break;
        case 'description':
            this.setState({
                ...this.state,
                description: e.target.value
            });
            break;
        default:
            break;
      };
    };

    handleSubmit=e=>{
        e.preventDefault();
        this.props.startUpdatePlant(this.state);
        this.props.startSetGardenbook();
        
    };


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name' >
                    Name:
                    <input type='text' name='name' onChange={this.handleChange} value={this.state.name}/>
                </label><br />
                <label htmlFor='description' >
                    Description:
                    <textarea name='description' onChange={this.handleChange} value={this.state.description}/> 
                </label><br />
                <input type='submit' />
            </form>
        );
    };
};


export default connect(null,{startUpdatePlant, startSetGardenbook})(UpdatePlantForm);