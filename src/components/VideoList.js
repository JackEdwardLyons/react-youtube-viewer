import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = (props) => {
  const { videos, onVideoSelect } = props

  return (
    <aside className="col-md-4 video-list">
      { 
        videos.length > 0 && 
        videos.map(video => {
          return (
            <VideoListItem  
              key={ video.id.videoId } 
              video={ video } 
              onVideoSelect={ onVideoSelect } 
            /> 
          )
        })
      }
    </aside>
  )
}

export default VideoList