import { BsLightningChargeFill } from 'react-icons/bs';
import classes from './Features.module.css';

const Features = () => {
  return (
    <div className='container py-5'>
      <div className='row'>
        <div className='col-lg-3'>
          <div className={classes.featureWrapper}>
            <div className={classes.featureIcon}>
              <BsLightningChargeFill />
            </div>
            <div className={classes.featureContent}>
              <h6>Quick Delivery</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-3'>
          <div className={classes.featureWrapper}>
            <div className={classes.featureIcon}>
              <BsLightningChargeFill />
            </div>
            <div className={classes.featureContent}>
              <h6>Quick Delivery</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-3'>
          <div className={classes.featureWrapper}>
            <div className={classes.featureIcon}>
              <BsLightningChargeFill />
            </div>
            <div className={classes.featureContent}>
              <h6>Quick Delivery</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </div>
        <div className='col-lg-3'>
          <div className={classes.featureWrapper}>
            <div className={classes.featureIcon}>
              <BsLightningChargeFill />
            </div>
            <div className={classes.featureContent}>
              <h6>Quick Delivery</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
