import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PropsTest = (props) => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!,');
  const onClickLeave = () => setMessage('안녕히 가세요!,');
  const [color, setColor] = useState('black');

  return (
    <div>
      <h2>PropsTest 하는 곳</h2>
      {/* {props.name} */}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>

      {props.children}
    </div>
  )
}

// 오류 실습
// PropsTest.defaultProps = {
//   name: '기본 이름'
// };

// PropsTest.propTypes = {
//   name: PropTypes.string
//   };

export default PropsTest;