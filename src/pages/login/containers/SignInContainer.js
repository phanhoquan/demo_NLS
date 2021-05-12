import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignIn from '../components';

import { Creators } from '../redux';

const mapStateToProps = state => {
  return {
    type: state.accountReducer.type,
    isProcessing: state.accountReducer.isProcessing,
    token: state.accountReducer.token,
    isCheckedBox: state.accountReducer.isCheckedBox
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...Creators,
      signIn: Creators.signIn
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
