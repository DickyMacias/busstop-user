import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Clone from '../../Clone'

// Se genera componente funcional para llamar a camion (todos los componentes camion son iguales)
function Camion101() {
  // se determina la variable de numero de camion
  var c = "101"
  
  // Se genera modal para que aparezca cuando se le llame
  const [modalShow, setModalShow] = React.useState(false);
  return (
      <div>
      {/*Se activa modal con metodo onClick */}
      <Button variant="primary" size="sm" onClick={() => setModalShow(true)}>
        {c}
      </Button>

      {/*Se crea de forma centrada en la pantalla y se pasan parametros de camion a componente hijo interno */}
      <MyVerticallyCenteredModal c={c}
        show={modalShow}
        onHide={() => setModalShow(false)}/>
      </div>
  );
}

// Se genera componente funcional que recibe parametros del componente padre interno
function MyVerticallyCenteredModal(props) {
  /*Se regresa un modal funcional que permite mostrar informacion y cerrar */
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <center><h1>Camión {props.c}</h1></center>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {/*Se crea elemento desde componente clone que contiene la lista de 
      los horarios y se le pasan parametros del camion */}
      <Clone c={props.c}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

// Se exporta componente
export default Camion101