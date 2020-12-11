import { motion } from 'framer-motion';
import React from 'react';
import blog from '../images/blog.png';
import github from '../images/github.png';
import { Link } from 'react-router-dom';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -20],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.8
      },
      y: {
        yoyo: Infinity,
        duration: 0.4
      }
    }
  }
}



function Header() {
  return (
    <div style={styles.menu}>
      <Link to="/home">
        <div style={styles.loader_wrap}>
          <motion.div className='loader'
            variants={loaderVariants}
            animate="animationOne">
          </motion.div>
        </div>
      </Link>
      <div style={styles.menu_list_wrap}>


        <a href="https://github.com/hayoung2" >
          <img className="header-logo" src={blog} alt="blog-logo" />
        </a>

        <a href="https://github.com/hayoung2" >
          <img className="header-logo" src={github} alt="github-logo" />
        </a>

        <Link to="/community" className="link-to-style">
          <p className="menu-list-item">Community</p>
        </Link>
        <a href="http://localhost:3000/home#crawling">
          <p className="menu-list-item">ForeCast</p>
        </a>
        <p className="menu-list-item">About</p>

      </div>
    </div >
  )
}
const styles = {
  menu: {
    width: '100%',
    height: '10vh',
    color: 'black',
    opacity: '0.8',
  },
  menu_list_wrap: {
    marginRight: '9vw',
    fontFamily: 'HangeulNuri-Bold',
    fontSize: 18,
    paddingTop: '2vh'
  },
  loader_wrap: {
    paddingTop: '5vh',
    paddingLeft: '6vw',
    float: 'left'
  }

}

export default Header;