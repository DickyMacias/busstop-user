import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'
import ReactImageMagnify from 'react-image-magnify';

function Camiones(id) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
      <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
      </Button>

      <MyVerticallyCenteredModal rutita={id}
        show={modalShow}
        onHide={() => setModalShow(false)}/>
      </div>
  );

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <center><h1>Mapa de la </h1></center>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/*<h4>Centered Modal</h4>*/}
        <center><Figure>
        
        <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: '/images/logo.png',
                        },
                        largeImage: {
                            src: '/images/logo.png',
                            width: 1200,
                            height: 1800
                        }
                    }} />
  
  
  {/*<Figure.Image
    width={400}
    height={400}
    alt=""
    src={require("../ruta 1.jpg")}
  />*/}
  <Figure.Caption>
 {props.rutita}
  </Figure.Caption>
</Figure> </center>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


}

export default Camiones