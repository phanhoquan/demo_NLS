// @flow
/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import Header from 'components/header';
import Loading from 'components/Loading';

type Props = {
  isProcessing: boolean,
  getListUser: Function,
  listAccountManagement: Array<{}>
};

const HomeComponent = ({
  isProcessing,
  getListUser,
  listAccountManagement
}: Props) => {
  const limitPage = 4;
  const [totalRows, setTotalRows] = useState(0);
  const [keySearch, setKeySearch] = useState('');
  const [paginationIndex, setPaginationIndex] = useState(1);
  const startPage = (paginationIndex - 1) * limitPage;
  const [paged, setPaged] = useState(startPage);
  const [listUser, setListUser] = useState(listAccountManagement || []);

  // call api list user
  useEffect(() => {
    getListUser();
  }, []);

  useEffect(() => {
    setTotalRows(listAccountManagement && listAccountManagement.length);
  }, [listAccountManagement && listAccountManagement.length]);

  useEffect(() => {
    setPaged(startPage);
  }, [paginationIndex]);

  useEffect(() => {
    setListUser(listAccountManagement.slice(startPage, startPage + limitPage));
  }, [listAccountManagement, paged, paginationIndex]);

  const valueSearch = keySearch && keySearch.toLowerCase().trim();
  const handelOnChange = value => {
    setKeySearch(value);
  };

  // Search row
  const handelSubmit = () => {
    const listFilter = listAccountManagement.filter(
      item =>
        item.name.toLowerCase().includes(valueSearch) ||
        item.phone.toLowerCase().includes(valueSearch) ||
        item.email.toLowerCase().includes(valueSearch)
    );
    setTotalRows(listFilter.length);
    setListUser(listFilter.slice(0, limitPage));
    setPaginationIndex(1);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handelSubmit();
    }
  };

  const handleSelectPagination = eventKey => {
    setPaginationIndex(eventKey);
  };

  const renderTableBody =
    listUser &&
    listUser.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td className="py-1">
            <img src={item.avatar} alt={item.name} />
          </td>
          <td>{item.name}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
        </tr>
      );
    });

  return (
    <div className="container-scroller">
      <Header
        handelOnChange={handelOnChange}
        handleKeyDown={handleKeyDown}
        handelSubmit={handelSubmit}
        keySearch={keySearch}
      />
      <div className="col-lg-12 grid-margin stretch-card">
        {isProcessing ? (
          <div className="wrapper-loading">
            <Loading size="lg" variant="dark" />
          </div>
        ) : (
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Striped Table</h4>
              <p className="card-description">
                Add class
                <code>.table-striped</code>
              </p>

              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Avatar</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>{renderTableBody}</tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      {totalRows > 5 && (
        <div>
          {!isProcessing && (
            <div className="wrapper-pagination">
              <Pagination
                prevPageText="<"
                nextPageText=">"
                firstPageText="<<"
                lastPageText=">>"
                activePage={paginationIndex}
                itemsCountPerPage={limitPage}
                totalItemsCount={totalRows}
                pageRangeDisplayed={
                  Math.ceil(totalRows / limitPage) < 10
                    ? Math.ceil(totalRows / limitPage)
                    : 10
                }
                onChange={eventKey => handleSelectPagination(eventKey)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default memo<Props>(HomeComponent);
