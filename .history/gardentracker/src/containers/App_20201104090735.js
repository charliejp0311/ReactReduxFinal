import React,{Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
// import {startSetGardenbook} from '../redux/actions'; 
import {Switch,Route} from 'react-router-dom';
// import GardenbookContainer from './GardenbookContainer';
// import NavBar from '../components/Navbar';

class App extends Component() {

  // componentDidMount(){
  //   this.props.startSetGardenbook();
  // };

  render(){
    console.log(this.props)
    return (
      <div className="App">
          <header className="App-header">
            The Garden Tracker
          </header>
          {/* <NavBar /> */}
        <Switch>
          {/* <Route exact path='/' /> 
          <Route exact path='/garden'/> 
          <Route exact path='/harvest' /> */}
        </Switch>
      </div>
    );
  };
}


// export default App;
export default connect()(App);
// export default connect(null, {startSetGardenbook})(App);
