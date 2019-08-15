import React, { Component } from 'react';
import Rutas from './components/camiones';
import axios from 'axios';

// Componente que contiene listas de camiones
class Clone extends Component { 

// Muestra lo que se tendra al crear el componente como elemento.
    componentDidMount() {
        // llama parametros de la URL
        // Estacion es = a camion.
        var url_params = getParam();
        if (url_params) {
            var estacion = url_params['estacion'];
            this.station = estacion;
            console.log("La estacion es: " + estacion);
        } else {
            console.log("No se ha recibido ningún parámetro");
        }
        // Se crea URL para llamar a la API
        let bus_id = "https://busstopcuu-api.herokuapp.com/rutas?camion="+this.props.c+"&_sort=id&_order=asc"
        console.log(bus_id)
        // Se llama a API para traer datos con URL
        setInterval(async () => { await axios.get(bus_id)
            .then(res => { const rutas = res.data;
                // Se envian al metodo state los resultados del JSON
                this.setState({ rutas });
            })}, 500);
        

    }
    // Se almacena JSON como arreglo
    state = {
        rutas: []
    }

    // Se renderiza Componente Rutas con informacion del State
    render() {
        return ( <React.Fragment>
            <Rutas rutas = { this.state.rutas }/>    
            </React.Fragment>
        );
    }
}

// Funcion para traer parametros de URL
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

// Funcion para revisar hora en tiempo real.
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
function checkTime(i) {
    if (i < 10) { i = "0" + i }; 
    return i;
}


export default Clone;