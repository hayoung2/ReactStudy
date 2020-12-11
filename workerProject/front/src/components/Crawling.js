import React from 'react';
import { motion } from 'framer-motion';
import corona from '../images/city.jpg';


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
        <h1 style={styles.bold}>Forecast</h1>
        <p style={styles.light}>" 날씨, 확진자, 미세먼지 3가지 모두 확인 "</p>
        <motion.div
          initial={{ opacity: 0.8 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
        >
          <div className="info_wrap">
            <img src={corona} className="info_image" alt="dust" />
            <h2 className="info_title">미세먼지</h2>
            <p className="info-content">{this.state.dustData ? this.state.dustData.replaceAll('\t', '') : ''}</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.8 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
        >
          <div className="info_wrap">
            <img src={corona} className="info_image" alt="corona" />
            <h2 className="info_title">코로나</h2>
            {
              this.state.coronaData ? this.state.coronaData.map(e => {
                return (
                  <>
                    <p className="info-content">{e.text === "확진환자" ? e.num.substr(21, 5).replaceAll(')', '') + '명' : ''}</p>
                  </>
                )
              }) : <div className="info-content">없음</div>

            }
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.8 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
        >
          <div className="info_wrap">
            <img src={corona} className="info_image" alt="weather" />
            <h2 className="info_title">날씨</h2>
            {
              this.state.weatherData ? this.state.weatherData.map(e => {
                return (
                  <>
                    <p className="info-content">{e.temperature ? e.temperature + '°C' : ''}</p>
                  </>
                )
              }) : <div className="info-content">없음</div>

            }
          </div>
        </motion.div>
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
    marginLeft: '37vw',
    fontSize: 24,
    marginTop: '40px'
  }
}


export default Crawling;