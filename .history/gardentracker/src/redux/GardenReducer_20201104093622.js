export default function garden (state = {
    plants: [],
    notes: []
},action){
    // console.log(action)
    debugger
    switch (action.type) {
        case 'SET_GARDENBOOK':
            return {
                ...state,
                plants: action.plants
            };

        case 'ADD_PLANT':
            return {
                ...state,
                plants: state.plants.concat({name: action.plant.name})
            };

        case 'HARVEST_PLANT':
            let p = state.plants.filter(plant=>plant.name===action.plant.name) ;
            let inTheGarden = state.plants.filter(plant=>plant.name!==action.plant.name);
            return{
                ...state,
                plants: inTheGarden,
                harvest: state.harvest.concat(p)
            };
    
        default:
            return state;
    }
};