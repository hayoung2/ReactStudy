import React from 'react';
import { BrowserRouter as Link, Route, Router } from 'react-router-dom';

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
        <h1>Community</h1>
        <p>오늘 하루도 열심히 버틴 직장인들을 위한 작은 화풀이 공간</p>
        {
          this.state.data ? this.state.data.map(c => {
            return (
              <div>
                <div>{c.image}</div>
                <div>{c.time} {c.name}</div>
                <div>{c.title}{c.content}</div>
              </div>
            )
          }) : <div>아직 아무도 글을 작성하지 않았어요! </div>
        }
        <div>
          <button>글쓰기</button>
          <button>더보기</button>
        </div>
      </div>
    )
  }
}

export default Community;