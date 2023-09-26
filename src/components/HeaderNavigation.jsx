import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const HeaderNavigation = () => {
  return (
    <div className='container py-3'>
      <div className='row align-items-center'>
        <div className='col-lg-3'>
          <Link
            className='navbar-brand'
            to='/'
          >
            <img src={Logo} />
          </Link>
        </div>
        <div className='col-lg-9 text-right'>
          <div className='row align-items-center'>
            <div className='col-lg-9'>
              <div className='input-group'>
                <span className='input-group-text'>$</span>
                <input
                  type='text'
                  className='form-control'
                  aria-label='Amount (to the nearest dollar)'
                />
                <span className='input-group-text'>.00</span>
              </div>
            </div>
            <div className='col-lg-3'>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigation;
