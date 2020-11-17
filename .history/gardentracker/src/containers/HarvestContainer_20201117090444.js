import React,{Component} from 'react';
import {connect} from 'react-redux';
import  PlantList  from "../components/PlantList";
import {SideNav} from '../components/sideNav'


class HarvestContainer extends Component{

    render(){
        console.log(this.props.harvest)
        return(
        <div className='harvest'> 
            {this.props.SideNav(this.props.harvest)} 
            <PlantList harvest={this.props.harvest} notes={this.props.notes}/>
        </div>
        );
    };
};

const mapStateToProps = state => {
    return{
        id: state.garden.id,
        harvest: state.garden.harvest,
        notes: state.garden.notes
    }
}

export default connect(mapStateToProps, {SideNav})(HarvestContainer);