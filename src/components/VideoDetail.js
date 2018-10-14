import React from 'react'
import Loader from './Loader'

const VideoDetail = ({ video }) => {
  
  
  if (!video) return <Loader />
  
  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <article className="video-detail col-md-8 mb-2">
      <div className="card">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="responsive-item" src={ url }></iframe>
        </div>
        <div className="details card-body">
          <div>
            <h4 className="pt-2">{ video.snippet.title }</h4>
            <h6>Published on: { new Date(video.snippet.publishedAt).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }) }</h6>
          </div>
          <div>
            <p>{ video.snippet.description}</p>
          </div>
        </div>
      </div>
        <h3 className="mt-4 text-center d-md-none">
          Featured Videos
        </h3>
    </article>
  )
}

export default VideoDetail