import React, { Component } from 'react';

class RefTest extends Component {

  scrollToBottom = () => {
    const { scrollHeigth, clientHeight } = this.box;
    this.box.scrollTop = scrollHeigth - clientHeight;
  }

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    };

    const innerStyle = {
      width: '100%',
      height: '650px',
      background: 'linear-gradient(white, black)'
    }
    return (
      <div
        style={style}
        ref={(ref) => { this.box = ref }}

      >
        <div style={innerStyle} />
        <button onClick={() => this.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    )
  }
}

export default RefTest;