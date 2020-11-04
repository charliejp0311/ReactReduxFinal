import React,{Component} from 'react';
import {connect} from 'react-redux';



class GardenbookContainer extends Component{

    render(){
        console.log(this.props)
        // const plants = this.props.plants
        // let inGarden = []
        // let harvested = []
        // plants.forEach(plant => {
        //     if (plant.growing) {
        //         inGarden.push(<li>{plant.name}</li>)
        //     } else {
        //         harvested.push(<li>{plant.name}</li>)
        //     }
        // });
        return(
        <div>   
            <h3>Growing:</h3>         
            {/* <ul>{inGarden}</ul> */}
            <h3>Harvested:</h3>         
            {/* <ul>{harvested}</ul> */}
        </div>
        );
    };
};

const mapStateToProps = state => {
    console.log(state)
    return{
        id: state.id,
        plants: state.plants,
        notes: state.notes,
    }
}

export default connect(mapStateToProps)(GardenbookContainer);