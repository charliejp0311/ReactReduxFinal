import React from 'react';

export const SideNav=(idk)=>{
    console.log(idk)
    ///i want this to be either the plant list in the garden or the plant list in the harvest
    //should ge as props a list of plant id's 
    return(
        <div id='side-Bar' className='sidenav'>
            {idk}
        </div>
    );
};