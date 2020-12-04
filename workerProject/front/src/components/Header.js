import React from 'react'

const styles = {
  menu: {
    width: '100%',
    height: '20vh',
    backgroundColor: 'white'
  },
  menu__list: {
    float: 'right',

  }
}

function Header() {
  return (
    <div style={styles.menu}>

      <div style={styles.menu__list}>
        <p>About</p>
        <p>Community</p>
      </div>
    </div>
  )
}

export default Header;