import React,{Component} from 'react';
import {connect} from 'react-redux';
import  PlantForm  from "../components/PlantForm";
import  PlantList  from "../components/PlantList";
import SideNav from '../components/sideNav'


class GardenContainer extends Component{

    render(){
        const plant = {}
        return(
        <div className='garden'> 
            <SideNav plantList={this.props.garden} />
            <PlantForm plant={plant} gardenbook_id={this.props.id} />
            <PlantList garden={this.props.garden} notes={this.props.notes}/>
        </div>
        );
    };
};

const mapStateToProps = state => {
    return{
        id: state.garden.id,
        garden: state.garden.garden,
        notes: state.garden.notes
    }
}

export default connect(mapStateToProps)(GardenContainer);