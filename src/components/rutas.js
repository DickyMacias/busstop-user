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
import Camion201 from '../components/camiones/camion201';
import Camion202 from '../components/camiones/camion202';
import Camion203 from '../components/camiones/camion203';
import Camion204 from '../components/camiones/camion204';
import Camion205 from '../components/camiones/camion205';
import Camion301 from '../components/camiones/camion301';
import Camion302 from '../components/camiones/camion302';
import Camion303 from '../components/camiones/camion303';
import Camion304 from '../components/camiones/camion304';
import Camion305 from '../components/camiones/camion305';
import Camion401 from '../components/camiones/camion401';
import Camion402 from '../components/camiones/camion402';
import Camion403 from '../components/camiones/camion403';
import Camion404 from '../components/camiones/camion404';
import Camion405 from '../components/camiones/camion405';
import Camion501 from '../components/camiones/camion501';
import Camion502 from '../components/camiones/camion502';
import Camion503 from '../components/camiones/camion503';
import Camion504 from '../components/camiones/camion504';
import Camion505 from '../components/camiones/camion505';
import Camion601 from '../components/camiones/camion601';
import Camion602 from '../components/camiones/camion602';
import Camion603 from '../components/camiones/camion603';
import Camion604 from '../components/camiones/camion604';
import Camion605 from '../components/camiones/camion605';
import Logo1 from '../components/logos/Ruta1.png';
import Logo2 from '../components/logos/Ruta2.png';
import Logo3 from '../components/logos/Ruta3.png';
import Logo4 from '../components/logos/Ruta4.png';
import Logo5 from '../components/logos/Ruta5.png';
import Logo6 from '../components/logos/Ruta6.png';

const Rutas = ({ rutas }) => {

	return ( 
		<div> 

				<Container fluid className = "main-content-container px-4">
          <Row>
            <Col>
              <Card small className = "mb-4" >
                <CardBody className = "p-0 pb-3" >
                  <table className = "table mb-0">
                    <tbody>
                    <tr>
                      <th><center>Rutas</center></th>
                      <th><center>Horario</center></th>
                      <th><center>Camión</center></th>
                      <th><center>Check-In</center></th>
                      <th><center>Mapa</center></th>
                    </tr>
                    {rutas.map((ruta) => ( 
                      <tr>
                      <td> 
											 	<center> 
                         {(() => {
                            switch (ruta.ruta) {
                              case 'Ruta 1':
                                return <center> 
                                  <img alt = ""
                                    src = {Logo1}
                                    width = "30"
                                    height = "30"
                                    className = "d-inline-block align-top"/> 
                                </center> ;
                              case 'Ruta 2':
                                return <center> 
                                  <img alt = ""
                                    src = {Logo2}
                                    width = "30"
                                    height = "30"
                                    className = "d-inline-block align-top"/> 
                                </center> ;
                              case 'Ruta 3':
                                return <center> 
                                  <img alt = ""
                                    src = {Logo3}
                                    width = "30"
                                    height = "30"
                                    className = "d-inline-block align-top"/> 
                                </center> ;
                              case 'Ruta 4':
                                return <center> 
                                  <img alt = ""
                                    src = {Logo4}
                                    width = "30"
                                    height = "30"
                                    className = "d-inline-block align-top"/> 
                                </center> ;
                              case 'Ruta 5':
                                return <center> 
                                  <img alt = ""
                                    src = {Logo5}
                                    width = "30"
                                    height = "30"
                                    className = "d-inline-block align-top"/> 
                                </center> ;
                              case 'Ruta 6':
                                return <center> 
                                  <img alt = ""
                                    src = {Logo6}
                                    width = "30"
                                    height = "30"
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
                                return <center> <Camion101/>  </center> ;
                              case '102':
                                return <center> <Camion102/>  </center>;
                              case '103':
                                return <center> <Camion103/>  </center> ;
                              case '104':
                                return <center> <Camion104/>  </center> ;
                              case '105':
                                return <center> <Camion105/>  </center> ;
                              case '201':
                                return <center> <Camion201/>  </center> ;
                              case '202':
                                return <center> <Camion202/>  </center>;
                              case '203':
                                return <center> <Camion203/>  </center> ;
                              case '204':
                                return <center> <Camion204/>  </center> ;
                              case '205':
                                return <center> <Camion205/>  </center> ;
                              case '301':
                                return <center> <Camion301/>  </center> ;
                              case '302':
                                return <center> <Camion302/>  </center>;
                              case '303':
                                return <center> <Camion303/>  </center> ;
                              case '304':
                                return <center> <Camion304/>  </center> ;
                              case '305':
                                return <center> <Camion305/>  </center> ;
                              case '401':
                                return <center> <Camion401/>  </center> ;
                              case '402':
                                return <center> <Camion402/>  </center>;
                              case '403':
                                return <center> <Camion403/>  </center> ;
                              case '404':
                                return <center> <Camion404/>  </center> ;
                              case '405':
                                return <center> <Camion405/>  </center> ;
                              case '501':
                                return <center> <Camion501/>  </center> ;
                              case '502':
                                return <center> <Camion502/>  </center>;
                              case '503':
                                return <center> <Camion503/>  </center> ;
                              case '504':
                                return <center> <Camion504/>  </center> ;
                              case '505':
                                return <center> <Camion505/>  </center> ;
                              case '601':
                                return <center> <Camion601/>  </center> ;
                              case '602':
                                return <center> <Camion602/>  </center>;
                              case '603':
                                return <center> <Camion603/>  </center> ;
                              case '604':
                                return <center> <Camion604/>  </center> ;
                              case '605':
                                return <center> <Camion605/>  </center> ;
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


export default Rutas