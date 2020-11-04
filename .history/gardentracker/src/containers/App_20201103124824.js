import {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import { connect } from 'react-redux';

import {startSetGardenbook} from '../redux/actions'
import NavBar from '../components/Navbar';
import '../App.css';
class App extends Component() {

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
          <Route exact path='/' /> {/*render={routerProps => <CreateGarden {...routerProps} />} /> {/* Home page what do welcome page shows gardens last event logged to the notes shows plant count shows harvest count */}
          <Route exact path='/garden'/> {/*render={routerProps => <Garden {...routerProps} />} /> {/* Garden page this will show a list of the current plants and allow you to add more plants */}
          <Route exact path='/harvest' /> {/*render={routerProps => <Harvest {...routerProps} />}*/ }  {/* Harvest page shows a list of harvested plants this is not editable stands as a living record of your garden*/}
        </Switch>
      </div>
    );
  };
}



export default connect(null,{startSetGardenbook})(App);
