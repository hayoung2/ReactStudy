import React from 'react'
import Header from './Header';
import './style.css';
import Footer from './Footer';
import { post } from 'axios';

class Post extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      name: '',
      content: '',
      date: '',
      image: null,
      fileName: ''
    }
  }
  addData = () => {
    const url = '/api/userPosting';
    const formData = new FormData();
    formData.append('image', this.state.image);
    formData.append('name', this.state.name);
    formData.append('time', this.state.date ? this.state.date : '2020.12.09');
    formData.append('title', this.state.title);
    formData.append('content', this.state.content);

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return post(url, formData, config);
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    this.addData().then((response) => {
      console.log(response.data);
    })
    alert('포스팅 완료!');
    this.setState({
      file: null,
      name: '',
      fileName: '',
      title: '',
      content: '',
      date: ''
    });
  }
  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);

  }
  handleFileChange = (e) => {
    this.setState({
      image: e.target.files[0],
      fileName: e.target.value
    })
  }
  render() {
    return (
      <>
        <Header />
        <h2 className="page-title">작성하기</h2>

        <form onSubmit={this.handleFormSubmit}>
          제목 : <input type="text" name="title" value={this.state.title} onChange={this.handleValueChange} /><br />
          이름:<input type="text" name="name" value={this.state.name} onChange={this.handleValueChange} /><br />
          파일 :<input type="file" value={this.state.fileName}
            file={this.state.image} onChange={this.handleFileChange} /><br />
          내용:<br />
          <textarea name="content" value={this.state.content} onChange={this.handleValueChange}  ></textarea>
          <button type="submit">글쓰기</button>
        </form>
        <Footer />
      </>
    )
  }
}

export default Post;