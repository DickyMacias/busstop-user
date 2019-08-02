import React from 'react'
import { Container, Row, Col, Card, CardBody } from "shards-react";
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

const Rutas = ({ rutas }) => {

	return ( 
		<div> 
			{rutas.map((ruta) => ( 
				<Container fluid className = "main-content-container px-4">
          <Row>
            <Col>
              <Card small className = "mb-4" >
                <CardBody className = "p-0 pb-3" >
                  <table className = "table mb-0" >
                    <tbody >
                      <tr >
                        <td> <center> { ruta.ruta } </center></td>
                        <td> <center> { ruta.hora } </center></td>
                        <td> <center> { ruta.camion } </center></td>
                        <td> 
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
											 </td>
											 <td> 
											 	<center> 
												  <Button variant = "primary"> Ver Ruta </Button></center> </td> 
											 </tr> 
										</tbody> 
									</table> 
								</CardBody> 
							</Card> 
						</Col> 
					</Row> 
				</Container>
      ))} 
		</div>
	)
};

export default Rutas