import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import '../App.css'


export default function ImgCard(props) {

  let [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false)
    
  }
  const handleShow = () => {
    setShow(true)
    
  }



  return (
    <div>
    <Card onClick={handleShow} className='img-card' style={{ width: '14rem'}}>
      <Card.Img style={{ margin: 'auto'}} src={props.source} />
    </Card>
    <Modal size='lg' centered show={show} onHide={handleClose}>
      <img src={props.source} />
    </Modal>
    </div>
  )
}