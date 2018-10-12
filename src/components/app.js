import React, { Component } from 'react';
import ENV_VARS from '../environment'

export default class App extends Component {

  componentDidMount () {
    console.log(ENV_VARS)
  }

  render() {
    return (
      <div>React simple starter</div>
    );
  }   
}
