import React from 'react'

const VideoListItem = (props) => {
  const { video, onVideoSelect } = props
  const { snippet } = video

  const croppedThumbnailImage = {
    backgroundImage: `url(${snippet.thumbnails.medium.url})`,
    height: '180px'
  }

  return (
    <div className="card mt-2 mb-2" onClick={ () => onVideoSelect(video) }>
      <div style={ croppedThumbnailImage }></div>
      <div className="card-body" style={{ padding: '1em' }}>
        <h5 className="card-title">{ snippet.title }</h5>
        {/* <p className="card-text">{ snippet.description }</p> */}
      </div>
    </div>
  )
}

export default VideoListItem