// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ROUTERS from 'constants/routers';
import PrimaryButton from 'components/Button';
import REGEX from '../../../constants/regexs';
import Input from 'components/Input';
import CheckBox from 'components/CheckBox';
import IMAGES from '../../../themes/images';

const Signin = () => {
  const dataListCountry = [
    {
      id: 1,
      name: 'Country'
    },
    {
      id: 2,
      name: 'United States of America'
    },
    {
      id: 3,
      name: 'United Kingdom'
    },
    {
      id: 4,
      name: 'India'
    },
    {
      id: 5,
      name: 'Germany'
    },
    {
      id: 6,
      name: 'Argentina'
    }
  ];

  const [paramsRegister, setParamsRegister] = useState({
    username: '',
    password: '',
    email: '',
    isChecked: false,
    country: ''
  });
  const [errorRegister, setErrorRegister] = useState({
    username: '',
    password: '',
    email: '',
    isChecked: '',
    country: ''
  });

  const handelOnChange = (value, name) => {
    setParamsRegister({
      ...paramsRegister,
      [name]: value
    });
    setErrorRegister({
      ...errorRegister,
      [name]: ''
    });
  };
  const { username, password, email, isChecked, country } = paramsRegister;

  const handelSubmit = () => {
    if (!username.trim()) {
      setErrorRegister({
        ...errorRegister,
        username: 'Required to enter'
      });
      return;
    }
    if (!email.trim() || !REGEX.EMAIL.test(email)) {
      setErrorRegister({
        ...errorRegister,
        email: 'Valid email address format'
      });
      return;
    }

    if (!password.trim()) {
      setErrorRegister({
        ...errorRegister,
        password: 'Required to enter'
      });
      return;
    }
    if (!country) {
      setErrorRegister({
        ...errorRegister,
        country: 'Required to enter'
      });
      return;
    }
    if (!isChecked) {
      setErrorRegister({
        ...errorRegister,
        isChecked: 'Required to enter'
      });
      return;
    }
    // call api login
    // API registration pending
    console.log(paramsRegister, 'paramsRegister');
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handelSubmit();
    }
  };

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={IMAGES.iconLogo} alt="logo" />
                </div>
                <h4>New here?</h4>
                <h6 className="font-weight-light">
                  Signing up is easy. It only takes a few steps
                </h6>
                <form className="pt-3">
                  <div className="form-group">
                    <Input
                      type="text"
                      id="inputUsername"
                      placeholder="Username"
                      onChange={e => handelOnChange(e, 'username')}
                      customClassName={
                        errorRegister && errorRegister.username ? ' red' : ''
                      }
                      value={username}
                      errorMsg={errorRegister && errorRegister.username}
                      onKeyPress={handleKeyDown}
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      type="email"
                      id="email"
                      placeholder="Email"
                      onChange={e => handelOnChange(e, 'email')}
                      customClassName={
                        errorRegister && errorRegister.email ? ' red' : ''
                      }
                      value={email}
                      errorMsg={errorRegister && errorRegister.email}
                      onKeyPress={handleKeyDown}
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control form-control-lg"
                      id="formControlSelect"
                      onChange={e => handelOnChange(e.target.value, 'country')}
                      value={country}
                    >
                      {dataListCountry.map(item => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                    {errorRegister?.country && (
                      <p className="error-msg text-danger">
                        {errorRegister?.country}
                      </p>
                    )}
                  </div>
                  <div className="form-group">
                    <Input
                      type="password"
                      id="inputPassword"
                      placeholder="Password"
                      onChange={e => handelOnChange(e, 'password')}
                      customClassName={
                        errorRegister && errorRegister.password ? ' red' : ''
                      }
                      value={password}
                      errorMsg={errorRegister && errorRegister.password}
                      onKeyPress={handleKeyDown}
                    />
                  </div>
                  <div className="form-check">
                    <div className="form-check-label text-muted ml-0">
                      <CheckBox
                        name="checkInput"
                        isChecked={isChecked}
                        label="I agree to all TermsConditions"
                        id="checkInput"
                        handleToggleCheckbox={() => {
                          setParamsRegister({
                            ...paramsRegister,
                            isChecked: !isChecked
                          });
                          setErrorRegister({
                            ...errorRegister,
                            isChecked: ''
                          });
                        }}
                      />
                    </div>
                    {errorRegister?.isChecked && (
                      <p className="error-msg text-danger">
                        {errorRegister?.isChecked}
                      </p>
                    )}
                  </div>
                  <div className="mt-3">
                    <PrimaryButton
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      onClick={() => handelSubmit()}
                    >
                      SIGN UP
                    </PrimaryButton>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account?
                    <Link to={ROUTERS.LOGIN} className="text-primary">
                      Login
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

export default Signin;
