import React from 'react';

import FriendList from '../src/components/FriendList';
import Form from '../src/components/Form';

import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      friends: []
    }
  }
  
  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(res => {
      console.log(res);
      this.setState({ friends: res.data})
    })
    .catch(err => {
      console.log(err);
    })
  }

  render(){
    return (
      <div className="App">
        <FriendList 
          friends={this.state.friends}
        />
        <Form />
      </div>
    );
  }
}

export default App;
