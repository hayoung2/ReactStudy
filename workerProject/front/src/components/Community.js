import React from 'react';
import { Link, Route, Router } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Community extends React.Component {

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
    const response = await fetch('/api/userPosting');
    const body = await response.json();
    return body;
  }

  render() {
    return (
      <div>
        <Header />
        <div className="community-wrap">
          <h1 className="community-title">Community</h1>
        </div>
        <hr />
        {
          this.state.data ? this.state.data.map(c => {
            return (
              <div className="post-wrap">

                <img src={c.image} className="post-image" />
                <div className="post-data">
                  <h3 className="post-date">{c.time}</h3>
                  <p className="post-name">{c.name}</p>
                </div>
                <div className="post-content">
                  <h3 className="post-content-title">{c.title}</h3>
                  <p className="post-content-content">
                    {c.content}
                  </p>
                </div>

              </div>

            )
          }) : <div>아직 아무도 글을 작성하지 않았어요! </div>
        }
        <div className="community-btn-wrap">
          <Link to="/post" >
            <button className="btn-style">글쓰기</button>
          </Link>
          <button className="btn-style">더보기</button>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Community;