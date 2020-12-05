import React from 'react';
import { TweenMax, Power3 } from 'gsap';


class Crawling extends React.Component {

  constructor(props) {
    super(props);
    this.content = null;
    this.state = {
      data: "",
      datas: ""
    }

  }


  componentDidMount() {
    this.callApi().then(res => this.setState({ data: res })).catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/crawling/corona');
    const response1 = await fetch('/crawling/data');
    const body = await response.json();
    const body1 = await response1.json();
    this.setState({ datas: body1 });
    return body;
  }

  render() {

    return (
      <div className="container" ref={node => (this.content = node)} >
        <h1 style={styles.bold}>직장인 필수</h1>
        <p style={styles.light}>" 날씨, 확진자, 미세먼지 3가지 모두 확인! "</p>
        <div className="info_wrap">
          <img src="https://cdn.pixabay.com/photo/2018/10/13/17/53/chasing-3744753_960_720.jpg" className="info_image" />
          <h2 className="info_title">미세먼지</h2>
          {
            this.state.datas ? this.state.datas.map(e => {
              return (
                <>
                  <p className="info_content">{e.temperature ? e.temperature : ''}</p>
                </>
              )

            }) : <div>없음</div>

          }
        </div>
        <div className="info_wrap">
          <img src="https://cdn.pixabay.com/photo/2018/10/13/17/53/chasing-3744753_960_720.jpg" className="info_image" />
          <h2 className="info_title">코로나</h2>
          {
            this.state.data ? this.state.data.map(e => {
              return (
                <>
                  <p className="info_content">{e.text === "확진환자" ? e.num : ''}</p>
                </>
              )
            }) : <div>없음</div>

          }
        </div>
        <div className="info_wrap">
          <img src="https://cdn.pixabay.com/photo/2018/10/13/17/53/chasing-3744753_960_720.jpg" className="info_image" />
          <h2 className="info_title">날씨</h2>
          {
            this.state.datas ? this.state.datas.map(e => {
              return (
                <>
                  <p className="info_content">{e.temperature ? e.temperature : ''}</p>
                </>
              )
            }) : <div>없음</div>

          }
        </div>
      </div>
    )
  }
}
const styles = {
  bold: {
    fontFamily: 'HangeulNuri-Bold',
    marginLeft: '45vw',
    marginTop: '100px'
  },
  light: {
    fontFamily: 'Jeju Myeongjo',
    marginLeft: '40vw',
    fontSize: 20,
    marginTop: '40px'
  }
}


export default Crawling;