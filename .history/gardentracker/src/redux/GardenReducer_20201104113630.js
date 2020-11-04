export default function garden (state = {
    id: '',
    plants: [],
    notes: []
},action){
    // console.log(action)
    // debugger
    switch (action.type) {
        case 'SET_GARDENBOOK':
            // debugger
            let plants = action.book.included
            let pl =[]
            plants.forEach(plant => {
                pl.push(plant.attributes)
            });
            // let notes = action.book.relationships.notes
            console.log(pl)
            return {
                ...state,
                id: action.book.data.id,
                plants: pl,
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