import React,{Component} from "react";
import { connect } from "react-redux";

class PlantForm extends Component {
    render(){
        return(
            <form>
                <input type='text' name='name' value={this.state.name} />
                <input type='textarea' name='description' value={this.state.description} />
            </form>
        );
    };
};

export default connect()(PlantForm);