import React,{Component} from 'react';
import {connect} from 'react-redux';
import  PlantForm  from "../components/PlantForm";
import  PlantList  from "../components/PlantList";



class GardenContainer extends Component{
    

    render(){
        console.log(this)
        const plant = {}
        return(
        <div> 
            <PlantForm plant={plant} />
            <PlantList garden={this.props.garden} notes={this.props.notes}/>
        </div>
        );
    };
};

const mapStateToProps = state => {
    // console.log(state)
    return{
        id: state.garden.id,
        garden: state.garden.garden,
        notes: state.garden.notes
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        handleChange: ()=>{dispatch(this.handleChange())},
        handleSubmit: ()=>{dispatch(this.handleSubmit())}
    }
}


export default connect(mapStateToProps , {mapDispatchToProps})(GardenContainer);