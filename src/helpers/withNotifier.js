import { connect } from 'react-redux';
import { addNotification } from '../redux/actions';
import { bindActionCreators } from 'redux';
import { withSnackbar } from 'notistack';
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addNotification }, dispatch);
};
export default (Component) => connect(null, mapDispatchToProps)(withSnackbar(Component));