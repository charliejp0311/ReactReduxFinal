import React from 'react';

export const SideNav=(pl)=>{
    const linkList = pl.map(plant=>{return(<a key={plant.id} href={`/plants/${plant.id}`}>{plant.name}</a>)}) 
    ///i want this to be either the plant list in the garden or the plant list in the harvest
    //should ge as props a list of plant id's 
    return(
        <div id='side-Bar' className='sidenav'>
            {linkList}
        </div>
    );
};