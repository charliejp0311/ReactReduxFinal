import React,{Component} from 'react';
import {connect} from 'react-redux';



class GardenbookContainer extends Component{
    
    constructor(props) {
        super(props);
        console.log(props);
    };
    
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

    handlePlantSubmit=e=>{
        e.preventDefault();
        this.props.startAddPlant({...this.state, gardenbook_id: this.props.gardenbook_id})
        this.setState({
            name: "", 
            description: "",
        });
        this.props.startSetGardenbook();
    };

    render(){
        let inGarden = this.props.garden.map(p=>{return(<li key={p.id}>{p.name}</li>)})
        let harvested = this.props.harvest.map(p=>{return(<li key={p.id}>{p.name}</li>)})

        return(
        <div> 
            <div>  
                <h3>Growing:</h3>         
                <ul>{inGarden}</ul>
            </div>
            <div>  
                <h3>Harvested:</h3>         
                <ul>{harvested}</ul>
            </div>
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