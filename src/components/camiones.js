import React from 'react'
import { Container, Row, Col, Card, CardBody } from "shards-react";
import Badge from 'react-bootstrap/Badge'

// Genera un componente funcional que mostrara la informacion recibida por App o Clone desde su State
const Rutas = ({ rutas }) => {

  // Regresa elementos del JSX con algunas funciones de JS.
	return (
    // Un componente no puede tener varios hijos, por lo que se divide en divs para ello 
		<div> 
        {/* Se crea contenedeor que tendra las tarjetas a mostrar */}
				<Container fluid className = "main-content-container px-4">
          <Row>
            <Col>
              <Card small className = "mb-4" >
                <CardBody className = "p-0 pb-3" >
                {/* Se crea tabla dentro de tarjeta */}
                  <table className = "table mb-0">
                    <tbody >
                    <tr>
                      <th><center>Estación</center></th>
                      <th><center>Horario</center></th>
                      <th><center>Check-In</center></th>
                     </tr>
                    {/* Se usa una funcion map para dividir el arreglo e iterarlo */}
                    {rutas.map((ruta) => ( 
                      <tr >
                      {/* Se asignan elementos dentro de la vista */}
                        <td> <center> { ruta.estacion } </center></td>
                        <td> <center> { ruta.hora } </center></td>
                        <td> <center>
                        {/* Se asigna valor segun el check-in del camion en la base de datos */}
													{(() => {
                            switch (ruta.check) {
                              case '0':
                                return <center> <Badge pill variant = "secondary"> Waiting </Badge></center> ;
                              case '1':
                                return <center> <Badge pill variant = "success"> On Time </Badge></center> ;
                              case '2':
                                return <center> <Badge pill variant = "danger"> Delay </Badge></center> ;
                              default:
                                return null;
                            }
													})()}
											 </center>
                       </td>
											 </tr> 
                       ))} 
										</tbody> 
									</table> 
								</CardBody> 
							</Card> 
						</Col> 
					</Row> 
				</Container>

		</div>
	)
};

// Se exporta componente para poderlo usar en otras partes de la App.
export default Rutas