import { connect } from 'react-redux';
import Security from './Security';
const mapStateToProps = ({ security }) => ({
    security
});
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Security);