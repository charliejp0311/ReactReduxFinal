import React,{Component} from "react";
import { connect } from "react-redux";
import { startAddPlant } from '../redux/actions'
import {startSetGardenbook} from '../redux/actions';

class PlantForm extends Component {
    constructor(props){
        // console.log(props)
        super(props);
        this.state = {
            name: '',
            description: '',
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
        // debugger
        this.props.startAddPlant(this.state)
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
            <form onSubmit={this.props.handleSubmit}>
                <label htmlFor='name' >
                    Name:
                    <input type='text' name='name' onChange={this.props.handleChange} value={this.props.plant.name}/>
                </label><br />
                <label htmlFor='description' >
                    Description:
                    <textarea name='description' onChange={this.props.handleChange} value={this.props.plant.description}/> 
                </label><br />
                <input type='submit' />
            </form>
        );
    };
};


export default connect(null,{startAddPlant, startSetGardenbook})(PlantForm);