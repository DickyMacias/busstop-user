import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'
import ReactImageMagnify from 'react-image-magnify';
import mapa from '../mapas/Mapa1.png';

// Componente funcional que contiene modal con rutas (todas las rutas son iguales)
function Ruta1() {
  // Se habilita modal para usarse
  const [modalShow, setModalShow] = React.useState(false);

  // Regresa un modal con informacion
  return (
      <div>
      <Button variant="info" size="sm" onClick={() => setModalShow(true)}>
        Mapa
      </Button>
      {/* se llama a componente interno y se le pasan parametros */}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
      </div>
  );
}

// Componente funcional hijo recibe parametros de Ruta1()
function MyVerticallyCenteredModal(props) {
  //regresa elementos contenidos en modal
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
        {/*Se crea contenedor para imagen */}
        <center><Figure>
        {/*Se depliega imagen en 2 tamanos para magnificar el tamano como zoom */}
        <ReactImageMagnify {...{
                        smallImage: {
                            alt: '',
                            isFluidWidth: true,
                            src: mapa,
                        },
                        largeImage: {
                            src: mapa,
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
      {/*Se regresa parametro para cerrar el modal*/}
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

// Se exporta componente
export default Ruta1