import React from "react";

export default function NoteForm(props){
    console.log(props)
    return(
        <form>
            <input type='text' name='note' />
        </form>
    )
}