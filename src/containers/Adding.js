import { connect } from 'react-redux'
import Adding from '../components/Adding'
import { addListing } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return{
        addListing: (listing) => dispatch(addListing(listing))
    }
}

export default connect(null, mapDispatchToProps)(Adding)