import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Register from '../components';

import { Creators } from '../redux';

const mapStateToProps = state => {
  return {
    state
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...Creators
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
