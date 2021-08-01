import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImgCard from './ImgCard';
import '../App.css'

export default function GalleryPage() {

  let [images, setImages] = React.useState([{
    Key: 'IMG_2921.jpg'
  }]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/allimages').then(res => {
      console.log("resp:", res);

      let imgSlice = res.data.images.Contents.slice(0, 40);

      setImages(imgSlice)
    })

    console.log("imgs", images);
  }, [])


  const expandImage = e => {

  } 

  return (
    <div>

    <Container style={{display: 'flex', flexWrap: 'wrap'}}>
    { images.map((el, i) => {
      return (
        
          <ImgCard source={`https://danworkpictures.s3.us-east-2.amazonaws.com/${el.Key}`} />
        
      )
    })}
    </Container>
    </div>
  )
}