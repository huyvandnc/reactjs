import { connect } from 'react-redux';
import { authActions } from '../../redux/actions';
import withStyles from '@material-ui/core/styles/withStyles';
import Navbar from './Navbar';
import styles from "./styles";

const mapStateToProps = (state) => {
    return state;
}

const matchDispatchToProps = {
    signOut: authActions.signOut
}

export default withStyles(styles)(connect(mapStateToProps, matchDispatchToProps)(Navbar));