import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

// include styles
import '../style/image-gallery.css'

class Gallery extends React.Component {
  render() {
    var hrefs = null;

    if(this.props.images)
    {
      // var images = this.props.images.map(image => {
      //   if(image.embedUrl)
      //   {
      //     return {
      //       ...image,
      //       renderItem: () => {
      //         return (
      //           <iframe width="560" height="315" src={image.embedUrl} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      //         )
      //       }
      //     }
      //   }
      //   else{
      //     return image
      //   }
      // })

      hrefs = this.props.refs.map((ref, index) => {
        return <a href={ref} target="_blank" style={{margin: "10px"}}>Video link {index + 1}</a>
      })
    }

    return (
        <div>
            <ImageGallery items={this.props.images} showFullscreenButton={false} showPlayButton={false} />
            <p>
                {this.props.description}
            </p>
            {hrefs}
        </div>
    )
  }
}

export default Gallery;