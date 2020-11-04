export default function garden (state = {
    id: '',
    garden: [],
    harvest: [],
    plants: [],
    notes: []
},action){
    // debugger
    switch (action.type) {
        case 'SET_GARDENBOOK':
            // debugger
            console.log(action)

            let plants = action.book.included
            let pl =[]
            let gl = []
            let hl = []
            plants.forEach(plant => {
                pl.push(plant.attributes)
                if (plant.attributes.growing) {
                    gl.push(plant.attributes)
                } else {
                    hl.push(plant.attributes)
                }
            });
            return {
                ...state,
                id: action.book.data.id,
                plants: pl,
                garden: gl,
                harvest: hl,
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