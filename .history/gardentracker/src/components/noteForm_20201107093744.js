import React from "react";

export default function NoteForm(props){
    console.log(props)
    return(
        <form>
            <input type='text' name='note' /><br/>
            <button>Water</button>
            <button>Feed</button>
            <button>Germinate</button>
            <button>Polinate</button>
            <button>Notate</button>
        </form>
    )
}