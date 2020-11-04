import React,{Component} from 'react';
import {connect} from 'react-redux'

import NavBar from '../components/Navbar';


class GardenbookContainer extends Component{

    render(){
        return(<div>
        <header className="App-header">
          The Garden Tracker
        </header>
        <NavBar />
        list of plants growing and list of plants harvested by name only
        </div>);
    };
};


export default connect()(GardenbookContainer);