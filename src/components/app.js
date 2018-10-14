import React, { Component } from 'react'
import ENV_VARS from '../environment'
import YTSearch from 'youtube-api-search'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('rock climbing')
  }
  
  videoSearch = (term) => {
    YTSearch({ key: ENV_VARS.API_KEY, term }, (videos) => {
      this.setState({ 
        videos, 
        selectedVideo: videos[0] 
      })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
    const { videos, selectedVideo } = this.state

    return (
      <div className="container">
        <header className="row pl-4 pr-4 d-flex">
          <div className="header-brand">
              <img className="react-icon mr-2" src="https://bit.ly/2OShksn" />
              <h5 className="d-inline-block header-brand__title">React YouTube Search</h5>
          </div>
          <div className="">
              <SearchBar onSearchTermChange={ videoSearch } />
          </div>
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
        <footer>
          <hr />
          <p class="text-center pt-4">
            Built 🛠️ by <a href="https://www.jacklyons.me" target="_blank">Jack Lyons</a>
          </p>
        </footer>
      </div>
    )
  }   
}
