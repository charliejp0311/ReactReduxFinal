import React,{Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {startSetGardenbook} from '../redux/actions'; 
import {Switch,Route} from 'react-router-dom';
import GardenbookContainer from './GardenbookContainer';
import GardenContainer from './GardenContainer';
import HarvestContainer from './HarvestContainer';
import PlantContainer from './PlantContainer';
import NavBar from '../components/Navbar';

class App extends Component {
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

  componentDidMount(){
    this.props.startSetGardenbook();
  };

  render(){
    // console.log(this.props)
    return (
      <div className="App">
          <header className="App-header">
            The Garden Tracker
          </header>
          <NavBar />
        <Switch>
          <Route exact path='/' component={GardenbookContainer} /> 
          <Route exact path='/garden' component={GardenContainer}/> 
          <Route exact path='/harvest' component={HarvestContainer}/>
          <Route exact path='/plants/:id' component={PlantContainer}/>
        </Switch>
      </div>
    );
  };
}


export default connect(null, {startSetGardenbook})(App);
