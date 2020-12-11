import React from 'react';
import { Link, Route, Router } from 'react-router-dom';



class MainCommunity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: ""
    }
  }
  componentDidMount() {
    this.callApi().then(res => this.setState({ data: res })).catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/mainPosting');
    const body = await response.json();
    return body;
  }

  render() {
    return (
      <div>
        <div className="community-wrap">
          <h1 className="community-title">Community</h1>


        </div>
        <div className="main-community-wrap">
          {
            this.state.data ? this.state.data.map(c => {
              return (

                <div className="box">
                  <img src={c.image} alt="by me" className="user-img" />
                  <p className="user-title">{c.title}</p>
                  <h3 className="user-content">{c.content}</h3>
                  <p className="user-info">by {c.name} | {c.time}</p>
                </div>

              )
            }) : <div className="box">아직 아무도 글을 작성하지 않았어요! </div>
          }
          <Link to='/community'>
            <button className="move-btn">Read more</button>
          </Link>
        </div>

      </div>
    )
  }
}


export default MainCommunity;