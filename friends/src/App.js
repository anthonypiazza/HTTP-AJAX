import React from 'react';

import FriendList from '../src/components/FriendList';
import Form from '../src/components/Form';

import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  };

  postFriend = () => {
    const newFriend= {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios 
      .post('http://localhost:5000/friends', newFriend)
      .then(res => console.log('We did it!', res))
      .catch(err => console.log('You Broke it!', err))
    this.setState({ name: '', age:'', email: '' })
  };

  putFriend = () => {
    const updateFriend= {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email
    };
    axios 
      .put(`http://localhost:5000/friends/6`, updateFriend)
      .then(res => console.log('We did it!', res))
      .catch(err => console.log('You Broke it!', err))
    this.setState({ name: '', age:'', email: '' })
  };

  deleteFriend = () => {
    axios 
      .delete(`http://localhost:5000/friends/5`)
      .then(res => console.log('We did it!', res))
      .catch(err => console.log('You Broke it!', err))
  };

  componentDidMount(){
    axios
      .get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  };

  render(){
    return (
      <div className="App">
        <FriendList friends={this.state.friends} />
        <Form 
          name={this.state.name}
          age={this.state.age}
          email={this.state.email}
          handleChange={this.handleChange}
          postFriend={this.postFriend}
          putFriend={this.putFriend}
          deleteFriend={this.deleteFriend}
        />
      </div>
    )
  }
}

export default App;
