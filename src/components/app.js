import React, { Component } from 'react';
import ENV_VARS from '../environment'
import YTSearch from 'youtube-api-search'

YTSearch({ key: ENV_VARS.API_KEY, term: 'surfboards' }, (response) => {
  console.log(response)
})

export default class App extends Component {

  render() {
    return (
      <div>React simple starter</div>
    );
  }   
}
