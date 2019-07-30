import React from 'react'
import { Container, Row, Col, Card, CardBody } from "shards-react";
import Badge from 'react-bootstrap/Badge'

const Rutas = ({ rutas }) => {
  return (
    <div>
      {rutas.map((ruta) => (
    <Container fluid className="main-content-container px-4">
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <tbody>
                <tr>
                  <td><center>{ruta.ruta}</center></td>
                  <td><center>{ruta.hora}</center></td>
                  <td><center>{ruta.camion}</center></td>
                  <td>
                    {(() => {
                      switch(ruta.check) {
                        case '0':
                          return <Badge pill variant="secondary"> Waiting </Badge>;
                        case '1':
                          return <Badge pill variant="success"> On Time </Badge>;
                        case '2':
                          return <Badge pill variant="danger"> Delay </Badge>;
                        default:
                          return null;
                      }
                    })()}
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



    