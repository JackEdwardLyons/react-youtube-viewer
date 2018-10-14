import React, { Component } from 'react'
import _ from 'lodash'
class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchTerm: ''
    }
  }
  
  onInputChange = (searchTerm) => {
    this.setState({ searchTerm })
    this.props.onSearchTermChange(searchTerm)
  }

  render () {
    return (
      <div className="">
        <input 
          type="text" 
          className="search-bar" 
          onChange={ (event) => this.onInputChange(event.target.value) } 
        />
        <i class="fa fa-search search-bar__icon"></i>
      </div>
    )
  } 
}

export default SearchBar