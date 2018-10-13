import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = (props) => {
  const { videos } = props

  console.log(videos)

  return (
    <aside className="col-md-4 video-list">
      { 
        videos.length > 0 && 
        videos.map(video => <VideoListItem  key={ video.id.videoId } video={ video } /> )
      }
    </aside>
  )
}

export default VideoList