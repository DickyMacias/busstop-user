import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'
import ReactImageMagnify from 'react-image-magnify';


function Ruta1() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
      <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Ver Ruta
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
      </div>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <center><h1>Ruta 1</h1></center>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/*<h4>Centered Modal</h4>*/}
        <center><Figure>
        
        <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: '/images/Ruta 1.png',
                        },
                        largeImage: {
                            src: '/images/Ruta 1.png',
                            width: 1200,
                            height: 1800
                        }
                    }} />
  <Figure.Caption>
    Mapa de las estaciones que componen la Ruta 1.
  </Figure.Caption>
</Figure> </center>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Ruta1