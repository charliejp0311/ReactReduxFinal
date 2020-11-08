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
        this.props.startAddPlant({...this.state, gardenbook_id: this.props.gardenbook_id})
        this.setState({
            ...this.state,
            name: "", 
            description: "",
        });
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


export default connect(null,{startAddPlant, startSetGardenbook})(PlantForm);