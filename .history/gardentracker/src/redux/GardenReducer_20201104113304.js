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
            let id = action.book.data.id
            let plants = action.book.included
            // let notes = action.book.relationships.notes
            console.log(plants)
            console.log(id)
            return {
                ...state,
                id: 'id',
                plants: 'idk yet'
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