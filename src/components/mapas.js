import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <center><h1>Mapa de la Ruta 1</h1></center>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/*<h4>Centered Modal</h4>*/}
        <center><Figure>
  <Figure.Image
    width={400}
    height={400}
    alt=""
    src={require("../ruta 1.jpg")}
  />
  <Figure.Caption>
    Mapa de las estaciones que componen la ruta 1.
  </Figure.Caption>
</Figure> </center>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Mapas() {
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

export default Mapas