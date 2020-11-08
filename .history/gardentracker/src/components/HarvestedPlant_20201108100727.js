import React from 'react';

export default function HarvestedPlant(props){
    const {plant, notes} = props
    console.log(notes)
    return(
        <div>
            {plant.name}
        </div>
    )
}