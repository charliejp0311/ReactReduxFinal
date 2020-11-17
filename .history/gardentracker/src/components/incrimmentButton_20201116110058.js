import React, {Component} from 'react';


class IncrimmentButton extends Component{
    state = {
        count: 0,
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

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Click me!</button>
                {this.state.count}
            </div>
        )
    }
};

export default IncrimmentButton;