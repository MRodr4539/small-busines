import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { withRouter} from 'react-router-dom'
import { logout } from '../redux/actions'

const mapStateToProps = state => ({
    user: state.user
})

export default withRouter(connect(mapStateToProps, {logout})(Navigation))