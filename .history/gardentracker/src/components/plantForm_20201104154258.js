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