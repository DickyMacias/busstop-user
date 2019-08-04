import React from 'react'
import { Container, Row, Col, Card, CardBody } from "shards-react";
import Badge from 'react-bootstrap/Badge'
import Ruta1 from '../components/rutas/Ruta1';
import Ruta2 from '../components/rutas/Ruta2';
import Ruta3 from '../components/rutas/Ruta3';
import Ruta4 from '../components/rutas/Ruta4';
import Ruta5 from '../components/rutas/Ruta5';
import Ruta6 from '../components/rutas/Ruta6';
import Camion101 from '../components/camiones/camion101';
import Camion102 from '../components/camiones/camion102';
import Camion103 from '../components/camiones/camion103';
import Camion104 from '../components/camiones/camion104';
import Camion105 from '../components/camiones/camion105';

const Rutas = ({ rutas }) => {

	return ( 
		<div> 
			{rutas.map((ruta) => ( 
				<Container fluid className = "main-content-container px-4">
          <Row>
            <Col>
              <Card small className = "mb-4" >
                <CardBody className = "p-0 pb-3" >
                  <table className = "table mb-0">
                    <tbody >
                      <tr >
                      <td> 
											 	<center> 
                         {(() => {
                            switch (ruta.ruta) {
                              case 'Ruta 1':
                                return <center> 
                                  <img alt = ""
                                    src = {process.env.PUBLIC_URL 
                                    + '/images/'+ ruta.ruta + '.png'}
                                    width = "60"
                                    height = "60"
                                    className = "d-inline-block align-top"/> 
                                </center> ;
                              case 'Ruta 2':
                                return <center> 
                                  <img alt = ""
                                    src = {process.env.PUBLIC_URL 
                                    + '/images/'+ ruta.ruta + '.png'}
                                    width = "60"
                                    height = "60"
                                    className = "d-inline-block align-top"/> 
                                </center> ;
                              case 'Ruta 3':
                                return <center> 
                                  <img alt = ""
                                    src = {process.env.PUBLIC_URL 
                                    + '/images/'+ ruta.ruta + '.png'}
                                    width = "60"
                                    height = "60"
                                    className = "d-inline-block align-top"/> 
                                </center> ;
                              case 'Ruta 4':
                                return <center> 
                                  <img alt = ""
                                    src = {process.env.PUBLIC_URL 
                                    + '/images/'+ ruta.ruta + '.png'}
                                    width = "60"
                                    height = "60"
                                    className = "d-inline-block align-top"/> 
                                </center> ;
                              case 'Ruta 5':
                                return <center> 
                                  <img alt = ""
                                    src = {process.env.PUBLIC_URL 
                                    + '/images/'+ ruta.ruta + '.png'}
                                    width = "60"
                                    height = "60"
                                    className = "d-inline-block align-top"/> 
                                </center> ;
                              case 'Ruta 6':
                                return <center> 
                                  <img alt = ""
                                    src = {process.env.PUBLIC_URL 
                                    + '/images/'+ ruta.ruta + '.png'}
                                    width = "60"
                                    height = "60"
                                    className = "d-inline-block align-top"/> 
                                </center> ;
                              default:
                                return null;
                            }
													})()}</center> 
                        </td> 
                        <td> <center> { ruta.hora } </center></td>
                        <td> 
											 	<center> 
                         {(() => {
                            switch (ruta.camion) {
                              case '101':
                                return <center> <Camion101/>{ruta.camion} </center> ;
                              case '102':
                                return <center> <Camion102/>{ruta.camion} </center>;
                              case '103':
                                return <center> <Camion103/>{ruta.camion} </center> ;
                              case '104':
                                return <center> <Camion104/>{ruta.camion} </center> ;
                              case '105':
                                return <center> <Camion105/>{ruta.camion} </center> ;
                              default:
                                return null;
                            }
													})()}</center> 
                        </td> 
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
                         {(() => {
                            switch (ruta.ruta) {
                              case 'Ruta 1':
                                return <center> <Ruta1/> </center> ;
                              case 'Ruta 2':
                                return <center> <Ruta2/> </center> ;
                              case 'Ruta 3':
                                return <center> <Ruta3/> </center> ;
                              case 'Ruta 4':
                                return <center> <Ruta4/> </center> ;
                              case 'Ruta 5':
                                return <center> <Ruta5/> </center> ;
                              case 'Ruta 6':
                                return <center> <Ruta6/> </center> ;
                              default:
                                return null;
                            }
													})()}</center> 
                        </td> 
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