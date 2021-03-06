import { withSnackbar } from 'notistack';
import { connect } from 'react-redux';
import { removeNotification } from '../../redux/actions';
import Notification from './Notification';
const mapStateToProps = ({ notifications }) => ({
    notifications: notifications.list
});
const mapDispatchToProps = { removeNotification };
export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(Notification));