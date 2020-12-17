import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators } from '../redux';
import HomeComponent from '../components/index';

const mapStateToProps = state => {
  return {
    isProcessing: state.homeReducer.isProcessing,
    listAccountManagement: state.homeReducer.listAccountManagement,
    totalRows: state.homeReducer.totalRows
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...Creators,
      getListUser: Creators.getListUser
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent);
