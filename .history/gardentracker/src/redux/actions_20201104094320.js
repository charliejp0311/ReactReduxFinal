// import React from 'react';
//FETCH
export const startSetGardenbook = () => {
    return(dispatch, getState)=>{
        fetch('http://localhost:3001/plants')
            .then(resp=>resp.json())
            .then(data=> dispatch(setGardenbook(data)))
    };
};

export const setGardenbook = (plants)=>{
    return{
        type: "SET_GARDENBOOK",
        plants
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