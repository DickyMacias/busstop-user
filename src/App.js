import React, { Component } from 'react';
import Rutas from './components/rutas';
import Clock from 'react-live-clock';
import Pages from './components/pages';
import axios from 'axios';
import { Container, Row, Col, Card, CardBody } from "shards-react";

class App extends Component {


    // En este metodo se guarda la vista inicial que se cargara al abrir la aplicacion.
    async componentDidMount() {
        // Cargar parametros desde URL
        var url_params = getParam();
        // Se dividen parametros segun su uso
        let hora = timeReader();
        let a = parseInt(hora) - 1;
        let d = parseInt(hora) + 1;

        // Se separan los parametros para traer el de la estacion
        if (url_params) {
            var estacion = url_params['estacion'];
            this.station = estacion;
        // Se utiliza la consola para revisar que los parametros sean correctos
            console.log("La estacion es: " + estacion);
        } else {
            console.log("No se ha recibido ningún parámetro");
        }
        // Pasamos parametros a la URL del GET
        console.log("este es antes" + a)
        console.log("este es despues" + d)
        console.log("este es el nombre " + estacion)
        let beacon_url = "https://busstopcuu-api.herokuapp.com/rutas?estacion=" + estacion +
             // "&hora=" + a + ":48" +
             "&hora=" + hora + ":00" +
             "&hora=" + hora + ":12" +
             "&hora=" + hora + ":24" +
             "&hora=" + hora + ":36" +
             "&hora=" + hora + ":48" +
             "&hora=" + d + ":00" +
             "&hora=" + d + ":12" 
            // "&hora=" + d + ":24" +
            // "&hora=" + "8" + ":24"
        console.log(beacon_url)
        //Se utiliza axios para hacer la llamada recurrente y guardar respuesta en JSON
        setInterval(async () => { await axios.get(beacon_url)
        .then(res => { const rutas = res.data;
            // Se envian al metodo state los resultados del JSON
            this.setState({ rutas });
        })}, 500);
        
        
    }
    // Se recibe JSON y se almacena en State como un arreglo
    state = {
        rutas: []
    } 

    // Se renderizan los resultados en un JSX
    render() {
        // Se regresa la informacion que se mostrara
        return ( 
            // Se genera un fragmento de React para contener los componentes
            <React.Fragment>
            <div className="sticky">
            {/* Se inserta el nav en la pagina principal*/}
            <Pages> </Pages>  
            <Container>
            {/* Se crea una tarjeta para guardar los datos de estacion e imagen */}
            <Card>
            <CardBody>
            <Row>
            <Col>
            <center>
            {/* Se inserta imagen y se llama PATH env para traerla de fuera del src*/}
            <img alt = ""
            src = {process.env.PUBLIC_URL + '/images/'+ this.station + '.png'}
            width = "60"
            height = "60"
            className = "d-inline-block align-top"/>
            </center>      </Col> 
            <Col>
            
            <center>
            {/* Se inserta nombre de la estacion desde parametros recibidos de URL*/}
            <h2> Estación { this.station } </h2> </center> </Col>  </Row> 
            </CardBody>  
            </Card> 
            </Container>  
            <Container >
            </Container>  
            <div>
            <center>
            <h1>
            {/* Se inserta componente Clock desde package*/}
            <Clock format = { 'HH:mm:ss' }
            ticking = { true }
            timezone = { 'America/Chihuahua' }/>  
            </h1> </center>   
            </div> 
            </div>
            {/* Se llama a componente rutas y se le pasa como parametros el arreglo guardado en State */}
            <Rutas rutas = { this.state.rutas }/>    
            </React.Fragment>
        );
    }
}


// Funcion para llamar parametros desde la URL
function getParam() {
    // capturamos la url
    let loc = document.location.href;
    // si existe el interrogante
    if (loc.indexOf('?') > 0) {
        // cogemos la parte de la url que hay despues del interrogante
        let getString = loc.split('?')[1];
        // obtenemos un array con cada clave=valor
        let GET = getString.split('&');
        let get = {};
        // recorremos todo el array de url_params
        for (let i = 0, l = GET.length; i < l; i++) {
            let tmp = GET[i].split('=');
            get[tmp[0]] = unescape(decodeURI(tmp[1]));
        }
        return get;
    }
}

// Funcion para leer el tiempo de reloj y mostrarlo en tiempo real.
function timeReader() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    let hora = h + ":" + m;
    console.log("la hora es " + hora);
    let t = setTimeout(timeReader, 500);
    return h;
}

// Funcion para en caso de minuto ser menos a 10 agregar 0 antes del numero
function checkTime(i) {
    if (i < 10) { i = "0" + i }; 
    return i;
}

// Se exporta componente para llamarse con JSX
export default App;