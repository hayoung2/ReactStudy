import React from 'react'

const styles = {
  menu: {
    width: '100%',
    height: '10vh',
    marginTop: '3vh',
    backgroundColor: 'black',
    color: 'white'
  },
  menu__list: {
    float: 'right',

  }
}

function Footer() {
  return (
    <div style={styles.menu}>
      <div className="menu-list-wrap">
        <p className="menu-list-item">About</p>
        <p className="menu-list-item">Community</p>
      </div>
      <div className="info-wrap">
        <p className="info-list-1">Created by Hayoung2</p>
      </div>
    </div>
  )
}

export default Footer;