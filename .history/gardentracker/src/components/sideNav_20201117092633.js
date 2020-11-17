import React from 'react';
import { Link } from 'react-router-dom';

export const SideNav=(pl)=>{
    let linkList = [] 
    debugger
    if (pl[0].growing) {
        linkList = pl.map(plant=>{return(<Link to={`/plants/${plant.id}`} >{plant.name}</Link>)}) 
    }else{
        linkList = pl.map(plant=>{return(<Link to={`/harvested_plant/${plant.id}`} >{plant.name}</Link>)}) 
    }
    ///i want this to be either the plant list in the garden or the plant list in the harvest
    //should ge as props a list of plant id's 
    return(
        <div id='side-Bar' className='sidenav'> 
            {linkList}
        </div>
    );
};