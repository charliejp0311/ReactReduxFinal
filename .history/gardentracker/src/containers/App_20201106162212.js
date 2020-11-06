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
          <Route exact path='/' render={(props)=><GardenbookContainer {...props} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>} /> 
          <Route exact path='/garden' render={(props)=><GardenContainer {...props} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>}/> 
          <Route exact path='/harvest' render={(props)=><HarvestContainer {...props}/>}/>
          <Route exact path='/plant' render={(props)=><PlantContainer {...props} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />}/>
        </Switch>
      </div>
    );
  };
}

export default connect(null, {startSetGardenbook})(App);
