import React from 'react'

const VideoListItem = (props) => {
  const { video } = props
  const { snippet } = video

  // helper method to create legible alt tags
  const convertArrayIntoString = (array, numWords) => {
    return array.split(' ').slice(0, numWords).join(' ') 
  }

  return (
    <div className="card mt-2 mb-2">
      <img className="card-img-top" src={ snippet.thumbnails.high.url } alt={ convertArrayIntoString(snippet.title, 2) } />
      <div className="card-body">
        <h4 className="card-title">{ snippet.title }</h4>
        <p className="card-text">{ snippet.description }</p>
      </div>
    </div>
  )
}

export default VideoListItem