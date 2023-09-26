import React from 'react';
import { Outlet } from 'react-router-dom';

const BooksGridPage = () => {
  return (
    <div>
      <Outlet />
      BooksGridPage
    </div>
  );
};

export default BooksGridPage;
