import React,{Component} from 'react';
import {connect} from 'react-redux';
// import IncrimmentButton from "../components/IncrimmentButton";



class GardenbookContainer extends Component{
    
    render(){
        let inGarden = this.props.garden.map(p=>{return(<li key={p.id}>{p.name}</li>)})
        let harvested = this.props.harvest.map(p=>{return(<li key={p.id}>{p.name}</li>)})

        return(
        <div className='garden-book'> 
            <div>  
                <h3>Growing:</h3>         
                <ul>{inGarden}</ul>
            </div>
            <div>  
                <h3>Harvested:</h3>         
                <ul>{harvested}</ul>
            </div>
            {/* <IncrimmentButton /> */}
        </div>
        );
    };
};

const mapStateToProps = state => {
    return{
        id: state.garden.id,
        garden: state.garden.garden,
        harvest: state.garden.harvest,
    }
}


export default connect(mapStateToProps)(GardenbookContainer);