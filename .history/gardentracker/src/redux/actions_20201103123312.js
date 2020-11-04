export const startSetGardenbook = () => {
    return(dispatch, getState)=>{
        fetch('http:/localhost:3001/gardenbooks/1')
            .then(resp=>resp.json())
            .then((data)=> console.log(data))
    };
};