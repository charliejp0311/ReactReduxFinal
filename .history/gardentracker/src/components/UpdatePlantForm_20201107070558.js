import React,{Component} from "react";
import { connect } from "react-redux";
import { startAddPlant } from '../redux/actions'
import {startSetGardenbook} from '../redux/actions';

class UpdatePlantForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.plant.name,
            description: props.plant.description,
            gardenbook_id: props.gardenbook_id,
        }
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
        //change to start update plant
        debugger
        this.props.startUpdatePlant({...this.state, })
        this.setState({
            ...this.state,
            name: "", 
            description: "",
        });
        this.props.startSetGardenbook();
    };


    render(){
        // console.log(this.props)
        // debugger
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


export default connect(null,{startAddPlant, startSetGardenbook})(UpdatePlantForm);