import React, { Component } from 'react'
class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }
  
  onInputChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render () {
    return (
      <div className="text-center">
        <input onChange={ this.onInputChange } />
        Search term: { this.state.searchTerm }
      </div>
    )
  } 
}

export default SearchBar