import { Fragment } from 'react';
import topLeftAbstract from '../assets/hero/cirlces.png';
import topRightAbstract from '../assets/hero/Ellipse 3.png';
import bottomCenterAbstract from '../assets/hero/Group 48.png';
import placeholder from '../assets/hero/placeholder.png';
import classes from './Hero.module.css';

const Hero = () => {
  return (
    <Fragment>
      <div className='container mt-5'>
        <div className='row'>
          <div className={`col-lg-9`}>
            <div className={`${classes.leftSide}`}>
              <img
                className={`${classes.topLeft}`}
                src={topLeftAbstract}
                alt='abstract'
              />
              <img
                className={`${classes.topRight}`}
                src={topRightAbstract}
                alt='abstract'
              />
              <img
                className={`${classes.bottomCenter}`}
                src={bottomCenterAbstract}
                alt='abstract'
              />
              <div className={`${classes.heroContent}`}>
                <h4>BACK TO SCHOOL</h4>
                <h1>Special 50% Off</h1>
                <h2>for our student community</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
                <div className='heroContentActions'>
                  <button>Get the deal</button>
                  <button>See other promos</button>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-lg-3 text-center`}>
            <div className={`${classes.rightSide}`}>
              <h2>Best Seller</h2>
              <p>Based sales this week</p>
              <div className='book'>
                <img
                  src={placeholder}
                  alt='placeholder_img'
                />
                <h6>Pushing Clouds</h6>
                <span>ADVANTURE, SCIENCE, COMEDY</span>
                <button>$60.00</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
