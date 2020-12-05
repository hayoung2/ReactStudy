import { motion } from 'framer-motion';
import React from 'react'

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
      <div style={styles.loader_wrap}>
        <motion.div className='loader'
          variants={loaderVariants}
          animate="animationOne">
        </motion.div>
      </div>
      <div style={styles.menu_list_wrap}>
        <p style={styles.menu_list_item}>About</p>
        <p style={styles.menu_list_item}>Community</p>
      </div>
    </div>
  )
}
const styles = {
  menu: {
    width: '100%',
    height: '10vh',
    backgroundColor: 'white'
  },
  menu_list_wrap: {
    marginRight: '10vw',
    fontFamily: 'HangeulNuri-Bold',
    fontSize: 18,
    paddingTop: '2vh'
  },
  menu_list_item: {
    float: 'right',
    marginRight: '3vw'
  },
  loader_wrap: {
    paddingTop: '5vh',
    paddingLeft: '6vw',
    float: 'left'
  }

}

export default Header;