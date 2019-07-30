import React, { Component } from 'react';
import Rutas from './components/rutas';
import Clock from 'react-live-clock';
import Pages from './components/pages';


class App extends Component {
    state = {
        rutas: []
    }
    componentDidMount() {
        // Cargar parametros desde URL
        let url_params = getParam();
        let hora = timeReader();
        let a = parseInt(hora) - 1;
        let d = parseInt(hora) + 1;

        if (url_params) {
            var estacion = url_params['estacion'];
            // for(var index in url_params)
            // {
            //   console.log(" clave: "+index+" - valor: "+url_params[index]);
            // }
            console.log("La estacion es: " + estacion);
        } else {
            console.log("No se ha recibido ningún parámetro");
        }
        // Pasamos parametros a la URL del GET
        console.log("este es antes" + a)
        console.log("este es despues" + d)
        console.log("este es el nombre " + estacion)
        let beacon_url = "https://busstop-api.herokuapp.com/rutas?estacion=" + estacion +
            "&hora=" + a + ":48" +
            "&hora=" + hora + ":00" +
            "&hora=" + hora + ":12" +
            "&hora=" + hora + ":24" +
            "&hora=" + hora + ":36" +
            "&hora=" + hora + ":48" +
            "&hora=" + d + ":00" +
            "&hora=" + d + ":12" +
            "&hora=" + d + ":24" +
            "&hora=" + "8" + ":24"
        console.log(beacon_url)
        fetch(beacon_url)
            .then(res => res.json())
            .then((data) => {
                this.setState({ rutas: data })
            })
            .catch(console.log)
        this.forceUpdate();


    }

    render() {
        return ( <
            React.Fragment >
            <
            Pages > < /Pages>  <
            center > < h1 >
            <
            Clock format = { 'HH:mm:ss' }
            ticking = { true }
            timezone = { 'America/Chihuahua' }
            />   < /
            h1 > < /center > <
            Rutas rutas = { this.state.rutas }
            />  < /
            React.Fragment >

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

export default App;