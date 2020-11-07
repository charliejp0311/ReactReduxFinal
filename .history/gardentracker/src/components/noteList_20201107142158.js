import React, { Component } from "react";

class NoteList extends Component{

    render(){
        console.log(this.props)
        return(
            <div>list of notes</div>
        );
    };
};

export default NoteList;