import React, { Button } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



function Certification1() {


  return (

    <div style={styles.box}>

      <div class="wrapper">
        <div>
          <h2>아임포트 테스트</h2>
          <h4>아임포트 리액트 테스트 화면입니다.</h4>
          <h4>아래 버튼을 눌러 결제 또는 본인인증 테스트를 진행해주세요.</h4>
        </div>
        <div></div>
        <div class="ButtonContainer">
          <Link to='/payment'>

            결제 테스트
        </Link>
          <Link to='/certification'>
            본인인증 테스트
        </Link>
        </div>
      </div>

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

export default Certification1;