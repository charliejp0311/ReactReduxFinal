import React,{Component} from "react";
import { connect } from "react-redux";

class PlantForm extends Component {
    render(){
        return(
            <form>
                <label htmlFor='name' >
                    /s/s/s/s/s/Name:
                    <input type='text' name='name' />
                </label><br />
                <label htmlFor='description' >
                    Description:
                    <textarea name='description' /> 
                </label><br />
            </form>
        );
    };
};
export default connect()(PlantForm);