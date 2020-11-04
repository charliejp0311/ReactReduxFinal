import React,{Component} from "react";
import { connect } from "react-redux";

class PlantForm extends Component {
    debugger
    render(){
        return(
            <form>
                <input type='text' name='name' />
                <input type='textarea' name='description' /> 
            </form>
        );
    };
};
export default connect()(PlantForm);