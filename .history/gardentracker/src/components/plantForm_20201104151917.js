import React,{Component} from "react";
import { connect } from "react-redux";

class PlantForm extends Component {
    state = {
        name: "", 
        description: ""
    }
    handleChange=e=>{
        let changing = {e.target.name: e.target.value}
        console.log(changing)
        return{
            ...this.state,
            ...changing 
        }
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