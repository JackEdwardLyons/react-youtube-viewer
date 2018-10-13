import React, { Component } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import ENV_VARS from '../environment'
import YTSearch from 'youtube-api-search'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      videos: []
    }
    
    YTSearch({ key: ENV_VARS.API_KEY, term: 'lil tay' }, (videos) => {
      this.setState({ videos })
    })
  }

  render() {
    const { videos } = this.state

    return (
      <div>
        <SearchBar />
        <VideoList videos={ videos } />
      </div>
    );
  }   
}
