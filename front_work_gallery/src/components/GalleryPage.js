import React from 'react';
import Image from 'react-bootstrap/Image';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function GalleryPage() {

  let [images, setImages] = React.useState([{
    Key: 'IMG_2921.jpg'
  }]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/allimages').then(res => {
      console.log("resp:", res);

      setImages(res.data.images.Contents)
    })

    console.log("imgs", images);
  }, [])

  return (
    <div>

    { images.map((el, i) => {
      return (
        <Image thumbnail  src={`https://danworkpictures.s3.us-east-2.amazonaws.com/${el.Key}`} fluid />
      )
    })}
      {/* <Image fluid src={`https://danworkpictures.s3.us-east-2.amazonaws.com/${images[0].Key}`} /> */}
    </div>
  )
}