import React,{Component} from "react";
import { connect } from "react-redux";
import { startAddPlant } from '../redux/actions'
import {startSetGardenbook} from '../redux/actions';
export default function PlantForm(){
// class PlantForm extends Component {
    // state = {
    //     name: "", 
    //     description: ""
    // };
    // handleChange=e=>{
    //     switch (e.target.name) {
    //         case 'name':
    //             this.setState({
    //                 ...this.state,
    //                 name: e.target.value
    //             })
    //             break;
    //         case 'description':
    //             this.setState({
    //                 ...this.state,
    //                 description: e.target.value
    //             });
    //             break;
    //         default:
    //             break;
    //     };
    // };

    // handleSubmit=e=>{
    //     e.preventDefault();
    //     this.props.startAddPlant({...this.state, gardenbook_id: this.props.gardenbook_id})
    //     this.setState({
    //         name: "", 
    //         description: "",
    //     });
    //     this.props.startSetGardenbook();
    // };

    // render(){
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
                <input type='submit' value='Add Plant' />
            </form>
        );
    // };
};

// const mapStateToProps=state=>{
//     return{
//         gardenbook_id: state.garden.id,
//     };
// };


// export default connect(mapStateToProps, {startAddPlant, startSetGardenbook})(PlantForm);