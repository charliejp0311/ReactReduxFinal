import React,{Component} from "react";
import { connect } from "react-redux";

class PlantForm extends Component {
    state = {
        name: "", 
        description: ""
    }
    handleChange=e=>{
        switch (e.target.name) {
            case 'name':
                return{
                    ...this.state,
                    name: e.target.value
                };
            case 'description':
                return{
                    ...this.state,
                    description: e.target.value
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
                <input type='submit' value='Add Plant' />
            </form>
        );
    };
};
export default connect()(PlantForm);