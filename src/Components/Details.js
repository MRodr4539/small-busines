import React, {Component} from 'react';

//import { connect } from 'react-redux'

class Details extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render(){
        return (
            <div>
                <h1>Pizza PLace Name</h1>
                <h1>Address</h1>
                <h1>Hours</h1>
                <h1>Review</h1>
                <h1>Google Maps</h1>
            </div>
        )
    }
}

//mapStateToProps to add in data from API 

//do this instead of using containers/ just combines it on one file

//export default connect(mapStateToProps)(Details);

export default Details;