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
      <div>
        <input onChange={ this.onInputChange } />
        Value of the input { this.state.searchTerm }
      </div>
    )
  } 
}

export default SearchBar