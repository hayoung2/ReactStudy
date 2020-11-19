import React, { Component } from 'react';

class EventTest extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }
  }


  handleChange = (e) => {
    this.setState({
      message: e.target.value
    });
  }
  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: ''
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="입력"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress} />
        <button onClick={this.handleClick}>클릭</button>
      </div>
    )
  }
}

export default EventTest;