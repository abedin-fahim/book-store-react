import Logo from '../assets/logo.svg';

const Header = () => {
  return (
    <div className='container py-3'>
      <div className='row align-items-center'>
        <div className='col-lg-3'>
          <a
            className='navbar-brand'
            href='#'
          >
            <img src={Logo} />
          </a>
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
              <button>Login</button>
              <button>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
