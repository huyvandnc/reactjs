import { connect } from 'react-redux';
import { authActions } from '../../redux/actions';
import Navbar from './Navbar';

const mapStateToProps = (state) => {
    return state;
}

const matchDispatchToProps = (dispatch) => {
    signOut: () => dispatch(authActions.signOut)
}

export default connect(mapStateToProps, matchDispatchToProps)(Navbar);