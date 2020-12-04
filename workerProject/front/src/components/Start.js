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
              color: "#ffffff",
              blur: 1
            }
          }
        }
      }} />

      <motion.div style={styles.motion}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
        <p style={styles.title}>오늘도 상사 레전드</p>
        <span style={styles.contents_1}>끔찍한 일주일을 보낸 당신,<br /></span>
        <span style={styles.contents_2}>익명을 통해 시원하게 당신의 상사를 <span style={{ textDecoration: 'line-through' }}>욕해보세요.</span></span>
        <br />
        <Link to='/home'>
          <button style={styles.buttonStyle} onMouseOver={((event) => {
            event.target.style.backgroundColor = "white";
            event.target.style.color = "black"
          }).bind(this)} onMouseOut={((event) => {
            event.target.style.background = 'none';
            event.target.style.color = "white"
          }).bind(this)}>Start</button>
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
    bottom: '40vh',
    left: '32vw'
  },
  title: {
    color: "white",
    fontFamily: 'HangeulNuri-Bold',
    fontSize: 60,
    marginLeft: '6vw'
  },
  contents_1: {
    color: "white",
    fontFamily: 'Jeju Myeongjo',
    fontSize: 30,
    letterSpacing: 3,
    lineHeight: 2,
    marginLeft: '8vw'
  },
  contents_2: {
    color: "white",
    fontFamily: 'Jeju Myeongjo',
    fontSize: 30,
    letterSpacing: 3,
    lineHeight: 2,
  }
  ,
  buttonStyle: {
    background: 'none',
    width: '7vw',
    height: '5vh',
    marginLeft: '13vw',
    fontSize: 21,
    fontFamily: 'Jeju Myeongjo',
    marginTop: '4vh',
    borderRadius: 10,
    color: 'white',
    borderColor: 'white'
  }
}

export default Start;