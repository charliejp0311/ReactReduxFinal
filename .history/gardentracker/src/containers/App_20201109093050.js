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
import HarvestedPlant from '../components/HarvestedPlant';

class App extends Component {


  componentDidMount(){
    this.props.startSetGardenbook();
    
  };

  render(){
    return (
      <div className="App">
          <header className="App-header">
            The Garden Tracker
          </header>
          <NavBar />
          <Switch>
            <Route exact path='/' render={(props)=><GardenbookContainer {...props} />} /> 
            <Route exact path='/garden' render={(props)=><GardenContainer {...props} />}/> 
            <Route exact path='/harvest' render={(props)=><HarvestContainer {...props}/>}/>
            <Route exact path='/plants/:id' render={(props)=><PlantContainer {...props}  />}/>
            <Route exact path='/harvested_plant/:id' render={props=><HarvestedPlant {...props} />} />
          </Switch>
      </div>
    );
  };
}

export default connect(null, {startSetGardenbook})(App);
