import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {startSetGardenbook} from '../redux/actions'
import {Switch,Route} from 'react-router-dom';
import GardenbookContainer from './GardenbookContainer'
class App extends Component() {
  debugger
  componentDidMount(){
    this.props.startSetGardenbook();
  };

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={GardenbookContainer}/> 
          <Route exact path='/garden'/> 
          <Route exact path='/harvest' />
        </Switch>
      </div>
    );
  };
}



export default connect(null,{startSetGardenbook})(App);
