import React, {Component} from 'react';


class IncrimmentButton extends Component{
    constructor(props){ 
        super(props);
        this.state = {
        count: 0,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick = e =>{
        // this.setState({
        //     count: this.state.count + 1,
        // })

        console.log('a');

        fetch('http://localhost:3001/gardenbooksfkdjsl;fkjdlkfs')
            .then(resp => {
                if(resp.status !== 200) {
                    throw new Error(resp.statusText);
                }
                console.log('b', resp);
                return resp.json();
            })
            .then(data => console.log('c', data))
            .catch(errors => console.log('d', errors))

        console.log('e');

        // a, e, b, c, d
    }

    handleChange(){
        console.log(this)
    }


    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Click me!</button>
                <p onChange={this.handleChange}>{this.state.count}</p>
            </div>
        )
    }
};

export default IncrimmentButton;