import React, {Component} from 'react';
import {connect} from 'react-redux';

 class HarvestedPlant extends Component{
    constructor(props){
        super(props);
        let id = parseInt(props.match.params.id)
        let plant = props.harvest.filter(p=>p.id===id)
        this.state = {
            ...plant,
            
        };
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