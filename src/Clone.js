import React, { Component } from 'react';
import Rutas from './components/camiones';
import axios from 'axios';

class Clone extends Component { 

    state = {
        rutas: []
    }
    componentDidMount() {
        var url_params = getParam();
        if (url_params) {
            var estacion = url_params['estacion'];
            this.station = estacion;
            console.log("La estacion es: " + estacion);
        } else {
            console.log("No se ha recibido ningún parámetro");
        }
        let bus_id = "https://busstop-api.herokuapp.com/rutas?camion="+this.props.c+""
        console.log(bus_id)
        let r = setTimeout(axios.get(bus_id)
        .then(res => {
            const rutas = res.data;
            this.setState({ rutas });
        }), 500);
        

    }

    render() {
        return ( <React.Fragment>
            <Rutas rutas = { this.state.rutas }/>    
            </React.Fragment>
        );
    }
}

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
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}


export default Clone;