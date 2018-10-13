import React from 'react'

const VideoList = (props) => {
  const { videos } = props

  // helper method to create legible alt tags
  const convertArrayIntoString = (array, numWords) => {
    return array.split(' ').slice(0, numWords).join(' ') 
  }

  console.log(videos)

  return (
    <ul className="col-md-4 list-group">
      { 
        videos.length > 0 && 
        videos.map(video => {
          const { snippet } = video
          return (
            <li key={ video.id.videoId } className="card mt-2 mb-2">
              <img className="card-img-top" src={ snippet.thumbnails.high.url } alt={ convertArrayIntoString(snippet.title, 2) } />
              <div className="card-body">
                <h4 className="card-title">{ snippet.title }</h4>
                <p className="card-text">{ snippet.description }</p>
              </div>
            </li>
            )
          })
      }
    </ul>
  )
}

export default VideoList