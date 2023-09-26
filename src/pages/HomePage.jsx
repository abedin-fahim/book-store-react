import { Fragment } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';

const HomePage = () => {
  return (
    <Fragment>
      <header className='border-bottom'>
        <Header />
      </header>
      <main>
        <Hero />
        <Features />
      </main>
    </Fragment>
  );
};

export default HomePage;
