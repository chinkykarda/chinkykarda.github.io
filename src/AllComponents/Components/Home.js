import React from 'react';
import ChinkyImage from '../Images/ChinkyImage.jpg';
import './Home.css';

function Home() {
  return (
   <>
    <div className='home'>
    <h2>Hi!</h2>
              <h1>I'm Chinky Karda.</h1>
              <h3 className="tagline">A Learner | Computer Science Senior at <a className="iiitnr" href="https://www.iiitnr.ac.in/"> IIIT Naya Raipur</a></h3>
              <br/>
              <br/>
              <p className="about">A Tech Enthusiast with habit of learning forever. I like to expand my horizons and figuring out better ways to solve the problems.
                I love to compete with my own past performances. I believe improvement is always better than perfection. Looking for opportunities that will bring forth exciting challenges.
              </p>
    </div>
   </>
  );
}

export default Home;
