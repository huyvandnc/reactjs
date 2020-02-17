import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = (state) => {
  return state;
}

const matchDispatchToProps = {
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);