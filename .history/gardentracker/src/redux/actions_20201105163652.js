// import React from 'react';
//FETCH
export const startSetGardenbook = () => {
    return(dispatch, getState)=>{
        fetch('http://localhost:3001/gardenbooks/1')
            .then(resp=>resp.json())
            .then(data=> dispatch(setGardenbook(data)))
    };
};

export const startAddPlant = (plant={}) => {
    let configObj = {
        method: "CREATE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        plant: plant
    }
    debugger

    return (dispatch, getState) =>{
        fetch(`http://localhost:3001/plants/${plant.id}`, configObj )
        .then(resp=>resp.json())
        .then(json=>console.log(json))
    }
}

export const setGardenbook = (book)=>{
    return{
        type: "SET_GARDENBOOK",
        book
    }
}


//PLANTS
export const addPlant = (plant) => {
    return {type: 'ADD_PLANT',plant}
}
export const deletePlant = (plant) => {
    return {type: 'DELETE_PLANT',plant}
}
export const harvestPlant = (plant) => {
    return {type: 'HARVEST_PLANT',plant}
}

////NOTES

export const addNote = (note) => {
    return {type: 'ADD_NOTE',note}
}
export const deleteNote = (note) => {
    return {type: 'DELETE_NOTE',note}
}