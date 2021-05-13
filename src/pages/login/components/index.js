// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API } from 'utils/Apis';
import ROUTERS from 'constants/routers';
import Loading from 'components/Loading';
import Input from 'components/Input';
import CheckBox from 'components/CheckBox';
import PrimaryButton from 'components/Button';
import IMAGES from 'themes/images';
import { Types } from '../redux';

type Props = {
  type: string,
  token: string,
  isProcessing: boolean,
  history: {
    push: Function,
    location: {
      pathname: string
    }
  },
  signIn: Function,
  isCheckedBox: boolean
};
const Signin = ({
  type,
  token,
  isProcessing,
  signIn,
  history,
  isCheckedBox
}: Props) => {
  const [paramsLogin, setParamsLogin] = useState({
    username: '',
    password: '',
    isChecked: isCheckedBox || false
  });
  const [errorLogin, setErrorLogin] = useState({
    username: '',
    password: ''
  });
  /**
   * handle effect after login success
   */
  useEffect(() => {
    switch (type) {
      case Types.SIGN_IN_SUCCESS:
        API.setHeader('Authorization', `Bearer ${token}`);
        history.push(ROUTERS.ROOT);
        break;
      case Types.SIGN_IN_FAILED:
        setErrorLogin({
          ...errorLogin,
          password: 'Wrong username or password.'
        });
        break;
      default:
        break;
    }
  }, [token, type, history.location.pathname]);

  const handelOnChange = (value, name) => {
    setParamsLogin({
      ...paramsLogin,
      [name]: value
    });
    setErrorLogin({
      ...errorLogin,
      [name]: ''
    });
  };
  const { username, password, isChecked } = paramsLogin;

  const handelSubmit = () => {
    if (!username.trim()) {
      setErrorLogin({
        ...errorLogin,
        username: 'Required to enter'
      });
      return;
    }
    if (!password.trim()) {
      setErrorLogin({
        ...errorLogin,
        password: 'Required to enter'
      });
      return;
    }
    // call api login
    signIn(paramsLogin);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handelSubmit();
    }
  };

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={IMAGES.iconLogo} alt="logo" />
                </div>
                <h4>Hello! lets get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <form className="pt-3">
                  <div className="form-group">
                    <Input
                      type="text"
                      id="username"
                      onChange={e => handelOnChange(e, 'username')}
                      customClassName={
                        errorLogin && errorLogin.username ? ' red' : ''
                      }
                      value={username}
                      placeholder="Username"
                      errorMsg={errorLogin && errorLogin.username}
                      onKeyPress={handleKeyDown}
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      type="password"
                      value={password}
                      onChange={e => handelOnChange(e, 'password')}
                      id="password"
                      placeholder="Password"
                      customClassName={
                        errorLogin && errorLogin.password ? ' red' : ''
                      }
                      errorMsg={errorLogin && errorLogin.password}
                      onKeyPress={handleKeyDown}
                    />
                  </div>
                  <div className="mt-3">
                    <PrimaryButton
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      onClick={handelSubmit}
                    >
                      SIGN IN
                      {isProcessing && <Loading />}
                    </PrimaryButton>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <div className="form-check-label text-muted ml-0">
                        <CheckBox
                          name="checkInput"
                          isChecked={isChecked}
                          label="Keep me signed in"
                          id="checkInput"
                          handleToggleCheckbox={() =>
                            setParamsLogin({
                              ...paramsLogin,
                              isChecked: !isChecked
                            })
                          }
                        />
                      </div>
                    </div>
                    <Link to="/" className="auth-link text-black">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="mb-2">
                    <PrimaryButton
                      type="button"
                      className="btn btn-block btn-facebook auth-form-btn"
                      onClick={() => {}}
                    >
                      <i className="ti-facebook mr-2" />
                      Connect using facebook
                    </PrimaryButton>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Dont have an account?
                    <Link to={ROUTERS.REGISTER} className="text-primary">
                      Create
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo<Props>(Signin);
