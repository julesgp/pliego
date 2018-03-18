import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
  componentDidMount(){
    axios.get('/hello').then(res =>{console.log(res.data);});
  }

  render() {
    return (
      <div>
        <h1> Hello World </h1>
      </div>
    );
  }
}

export default App;
