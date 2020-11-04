import React,{Component} from "react";
import { connect } from "react-redux";

class PlantForm extends Component {
    render(){
        return(
            <form>
                <label htmlFor='name' />
                <input type='text' name='name' />
                <input type='textarea' name='description' /> 
            </form>
        );
    };
};
export default connect()(PlantForm);