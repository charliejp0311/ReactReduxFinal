import React,{Component} from 'react';
import {connect} from 'react-redux';
import  PlantForm  from "../components/PlantForm";
import  PlantList  from "../components/PlantList";



class GardenContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            gardenbook_id: props.gardenbook_id,
        }
    }
    handleChange=e=>{
      switch (e.target.name) {
        case 'name':
            this.setState({
                ...this.state,
                name: e.target.value
            })
            break;
        case 'description':
            this.setState({
                ...this.state,
                description: e.target.value
            });
            break;
        default:
            break;
      };
    };

    handleSubmit=e=>{
        e.preventDefault();
        // debugger
        this.props.startAddPlant(this.state)
        this.setState({
            ...this.state,
            name: "", 
            description: "",
        });
        this.props.startSetGardenbook();
    };


    render(){
        // console.log(this)
        const plant = {}
        return(
        <div> 
            <PlantForm plant={plant} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
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
        handleChange: ()=>{dispatch(this.props.handleChange())},
        handleSubmit: ()=>{dispatch(this.props.handleSubmit())}
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(GardenContainer);