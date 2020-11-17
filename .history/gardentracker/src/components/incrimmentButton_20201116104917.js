import React, {Component} from 'react';


class IncrimmentButton extends Component{
    state = {
        count: 0,
    }

    handleClick = e =>{
        this.setState({
            count: this.state.count + 1,
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Click me!</button>
                {this.state.count}
            </div>
        )
    }
}

export default IncrimmentButton