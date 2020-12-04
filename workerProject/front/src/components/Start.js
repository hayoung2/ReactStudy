import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Particles from 'react-particles-js'
import Main from './Main';


function Start() {

  return (

    <div style={styles.box}>
      <Particles params={{
        particles: {
          line_linked: {
            shadow: {
              enable: true,
              color: "#3CA9D1",
              blur: 1
            }
          }
        }
      }} />

      <motion.div style={styles.motion}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
        <p style={{ fontFamily: 'HangeulNuri-Bold' }}>오늘도 상사 레전드</p>
        <span>끔찍한 일주일을 보낸 당신,</span>
        <span>익명을 통해 시원하게 당신의 상사를 <span>욕해봐요</span></span>
        <br />
        <Link to='/home'>
          <button>시작하기</button>
        </Link>

      </motion.div>
    </div>

  );
}

const styles = {
  box: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  motion: {
    position: 'absolute',
    bottom: '50vh',
    left: '40vw'
  }
}

export default Start;