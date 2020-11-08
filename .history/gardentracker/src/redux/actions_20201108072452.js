// import React from 'react';
//FETCH
export const startSetGardenbook = () => {
    return(dispatch, getState)=>{
        fetch('http://localhost:3001/gardenbooks/1')
            .then(resp=>resp.json())
            .then(data=> dispatch(setGardenbook(data)))
    };
};

export const startAddPlant = (plantData={}) => {
    // debugger
    const {name,description,gardenbook_id} = plantData;
    const plant ={
        name,
        description,
        gardenbook_id,
    };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(plant)
    };
    // debugger
    return (dispatch, getState) =>{
        fetch(`http://localhost:3001/plants`, configObj )
        .then(resp=>resp.json())
        .then(json=>dispatch(addPlant(json)))
    };
};

export const startUpdatePlant = (plantData={}) => {
    // debugger
    const {name,description,gardenbook_id, id, growing} = plantData;
    const plant ={
        id,
        name,
        description,
        gardenbook_id,
        growing,
    };
    let configObj = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(plant)
    };
    // debugger
    return (dispatch, getState) =>{
        fetch(`http://localhost:3001/plants/${plant.id}`, configObj )
        .then(resp=>resp.json())
        .then(json=>dispatch(updatePlant(json)))
    };
};
export const startDeletePlant = (plantData={}) => {
    // debugger
    const {name,description,gardenbook_id, id, growing} = plantData;
    const plant ={
        id,
        name,
        description,
        gardenbook_id,
        growing,
    };
    let configObj = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(plant)
    };
    // debugger
    return (dispatch, getState) =>{
        fetch(`http://localhost:3001/plants/${plant.id}`, configObj )
        .then(resp=>resp.json())
        .then(json=>dispatch(deletePlant(json)))
    };
};

export const startAddNote = (noteData={}) => {
    // debugger
    const {note,plant_id,gardenbook_id,actionId} = noteData;
    const newNote ={
        note,
        plant_id,
        gardenbook_id,
        action_id: actionId
    };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newNote)
    };
    // debugger
    return (dispatch, getState) =>{
        fetch(`http://localhost:3001/notes`, configObj )
        .then(resp=>resp.json())
        .then(json=>dispatch(addNote(json)))
    };
};

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
export const updatePlant = (plant) =>{
    return {type: 'UPDATE_PLANT',plant}
}
export const deletePlant = (plant) => {
    debugger
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