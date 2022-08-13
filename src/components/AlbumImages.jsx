import React from 'react'

const AlbumImages = ({images}) => {
  return (
    <div style={{marginTop:'2em'}}>
      {images && images.map((image)=>(<div key={`image-${image.id}`} style={{display: 'inline', margin: '2em', width:'100%' }}>
          <img src={image.url} alt={image.title} style={{height:'300px'}}/>
        </div>))}
    </div>
  )
}

export default AlbumImages