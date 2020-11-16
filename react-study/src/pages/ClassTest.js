import React, { Component } from 'react';
import About from './About';

class ClassTest extends Component {
  render() {
    const title = "class 컴포넌트 실습"
    const { user, age, children } = this.props;
    return (
      <div>
        {title}
        <div style={styles}>
          <About name="하하" />
          안녕하세요 {user} 입니다
          children 값은 {children}
          나이는 {age}
        </div>
      </div>
    )
  }
}
const styles = {
  color: "black",
  backgroundColor: "blue"
}

export default ClassTest;