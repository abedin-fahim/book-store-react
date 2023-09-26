import { Fragment } from 'react';
import Header from '../components/HeaderNavigation';
import Hero from '../components/Hero';
import Features from '../components/Features';

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
    </Fragment>
  );
};

export default HomePage;
