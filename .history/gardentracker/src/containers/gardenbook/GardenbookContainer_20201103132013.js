import React,{Component} from 'react';
import {connect} from 'react-redux'

import NavBar from 'gardentracker\src\components\Navbar';


class GardenbookContainer extends Component{

    render(){
        return(
        <div>
            <header className="App-header">
              The Garden Tracker
            </header>
            <NavBar />
            This contains state and my main app

            HOME
            calls a list of plants currently growing 
                plant names only
            calls a list of plants that have been harvested
                plant names only

            GARDEN

            calls form for creating new plant
            gives list of currently "growing" plants 
                name and their descriptions option to view/harvest/delete plant 

            HARVEST

            calls a list of plants
                name and description option to view notes 
                meant to be an archive of plants grown and wont be deleted
                list of plants growing and list of plants harvested by name only
        </div>
        );
    };
};


export default connect()(GardenbookContainer);