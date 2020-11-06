import React,{Component} from "react";
import { connect } from "react-redux";
import { startAddPlant } from '../redux/actions'
import {startSetGardenbook} from '../redux/actions';

class PlantForm extends Component {

    render(){
        console.log(this.props)
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

// const mapStateToProps=state=>{
//     return{
//         gardenbook_id: state.garden.id,
//     };
// };


export default connect(null, {startAddPlant})(PlantForm);