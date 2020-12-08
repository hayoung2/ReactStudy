import React from 'react';



class Crawling extends React.Component {

  constructor(props) {
    super(props);
    this.content = null;
    this.state = {
      coronaData: "",
      weatherData: "",
      dustData: ""
    }

  }


  componentDidMount() {
    this.callApi().then(res => this.setState({ coronaData: res })).catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/crawling/corona');
    const response1 = await fetch('/crawling/weather');
    const dust = await fetch('/crawling/dust');
    const body = await response.json();
    const body1 = await response1.json();
    const dustBody = await dust.text()
    this.setState({ weatherData: body1 });
    this.setState({ dustData: dustBody.substr(35, 2) });
    return body;
  }

  render() {

    return (
      <div className="container" ref={node => (this.content = node)} >
        <h1 style={styles.bold}>직장인 필수</h1>
        <p style={styles.light}>" 날씨, 확진자, 미세먼지 3가지 모두 확인! "</p>
        <div className="info_wrap">
          <img src="https://cdn.pixabay.com/photo/2018/10/13/17/53/chasing-3744753_960_720.jpg" className="info_image" alt="dust" />
          <h2 className="info_title">미세먼지</h2>
          <p className="info-content">{this.state.dustData ? this.state.dustData.replaceAll('\t', '') : ''}</p>
        </div>
        <div className="info_wrap">
          <img src="https://cdn.pixabay.com/photo/2018/10/13/17/53/chasing-3744753_960_720.jpg" className="info_image" alt="corona" />
          <h2 className="info_title">코로나</h2>
          {
            this.state.coronaData ? this.state.coronaData.map(e => {
              return (
                <>
                  <p className="info-content">{e.text === "확진환자" ? e.num.substr(21, 5).replaceAll(')', '') : ''}</p>
                </>
              )
            }) : <div className="info-content">없음</div>

          }
        </div>
        <div className="info_wrap">
          <img src="https://cdn.pixabay.com/photo/2018/10/13/17/53/chasing-3744753_960_720.jpg" className="info_image" alt="weather" />
          <h2 className="info_title">날씨</h2>
          {
            this.state.weatherData ? this.state.weatherData.map(e => {
              return (
                <>
                  <p className="info-content">{e.temperature ? e.temperature : ''}</p>
                </>
              )
            }) : <div className="info-content">없음</div>

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
    fontSize: 24,
    marginTop: '40px'
  }
}


export default Crawling;