import React, {Component} from 'react';
import {connect} from 'react-redux';

 class HarvestedPlant extends Component{
    constructor(props){
        super(props);
        console.log(props)
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
        harvest: state.harvest,
        notes: state.notes,
    };
};

export default connect(mapStateToProps)(HarvestedPlant);