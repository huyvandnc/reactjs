import { connect } from 'react-redux';
import SecurityPlugin from '../components/SecurityPlugin';
const mapStateToProps = ({ security }) => ({
    security
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(SecurityPlugin);