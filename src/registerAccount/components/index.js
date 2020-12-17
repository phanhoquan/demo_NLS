// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import ROUTERS from 'constants/routers';
import PrimaryButton from 'components/Button';
import Input from 'components/Input';
import IMAGES from '../../themes/images';

const Signin = () => {
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
                      value=""
                      onChange={() => {}}
                      id="exampleInputUsername1"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      value=""
                      onChange={() => {}}
                      type="email"
                      id="exampleInputEmail1"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <select
                      className="form-control form-control-lg"
                      id="exampleFormControlSelect2"
                    >
                      <option>Country</option>
                      <option>United States of America</option>
                      <option>United Kingdom</option>
                      <option>India</option>
                      <option>Germany</option>
                      <option>Argentina</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <Input
                      value=""
                      onChange={() => {}}
                      type="password"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-4">
                    <div className="form-check">
                      <div className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        I agree to all TermsConditions
                        <i className="input-helper" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <PrimaryButton
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                      onClick={() => {}}
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
        {/* content-wrapper ends */}
      </div>
      {/* page-body-wrapper ends */}
    </div>
  );
};

export default Signin;
