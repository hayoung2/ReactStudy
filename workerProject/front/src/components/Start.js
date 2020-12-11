import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Particles from 'react-particles-js'



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

      <motion.div className="bottom-fade-in"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}>
        <p style={styles.title}>개인 프로젝트</p>
        <span style={styles.contents_1}>VSCode, React, AWS RDS <br /></span>
        <span style={styles.contents_2}>React 스터디 4주차 토이 프로젝트 만들기</span>
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
    backgroundColor: 'black'
  },
  title: {
    color: "white",
    fontFamily: 'HangeulNuri-Bold',
    fontSize: "2.3vw",
    marginLeft: '10vw'
  },
  contents_1: {
    color: "white",
    fontFamily: 'Jeju Myeongjo',
    fontSize: "1.3vw",
    letterSpacing: 3,
    lineHeight: 2,
    marginLeft: '9vw'
  },
  contents_2: {
    color: "white",
    fontFamily: 'Jeju Myeongjo',
    fontSize: "1.4vw",
    marginLeft: '3vw',
    letterSpacing: 3,
    lineHeight: 2,
  }
  ,
  buttonStyle: {
    background: 'none',
    width: '7vw',
    height: '4.3vh',
    marginLeft: '13vw',
    fontSize: "1vw",
    fontFamily: 'Jeju Myeongjo',
    marginTop: '4vh',
    borderRadius: 10,
    color: 'white',
    borderColor: 'white'
  }
}

export default Start;