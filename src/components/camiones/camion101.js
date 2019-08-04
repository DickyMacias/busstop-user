import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Ruta1 from '../rutas/Ruta1';

function Camion101() {
  var c101 = "101"
  const [modalShow, setModalShow] = React.useState(false);
  return (
      <div>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        {c101}
      </Button>

      <MyVerticallyCenteredModal id={c101}
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
          <center><h1>Camion {props.c101}</h1></center>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/*<h4>Centered Modal</h4>*/}
        <center>
          <Ruta1/>
        </center>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default Camion101