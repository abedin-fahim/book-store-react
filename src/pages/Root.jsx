import { Fragment } from 'react';
import HeaderNavigation from '../components/HeaderNavigation';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <Fragment>
      <header className='border-bottom'>
        <HeaderNavigation />
      </header>

      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
