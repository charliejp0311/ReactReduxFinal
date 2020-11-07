export default function garden (state = {
    id: '',
    garden: [],
    harvest: [],
    notes: [],
    actions: []
},action){
    // debugger
    switch (action.type) {
        case 'SET_GARDENBOOK':
            let parts = action.book.included
            let gl = []
            let hl = []
            let nl = []
            let al = []
            parts.forEach(part => {
                switch (part.type) {
                    case "action":
                        al.push(part.attributes)
                        break;
                    case "note":
                        nl.push(part.attributes)
                        
                        break;
                    case "plant":
                        if(part.attributes.growing){
                            gl.push(part.attributes)
                        } else {
                            hl.push(part.attributes)
                        }
                        break;
                
                    default:
                        break;
                }
            });
            return {
                id: action.book.data.id,
                notes: nl,
                garden: gl,
                harvest: hl,
                actions: al,
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
            newG.push(plant, ...garden.slice(plant.id,garden.length))

            return {
                ...state,
                garden: newG,
            };
        case 'ADD_NOTE':
            debugger
            const notes = 
            return {
                ...state,
                notes: 
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