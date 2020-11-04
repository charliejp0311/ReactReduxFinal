import React,{Component} from "react";
import { connect } from "react-redux";

class PlantForm extends Component {
    render(){
        return(
            <form>
                <label htmlFor='name' >Name:</label>
                <input type='text' name='name' /><br />
                <label htmlFor='description' >Description:</label>
                <input type='textArea' name='description' /> <br />
            </form>
        );
    };
};
export default connect()(PlantForm);