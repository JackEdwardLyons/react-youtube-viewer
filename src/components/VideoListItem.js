import React from 'react'

const VideoListItem = (props) => {
  const { video, onVideoSelect } = props
  const { snippet } = video

  const croppedThumbnailImage = {
    backgroundImage: `url(${snippet.thumbnails.medium.url})`,
    height: '180px'
  }

  return (
    <div className="card video-list-item mt-2 mb-4" onClick={ () => onVideoSelect(video) }>
      <div style={ croppedThumbnailImage }></div>
      <div className="card-body" style={{ padding: '1em' }}>
        <h5 className="card-title">{ snippet.title }</h5>
      </div>
    </div>
  )
}

export default VideoListItem