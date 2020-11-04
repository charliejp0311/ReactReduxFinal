import React,{Component} from "react";
import { connect } from "react-redux";

class PlantForm extends Component {
    state = {
        name: "", 
        description: ""
    }
    handleChange=e=>{
        let inName = e.target.name
        let inVal = e.target.value
        switch (inName) {
            case 'name':
                return{
                    ...this.state,
                    name: inVal
                };
            case 'description':
                return{
                    ...this.state,
                    description: inVal
                };
        
            default:
                return this.state;
        };
    }

    handleSubmit=e=>{
        e.preventDefault();
        console.log(this.state)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name' >
                    Name:
                    <input type='text' name='name' onChange={this.handleChange}/>
                </label><br />
                <label htmlFor='description' >
                    Description:
                    <textarea name='description' onChange={this.handleChange}/> 
                </label><br />
            </form>
        );
    };
};
export default connect()(PlantForm);