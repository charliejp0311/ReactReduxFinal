import React, {Component} from 'react';
import {connect} from 'react-redux';

 class HarvestedPlant extends Component{
    constructor(props){
        super(props);
        let id = parseInt(props.match.params.id)
        this.state = {
            id: 
        }
    };
    render(){
        // console.log(this.props)
        return(
            <div>
                {/* {plant.name} */}
            </div>
        )
    };
};

const mapStateToProps=state=>{
    return {
        harvest: state.garden.harvest,
        notes: state.garden.notes,
    };
};

export default connect(mapStateToProps)(HarvestedPlant);