import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {startSetGardenbook} from '../redux/actions'
import {Switch,Route} from 'react-router-dom';
import GardenbookContainer from './GardenbookContainer'
class App extends Component() {

  componentDidMount(){
    this.props.startSetGardenbook();
  };

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={GardenbookContainer}/> {/*render={routerProps => <CreateGarden {...routerProps} />} /> {/* Home page what do welcome page shows gardens last event logged to the notes shows plant count shows harvest count */}
          <Route exact path='/garden'/> {/*render={routerProps => <Garden {...routerProps} />} /> {/* Garden page this will show a list of the current plants and allow you to add more plants */}
          <Route exact path='/harvest' /> {/*render={routerProps => <Harvest {...routerProps} />}*/ }  {/* Harvest page shows a list of harvested plants this is not editable stands as a living record of your garden*/}
        </Switch>
      </div>
    );
  };
}



export default connect(null,{startSetGardenbook})(App);
