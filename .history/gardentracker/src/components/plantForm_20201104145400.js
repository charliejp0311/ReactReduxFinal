import React,{Component} from "react";
import { connect } from "react-redux";

class PlantForm extends Component {
    render(){
        return(
            <form>
                <input type='text' name='name' />
                <input type='textarea' name='description' /> 
            </form>
        );
    };
};
export default PlantForm;
// export default connect()(PlantForm);