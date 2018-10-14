import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = (props) => {
  return (
    <ContentLoader 
      height={160}
      width={200}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="99" rx="3" ry="3" width="350" height="6.4" /> 
      <rect x="1" y="117" rx="3" ry="3" width="380" height="6.4" /> 
      <rect x="-1" y="136" rx="3" ry="3" width="201" height="6.4" /> 
      <rect x="23" y="42.7" rx="0" ry="0" width="0" height="0" /> 
      <rect x="-3" y="17.44" rx="0" ry="0" width="201.69000000000003" height="65.32" /> 
      <rect x="16" y="37.7" rx="0" ry="0" width="0" height="0" />
    </ContentLoader>
  )
}

export default Loader