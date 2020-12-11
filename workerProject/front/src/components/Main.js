import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Crawling from './Crawling';
import MainCommunity from './MainCommunity';
import { motion } from 'framer-motion';
import video from './video/Breton.mp4';
import sprout from '../images/sprout.png';

const Main = (props) => {


  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
      <Header />

      <div>

        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          <img src={sprout} id="first-screen-img" alt="Freepik" />
          <h2 className="text-animation">Community</h2>

        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
          <p id="first-screen-txt">AWS + React Toy Project(4주차)<br />
          </p>

        </motion.div>

        <video id="video" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
          <source src={video} />
        </video>

      </div>
      <a id="crawling" name="crawling">
        <Crawling />
      </a>
      <div className="phrase-wrap">
        <p className="phrase">
          Our greatest weakness lies in Giving up. <br />
        The most certain way to succeed is always to try just one more time<br />
          <br /> <span style={{ marginLeft: '25vw', fontSize: '2.5vw' }}>by Thomas A. Edison</span></p>
      </div>
      <div>
        <MainCommunity />

      </div>
      <Footer />
    </div>
  )
}



export default Main;