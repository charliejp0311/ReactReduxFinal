export default function garden (state = {
    id: '',
    garden: [],
    harvest: [],
    notes: []
},action){
    // debugger
    switch (action.type) {
        case 'SET_GARDENBOOK':
            let plants = action.book.included
            let gl = []
            let hl = []
            let nl = []
            plants.forEach(plant => {
                if (plant.type==='note') {
                    nl.push(plant.attributes)
                } else {
                    if (plant.attributes.growing) {
                        gl.push(plant.attributes)
                    } else {
                        hl.push(plant.attributes)
                    }
                }
            });
            return {
                id: action.book.data.id,
                notes: nl,
                garden: gl,
                harvest: hl,
            };

        case 'ADD_PLANT':
            // debugger
            return {
                ...state,
                garden: state.garden.concat({name: action.plant.name})
            };
        case 'UPDATE_PLANT':
            const plant = action.plant.data.attributes
            const {garden} = state
            const newG = garden.slice(0,plant.id-1) 
            newG.push(plant, ...garden.slice(plant.id,garden.length-1))
            debugger

            return {
                ...state,
                garden: state.garden.concat({name: action.plant.name})
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