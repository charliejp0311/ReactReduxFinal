import {Component} from 'react';
import {connect} from 'react-redux'


class GardenbookContainer extends Component{

    render(){
        return(<div>list of plants growing and list of plants harvested by name only</div>)
    }
}


export default connect()(GardenbookContainer)