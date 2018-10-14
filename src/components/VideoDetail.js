import React from 'react'

const VideoDetail = ({ video }) => {
  
  if (!video) return <div>Loading ... </div>
  
  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <article className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9 mt-2">
        <iframe className="responsive-item" src={ url }></iframe>
      </div>
      <div className="details">
        <div>
          <h4 className="pt-2">{ video.snippet.title }</h4>
          <h6>Published on: { new Date(video.snippet.publishedAt).toLocaleDateString() }</h6>
        </div>
        <div>
          <p>{ video.snippet.description}</p>
        </div>
      </div>
    </article>
  )
}

export default VideoDetail