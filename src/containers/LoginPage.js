import { connect } from 'react-redux'
import LoginPage from '../components/LoginPage'
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state) => {
    return{
        user: state.user
    };
}

export default withRouter(connect(mapStateToProps, null)(LoginPage))