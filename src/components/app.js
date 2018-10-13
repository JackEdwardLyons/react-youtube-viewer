import React, { Component } from 'react';
import SearchBar from './SearchBar'
import ENV_VARS from '../environment'
import YTSearch from 'youtube-api-search'

YTSearch({ key: ENV_VARS.API_KEY, term: 'surfboards' }, (response) => { 
  console.log(response) 
})

export default class App extends Component {

  render() {
    return (
      <div>
        <SearchBar />
        React simple starter
      </div>
    );
  }   
}
