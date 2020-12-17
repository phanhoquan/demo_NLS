// @flow
import React, { useState, memo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ROUTERS from 'constants/routers';
import { Creators } from '../../loginAccount/redux';
import { Link } from 'react-router-dom';
import { API } from 'utils/Apis';
import Input from 'components/Input';
import IMAGES from 'themes/images';

type Props = {
  logOut: Function,
  handelSubmit: Function,
  handelOnChange: Function,
  handleKeyDown: Function,
  keySearch: string
};

export const Header = ({
  logOut,
  handelSubmit,
  handelOnChange,
  handleKeyDown,
  keySearch
}: Props) => {
  const [isShowLogout, setIsShowLogout] = useState(false);

  const handleShowModalLogout = () => {
    setIsShowLogout(!isShowLogout);
  };

  const handleLogout = () => {
    logOut();
    API.setHeader('Authorization', '');
  };

  return (
    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo mr-5" to={ROUTERS.ROOT}>
          <img src={IMAGES.iconLogo} className="mr-2" alt="logo" />
        </Link>
        <Link className="navbar-brand brand-logo-mini" to={ROUTERS.ROOT}>
          <img src={IMAGES.iconLogoMini} alt="logo" />
        </Link>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-search d-none d-lg-block">
            <div className="input-group">
              <div
                className="input-group-prepend hover-cursor"
                id="navbar-search-icon"
                onClick={handelSubmit}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
              >
                <span className="input-group-text" id="search">
                  <i className="ti-search" />
                </span>
              </div>
              <Input
                type="text"
                value={keySearch}
                onChange={e => handelOnChange(e)}
                id="navbar-search-input"
                placeholder="Search now"
                aria-label="search"
                onKeyPress={handleKeyDown}
              />
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-profile dropdown">
            <div
              className="nav-link dropdown-toggle"
              onClick={() => handleShowModalLogout()}
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
            >
              <img src={IMAGES.face28} alt="profile" />
            </div>
            <div
              className={`dropdown-menu dropdown-menu-right navbar-dropdown ${
                isShowLogout ? 'd-block' : 'd-none'
              }`}
              aria-labelledby="profileDropdown"
            >
              <div
                className="dropdown-item"
                to="/"
                onClick={() => handleLogout()}
              >
                <i className="ti-power-off text-primary" />
                Logout
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
const mapStateToProps = state => {
  return {
    type: state.accountReducer.type
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...Creators,
      logOut: Creators.logOut
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo<Props>(Header));
