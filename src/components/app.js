import React, { Component } from 'react'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
import ENV_VARS from '../environment'
import YTSearch from 'youtube-api-search'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }
    
    YTSearch({ key: ENV_VARS.API_KEY, term: 'lil tay' }, (videos) => {
      this.setState({ 
        videos, 
        selectedVideo: videos[0] 
      })
    })
  }

  render() {
    const { videos, selectedVideo } = this.state

    return (
      <div className="container">
        <header className="row d-flex justify-content-center">
          <SearchBar />
        </header>
        <main className="container">
          <div className="row">
            <VideoDetail video={ selectedVideo } />
            <VideoList 
              videos={ videos } 
              onVideoSelect={ (selectedVideo) => this.setState({ selectedVideo })}   
            />
          </div>
        </main>
      </div>
    )
  }   
}
