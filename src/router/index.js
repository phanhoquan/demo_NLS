import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import PrivateRoute from 'utils/PrivateRoute';
import ROUTERS from 'constants/routers';
import { API } from 'utils/Apis';

import SignInContainer from 'loginAccount/containers/SignInContainer';
import RegisterContainer from 'registerAccount/containers/RegisterContainer';
import HomeContainer from 'home/containers/homeContainer';

type Props = {
  token: string
};
const Router = ({ token }: Props) => {
  const isAuthenticated = token !== '';
  if (token) {
    API.setHeader('Authorization', `Bearer ${token}`);
  }
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path={ROUTERS.LOGIN} component={SignInContainer} />
          <Route exact path={ROUTERS.REGISTER} component={RegisterContainer} />
          {/* private routers */}

          <PrivateRoute
            exact
            path={ROUTERS.ROOT}
            component={HomeContainer}
            isAuthenticated={isAuthenticated}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = state => {
  return {
    token: state.accountReducer.token
  };
};

export default connect(mapStateToProps)(Router);
